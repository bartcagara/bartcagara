import Image from "next/image";
import { HOMEPAGE_CONTENT } from "@/data/homepage-content";
import { Kicker } from "./_shared";

const TRANSFORMATIONS = [
  "/images/transformations/transformation-1.webp",
  "/images/transformations/transformation-2.webp",
  "/images/transformations/transformation-3.webp",
  "/images/transformations/transformation-4.webp",
  "/images/transformations/transformation-5.webp",
  "/images/transformations/transformation-6.webp",
  "/images/transformations/transformation-7.webp",
] as const;

const DMS = [
  "/images/testimonials/dm-1.webp",
  "/images/testimonials/dm-2.webp",
  "/images/testimonials/dm-3.webp",
  "/images/testimonials/dm-4.webp",
  "/images/testimonials/dm-5.webp",
  "/images/testimonials/dm-6.webp",
] as const;

/** Results — proof wall: transformation grid + DM screenshot row. */
export function RefinedResults() {
  const { results } = HOMEPAGE_CONTENT;
  return (
    <section
      className="border-b-2 border-bleu-nuit bg-bleu-fumee py-24 md:py-32"
      aria-labelledby="results-title"
    >
      <div className="mx-auto max-w-7xl px-6">
        <Kicker label="THE RECEIPTS" tone="light" />
        <h2
          id="results-title"
          className="mb-4 max-w-4xl text-h2 font-black uppercase tracking-tighter text-bleu-nuit"
        >
          {results.headline}
        </h2>
        <p className="mb-16 max-w-2xl text-lead font-medium leading-relaxed text-bleu-nuit/70">
          {results.subheadline}
        </p>

        {/* Transformation grid */}
        <div className="mb-20">
          <span className="mb-6 inline-block bg-bleu-nuit px-3 py-1 font-mono text-eyebrow text-bleu-fumee">
            {results.sections.transformations}
          </span>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {TRANSFORMATIONS.map((src, i) => (
              <div
                key={src}
                className={`relative aspect-[3/4] overflow-hidden border-2 border-bleu-nuit bg-bleu-marine shadow-brutal-sm ${
                  i === 6 ? "hidden lg:block" : ""
                }`}
              >
                <Image
                  src={src}
                  alt={`Client transformation ${i + 1}`}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* DM screenshot row */}
        <div>
          <span className="mb-6 inline-block bg-bleu-nuit px-3 py-1 font-mono text-eyebrow text-bleu-fumee">
            {results.sections.dms}
          </span>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {DMS.map((src, i) => (
              <div
                key={src}
                className="relative aspect-[9/16] overflow-hidden border-2 border-bleu-nuit bg-white shadow-brutal-sm"
              >
                <Image
                  src={src}
                  alt={`Client message ${i + 1}`}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
