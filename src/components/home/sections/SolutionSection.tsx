import { SectionBadge } from "@/components/ui/SectionBadge";
import { SectionHeader } from "./SectionHeader";
import type { SolutionSectionProps } from "@/components/home/types";

/**
 * SolutionSection - "The Solution" section
 * Shows the integrated approach narrative
 */
export function SolutionSection({ title, subtitle, items }: SolutionSectionProps) {
  return (
    <section className="py-24 md:py-32 border-b-2 border-bleu-nuit bg-bleu-nuit text-white" aria-labelledby="solution-title">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-24">
          <SectionBadge variant="light">The Solution</SectionBadge>
          <SectionHeader id="solution-title" title={title} subtitle={subtitle} variant="light" />
        </div>

        <div className="max-w-4xl space-y-6">
          {items.map((item, index) => {
            const isBold = item.startsWith('**') && item.endsWith('**');
            const text = isBold ? item.slice(2, -2) : item;
            return (
              <p
                key={index}
                className={
                  isBold
                    ? "text-2xl md:text-3xl font-black text-white leading-tight"
                    : "text-xl md:text-2xl font-medium text-white/80 leading-relaxed"
                }
              >
                {text}
              </p>
            );
          })}
        </div>
      </div>
    </section>
  );
}
