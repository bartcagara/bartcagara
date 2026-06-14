import { HOMEPAGE_CONTENT } from "@/data/homepage-content";
import { CAL, renderBold, serif } from "./_shared";

/**
 * EditorialFinalCta — the dark closing argument. Serif headline with an
 * accented italic phrase, the body as quiet prose, and a single understated
 * pill CTA. No calendar embed — the popup opens via Cal.com data attributes.
 */
export function EditorialFinalCta() {
  const { finalCta } = HOMEPAGE_CONTENT;
  return (
    <section className="bg-bleu-nuit text-white" aria-labelledby="final-cta-title">
      <div className="max-w-3xl mx-auto px-6 py-28 md:py-40 text-center">
        <h2
          id="final-cta-title"
          style={serif}
          className="text-[clamp(2.5rem,1.4rem+4.5vw,5rem)] leading-[1.02] tracking-[-0.02em] mb-10"
        >
          {finalCta.headline}{" "}
          <em className="text-bleu-accent italic">{finalCta.highlightedText}</em>
        </h2>

        <div className="space-y-5 mb-12 max-w-2xl mx-auto">
          {finalCta.body.map((line, i) => {
            const isBold = line.startsWith("**") && line.endsWith("**");
            if (isBold) {
              return (
                <p
                  key={i}
                  style={serif}
                  className="text-[clamp(1.3rem,1rem+1.2vw,1.8rem)] leading-snug tracking-[-0.01em] text-white"
                >
                  {line.slice(2, -2)}
                </p>
              );
            }
            return (
              <p
                key={i}
                className="font-sans text-lead leading-relaxed text-white/70"
              >
                {renderBold(line, "font-semibold text-white")}
              </p>
            );
          })}
        </div>

        <div className="flex flex-col items-center gap-5">
          <button
            type="button"
            {...CAL}
            className="font-sans inline-flex items-center px-9 py-5 text-sm md:text-base font-bold uppercase tracking-[0.12em] bg-white text-bleu-nuit rounded-full hover:bg-bleu-fumee transition-colors"
          >
            {finalCta.ctaText}
          </button>
          <span className="font-sans text-sm text-white/50">
            45 min · 1:1 · no obligation
          </span>
        </div>
      </div>
    </section>
  );
}
