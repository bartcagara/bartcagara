import { CTAButton } from "@/components/ui/CTAButton";
import type { FinalCTASectionProps } from "@/components/home/types";

/**
 * FinalCTASection - Final call-to-action
 * Closing pitch and CTA button
 */
export function FinalCTASection({
  headline,
  highlightedText,
  body,
  ctaText,
  ctaLink
}: FinalCTASectionProps) {
  return (
    <section className="py-24 md:py-48 bg-bleu-nuit overflow-hidden" aria-labelledby="final-cta-title">
      <div className="max-w-7xl mx-auto px-6">
        <h2 id="final-cta-title" className="text-[15.5vw] md:text-[8rem] font-black uppercase tracking-tighter mb-12 leading-[0.85] text-white max-w-5xl">
          {headline}<br />
          <span className="inline-block bg-gray-50 text-bleu-nuit px-4 -rotate-1 shadow-brutal-sm">{highlightedText}</span>
        </h2>
        <div className="mb-16 max-w-3xl space-y-6">
          {body.map((paragraph, index) => {
            const isBold = paragraph.startsWith('**') && paragraph.endsWith('**');
            const text = isBold ? paragraph.slice(2, -2) : paragraph;
            return (
              <p
                key={index}
                className={
                  isBold
                    ? "text-xl md:text-2xl font-black text-white leading-tight"
                    : "text-xl md:text-2xl font-medium text-white/70 leading-relaxed"
                }
              >
                {text}
              </p>
            );
          })}
        </div>
        <CTAButton href={ctaLink} variant="light">
          {ctaText}
        </CTAButton>
      </div>
    </section>
  );
}
