import { OptinForm } from "@/components/newsletter/OptinForm";
import { CONTAINER, GUTTER, H2, PROSE, SECTION } from "@/components/home/ui";

interface BriefingSectionProps {
  heading: string;
  body: readonly string[];
  submitLabel: string;
}

/** Not booking today: /brief's signup, joined form and all. */
export function BriefingSection({ heading, body, submitLabel }: BriefingSectionProps) {
  return (
    <section className={GUTTER} aria-labelledby="briefing-title">
      <div className={`${CONTAINER} ${SECTION}`}>
        <div className="max-w-[600px]">
          <h2 id="briefing-title" className={H2}>{heading}</h2>
          <div className={`mt-4 md:mt-6 ${PROSE}`}>
            {body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-8 md:mt-10">
            <OptinForm submitLabel={submitLabel} layout="joined" showFootnote={false} />
          </div>
        </div>
      </div>
    </section>
  );
}
