"use client";

import { useEffect } from "react";
import { CAL_ORIGIN, bootCal, getCalNamespace, onCalBooted } from "@/lib/cal";

/**
 * CalScript - Loads Cal.com on the first press of a booking button, and not
 * before: until then nothing is requested from Cal.com.
 *
 * embed.js has its own click listener for [data-cal-link], but it cannot see
 * the press that loaded it, so that first press opens the popup here, with the
 * same call embed.js makes. Later presses are embed.js's own; a press while it
 * is still loading is ignored, the popup being already queued.
 */
export function CalScript() {
  useEffect(() => {
    let booted = false;
    const cancel = onCalBooted(() => {
      booted = true;
    });

    const onClick = (event: MouseEvent) => {
      if (booted || !(event.target instanceof Element)) return;
      const button = event.target.closest<HTMLElement>("[data-cal-link]");
      if (!button) return;

      let config = {};
      try {
        config = JSON.parse(button.dataset.calConfig ?? "");
      } catch {
        // embed.js treats a bad config the same way.
      }
      bootCal();
      getCalNamespace()?.("modal", {
        calLink: button.dataset.calLink,
        config,
        calOrigin: CAL_ORIGIN,
      });
    };

    document.addEventListener("click", onClick);
    return () => {
      cancel();
      document.removeEventListener("click", onClick);
    };
  }, []);

  return null;
}
