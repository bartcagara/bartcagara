import { HOMEPAGE_CONTENT } from "@/data/homepage-content";
import { CAL, DotGrid, Kicker, renderBold } from "./_shared";

/** Final CTA — display headline + body + brutal CTA button. No calendar embed. */
export function RefinedFinalCTA() {
  const { finalCta } = HOMEPAGE_CONTENT;
  return (
    <section
      className="relative overflow-hidden border-b-2 border-bleu-nuit bg-bleu-nuit py-24 md:py-32"
      aria-labelledby="finalcta-title"
    >
      <DotGrid />
      <div className="relative mx-auto max-w-7xl px-6">
        <Kicker label="THE INVITATION" />
        <h2
          id="finalcta-title"
          className="mb-10 max-w-5xl text-display font-black uppercase tracking-tighter text-white"
        >
          {finalCta.headline}
          <br />
          <span className="mt-2 inline-block -rotate-1 bg-bleu-fumee px-4 text-bleu-nuit shadow-[8px_8px_0_0_var(--bleu-accent)]">
            {finalCta.highlightedText}
          </span>
        </h2>

        <div className="mb-12 max-w-2xl space-y-6 border-l-4 border-bleu-accent pl-6">
          {finalCta.body.map((para, index) => {
            const isBold = para.startsWith("**") && para.endsWith("**");
            const text = isBold ? para.slice(2, -2) : para;
            return (
              <p
                key={index}
                className={
                  isBold
                    ? "text-lead-lg font-black leading-tight text-white"
                    : "text-lead font-medium leading-relaxed text-white/80"
                }
              >
                {isBold ? text : renderBold(text, "font-bold text-white")}
              </p>
            );
          })}
        </div>

        <button
          type="button"
          {...CAL}
          className="inline-flex items-center gap-3 border-2 border-bleu-fumee bg-bleu-fumee px-8 py-5 text-base font-black uppercase tracking-tighter text-bleu-nuit shadow-[6px_6px_0_0_var(--bleu-accent)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none md:px-10 md:py-6 md:text-xl"
        >
          {finalCta.ctaText}
          <span aria-hidden>→</span>
        </button>
      </div>
    </section>
  );
}
