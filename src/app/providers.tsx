'use client';

import posthog from 'posthog-js';
import { PostHogProvider } from 'posthog-js/react';

if (typeof window !== 'undefined') {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST!, // Your proxy: e.bartcagara.com
    ui_host: 'https://eu.posthog.com', // CRITICAL: PostHog's actual domain for toolbar
    person_profiles: 'identified_only',
    capture_pageview: false,
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
      }
    },
  });

  // Manual toolbar loader for static sites - handles URL hash parameters
  const toolbarJSON = new URLSearchParams(window.location.hash.substring(1)).get('__posthog');
  if (toolbarJSON) {
    try {
      posthog.loadToolbar(JSON.parse(toolbarJSON));
    } catch (e) {
      console.error('Failed to load PostHog toolbar:', e);
    }
  }
}

export function PostHogProviderClient({ children }: { children: React.ReactNode }) {
  return (
    <PostHogProvider client={posthog}>
      {children}
    </PostHogProvider>
  );
}