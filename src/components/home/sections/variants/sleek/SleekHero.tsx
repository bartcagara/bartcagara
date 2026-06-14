import { HOMEPAGE_CONTENT } from "@/data/homepage-content";
import { Eyebrow, Glow, GridOverlay, SleekCTA } from "./_shared";

/** Sleek hero — navy with radial glows, fine grid, glass pill, gradient headline. */
export function SleekHero() {
  const { hero } = HOMEPAGE_CONTENT;
  return (
    <section className="relative overflow-hidden bg-bleu-nuit" aria-label="Hero">
      <GridOverlay />
      <Glow className="-top-40 left-1/2 h-[700px] w-[700px] -translate-x-1/2 bg-bleu-accent opacity-25 blur-[140px]" />
      <Glow className="-right-32 top-20 h-[400px] w-[400px] bg-bleu-charron opacity-30" />

      <div className="relative mx-auto flex max-w-4xl flex-col items-center px-6 pb-28 pt-32 text-center md:pb-36 md:pt-44">
        <div className="mb-8">
          <Eyebrow label={hero.socialProof} />
        </div>

        <h1 className="mb-8 text-display text-white">
          {hero.headline}
          <br />
          <span className="bg-gradient-to-r from-white via-bleu-fumee to-bleu-accent bg-clip-text text-transparent">
            {hero.highlightedText}
          </span>
        </h1>

        <p className="mb-11 max-w-xl text-lead font-medium leading-relaxed text-white/60">
          {hero.subheadline}
        </p>

        <SleekCTA label={hero.ctaText} />
      </div>
    </section>
  );
}
