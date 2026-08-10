'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { usePostHogClient } from '@/lib/posthog-context';

export function PostHogPageView(): null {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  // null until posthog-js finishes its deferred load; it is in the effect's
  // dependencies, so the first $pageview fires as soon as the client arrives.
  const posthog = usePostHogClient();

  useEffect(() => {
    if (pathname && posthog) {
      let url = window.origin + pathname;
      if (searchParams.toString()) {
        url = url + `?${searchParams.toString()}`;
      }

      posthog.capture('$pageview', {
        $current_url: url,
      });
    }
  }, [pathname, searchParams, posthog]);

  return null;
}
