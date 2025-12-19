import { X } from "lucide-react";
import { SectionBadge } from "@/components/ui/SectionBadge";
import type { DiagnosisSectionProps } from "@/components/home/types";

/**
 * DiagnosisSection - "The Problem" section
 * Displays what's going wrong with diet and training
 */
export function DiagnosisSection({ title, subtitle, pillars, outcome }: DiagnosisSectionProps) {
  return (
    <section className="py-24 md:py-32 border-b-2 border-bleu-nuit bg-gray-50" aria-labelledby="diagnosis-title">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-24">
          <SectionBadge>The Diagnosis</SectionBadge>
          <h2 id="diagnosis-title" className="text-5xl md:text-6xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.85] text-bleu-nuit mb-8">
            {title}
          </h2>
          <h3 className="text-xl md:text-2xl lg:text-3xl font-medium text-bleu-nuit/60 max-w-3xl leading-tight">
            {subtitle}
          </h3>
        </div>

        <div className="grid md:grid-cols-2 gap-16 md:gap-32">
          {pillars.map((pillar) => (
            <div key={pillar.title}>
              <h4 className="text-3xl font-black uppercase mb-8 text-bleu-nuit border-b-2 border-bleu-nuit pb-4 inline-block">
                {pillar.title}
              </h4>
              <ul className="space-y-8">
                {pillar.items.map((item, index) => (
                  <li key={index} className="group">
                    <div className="flex items-start gap-4 mb-2">
                      <X className="w-8 h-8 text-red-500 flex-shrink-0" strokeWidth={3} aria-hidden="true" />
                      <span className="text-2xl font-bold text-bleu-nuit">{item}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-24 pt-12 border-t-2 border-bleu-nuit/20">
          <p className="text-2xl md:text-4xl font-black text-bleu-nuit leading-tight max-w-4xl">
            {outcome}
          </p>
        </div>
      </div>
    </section>
  );
}
