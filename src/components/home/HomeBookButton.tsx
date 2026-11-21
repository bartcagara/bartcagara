"use client";

import { Calendar } from "lucide-react";
import { CAL_POPUP_ATTRIBUTES } from "@/lib/cal";
import { usePostHogClient } from "@/lib/posthog-context";
import { BUTTON } from "./ui";

/** Named event on every homepage Book button; `location` says which one. */
export const BOOK_CLICK_EVENT = "book_click";

export type BookLocation = "hero" | "proof" | "offer" | "final";

/**
 * The homepage's Book button: /quiz's navy button, opening the Cal.com
 * booking popup, and telling PostHog which of the four buttons was pressed.
 */
export function HomeBookButton({ location, children }: { location: BookLocation; children: React.ReactNode }) {
  const posthog = usePostHogClient();
  return (
    <button
      type="button"
      {...CAL_POPUP_ATTRIBUTES}
      onClick={() => posthog?.capture(BOOK_CLICK_EVENT, { location })}
      className={BUTTON}
    >
      <Calendar className="w-5 h-5 shrink-0" strokeWidth={2.5} aria-hidden="true" />
      {children}
    </button>
  );
}
