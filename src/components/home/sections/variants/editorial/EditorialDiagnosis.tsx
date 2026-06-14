import { HOMEPAGE_CONTENT } from "@/data/homepage-content";
import { Eyebrow, renderBold, serif } from "./_shared";

/**
 * EditorialDiagnosis — the pain narrative as a dark, quiet editorial spread.
 * Title in white serif, prose set in a generous single column with emphasis lines.
 */
export function EditorialDiagnosis() {
  const { diagnosis } = HOMEPAGE_CONTENT;
  return (
    <section className="bg-bleu-nuit text-white" aria-labelledby="diagnosis-title">
      <div className="max-w-7xl mx-auto px-6 py-24 md:py-36 grid md:grid-cols-12 gap-12 md:gap-16">
        <div className="md:col-span-5">
          <Eyebrow tone="light">The Diagnosis</Eyebrow>
          <h2
            id="diagnosis-title"
            style={serif}
            className="text-[clamp(2rem,1.2rem+3vw,3.5rem)] leading-[1.08] tracking-[-0.02em] text-white"
          >
            {diagnosis.title.charAt(0) + diagnosis.title.slice(1).toLowerCase()}
          </h2>
        </div>

        <div className="md:col-span-7 md:border-l md:border-white/15 md:pl-16 space-y-6">
          {diagnosis.items.map((item, index) => {
            const isBold = item.startsWith("**") && item.endsWith("**");
            if (isBold) {
              return (
                <p
                  key={index}
                  style={serif}
                  className="text-[clamp(1.4rem,1rem+1.4vw,2rem)] leading-snug tracking-[-0.01em] text-white"
                >
                  {item.slice(2, -2)}
                </p>
              );
            }
            return (
              <p
                key={index}
                className="font-sans text-lead leading-relaxed text-white/70"
              >
                {renderBold(item, "font-semibold text-white")}
              </p>
            );
          })}
        </div>
      </div>
    </section>
  );
}
