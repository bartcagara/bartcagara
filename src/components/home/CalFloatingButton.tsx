"use client";

import { Calendar } from "lucide-react";

/**
 * CalFloatingButton - Sticky bottom-right "Book Call" button that opens
 * the Cal.com popup. Visibility is controlled by where it's rendered
 * in the React tree (mount it in layouts where you want it shown).
 */
export function CalFloatingButton() {
  return (
    <button
      type="button"
      aria-label="Book a call"
      data-cal-link="bartcagara/discovery-call"
      data-cal-namespace="discovery-call"
      data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
      className="fixed bottom-5 right-5 md:bottom-6 md:right-6 z-40 inline-flex items-center gap-2 bg-bleu-nuit text-white font-black uppercase text-sm tracking-tight px-4 py-3 border-2 border-bleu-nuit shadow-[4px_4px_0px_0px_var(--bleu-accent)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
    >
      <Calendar className="w-4 h-4" />
      Book Call
    </button>
  );
}
