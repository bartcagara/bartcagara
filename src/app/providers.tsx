'use client';

import posthog from 'posthog-js';
import { PostHogProvider } from 'posthog-js/react';

if (typeof window !== 'undefined') {
  // Delay PostHog initialization to not block critical rendering
  // Wait for page to be fully interactive before loading analytics
  let initialized = false;
  const initPostHog = () => {
    if (!initialized) {
      initialized = true;
      posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
        api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST!,
        person_profiles: 'identified_only',
        capture_pageview: false,
        persistence: 'localStorage',
        // Session recording, heatmaps, and toolbar all enabled by default
      });
    }
  };

  // Wait for page to be idle before initializing
  if ('requestIdleCallback' in window) {
    requestIdleCallback(() => initPostHog(), { timeout: 2000 });
  } else {
    setTimeout(initPostHog, 2000);
  }
}

export function PostHogProviderClient({ children }: { children: React.ReactNode }) {
  return (
    <PostHogProvider client={posthog}>
      {children}
    </PostHogProvider>
  );
}