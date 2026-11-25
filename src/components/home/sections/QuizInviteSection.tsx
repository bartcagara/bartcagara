import Link from "next/link";
import { SectionBadge } from "@/components/ui/SectionBadge";
import type { QuizInviteSectionProps } from "@/components/home/types";

/**
 * The softer door, given room of its own: the four restarter types as tiles,
 * then what the quiz gives him, then one blue button (the accent color, so it
 * stays distinct from the navy Book Restart Audit buttons).
 */
export function QuizInviteSection({ content }: QuizInviteSectionProps) {
  return (
    <section id="quiz" className="bg-gray-50 text-bleu-nuit border-t-2 border-bleu-nuit" aria-labelledby="quiz-title">
      <div className="max-w-7xl mx-auto px-6 py-16 lg:px-12 lg:py-24">
        <div className="max-w-[760px]">
          <SectionBadge>{content.label}</SectionBadge>
          <h2 id="quiz-title" className="font-black tracking-[-0.04em] leading-[1.05] text-[clamp(1.75rem,1rem+3vw,3rem)] text-balance">
            {content.title}
          </h2>
          <p className="mt-6 text-lead font-medium leading-[1.45] text-bleu-nuit/75">{content.intro}</p>
        </div>

        <ul className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6" aria-label="The four restarter types">
          {content.types.map((type, i) => (
            <li key={type} className="border-2 border-bleu-nuit bg-white shadow-brutal-md px-5 py-6 lg:py-8">
              <p className="text-sm font-bold text-bleu-accent">0{i + 1}</p>
              <p className="mt-2 font-black tracking-[-0.03em] leading-[1.1] text-xl lg:text-2xl">{type}</p>
            </li>
          ))}
        </ul>

        <p className="mt-10 max-w-[760px] text-lead font-medium leading-[1.45] text-bleu-nuit/75">{content.after}</p>

        <Link
          href={content.href}
          className="mt-8 inline-flex items-center justify-center w-full sm:w-auto min-h-14 px-10 py-4 bg-bleu-accent border-2 border-bleu-nuit text-white text-lg font-black uppercase tracking-tight shadow-brutal-nuit-sm transition-brutal hover:shadow-none hover-translate-brutal"
        >
          {content.button}
        </Link>
      </div>
    </section>
  );
}
