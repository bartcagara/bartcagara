import { SectionBadge } from "@/components/ui/SectionBadge";
import type { QuestionsSectionProps } from "@/components/home/types";

/**
 * The last doubts, one at a time. Each question opens to a short answer;
 * the first is open. Desktop: heading on the left, questions on the right.
 */
export function QuestionsSection({ content }: QuestionsSectionProps) {
  return (
    <section id="questions" className="bg-bleu-fumee text-bleu-nuit border-t-2 border-bleu-nuit" aria-labelledby="questions-title">
      <div className="max-w-7xl mx-auto px-6 py-16 lg:px-12 lg:py-28 lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] lg:gap-20 lg:items-start">
        <div className="lg:sticky lg:top-32">
          <SectionBadge>{content.label}</SectionBadge>
          <h2 id="questions-title" className="heading-section">
            {content.title}
          </h2>
        </div>

        <div className="mt-10 lg:mt-[60px] border-b-2 border-bleu-nuit">
          {content.items.map((item, i) => (
            <details key={item.question} open={i === 0} className="group border-t-2 border-bleu-nuit">
              <summary className="flex items-start justify-between gap-6 py-6 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                <span className="heading-card">{item.question}</span>
                <span aria-hidden="true" className="mt-1 shrink-0 w-8 h-8 border-2 border-bleu-nuit flex items-center justify-center font-black text-lg leading-none group-open:bg-bleu-nuit group-open:text-white">
                  <span className="group-open:hidden">+</span>
                  <span className="hidden group-open:inline">–</span>
                </span>
              </summary>
              <p className="pb-8 pr-14 text-body text-bleu-nuit/75">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
