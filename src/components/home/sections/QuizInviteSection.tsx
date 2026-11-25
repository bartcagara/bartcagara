import Link from "next/link";
import { ButtonArrow } from "@/components/ui/ButtonArrow";
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
          className="group mt-8 inline-flex items-center justify-center gap-2 h-12 px-6 text-[17px] md:h-14 md:px-7 md:text-lg bg-bleu-nuit border-2 border-bleu-nuit text-white font-black tracking-[-0.02em] leading-none whitespace-nowrap shadow-[4px_4px_0_0_var(--bleu-accent)] transition-brutal hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px]"
        >
          {content.button}
          <ButtonArrow />
        </Link>
      </div>
    </section>
  );
}
