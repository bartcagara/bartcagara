import { SectionBadge } from "@/components/ui/SectionBadge";
import { OptinForm } from "@/components/newsletter/OptinForm";

interface BriefingSectionProps {
  label: string;
  heading: string;
  body: readonly string[];
  submitLabel: string;
}

/**
 * BriefingSection - Newsletter opt-in block
 * Dark section that reuses the /briefing-optin email signup form
 * (hosted on a light card so the existing light-styled form stays legible)
 */
export function BriefingSection({ label, heading, body, submitLabel }: BriefingSectionProps) {
  return (
    <section className="py-20 md:py-28 bg-bleu-nuit text-white" aria-labelledby="briefing-title">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl">
          <SectionBadge variant="light">{label}</SectionBadge>
          <h2 id="briefing-title" className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] text-white mb-8">
            {heading}
          </h2>
          <div className="space-y-6 mb-12 max-w-2xl">
            {body.map((paragraph, index) => (
              <p key={index} className="text-xl md:text-2xl font-medium text-white/70 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
          <div className="bg-gray-50 border-2 border-bleu-nuit p-6 md:p-10 shadow-brutal-md max-w-md">
            <OptinForm submitLabel={submitLabel} showFootnote={false} />
          </div>
        </div>
      </div>
    </section>
  );
}
