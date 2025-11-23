'use client';

import posthog from 'posthog-js';
import { PostHogProvider } from 'posthog-js/react';

if (typeof window !== 'undefined') {
  posthog.init('phc_HI9evF4iDu1iNsk438js9b4YSXcty48VZgkU7dl2axf', {
    api_host: 'https://eu.i.posthog.com',
    person_profiles: 'identified_only', // or 'always' to create profiles for anonymous users as well
    capture_pageview: false, // Disable automatic pageview capture, as we handle it manually in PostHogPageView
    persistence: 'localStorage', // CRITICAL: Use localStorage instead of cookies for iframe/cross-origin support
  });
}

export function PostHogProviderClient({ children }: { children: React.ReactNode }) {
  return (
    <PostHogProvider client={posthog}>
      {children}
    </PostHogProvider>
  );
}