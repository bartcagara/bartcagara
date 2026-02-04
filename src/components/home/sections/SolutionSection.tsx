import { Check } from "lucide-react";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { SectionHeader } from "./SectionHeader";
import type { SolutionSectionProps } from "@/components/home/types";

/**
 * SolutionSection - "The Solution" section
 * Shows the integrated approach with one coach
 */
export function SolutionSection({ title, subtitle, items, afterText, outcome }: SolutionSectionProps) {
  return (
    <section className="py-24 md:py-32 border-b-2 border-bleu-nuit bg-bleu-nuit text-white" aria-labelledby="solution-title">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <SectionBadge variant="light">The Solution</SectionBadge>
          <div id="solution-title">
            <SectionHeader title={title} subtitle={subtitle} variant="light" />
          </div>
        </div>

        <div className="max-w-4xl">
          <ul className="space-y-6">
            {items.map((item, index) => (
              <li key={index} className="group">
                <div className="flex items-start gap-4">
                  <Check className="w-6 h-6 md:w-7 md:h-7 text-green-400 flex-shrink-0 mt-1" strokeWidth={3} aria-hidden="true" />
                  <span className="text-lg md:text-xl font-semibold">{item}</span>
                </div>
              </li>
            ))}
          </ul>

          <p className="text-lg md:text-xl font-semibold text-white/80 mt-10 leading-relaxed">
            {afterText}
          </p>
        </div>

        <div className="mt-20 pt-12 border-t-2 border-white/20">
          <p className="text-xl md:text-3xl font-black text-white leading-tight max-w-4xl">
            {outcome}
          </p>
        </div>
      </div>
    </section>
  );
}
