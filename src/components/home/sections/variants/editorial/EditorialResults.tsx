import Image from "next/image";
import { HOMEPAGE_CONTENT } from "@/data/homepage-content";
import { TRANSFORMATIONS, CLIENT_DMS } from "@/components/home/assets";
import { Eyebrow, serif } from "./_shared";

const DMS = CLIENT_DMS.slice(0, 6);
const TRANSFORMS = TRANSFORMATIONS.slice(0, 6);

/**
 * EditorialResults — a gallery spread: framed transformation portraits
 * and a quieter grid of client DM screenshots. White base, refined frames.
 */
export function EditorialResults() {
  const { results } = HOMEPAGE_CONTENT;
  return (
    <section className="bg-white text-bleu-nuit" aria-labelledby="results-title">
      <div className="max-w-7xl mx-auto px-6 py-24 md:py-36">
        <div className="max-w-3xl mb-16 md:mb-20">
          <Eyebrow>The Proof</Eyebrow>
          <h2
            id="results-title"
            style={serif}
            className="text-[clamp(2rem,1.2rem+3vw,3.75rem)] leading-[1.05] tracking-[-0.02em] mb-6"
          >
            {results.headline.charAt(0) + results.headline.slice(1).toLowerCase()}
          </h2>
          <p className="font-sans text-lead leading-relaxed text-bleu-nuit/65">
            {results.subheadline}
          </p>
        </div>

        {/* Transformations */}
        <p className="font-sans text-xs uppercase tracking-[0.3em] font-semibold text-bleu-charron mb-8">
          {results.sections.transformations}
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-8 mb-24">
          {TRANSFORMS.map((t) => (
            <div
              key={t.src}
              className="relative aspect-[3/4] border border-bleu-nuit/15 p-2 bg-bleu-fumee shadow-[0_24px_50px_-30px_rgba(9,7,29,0.4)]"
            >
              <div className="relative w-full h-full">
                <Image
                  src={t.src}
                  alt={t.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 45vw, 30vw"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Client DMs */}
        <p className="font-sans text-xs uppercase tracking-[0.3em] font-semibold text-bleu-charron mb-8">
          {results.sections.dms}
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-8">
          {DMS.map((src, i) => (
            <div
              key={src}
              className="relative border border-bleu-nuit/15 p-2 bg-bleu-fumee shadow-[0_24px_50px_-30px_rgba(9,7,29,0.4)]"
            >
              <div className="relative w-full aspect-[3/4]">
                <Image
                  src={src}
                  alt={`Client message ${i + 1}`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 45vw, 30vw"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
