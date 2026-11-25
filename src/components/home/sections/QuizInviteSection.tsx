import Link from "next/link";
import { TypesIcon } from "@/components/ui/TypesIcon";
import { SectionBadge } from "@/components/ui/SectionBadge";
import type { QuizInviteSectionProps } from "@/components/home/types";

/**
 * The softer door, given room of its own: the four restarter types as tiles,
 * then what the quiz gives him, then one blue button (the accent color, so it
 * stays distinct from the navy Book Restart Audit buttons).
 */
export function QuizInviteSection({ content }: QuizInviteSectionProps) {
  return (
    <section id="quiz" className="bg-bleu-fumee text-bleu-nuit border-t-2 border-bleu-nuit" aria-labelledby="quiz-title">
      <div className="max-w-7xl mx-auto px-6 py-16 lg:px-12 lg:py-28">
        <div className="max-w-[760px]">
          <SectionBadge>{content.label}</SectionBadge>
          <h2 id="quiz-title" className="heading-section">
            {content.title}
          </h2>
          <p className="mt-6 text-body text-bleu-nuit/75">{content.intro}</p>
        </div>

        <ul className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6" aria-label="The four restarter types">
          {content.types.map((type, i) => (
            <li key={type} className="border-2 border-bleu-nuit bg-white shadow-brutal-md px-5 py-6 lg:py-8">
              <p className="text-sm font-bold text-bleu-accent">0{i + 1}</p>
              <p className="mt-2 heading-card">{type}</p>
            </li>
          ))}
        </ul>

        <p className="mt-10 max-w-[760px] text-body text-bleu-nuit/75">{content.after}</p>

        <Link
          href={content.href}
          className="mt-8 inline-flex items-center justify-center gap-3 h-14 px-5 text-base sm:px-8 sm:text-lg md:h-16 bg-bleu-nuit border-2 border-bleu-nuit text-white font-black uppercase tracking-tight leading-none whitespace-nowrap shadow-[3px_3px_0_0_var(--bleu-accent)] transition-colors hover:bg-bleu-charron hover:border-bleu-charron"
        >
          <TypesIcon />
          {content.button}
        </Link>
      </div>
    </section>
  );
}
