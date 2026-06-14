import type { ReactNode } from "react";

export const CAL = {
  "data-cal-link": "bartcagara/discovery-call",
  "data-cal-namespace": "discovery-call",
  "data-cal-config": '{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}',
} as const;

/** Subtle dot-grid texture overlay for dark sections. */
export function DotGrid() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 opacity-[0.04]"
      style={{
        backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
        backgroundSize: "28px 28px",
      }}
    />
  );
}

/** Mono "// SECTION" kicker, paired with an accent rule. */
export function Kicker({
  label,
  tone = "dark",
}: {
  label: string;
  tone?: "dark" | "light";
}) {
  const text = tone === "dark" ? "text-bleu-accent" : "text-bleu-accent";
  return (
    <div className="mb-8 flex items-center gap-3">
      <span className="h-px w-10 bg-bleu-accent" aria-hidden />
      <span className={`font-mono text-eyebrow ${text}`}>
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
