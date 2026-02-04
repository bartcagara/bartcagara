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
        <div className="mb-24">
          <SectionBadge variant="light">The Solution</SectionBadge>
          <div id="solution-title">
            <SectionHeader title={title} subtitle={subtitle} variant="light" />
          </div>
        </div>

        <div className="max-w-4xl">
          <ul className="space-y-8">
            {items.map((item, index) => (
              <li key={index} className="group">
                <div className="flex items-start gap-4 mb-2">
                  <Check className="w-8 h-8 text-green-400 flex-shrink-0" strokeWidth={3} aria-hidden="true" />
                  <span className="text-2xl font-bold">{item}</span>
                </div>
              </li>
            ))}
          </ul>

          <p className="text-2xl font-bold text-white/80 mt-12 leading-relaxed">
            {afterText}
          </p>
        </div>

        <div className="mt-24 pt-12 border-t-2 border-white/20">
          <p className="text-2xl md:text-3xl font-black text-white leading-tight max-w-4xl">
            {outcome}
          </p>
        </div>
      </div>
    </section>
  );
}
