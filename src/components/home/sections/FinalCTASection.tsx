import { CalendarEmbed } from "@/components/home/CalendarEmbed";
import { SectionBadge } from "@/components/ui/SectionBadge";
import type { FinalCTASectionProps } from "@/components/home/types";

/**
 * The decision: the page's main ask, after the questions and before the quiz.
 * Navy band, the promise as the heading, the live page's words, then the
 * Cal.com calendar right on the page (its own text says what the call is).
 */
export function FinalCTASection({ content }: FinalCTASectionProps) {
  return (
    <section id="calendar-section" className="bg-bleu-nuit text-white" aria-labelledby="final-cta-title">
      <div className="max-w-7xl mx-auto px-6 py-16 lg:px-12 lg:py-28">
        <div className="max-w-[760px]">
          <SectionBadge variant="light">{content.label}</SectionBadge>
          <h2 id="final-cta-title" className="font-black tracking-[-0.04em] leading-[1.0] text-[clamp(2.25rem,1.2rem+4.5vw,4.5rem)] text-balance">
            {content.title}
          </h2>
          <p className="mt-6 font-black tracking-[-0.03em] leading-[1.2] text-lead-lg">{content.lead}</p>
          <p className="mt-5 text-lead font-medium leading-[1.45] text-white/80">
            {content.text.split(/\*\*(.*?)\*\*/).map((part, i) =>
              i % 2 === 1 ? <strong key={i} className="font-black text-white">{part}</strong> : part
            )}
          </p>
          <p className="mt-8 font-black tracking-[-0.04em] leading-[1.05] text-[clamp(1.75rem,1rem+3vw,3rem)] text-balance">{content.closing}</p>
        </div>

        <div id="book-call" className="mt-12 lg:mt-16 scroll-mt-[88px] md:scroll-mt-[104px] border-2 border-white bg-white shadow-[3px_3px_0_0_var(--bleu-accent)] overflow-hidden">
          <CalendarEmbed loadWhenNear />
        </div>
      </div>
    </section>
  );
}
