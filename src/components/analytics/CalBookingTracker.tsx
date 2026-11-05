'use client';

import { useEffect } from 'react';
import { getCalNamespace, onCalBooted } from '@/lib/cal';
import { usePostHogClient } from '@/lib/posthog-context';

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
 *
 * Cal.com loads only when wanted (lib/cal.ts), so this attaches at that moment,
 * however late in the visit.
 */
export function CalBookingTracker(): null {
  const posthog = usePostHogClient();

  useEffect(() => {
    if (!posthog || attached) return;

    const onBooked = () => {
      const now = Date.now();
      if (now - lastFiredAt < 10_000) return;
      lastFiredAt = now;
      posthog.capture(CALL_BOOKED_EVENT, { booked_from: window.location.pathname });
    };

    return onCalBooted(() => {
      const ns = getCalNamespace();
      if (!ns || attached) return;
      attached = true;
      ns('on', { action: 'bookingSuccessfulV2', callback: onBooked });
      ns('on', { action: 'bookingSuccessful', callback: onBooked });
    });
  }, [posthog]);

  return null;
}
