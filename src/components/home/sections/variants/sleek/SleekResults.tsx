import Image from "next/image";
import { HOMEPAGE_CONTENT } from "@/data/homepage-content";
import { Eyebrow, Glow } from "./_shared";

const TRANSFORMATIONS = [
  "/images/transformations/transformation-1.webp",
  "/images/transformations/transformation-2.webp",
  "/images/transformations/transformation-3.webp",
  "/images/transformations/transformation-4.webp",
  "/images/transformations/transformation-5.webp",
  "/images/transformations/transformation-6.webp",
] as const;

const DMS = [
  "/images/testimonials/dm-1.webp",
  "/images/testimonials/dm-2.webp",
  "/images/testimonials/dm-3.webp",
  "/images/testimonials/dm-4.webp",
  "/images/testimonials/dm-5.webp",
  "/images/testimonials/dm-6.webp",
] as const;

/** Results — client transformation photos + DM screenshots in glass-framed grids. */
export function SleekResults() {
  const { results } = HOMEPAGE_CONTENT;
  return (
    <section
      className="relative overflow-hidden bg-bleu-nuit py-24 md:py-32"
      aria-labelledby="sleek-results-title"
    >
      <Glow className="left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 bg-bleu-charron opacity-20" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <Eyebrow label="The Results" />
          <h2 id="sleek-results-title" className="mt-7 text-h2 text-white">
            <span className="bg-gradient-to-r from-white via-bleu-fumee to-bleu-accent bg-clip-text text-transparent">
              {results.headline}
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lead font-medium leading-relaxed text-white/60">
            {results.subheadline}
          </p>
        </div>

        {/* Transformations */}
        <h3 className="mb-6 text-eyebrow text-white/50">
          {results.sections.transformations}
        </h3>
        <ul className="mb-20 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
          {TRANSFORMATIONS.map((src, i) => (
            <li
              key={src}
              className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-[0_30px_80px_-50px_rgba(0,0,0,0.9)] backdrop-blur-md"
            >
              <Image
                src={src}
                alt={`Client transformation ${i + 1}`}
                width={640}
                height={800}
                className="h-full w-full object-cover"
              />
            </li>
          ))}
        </ul>

        {/* DMs */}
        <h3 className="mb-6 text-eyebrow text-white/50">{results.sections.dms}</h3>
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-6">
          {DMS.map((src, i) => (
            <li
              key={src}
              className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-2 shadow-[0_30px_80px_-50px_rgba(0,0,0,0.9)] backdrop-blur-md"
            >
              <Image
                src={src}
                alt={`Client message ${i + 1}`}
                width={640}
                height={900}
                className="h-auto w-full rounded-xl object-contain"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
