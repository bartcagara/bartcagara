import { CTAButton } from "@/components/ui/CTAButton";
import type { HeroSectionProps } from "@/components/home/types";

/**
 * HeroSection - Main hero section of the homepage
 * Features the primary headline and CTA
 */
export function HeroSection({ content }: HeroSectionProps) {
  return (
    <section className="border-b-2 border-white/10 bg-bleu-nuit overflow-hidden" role="banner">
      <div className="max-w-7xl mx-auto px-6 pt-24 pb-20 md:pt-40 md:pb-28">
        <h1 className="text-[3.25rem] sm:text-6xl md:text-7xl lg:text-[7rem] font-black uppercase tracking-tighter leading-[0.9] mb-8 md:mb-12 text-white max-w-5xl">
          {content.headline}<br />
          <span className="inline-block bg-gray-50 text-bleu-nuit px-3 md:px-4 -rotate-1 shadow-brutal-sm">{content.highlightedText}</span>
        </h1>

        <div className="border-l-4 border-bleu-accent pl-6 md:pl-8 max-w-2xl mb-8 md:mb-12">
          <p className="text-base md:text-xl lg:text-2xl font-medium text-white/80 leading-relaxed">
            {content.subheadline}
          </p>
        </div>

        <CTAButton href={content.ctaLink} variant="light">
          {content.ctaText}
        </CTAButton>
      </div>
    </section>
  );
}
