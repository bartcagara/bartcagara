import { SectionBadge } from "@/components/ui/SectionBadge";
import { SectionHeader } from "./SectionHeader";
import type { DiagnosisSectionProps } from "@/components/home/types";

/**
 * DiagnosisSection - "The Problem" section
 * Displays narrative copy that paints the pain point
 */
export function DiagnosisSection({ title, subtitle, items }: DiagnosisSectionProps) {
  return (
    <section className="py-24 md:py-32 border-b-2 border-bleu-nuit bg-white" aria-labelledby="diagnosis-title">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-24">
          <SectionBadge>The Diagnosis</SectionBadge>
          <SectionHeader id="diagnosis-title" title={title} subtitle={subtitle} variant="dark" />
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
                    ? "text-xl md:text-2xl font-black text-bleu-nuit leading-tight"
                    : "text-xl md:text-2xl font-medium text-bleu-nuit/80 leading-relaxed"
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
