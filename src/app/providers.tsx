'use client';

import posthog from 'posthog-js';
import { PostHogProvider } from 'posthog-js/react';

if (typeof window !== 'undefined') {
  // Delay PostHog initialization to not block critical rendering
  setTimeout(() => {
    posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
      api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST!,
      person_profiles: 'identified_only',
      capture_pageview: false,
      persistence: 'localStorage',
      loaded: (ph) => {
        // Disable session recording by default for better performance
        if (process.env.NODE_ENV === 'production') ph.opt_out_capturing();
        ph.opt_in_capturing(); // Only capture events, not recordings
      },
    });
  }, 1000);
}

export function PostHogProviderClient({ children }: { children: React.ReactNode }) {
  return (
    <PostHogProvider client={posthog}>
      {children}
    </PostHogProvider>
  );
}