import { HOMEPAGE_CONTENT } from "@/data/homepage-content";
import { Eyebrow, renderBold, serif } from "./_shared";

/**
 * EditorialSolution — the future-state narrative, light and airy.
 * Mirrors Diagnosis but on the frost base, with bold lines lifted into serif.
 */
export function EditorialSolution() {
  const { solution } = HOMEPAGE_CONTENT;
  return (
    <section className="bg-bleu-fumee text-bleu-nuit" aria-labelledby="solution-title">
      <div className="max-w-7xl mx-auto px-6 py-24 md:py-36 grid md:grid-cols-12 gap-12 md:gap-16">
        <div className="md:col-span-5">
          <Eyebrow>The Solution</Eyebrow>
          <h2
            id="solution-title"
            style={serif}
            className="text-[clamp(2rem,1.2rem+3vw,3.5rem)] leading-[1.08] tracking-[-0.02em] text-bleu-nuit"
          >
            {solution.title.charAt(0) + solution.title.slice(1).toLowerCase()}
          </h2>
        </div>

        <div className="md:col-span-7 md:border-l md:border-bleu-nuit/15 md:pl-16 space-y-6">
          {solution.items.map((item, index) => {
            const isBold = item.startsWith("**") && item.endsWith("**");
            if (isBold) {
              return (
                <p
                  key={index}
                  style={serif}
                  className="text-[clamp(1.4rem,1rem+1.4vw,2rem)] leading-snug tracking-[-0.01em] text-bleu-accent italic"
                >
                  {item.slice(2, -2)}
                </p>
              );
            }
            return (
              <p
                key={index}
                className="font-sans text-lead leading-relaxed text-bleu-nuit/70"
              >
                {renderBold(item, "font-semibold text-bleu-nuit")}
              </p>
            );
          })}
        </div>
      </div>
    </section>
  );
}
