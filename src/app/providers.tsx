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
  });
}

export function PostHogProviderClient({ children }: { children: React.ReactNode }) {
  return (
    <PostHogProvider client={posthog}>
      {children}
    </PostHogProvider>
  );
}