import { Plus } from "lucide-react";
import { CONTAINER, GUTTER, H2, PROSE, SECTION } from "@/components/home/ui";
import type { ObjectionItem } from "@/components/home/types";

/**
 * The questions, closed, as /quiz's answer cards. On a phone he sees the
 * title and three lines, and taps the one he has.
 */
export function ObjectionsSection({ title, objections }: { title: string; objections: readonly ObjectionItem[] }) {
  return (
    <section className={GUTTER} aria-labelledby="objections-title">
      <div className={`${CONTAINER} ${SECTION}`}>
        <h2 id="objections-title" className={`${H2} max-w-3xl`}>{title}</h2>
        <div className="mt-10 md:mt-12 max-w-3xl space-y-4">
          {objections.map((item) => (
            <details key={item.question} className="group bg-white border-2 border-bleu-nuit shadow-brutal-sm">
              <summary className="flex items-center justify-between gap-5 min-h-14 px-5 py-4 md:px-6 md:py-5 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                <span className="text-lg md:text-xl font-bold leading-snug text-bleu-nuit text-pretty">
                  &ldquo;{item.question}&rdquo;
                </span>
                <Plus
                  className="w-6 h-6 shrink-0 text-bleu-accent transition-transform duration-200 group-open:rotate-45"
                  strokeWidth={3}
                  aria-hidden="true"
                />
              </summary>
              <p className={`${PROSE} px-5 pb-5 md:px-6 md:pb-6 -mt-1`}>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
