'use client';

import { useEffect, useState } from 'react';
import type { PostHog } from 'posthog-js';
import { PostHogClientContext } from '@/lib/posthog-context';

/**
 * posthog-js is loaded with a dynamic `import()` from an effect rather than a
 * top-level import, which keeps the SDK out of the critical bundle: the page
 * hydrates first and analytics arrives in its own chunk right after paint.
 *
 * Module-level so React Strict Mode's double-invoked effects (and any second
 * provider instance) share one initialisation.
 */
let postHogPromise: Promise<PostHog | null> | null = null;

function loadPostHog(): Promise<PostHog | null> {
  if (postHogPromise) return postHogPromise;

  postHogPromise = import('posthog-js')
    .then(({ default: posthog }) => {
      posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
        api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST!, // Your proxy: e.bartcagara.com
        ui_host: 'https://eu.posthog.com', // CRITICAL: PostHog's actual domain for toolbar
        person_profiles: 'identified_only',
        capture_pageview: false,
        // capture_pageleave defaults to 'if_capture_pageview', which disables it
        // when capture_pageview is false. We fire $pageview manually via
        // PostHogPageView, so opt in to $pageleave explicitly.
        capture_pageleave: true,
        persistence: 'localStorage',
        loaded: (ph) => {
          const ua = navigator.userAgent;
          if (
            navigator.webdriver ||
            !ua ||
            /bot|crawl|spider|slurp|facebookexternalhit|baiduspider|yandex|duckduckbot|sogou|exabot|ia_archiver|semrush|ahref|mj12bot|dotbot|petalbot|bytespider|gptbot|claudebot|applebot|twitterbot|linkedinbot|whatsapp|telegrambot|discordbot|slack|pingdom|uptimerobot|headlesschrome|phantomjs|prerender|lighthouse|chrome-lighthouse|screaming frog/i.test(
              ua
            )
          ) {
            ph.opt_out_capturing();
            return;
          }

          // Load toolbar if launched from PostHog (must run inside loaded callback
          // so PostHog is fully initialized and ui_host is respected)
          const hash = window.location.hash.substring(1);
          const toolbarJSON = new URLSearchParams(hash).get('__posthog');
          if (toolbarJSON) {
            try {
              ph.loadToolbar(JSON.parse(toolbarJSON));
            } catch (e) {
              console.error('Failed to load PostHog toolbar:', e);
            }
          }
        },
      });

      return posthog;
    })
    .catch((error) => {
      console.warn('PostHog failed to load:', error);
      // Allow a later mount to retry rather than caching the failure forever.
      postHogPromise = null;
      return null;
    });

  return postHogPromise;
}

export function PostHogProviderClient({ children }: { children: React.ReactNode }) {
  const [client, setClient] = useState<PostHog | null>(null);

  useEffect(() => {
    let cancelled = false;

    void loadPostHog().then((posthog) => {
      if (!cancelled && posthog) setClient(posthog);
    });

    return () => {
      cancelled = true;
    };
  }, []);

  // The provider element itself is always rendered (never swapped for a
  // fragment) so children mount immediately and are not remounted when the
  // client arrives.
  return (
    <PostHogClientContext.Provider value={client}>{children}</PostHogClientContext.Provider>
  );
}
