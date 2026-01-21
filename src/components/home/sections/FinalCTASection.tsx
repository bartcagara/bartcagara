import { CTAButton } from "@/components/ui/CTAButton";
import type { FinalCTASectionProps } from "@/components/home/types";

/**
 * FinalCTASection - Final call-to-action
 * Closing pitch and CTA button
 */
export function FinalCTASection({
  headline,
  highlightedText,
  subheadline,
  ctaText,
  ctaLink
}: FinalCTASectionProps) {
  return (
    <section className="py-24 md:py-48 bg-bleu-nuit" aria-labelledby="final-cta-title">
      <div className="max-w-7xl mx-auto px-6">
        <h2 id="final-cta-title" className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-12 leading-[0.85] text-white">
          {headline}<br />
          <span className="inline-block bg-gray-50 text-bleu-nuit px-4 -rotate-1 shadow-brutal-sm">{highlightedText}</span>
        </h2>
        <p className="text-2xl md:text-3xl font-medium text-white/70 mb-16 max-w-3xl leading-relaxed">
          {subheadline}
        </p>
        <CTAButton href={ctaLink} variant="light">
          {ctaText}
        </CTAButton>
      </div>
    </section>
  );
}
