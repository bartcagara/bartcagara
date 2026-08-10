/**
 * Founder Athlete OS service worker.
 *
 * Hand-written on purpose: the site is a Next.js static export (`output: 'export'`)
 * built with Turbopack, and the drop-in PWA plugins (@serwist/next, next-pwa) are
 * webpack plugins that need a server-ish build pipeline. A small worker in
 * `public/` is copied verbatim into `out/` by the export and needs no build step.
 *
 * Goal: when the installed home-screen app is relaunched after iOS has evicted
 * it, the first paint comes from the on-device cache instead of a network
 * round-trip (HTML is served `max-age=0, must-revalidate`, so a cold launch
 * otherwise always waits for the network).
 *
 * Strategies:
 *   - navigations      -> stale-while-revalidate (instant paint, refreshed in background)
 *   - /_next/static/*  -> cache-first (content-hashed, immutable)
 *   - images/fonts/css -> cache-first (served `immutable` by public/_headers)
 *   - everything else same-origin -> stale-while-revalidate
 *   - cross-origin     -> not intercepted at all
 *
 * Bump CACHE_VERSION to invalidate every cache on the next deploy.
 */

const CACHE_VERSION = 'v1';
const SHELL_CACHE = `faos-shell-${CACHE_VERSION}`;
const PAGE_CACHE = `faos-pages-${CACHE_VERSION}`;
const ASSET_CACHE = `faos-assets-${CACHE_VERSION}`;
const MANAGED_CACHES = [SHELL_CACHE, PAGE_CACHE, ASSET_CACHE];

/** The PWA `start_url` plus the metadata iOS reads while launching. */
const SHELL_URLS = ['/', '/manifest.webmanifest', '/icon.png'];

const MAX_PAGE_ENTRIES = 20;
const MAX_ASSET_ENTRIES = 150;

const STATIC_ASSET_PATTERN =
  /\.(?:css|js|mjs|woff2?|ttf|otf|eot|png|jpe?g|webp|avif|gif|svg|ico)$/i;

/**
 * Paths the worker must never touch. Everything cross-origin is already
 * excluded (see the fetch handler), which covers PostHog (e.bartcagara.com,
 * eu.i.posthog.com), the Senja widget, Cal.com and ConvertKit/Kit. These are the
 * same-origin exceptions.
 */
const BYPASS_PATH_PREFIXES = ['/cdn-cgi/'];

self.addEventListener('install', (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(SHELL_CACHE);
      await Promise.all(
        SHELL_URLS.map(async (url) => {
          try {
            // `cache: 'reload'` so installing a worker never precaches a stale
            // copy out of the HTTP cache.
            const response = await fetch(url, { cache: 'reload' });
            if (response.ok) {
              await cache.put(url, response);
            }
          } catch {
            // Installing while offline is fine; these fill in on first use.
          }
        })
      );
      await self.skipWaiting();
    })()
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(
        keys
          .filter((key) => key.startsWith('faos-') && !MANAGED_CACHES.includes(key))
          .map((key) => caches.delete(key))
      );
      await self.clients.claim();
    })()
  );
});

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

self.addEventListener('fetch', (event) => {
  const request = event.request;

  if (request.method !== 'GET') return;
  // Requests the Cache API cannot satisfy or replay safely.
  if (request.cache === 'only-if-cached' && request.mode !== 'same-origin') return;
  if (request.headers.has('range')) return;

  let url;
  try {
    url = new URL(request.url);
  } catch {
    return;
  }

  // Third-party traffic (analytics, widgets, embeds) always goes to the network.
  if (url.origin !== self.location.origin) return;
  if (url.pathname === '/sw.js') return;
  if (BYPASS_PATH_PREFIXES.some((prefix) => url.pathname.startsWith(prefix))) return;

  if (request.mode === 'navigate') {
    event.respondWith(handleNavigation(event, url));
    return;
  }

  if (url.pathname.startsWith('/_next/static/') || STATIC_ASSET_PATTERN.test(url.pathname)) {
    event.respondWith(cacheFirst(event, ASSET_CACHE));
    return;
  }

  event.respondWith(staleWhileRevalidate(event, PAGE_CACHE));
});

/**
 * Serve the cached HTML immediately and refresh it in the background, so a
 * relaunch paints without waiting for the network but never drifts more than one
 * launch behind the deployed site.
 */
async function handleNavigation(event, url) {
  const cache = await caches.open(PAGE_CACHE);
  // Key by pathname so UTM/query variants of a page share one cache entry.
  const cacheKey = url.origin + url.pathname;
  const cached = await cache.match(cacheKey);

  const fromNetwork = fetch(event.request).then(async (response) => {
    if (isCacheable(response)) {
      await cache.put(cacheKey, response.clone());
      await trimCache(PAGE_CACHE, MAX_PAGE_ENTRIES);
    }
    return response;
  });

  if (cached) {
    event.waitUntil(fromNetwork.catch(() => undefined));
    return cached;
  }

  try {
    return await fromNetwork;
  } catch {
    const shell = await caches.open(SHELL_CACHE);
    const shellResponse = await shell.match('/');
    // The installed app always launches at `/`, so the shell covers the PWA
    // case; any other uncached route offline gets a minimal placeholder.
    return shellResponse ?? offlineResponse();
  }
}

async function cacheFirst(event, cacheName) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(event.request);
  if (cached) return cached;

  try {
    const response = await fetch(event.request);
    if (isCacheable(response)) {
      await cache.put(event.request, response.clone());
      event.waitUntil(trimCache(cacheName, MAX_ASSET_ENTRIES));
    }
    return response;
  } catch {
    return new Response('', { status: 504, statusText: 'Offline' });
  }
}

async function staleWhileRevalidate(event, cacheName) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(event.request);

  const fromNetwork = fetch(event.request).then(async (response) => {
    if (isCacheable(response)) {
      await cache.put(event.request, response.clone());
      await trimCache(cacheName, MAX_PAGE_ENTRIES);
    }
    return response;
  });

  if (cached) {
    event.waitUntil(fromNetwork.catch(() => undefined));
    return cached;
  }

  try {
    return await fromNetwork;
  } catch {
    return new Response('', { status: 504, statusText: 'Offline' });
  }
}

function isCacheable(response) {
  // `redirected` responses cannot be replayed for navigations, and opaque
  // responses would silently poison the cache with unreadable bodies.
  return Boolean(response) && response.ok && response.type === 'basic' && !response.redirected;
}

async function trimCache(cacheName, maxEntries) {
  const cache = await caches.open(cacheName);
  const keys = await cache.keys();
  if (keys.length <= maxEntries) return;
  // Cache.keys() is insertion-ordered, so this drops the oldest entries first.
  await Promise.all(keys.slice(0, keys.length - maxEntries).map((key) => cache.delete(key)));
}

function offlineResponse() {
  return new Response(
    '<!doctype html><html lang="en"><head><meta charset="utf-8">' +
      '<meta name="viewport" content="width=device-width, initial-scale=1">' +
      '<title>Offline</title></head>' +
      '<body style="margin:0;display:flex;min-height:100vh;align-items:center;justify-content:center;' +
      'background:#09071D;color:#FFFFFF;font-family:system-ui,-apple-system,sans-serif;text-align:center">' +
      '<p style="padding:24px">You are offline. Reconnect to load this page.</p>' +
      '</body></html>',
    { status: 200, headers: { 'Content-Type': 'text/html; charset=utf-8' } }
  );
}
