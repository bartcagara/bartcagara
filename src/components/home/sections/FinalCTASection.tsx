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
    <section className="py-20 md:py-32 lg:py-48 bg-bleu-nuit overflow-hidden" aria-labelledby="final-cta-title">
      <div className="max-w-7xl mx-auto px-6">
        <h2 id="final-cta-title" className="text-5xl sm:text-6xl md:text-7xl lg:text-[8rem] font-black uppercase tracking-tighter mb-8 md:mb-12 leading-[0.85] text-white max-w-5xl">
          {headline}<br />
          <span className="inline-block bg-gray-50 text-bleu-nuit px-3 md:px-4 -rotate-1 shadow-brutal-sm">{highlightedText}</span>
        </h2>
        <p className="text-lg md:text-xl lg:text-2xl font-medium text-white/80 mb-10 md:mb-16 max-w-3xl leading-relaxed">
          {subheadline}
        </p>
        <CTAButton href={ctaLink} variant="light">
          {ctaText}
        </CTAButton>
      </div>
    </section>
  );
}
