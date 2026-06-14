import { HOMEPAGE_CONTENT } from "@/data/homepage-content";

const CAL = {
  "data-cal-link": "bartcagara/discovery-call",
  "data-cal-namespace": "discovery-call",
  "data-cal-config": '{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}',
} as const;

/**
 * DESIGN-LAB VARIANT — "Modern & sleek"
 * Navy with a radial accent glow + fine grid, a glass social-proof pill,
 * a gradient-clipped headline word, and a glowing rounded CTA.
 */
export function HeroSleek() {
  const { hero } = HOMEPAGE_CONTENT;
  return (
    <section className="relative bg-bleu-nuit overflow-hidden" aria-label="Hero (sleek)">
      {/* fine grid */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, #000 40%, transparent 100%)",
        }}
      />
      {/* glow blobs */}
      <div aria-hidden className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-bleu-accent opacity-25 blur-[140px]" />
      <div aria-hidden className="absolute top-20 -right-32 w-[400px] h-[400px] rounded-full bg-bleu-charron opacity-30 blur-[120px]" />

      <div className="relative max-w-4xl mx-auto px-6 pt-32 pb-28 md:pt-44 md:pb-36 text-center flex flex-col items-center">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full border border-white/15 bg-white/5 backdrop-blur-md text-eyebrow text-white/80">
          <span className="w-1.5 h-1.5 rounded-full bg-bleu-accent" aria-hidden />
          {hero.socialProof}
        </span>

        <h1 className="text-display text-white mb-8">
          {hero.headline}
          <br />
          <span className="bg-gradient-to-r from-white via-bleu-fumee to-bleu-accent bg-clip-text text-transparent">
            {hero.highlightedText}
          </span>
        </h1>

        <p className="text-lead font-medium leading-relaxed text-white/60 max-w-xl mb-11">
          {hero.subheadline}
        </p>

        <button
          type="button"
          {...CAL}
          className="group inline-flex items-center gap-3 px-9 py-5 md:px-11 md:py-6 text-base md:text-lg font-bold uppercase tracking-tight text-white rounded-2xl bg-gradient-to-b from-bleu-accent to-[#34546e] shadow-[0_20px_50px_-12px_rgba(69,109,139,0.7)] ring-1 ring-white/10 hover:-translate-y-0.5 hover:shadow-[0_24px_60px_-12px_rgba(69,109,139,0.9)] transition-all"
        >
          {hero.ctaText}
          <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
        </button>
      </div>
    </section>
  );
}
