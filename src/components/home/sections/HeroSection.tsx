import { CTAButton } from "@/components/ui/CTAButton";
import type { HeroSectionProps } from "@/components/home/types";

/**
 * HeroSection - Main hero section of the homepage
 * Features the primary headline and CTA
 */
export function HeroSection({ content }: HeroSectionProps) {
  // Split headline and highlighted text for controlled line breaks
  // "Stop The Decline." -> ["Stop The", "Decline."]
  // "Reclaim The Athlete." -> ["Reclaim The", "Athlete."]
  const headlineWords = content.headline.split(' ');
  const headlineLine1 = headlineWords.slice(0, 2).join(' ');
  const headlineLine2 = headlineWords.slice(2).join(' ');

  const highlightedWords = content.highlightedText.split(' ');
  const highlightedLine1 = highlightedWords.slice(0, 2).join(' ');
  const highlightedLine2 = highlightedWords.slice(2).join(' ');

  return (
    <section className="border-b-2 border-white/10 bg-bleu-nuit" role="banner">
      <div className="max-w-7xl mx-auto px-6 pt-32 pb-24 md:pt-48 md:pb-32">
        <h1 className="text-5xl md:text-[8rem] font-black uppercase tracking-tighter leading-[0.85] mb-12 text-white max-w-5xl">
          <span className="block">{headlineLine1}</span>
          <span className="block">{headlineLine2}</span>
          <span className="inline-block bg-gray-50 text-bleu-nuit px-4 -rotate-1 shadow-brutal-sm">
            <span className="block">{highlightedLine1}</span>
            <span className="block">{highlightedLine2}</span>
          </span>
        </h1>

        <div className="border-l-4 border-bleu-accent pl-8 max-w-2xl mb-12">
          <p className="text-xl md:text-2xl font-medium text-white/80 leading-relaxed">
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
