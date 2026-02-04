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
    <section className="py-24 md:py-32 border-b-2 border-bleu-nuit bg-white" aria-labelledby="diagnosis-title">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-24">
          <SectionBadge>The Diagnosis</SectionBadge>
          <div id="diagnosis-title">
            <SectionHeader title={title} subtitle={subtitle} variant="dark" />
          </div>
        </div>

        <div className="max-w-4xl">
          <ul className="space-y-8">
            {items.map((item, index) => (
              <li key={index} className="group">
                <div className="flex items-start gap-4 mb-2">
                  <X className="w-8 h-8 text-red-500 flex-shrink-0" strokeWidth={3} aria-hidden="true" />
                  <span className="text-2xl font-bold text-bleu-nuit">{item}</span>
                </div>
              </li>
            ))}
          </ul>

          <p className="text-2xl font-bold text-bleu-nuit/80 mt-12 leading-relaxed">
            {afterText}
          </p>
        </div>

        <div className="mt-24 pt-12 border-t-2 border-bleu-nuit/20">
          <p className="text-2xl md:text-3xl font-bold text-bleu-nuit leading-tight max-w-4xl">
            {outcome}
          </p>
        </div>
      </div>
    </section>
  );
}
