import { CTAButton } from "@/components/ui/CTAButton";
import type { HeroSectionProps } from "@/components/home/types";

/**
 * HeroSection - Main hero section of the homepage
 * Features the primary headline and CTA
 */
export function HeroSection({ content }: HeroSectionProps) {
  return (
    <section className="border-b-2 border-white/10 bg-bleu-nuit overflow-hidden" aria-label="Hero">
      <div className="max-w-7xl mx-auto px-6 pt-32 pb-24 md:pt-48 md:pb-32">
        <h1 className="text-[clamp(1.25rem,7vw,5.75rem)] font-black uppercase tracking-tighter leading-[0.85] mb-12 text-white max-w-5xl whitespace-nowrap">
          {content.headline}<br />
          <span className="inline-block bg-gray-50 text-bleu-nuit px-4 -rotate-1 shadow-brutal-sm">{content.highlightedText}</span>
        </h1>

        <div className="border-l-4 border-bleu-accent pl-8 max-w-2xl mb-12">
          <p className="text-xl md:text-2xl font-medium text-white/80 leading-relaxed">
            {content.subheadline}
          </p>
        </div>

        <CTAButton href="#book-call" variant="light" cal>
          {content.ctaText}
        </CTAButton>

        <p className="mt-6 text-sm font-bold uppercase tracking-tighter text-white/40">
          {content.socialProof}
        </p>
      </div>
    </section>
  );
}
