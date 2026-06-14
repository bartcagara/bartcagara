import { CalendarEmbed } from "@/components/home/CalendarEmbed";
import { SectionBadge } from "@/components/ui/SectionBadge";
import type { FinalCTASectionProps } from "@/components/home/types";

export function FinalCTASection({
  headline,
  highlightedText,
  body,
}: FinalCTASectionProps) {
  return (
    <section id="calendar-section" className="py-24 md:py-32 bg-white text-bleu-nuit overflow-x-hidden" aria-labelledby="final-cta-title">
      <div className="max-w-7xl mx-auto px-6">
        <SectionBadge>The Decision</SectionBadge>
        <h2 id="final-cta-title" className="text-display mb-12 text-bleu-nuit max-w-5xl">
          {headline}<br />
          {/* Hug the phrase: wrap-and-hug on mobile (w-min), single-line hug on
              desktop where it fits (md:w-fit). */}
          <span className="inline-block w-min md:w-fit max-w-full bg-bleu-nuit text-white px-4 -rotate-1 shadow-brutal-sm">{highlightedText}</span>
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
                    ? "text-lead-lg font-black text-bleu-nuit leading-tight"
                    : "text-lead font-medium text-bleu-nuit/70 leading-relaxed"
                }
              >
                {isBold
                  ? text
                  : text.split(/(\*\*.*?\*\*)/).map((part, i) =>
                      part.startsWith('**') && part.endsWith('**') ? (
                        <strong key={i} className="font-bold text-bleu-nuit">{part.slice(2, -2)}</strong>
                      ) : (
                        part
                      )
                    )}
              </p>
            );
          })}
        </div>

        <div id="book-call" className="mt-12 scroll-mt-[88px] md:scroll-mt-[104px]">
          <CalendarEmbed />
        </div>

        <p className="mt-8 max-w-3xl text-lead font-medium text-bleu-nuit/70 leading-relaxed">
          I coach every client myself. 1:1, never group. When the roster&apos;s full, it&apos;s a waitlist.
        </p>
      </div>
    </section>
  );
}
