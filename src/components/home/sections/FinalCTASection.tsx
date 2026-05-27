import { Check, Shield, Clock } from "lucide-react";
import { CalendarEmbed } from "@/components/home/CalendarEmbed";
import type { FinalCTASectionProps } from "@/components/home/types";

const TRUST_SIGNALS = [
  { icon: Clock, text: "Coaching founders since 2019" },
  { icon: Check, text: "50+ former-athlete founders transformed" },
  { icon: Shield, text: "Zero obligation discovery call" },
];

export function FinalCTASection({
  headline,
  highlightedText,
  body,
}: FinalCTASectionProps) {
  return (
    <section id="calendar-section" className="py-24 md:py-48 bg-bleu-nuit overflow-x-hidden" aria-labelledby="final-cta-title">
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
                    ? "text-2xl md:text-3xl font-black text-white leading-tight"
                    : "text-xl md:text-2xl font-medium text-white/70 leading-relaxed"
                }
              >
                {text}
              </p>
            );
          })}
        </div>

        <div className="flex flex-col md:flex-row gap-6 md:gap-10 mb-12">
          {TRUST_SIGNALS.map((signal) => (
            <div key={signal.text} className="flex items-center gap-3">
              <signal.icon className="w-5 h-5 text-bleu-accent flex-shrink-0" strokeWidth={2.5} />
              <span className="text-sm font-bold uppercase tracking-tighter text-white/50">{signal.text}</span>
            </div>
          ))}
        </div>

        <div id="book-call" className="mt-12 scroll-mt-[88px] md:scroll-mt-[104px]">
          <CalendarEmbed />
        </div>
      </div>
    </section>
  );
}
