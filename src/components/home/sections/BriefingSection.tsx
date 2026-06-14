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
 * (dark variant so the form reads on the navy background)
 */
export function BriefingSection({ label, heading, body, submitLabel }: BriefingSectionProps) {
  return (
    <section className="py-24 md:py-32 bg-bleu-nuit text-white" aria-labelledby="briefing-title">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl">
          <SectionBadge variant="light">{label}</SectionBadge>
          <h2 id="briefing-title" className="text-h2 text-white mb-8">
            {heading}
          </h2>
          <div className="space-y-6 mb-12 max-w-2xl">
            {body.map((paragraph, index) => (
              <p key={index} className="text-lead font-medium text-white/70 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
          <div className="max-w-md">
            <OptinForm submitLabel={submitLabel} showFootnote={false} variant="dark" />
          </div>
        </div>
      </div>
    </section>
  );
}
