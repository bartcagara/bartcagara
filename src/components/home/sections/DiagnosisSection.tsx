import { X } from "lucide-react";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { SectionHeader } from "./SectionHeader";
import type { DiagnosisSectionProps } from "@/components/home/types";

/**
 * DiagnosisSection - "The Problem" section
 * Displays what's going wrong with the disconnected approach
 */
export function DiagnosisSection({ title, subtitle, items, afterText, outcome }: DiagnosisSectionProps) {
  return (
    <section className="py-16 md:py-24 lg:py-32 border-b-2 border-bleu-nuit bg-white" aria-labelledby="diagnosis-title">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12 md:mb-20">
          <SectionBadge>The Diagnosis</SectionBadge>
          <div id="diagnosis-title">
            <SectionHeader title={title} subtitle={subtitle} variant="dark" />
          </div>
        </div>

        <div className="max-w-4xl">
          <ul className="space-y-5 md:space-y-6">
            {items.map((item, index) => (
              <li key={index} className="group">
                <div className="flex items-start gap-3 md:gap-4">
                  <X className="w-5 h-5 md:w-6 md:h-6 text-red-500 flex-shrink-0 mt-0.5" strokeWidth={3} aria-hidden="true" />
                  <span className="text-base md:text-lg lg:text-xl font-semibold text-bleu-nuit">{item}</span>
                </div>
              </li>
            ))}
          </ul>

          <p className="text-base md:text-lg lg:text-xl font-semibold text-bleu-nuit/80 mt-8 md:mt-10 leading-relaxed">
            {afterText}
          </p>
        </div>

        <div className="mt-12 md:mt-20 pt-8 md:pt-12 border-t-2 border-bleu-nuit/20">
          <p className="text-lg md:text-2xl lg:text-3xl font-black text-bleu-nuit leading-tight max-w-4xl">
            {outcome}
          </p>
        </div>
      </div>
    </section>
  );
}
