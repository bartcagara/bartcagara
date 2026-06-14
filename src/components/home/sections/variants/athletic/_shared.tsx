import type { ReactNode } from "react";

/**
 * DESIGN-LAB VARIANT — "Bold & Athletic" shared primitives.
 * Imagery-led, energetic, high-contrast, navy-cinematic.
 */

export const CAL = {
  "data-cal-link": "bartcagara/discovery-call",
  "data-cal-namespace": "discovery-call",
  "data-cal-config": '{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}',
} as const;

/** Energetic accent CTA — solid bleu-accent, soft glow, subtle hover lift. */
export function AccentCTA({
  label,
  className = "",
}: {
  label: string;
  className?: string;
}) {
  return (
    <button
      type="button"
      {...CAL}
      className={`inline-flex items-center gap-3 rounded-sm bg-bleu-accent px-9 py-5 text-base font-black uppercase tracking-tighter text-white shadow-[0_18px_40px_-12px_rgba(69,109,139,0.7)] transition-all hover:-translate-y-0.5 hover:bg-[#3a5d78] md:px-12 md:py-6 md:text-xl ${className}`}
    >
      {label}
      <span aria-hidden>→</span>
    </button>
  );
}

/** Mono "// LABEL" eyebrow with an accent rule. */
export function Eyebrow({ label }: { label: string }) {
  return (
    <div className="mb-7 flex items-center gap-3">
      <span className="h-px w-10 bg-bleu-accent" aria-hidden />
      <span className="font-mono text-eyebrow text-bleu-accent">
        <span aria-hidden>// </span>
        {label}
      </span>
    </div>
  );
}

/**
 * Render markdown-style **bold** markers as <strong>. Reuses the established
 * split-on-/(\*\*.*?\*\*)/ pattern from DiagnosisSection / ProgramSection.
 */
export function renderBold(text: string, strongClass: string): ReactNode {
  return text.split(/(\*\*.*?\*\*)/).map((part, i) =>
    part.startsWith("**") && part.endsWith("**") ? (
      <strong key={i} className={strongClass}>
        {part.slice(2, -2)}
      </strong>
    ) : (
      part
    )
  );
}
