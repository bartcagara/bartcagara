import Image from "next/image";
import { HOMEPAGE_CONTENT } from "@/data/homepage-content";
import { Eyebrow, renderBold } from "./_shared";

/**
 * About — strong framed portrait alongside the bio. The big uppercase
 * "WHO THE FUCK IS BART?" heading, credentials, and a transformation aside.
 * The {{transformation-link}} token is rendered as accent-emphasised text.
 */
export function AboutAthletic() {
  const { about } = HOMEPAGE_CONTENT;
  return (
    <section
      className="bg-bleu-nuit py-24 md:py-32"
      aria-labelledby="about-title"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 md:grid-cols-12 md:gap-16">
        {/* framed portrait */}
        <div className="md:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm border border-white/10 shadow-[0_30px_60px_-20px_rgba(9,7,29,0.9)]">
            <Image
              src={about.imageSrc}
              alt={about.imageAlt}
              fill
              sizes="(min-width: 768px) 40vw, 100vw"
              className="object-cover object-[60%_center]"
            />
            <div
              aria-hidden
              className="absolute inset-x-0 bottom-0 h-1/3"
              style={{
                background:
                  "linear-gradient(0deg, rgba(9,7,29,0.85) 0%, rgba(9,7,29,0) 100%)",
              }}
            />
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            {about.credentials.map((c) => (
              <span
                key={c}
                className="inline-block rounded-sm border border-bleu-accent/40 bg-bleu-accent/10 px-3 py-1.5 font-mono text-sm uppercase tracking-tighter text-bleu-accent"
              >
                {c}
              </span>
            ))}
          </div>
        </div>

        {/* bio */}
        <div className="md:col-span-7">
          <Eyebrow label="The Coach" />
          <h2
            id="about-title"
            className="mb-10 text-h2 uppercase leading-[0.95] text-white"
          >
            {about.title}{" "}
            <span className="text-bleu-accent">{about.subtitle}</span>
          </h2>
          <div className="max-w-2xl space-y-5">
            {about.paragraphs.map((p, i) => {
              const text = p.replace(
                "{{transformation-link}}",
                "Check my before-after above"
              );
              return (
                <p
                  key={i}
                  className="text-lead font-medium leading-relaxed text-white/75"
                >
                  {renderBold(text, "font-bold text-white")}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
