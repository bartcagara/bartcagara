import { Check } from "lucide-react";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { SectionHeader } from "./SectionHeader";
import type { SolutionSectionProps } from "@/components/home/types";

/**
 * SolutionSection - "The Solution" section
 * Shows the integrated approach narrative
 * Bullet items (prefixed with "* ") render with green checkmark icons
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
            const isBullet = item.startsWith('* ');
            const isBold = item.startsWith('**') && item.endsWith('**');
            const text = isBold ? item.slice(2, -2) : isBullet ? item.slice(2) : item;

            if (isBullet) {
              return (
                <div key={index} className="flex items-start gap-4">
                  <div className="mt-1 flex-shrink-0 p-1 bg-green-500 rounded-full text-white">
                    <Check className="w-5 h-5" strokeWidth={3} aria-hidden="true" />
                  </div>
                  <p className="text-xl md:text-2xl font-medium text-white/80 leading-relaxed">
                    {text}
                  </p>
                </div>
              );
            }

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
