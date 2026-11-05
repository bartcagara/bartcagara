'use client';

import { useEffect } from 'react';

function isInstalledApp(): boolean {
  return (
    (navigator as { standalone?: boolean }).standalone === true ||
    window.matchMedia('(display-mode: standalone)').matches
  );
}

/** Removes the worker and its caches from a browser that got them before this rule. */
function removeFromBrowser(): void {
  navigator.serviceWorker
    .getRegistrations()
    .then((registrations) => Promise.all(registrations.map((r) => r.unregister())))
    .catch(() => undefined);
  if ('caches' in window) {
    caches
      .keys()
      .then((keys) =>
        Promise.all(keys.filter((key) => key.startsWith('faos-')).map((key) => caches.delete(key)))
      )
      .catch(() => undefined);
  }
}

/**
 * Registers the service worker in `public/sw.js`, in the installed home-screen
 * app only. A visitor in a browser gets no worker and no caches, because the
 * site stores nothing on a visitor's device until he chooses to use something;
 * installing the app is that choice.
 *
 * The worker precaches the app shell so the installed home-screen PWA paints
 * from cache when iOS relaunches it after evicting the page, instead of waiting
 * on a network round-trip for HTML that is served `max-age=0, must-revalidate`.
 *
 * Renders nothing.
 */
export function ServiceWorkerRegistrar(): null {
  useEffect(() => {
    // Only in production builds: in dev the worker would cache the dev server's
    // HTML and mask hot reloads.
    if (process.env.NODE_ENV !== 'production') return;
    if (typeof navigator === 'undefined' || !('serviceWorker' in navigator)) return;

    if (!isInstalledApp()) {
      removeFromBrowser();
      return;
    }

    let cancelled = false;
    let active: ServiceWorkerRegistration | null = null;

    const register = () => {
      navigator.serviceWorker
        .register('/sw.js', { scope: '/', updateViaCache: 'none' })
        .then((registration) => {
          if (cancelled) return;
          active = registration;
        })
        .catch((error) => {
          console.warn('Service worker registration failed:', error);
        });
    };

    // Wait for load so installing/precaching never competes with hydration or
    // the first paint.
    if (document.readyState === 'complete') {
      register();
    } else {
      window.addEventListener('load', register, { once: true });
    }

    // Coming back to a backgrounded home-screen app is exactly when a stale
    // worker should be replaced, so check for an update on every foreground.
    const onVisibilityChange = () => {
      if (document.visibilityState !== 'visible') return;
      active?.update().catch(() => {
        /* offline or throttled; the next foreground will retry */
      });
    };
    document.addEventListener('visibilitychange', onVisibilityChange);

    return () => {
      cancelled = true;
      window.removeEventListener('load', register);
      document.removeEventListener('visibilitychange', onVisibilityChange);
    };
  }, []);

  return null;
}
