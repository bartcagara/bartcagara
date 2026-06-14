import type { ReactNode } from "react";

/** Cal.com discovery-call popup attributes for CTA buttons. */
export const CAL = {
  "data-cal-link": "bartcagara/discovery-call",
  "data-cal-namespace": "discovery-call",
  "data-cal-config": '{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}',
} as const;

/** Serif display face inline style — applied to all editorial headings. */
export const serif = { fontFamily: "var(--font-fraunces), Georgia, serif" } as const;

/**
 * Render markdown-style **bold** markers as <strong>. Reuses the established
 * split-on-/(\*\*.*?\*\*)/ pattern from DiagnosisSection / ProgramSection.
 */
export function renderBold(text: string, strongClass = "font-semibold text-bleu-nuit"): ReactNode {
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

/** Small-caps editorial eyebrow with a hairline lead rule. */
export function Eyebrow({
  children,
  tone = "dark",
}: {
  children: ReactNode;
  tone?: "dark" | "light";
}) {
  const rule = tone === "dark" ? "bg-bleu-nuit/30" : "bg-white/40";
  const text = tone === "dark" ? "text-bleu-charron" : "text-bleu-fumee/80";
  return (
    <div className="mb-8 flex items-center gap-4">
      <span className={`h-px w-12 ${rule}`} aria-hidden />
      <span className={`font-sans text-xs uppercase tracking-[0.3em] font-semibold ${text}`}>
        {children}
      </span>
    </div>
  );
}
