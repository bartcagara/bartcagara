import { HOMEPAGE_CONTENT } from "@/data/homepage-content";
import { Glow, GridOverlay, SleekCTA, renderBold } from "./_shared";

/** Final CTA — gradient headline, body copy, glowing button. No calendar embed. */
export function SleekFinalCTA() {
  const { finalCta } = HOMEPAGE_CONTENT;
  return (
    <section
      className="relative overflow-hidden bg-bleu-nuit py-28 md:py-36"
      aria-labelledby="sleek-finalcta-title"
    >
      <GridOverlay />
      <Glow className="-top-40 left-1/2 h-[700px] w-[700px] -translate-x-1/2 bg-bleu-accent opacity-25 blur-[140px]" />
      <Glow className="-bottom-40 right-0 h-[500px] w-[500px] bg-bleu-charron opacity-20" />

      <div className="relative mx-auto flex max-w-3xl flex-col items-center px-6 text-center">
        <h2 id="sleek-finalcta-title" className="mb-8 text-display text-white">
          {finalCta.headline}{" "}
          <span className="bg-gradient-to-r from-white via-bleu-fumee to-bleu-accent bg-clip-text text-transparent">
            {finalCta.highlightedText}
          </span>
        </h2>

        <div className="mb-11 max-w-xl space-y-4">
          {finalCta.body.map((line, index) => (
            <p
              key={index}
              className="text-lead font-medium leading-relaxed text-white/60"
            >
              {renderBold(line, "font-bold text-white")}
            </p>
          ))}
        </div>

        <SleekCTA label={finalCta.ctaText} />
      </div>
    </section>
  );
}
