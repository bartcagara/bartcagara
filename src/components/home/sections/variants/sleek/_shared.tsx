import type { ReactNode } from "react";

/**
 * DESIGN-LAB VARIANT — "Modern & Sleek" shared primitives.
 * Dark navy base, radial accent glows, fine grid, glass cards,
 * gradient-clipped headings, glowing rounded CTAs.
 */

export const CAL = {
  "data-cal-link": "bartcagara/discovery-call",
  "data-cal-namespace": "discovery-call",
  "data-cal-config": '{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}',
} as const;

/** Fine grid overlay, masked to fade out. */
export function GridOverlay({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 opacity-[0.05] ${className}`}
      style={{
        backgroundImage:
          "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
        backgroundSize: "56px 56px",
        maskImage:
          "radial-gradient(ellipse 80% 60% at 50% 0%, #000 40%, transparent 100%)",
      }}
    />
  );
}

/** Soft radial accent glow blob. */
export function Glow({ className = "" }: { className?: string }) {
  return <div aria-hidden className={`pointer-events-none absolute rounded-full blur-[120px] ${className}`} />;
}

/** Glowing gradient CTA button with arrow micro-interaction. */
export function SleekCTA({
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
      className={`group inline-flex items-center gap-3 rounded-2xl bg-gradient-to-b from-bleu-accent to-[#34546e] px-9 py-5 text-base font-bold uppercase tracking-tight text-white shadow-[0_20px_50px_-12px_rgba(69,109,139,0.7)] ring-1 ring-white/10 transition-all hover:-translate-y-0.5 hover:shadow-[0_24px_60px_-12px_rgba(69,109,139,0.9)] md:px-11 md:py-6 md:text-lg ${className}`}
    >
      {label}
      <span aria-hidden className="transition-transform group-hover:translate-x-1">
        →
      </span>
    </button>
  );
}

/** Glass pill eyebrow with accent dot. */
export function Eyebrow({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-eyebrow text-white/80 backdrop-blur-md">
      <span className="h-1.5 w-1.5 rounded-full bg-bleu-accent" aria-hidden />
      {label}
    </span>
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
