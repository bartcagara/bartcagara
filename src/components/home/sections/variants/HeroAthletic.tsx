import Image from "next/image";
import { HOMEPAGE_CONTENT } from "@/data/homepage-content";

const CAL = {
  "data-cal-link": "bartcagara/discovery-call",
  "data-cal-namespace": "discovery-call",
  "data-cal-config": '{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}',
} as const;

/**
 * DESIGN-LAB VARIANT — "Bold & athletic"
 * Full-bleed photograph under a navy gradient scrim, headline overlaid,
 * energetic accent CTA. Imagery-led and high-contrast.
 */
export function HeroAthletic() {
  const { hero } = HOMEPAGE_CONTENT;
  return (
    <section className="relative min-h-[100svh] flex flex-col bg-bleu-nuit overflow-hidden" aria-label="Hero (athletic)">
      {/* background image */}
      <Image
        src="/images/home/bart-and-son-2.webp"
        alt="Bart Cagara with his son"
        fill
        priority
        className="object-cover object-[70%_center]"
        sizes="100vw"
      />
      {/* scrims: darken left for text, darken bottom for grounding */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(9,7,29,0.96) 0%, rgba(9,7,29,0.82) 38%, rgba(9,7,29,0.15) 70%, rgba(9,7,29,0) 100%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-1/3"
        style={{ background: "linear-gradient(0deg, rgba(9,7,29,0.9) 0%, rgba(9,7,29,0) 100%)" }}
      />

      <div className="relative z-10 flex-1 flex items-end">
        <div className="max-w-7xl mx-auto w-full px-6 pb-16 pt-28 md:pb-24">
          <span className="text-eyebrow text-bleu-accent mb-5 inline-block">
            {hero.socialProof}
          </span>
          <h1 className="text-display text-white max-w-4xl mb-7">
            {hero.headline}{" "}
            <span className="text-bleu-accent">{hero.highlightedText}</span>
          </h1>
          <p className="text-lead font-medium leading-relaxed text-white/85 max-w-xl mb-10">
            {hero.subheadline}
          </p>
          <button
            type="button"
            {...CAL}
            className="inline-flex items-center gap-3 px-9 py-5 md:px-12 md:py-6 text-base md:text-xl font-black uppercase tracking-tighter bg-bleu-accent text-white rounded-sm shadow-[0_18px_40px_-12px_rgba(69,109,139,0.8)] hover:bg-[#3a5d78] hover:-translate-y-0.5 transition-all"
          >
            {hero.ctaText}
            <span aria-hidden>→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
