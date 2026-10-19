'use client';

import { useEffect } from 'react';
import { CAL_NAMESPACE } from '@/lib/cal';
import { usePostHogClient } from '@/lib/posthog-context';

type CalNamespace = (action: string, options: Record<string, unknown>) => void;

/** The one booked-call event. Carries `post` (registered on landing) like every other event. */
export const CALL_BOOKED_EVENT = 'call_booked';

// Module-level so Strict Mode's double effect and both layouts attach once.
let attached = false;
let lastFiredAt = 0;

/**
 * Fires `call_booked` when someone finishes booking in the Cal.com embed
 * (inline calendar or popup) on bartcagara.com. Without this, PostHog only
 * sees people opening the booking page, never a finished booking.
 *
 * Cal.com emits both `bookingSuccessfulV2` and the older `bookingSuccessful`
 * for one booking; a short time guard keeps it to one event.
 */
export function CalBookingTracker(): null {
  const posthog = usePostHogClient();

  useEffect(() => {
    if (!posthog || attached) return;
    let cancelled = false;
    let attempts = 0;

    const onBooked = () => {
      const now = Date.now();
      if (now - lastFiredAt < 10_000) return;
      lastFiredAt = now;
      posthog.capture(CALL_BOOKED_EVENT, { booked_from: window.location.pathname });
    };

    const tryAttach = () => {
      if (cancelled || attached) return;
      const cal = (window as { Cal?: { ns?: Record<string, CalNamespace> } }).Cal;
      const ns = cal?.ns?.[CAL_NAMESPACE];
      if (ns) {
        attached = true;
        ns('on', { action: 'bookingSuccessfulV2', callback: onBooked });
        ns('on', { action: 'bookingSuccessful', callback: onBooked });
        return;
      }
      attempts += 1;
      if (attempts < 150) setTimeout(tryAttach, 200);
    };

    tryAttach();
    return () => {
      cancelled = true;
    };
  }, [posthog]);

  return null;
}
