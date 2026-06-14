import Image from "next/image";
import { HOMEPAGE_CONTENT } from "@/data/homepage-content";
import { CAL, serif } from "./_shared";

/**
 * EditorialHero — premium, magazine-like opener.
 * Frost base, refined serif display headline, framed portrait, understated CTA.
 */
export function EditorialHero() {
  const { hero } = HOMEPAGE_CONTENT;
  return (
    <section className="bg-bleu-fumee text-bleu-nuit" aria-label="Hero">
      <div className="max-w-7xl mx-auto px-6 pt-28 pb-20 md:pt-40 md:pb-32 grid md:grid-cols-12 gap-12 md:gap-16 items-center">
        <div className="md:col-span-7">
          <div className="mb-8 flex items-center gap-4">
            <span className="h-px w-12 bg-bleu-nuit/30" aria-hidden />
            <span className="font-sans text-xs uppercase tracking-[0.3em] font-semibold text-bleu-charron">
              {hero.socialProof}
            </span>
          </div>

          <h1
            style={serif}
            className="text-[clamp(2.75rem,1.5rem+5vw,5.5rem)] leading-[1.02] tracking-[-0.02em] mb-8"
          >
            {hero.headline}{" "}
            <em className="text-bleu-accent italic">{hero.highlightedText}</em>
          </h1>

          <p className="font-sans text-lead font-normal leading-relaxed text-bleu-nuit/70 max-w-lg mb-10">
            {hero.subheadline}
          </p>

          <div className="flex flex-wrap items-center gap-6">
            <button
              type="button"
              {...CAL}
              className="font-sans inline-flex items-center px-9 py-5 text-sm md:text-base font-bold uppercase tracking-[0.12em] bg-bleu-nuit text-white rounded-full hover:bg-bleu-charron transition-colors"
            >
              {hero.ctaText}
            </button>
            <span className="font-sans text-sm text-bleu-nuit/50">
              45 min · 1:1 · no obligation
            </span>
          </div>
        </div>

        <div className="md:col-span-5">
          <div className="relative aspect-[3/4] w-full max-w-sm mx-auto border border-bleu-nuit/15 p-3 bg-white shadow-[0_30px_60px_-30px_rgba(9,7,29,0.45)]">
            <div className="relative w-full h-full">
              <Image
                src="/images/home/bart-and-son-2.webp"
                alt="Bart Cagara with his son"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 90vw, 33vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
