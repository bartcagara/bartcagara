import Image from "next/image";
import { HOMEPAGE_CONTENT } from "@/data/homepage-content";
import { Eyebrow } from "./_shared";

const TRANSFORMATIONS = [
  "/images/transformations/bart-transformation.webp",
  "/images/transformations/transformation-1.webp",
  "/images/transformations/transformation-2.webp",
  "/images/transformations/transformation-3.webp",
  "/images/transformations/transformation-4.webp",
  "/images/transformations/transformation-5.webp",
] as const;

const DMS = [
  "/images/testimonials/dm-1.webp",
  "/images/testimonials/dm-2.webp",
  "/images/testimonials/dm-3.webp",
  "/images/testimonials/dm-4.webp",
  "/images/testimonials/dm-5.webp",
  "/images/testimonials/dm-6.webp",
] as const;

/**
 * Results — transformation photography front and centre (large grid), then a
 * row of WhatsApp testimonial screenshots. High-contrast, imagery-led.
 */
export function ResultsAthletic() {
  const { results } = HOMEPAGE_CONTENT;
  return (
    <section
      className="bg-bleu-nuit py-24 md:py-32"
      aria-labelledby="results-title"
    >
      <div className="mx-auto max-w-7xl px-6">
        <Eyebrow label="The Receipts" />
        <h2
          id="results-title"
          className="mb-4 max-w-4xl text-h2 uppercase text-white"
        >
          {results.headline}
        </h2>
        <p className="mb-16 max-w-2xl text-lead-lg font-medium leading-relaxed text-white/70">
          {results.subheadline}
        </p>

        {/* TRANSFORMATION PHOTOS — prominent grid */}
        <div className="mb-10">
          <h3 className="mb-6 font-mono text-eyebrow text-bleu-accent">
            <span aria-hidden>// </span>
            {results.sections.transformations}
          </h3>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
            {TRANSFORMATIONS.map((src, i) => (
              <div
                key={src}
                className={`group relative overflow-hidden rounded-sm border border-white/10 bg-bleu-marine ${
                  i === 0 ? "col-span-2 row-span-2 md:col-span-2 md:row-span-2" : ""
                }`}
              >
                <Image
                  src={src}
                  alt={`Client transformation before and after ${i + 1}`}
                  width={800}
                  height={1000}
                  sizes="(min-width: 768px) 33vw, 50vw"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
            ))}
          </div>
        </div>

        {/* TESTIMONIAL DMs — horizontal row */}
        <div className="mt-16">
          <h3 className="mb-6 font-mono text-eyebrow text-bleu-accent">
            <span aria-hidden>// </span>
            {results.sections.dms}
          </h3>
          <div className="-mx-6 flex snap-x gap-4 overflow-x-auto px-6 pb-4 md:mx-0 md:grid md:grid-cols-6 md:gap-5 md:overflow-visible md:px-0">
            {DMS.map((src, i) => (
              <div
                key={src}
                className="relative w-56 shrink-0 snap-start overflow-hidden rounded-sm border border-white/10 bg-bleu-marine shadow-[0_18px_40px_-20px_rgba(69,109,139,0.7)] md:w-auto"
              >
                <Image
                  src={src}
                  alt={`Client message ${i + 1}`}
                  width={400}
                  height={700}
                  sizes="(min-width: 768px) 16vw, 224px"
                  className="h-auto w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
