import { HOMEPAGE_CONTENT } from "@/data/homepage-content";
import { CAL, DotGrid } from "./_shared";

/** Refined-brutalist hero. Mirrors the established HeroRefined treatment. */
export function RefinedHero() {
  const { hero } = HOMEPAGE_CONTENT;
  return (
    <section className="relative overflow-hidden bg-bleu-nuit" aria-label="Hero">
      <DotGrid />
      <div className="relative mx-auto max-w-7xl px-6 pt-28 pb-20 md:pt-44 md:pb-28">
        <div className="mb-8 flex items-center gap-3">
          <span className="h-px w-10 bg-bleu-accent" aria-hidden />
          <span className="font-mono text-eyebrow text-bleu-accent">
            Founder Athlete OS · Est. 2019
          </span>
        </div>

        <h1 className="mb-10 max-w-5xl text-display font-black uppercase tracking-tighter text-white">
          {hero.headline}
          <br />
          <span className="mt-2 inline-block -rotate-1 bg-bleu-fumee px-4 text-bleu-nuit shadow-[8px_8px_0_0_var(--bleu-accent)]">
            {hero.highlightedText}
          </span>
        </h1>

        <div className="mb-12 max-w-2xl border-l-4 border-bleu-accent pl-6">
          <p className="text-lead font-medium leading-relaxed text-white/80">
            {hero.subheadline}
          </p>
        </div>

        <button
          type="button"
          {...CAL}
          className="inline-flex items-center gap-3 border-2 border-bleu-fumee bg-bleu-fumee px-8 py-5 text-base font-black uppercase tracking-tighter text-bleu-nuit shadow-[6px_6px_0_0_var(--bleu-accent)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none md:px-10 md:py-6 md:text-xl"
        >
          {hero.ctaText}
          <span aria-hidden>→</span>
        </button>

        <dl className="mt-14 grid max-w-2xl grid-cols-3 gap-6 border-t-2 border-white/10 pt-8">
          {[
            ["50+", "Founders coached"],
            ["1:1", "Never group"],
            ["6 mo", "To never restart"],
          ].map(([n, l]) => (
            <div key={l}>
              <dt className="text-3xl font-black tracking-tighter text-white md:text-4xl">
                {n}
              </dt>
              <dd className="mt-1 text-eyebrow text-white/50">{l}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
