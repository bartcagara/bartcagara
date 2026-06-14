import { SectionBadge } from "@/components/ui/SectionBadge";
import type { ObjectionItem } from "@/components/home/types";

export function ObjectionsSection({ objections }: { objections: readonly ObjectionItem[] }) {
  return (
    <section className="py-24 md:py-32 border-b-2 border-bleu-nuit bg-bleu-nuit text-white" aria-labelledby="objections-title">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-24">
          <SectionBadge variant="light">The Questions</SectionBadge>
          <h2 id="objections-title" className="text-h2 text-white">
            WHAT&apos;S STOPPING YOU?
          </h2>
        </div>

        <div className="max-w-3xl space-y-12">
          {objections.map((item, index) => (
            <div key={index} className="border-l-4 border-bleu-accent pl-8">
              <p className="text-lead font-black text-white leading-tight mb-3">
                &ldquo;{item.question}&rdquo;
              </p>
              <p className="text-lg md:text-xl font-medium text-white/70 leading-relaxed">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
