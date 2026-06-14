import { HOMEPAGE_CONTENT } from "@/data/homepage-content";

const CAL = {
  "data-cal-link": "bartcagara/discovery-call",
  "data-cal-namespace": "discovery-call",
  "data-cal-config": '{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}',
} as const;

/**
 * DESIGN-LAB VARIANT — "Refined brutalist"
 * The current neo-brutalist DNA, leveled up: disciplined rhythm, a kicker
 * row, a sharper highlight, a subtle dot-grid texture, and a stats bar.
 */
export function HeroRefined() {
  const { hero } = HOMEPAGE_CONTENT;
  return (
    <section className="relative bg-bleu-nuit overflow-hidden" aria-label="Hero (refined)">
      {/* subtle dot-grid texture */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="relative max-w-7xl mx-auto px-6 pt-28 pb-20 md:pt-44 md:pb-28">
        {/* kicker */}
        <div className="flex items-center gap-3 mb-8">
          <span className="h-px w-10 bg-bleu-accent" aria-hidden />
          <span className="text-eyebrow text-bleu-accent">Founder Athlete OS · Est. 2019</span>
        </div>

        <h1 className="text-display text-white max-w-5xl mb-10">
          {hero.headline}
          <br />
          <span className="inline-block bg-bleu-fumee text-bleu-nuit px-4 -rotate-1 shadow-[8px_8px_0_0_var(--bleu-accent)]">
            {hero.highlightedText}
          </span>
        </h1>

        <div className="border-l-4 border-bleu-accent pl-6 max-w-2xl mb-12">
          <p className="text-lead font-medium leading-relaxed text-white/80">
            {hero.subheadline}
          </p>
        </div>

        <button
          type="button"
          {...CAL}
          className="inline-flex items-center gap-3 px-8 py-5 md:px-10 md:py-6 text-base md:text-xl font-black uppercase tracking-tighter bg-bleu-fumee text-bleu-nuit border-2 border-bleu-fumee shadow-[6px_6px_0_0_var(--bleu-accent)] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none transition-all"
        >
          {hero.ctaText}
          <span aria-hidden>→</span>
        </button>

        {/* stats bar */}
        <dl className="mt-14 grid grid-cols-3 gap-6 max-w-2xl border-t-2 border-white/10 pt-8">
          {[
            ["50+", "Founders coached"],
            ["1:1", "Never group"],
            ["6 mo", "To never restart"],
          ].map(([n, l]) => (
            <div key={l}>
              <dt className="text-3xl md:text-4xl font-black text-white tracking-tighter">{n}</dt>
              <dd className="text-eyebrow text-white/50 mt-1">{l}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
