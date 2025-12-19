import { Check } from "lucide-react";
import { SectionBadge } from "@/components/ui/SectionBadge";
import type { SolutionSectionProps } from "@/components/home/types";

/**
 * SolutionSection - "The Solution" section
 * Shows the right approach to diet and training
 */
export function SolutionSection({ title, subtitle, pillars, outcome }: SolutionSectionProps) {
  return (
    <section className="py-24 md:py-32 border-b-2 border-bleu-nuit bg-bleu-nuit text-white" aria-labelledby="solution-title">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-24">
          <SectionBadge variant="light">The Solution</SectionBadge>
          <h2 id="solution-title" className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] mb-8">
            {title.split('\n').map((line, i) => (
              <span key={i}>
                {line}
                {i < title.split('\n').length - 1 && <br />}
              </span>
            ))}
          </h2>
          <h3 className="text-2xl md:text-3xl font-medium text-white/60 max-w-3xl leading-tight">
            {subtitle.split('\n').map((line, i) => (
              <span key={i}>
                {line}
                {i < subtitle.split('\n').length - 1 && <br />}
              </span>
            ))}
          </h3>
        </div>

        <div className="grid md:grid-cols-2 gap-16 md:gap-32">
          {pillars.map((pillar) => (
            <div key={pillar.title}>
              <h4 className="text-3xl font-black uppercase mb-8 text-white border-b-2 border-bleu-accent pb-4 inline-block">
                {pillar.title}
              </h4>
              <ul className="space-y-8">
                {pillar.items.map((item, index) => (
                  <li key={index} className="group">
                    <div className="flex items-start gap-4 mb-2">
                      <Check className="w-8 h-8 text-bleu-accent flex-shrink-0" strokeWidth={3} aria-hidden="true" />
                      <span className="text-2xl font-bold">{item}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-24 pt-12 border-t-2 border-white/20">
          <p className="text-2xl md:text-4xl font-black text-white leading-tight max-w-4xl">
            {outcome}
          </p>
        </div>
      </div>
    </section>
  );
}
