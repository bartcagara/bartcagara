import Image from "next/image";
import { HOMEPAGE_CONTENT } from "@/data/homepage-content";
import { AccentCTA } from "./_shared";

/**
 * Hero — full-bleed photograph under a navy gradient scrim, headline overlaid,
 * highlight word in bleu-accent, energetic accent CTA. Imagery-led, cinematic.
 */
export function HeroAthletic() {
  const { hero } = HOMEPAGE_CONTENT;
  return (
    <section
      className="relative flex min-h-[100svh] flex-col overflow-hidden bg-bleu-nuit"
      aria-label="Hero"
    >
      <Image
        src="/images/home/bart-and-son-2.webp"
        alt="Bart Cagara in a suit with his young son looking up at him"
        fill
        priority
        className="object-cover object-[70%_center]"
        sizes="100vw"
      />
      {/* scrim: darken left for text legibility */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(9,7,29,0.96) 0%, rgba(9,7,29,0.82) 38%, rgba(9,7,29,0.15) 70%, rgba(9,7,29,0) 100%)",
        }}
      />
      {/* scrim: bottom darkening for grounding */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-1/3"
        style={{
          background:
            "linear-gradient(0deg, rgba(9,7,29,0.9) 0%, rgba(9,7,29,0) 100%)",
        }}
      />

      <div className="relative z-10 flex flex-1 items-end">
        <div className="mx-auto w-full max-w-7xl px-6 pb-16 pt-28 md:pb-24">
          <span className="mb-5 inline-block font-mono text-eyebrow text-bleu-accent">
            {hero.socialProof}
          </span>
          <h1 className="mb-7 max-w-4xl text-display uppercase text-white">
            {hero.headline}{" "}
            <span className="text-bleu-accent">{hero.highlightedText}</span>
          </h1>
          <p className="mb-10 max-w-xl text-lead font-medium leading-relaxed text-white/85">
            {hero.subheadline}
          </p>
          <AccentCTA label={hero.ctaText} />
        </div>
      </div>
    </section>
  );
}
