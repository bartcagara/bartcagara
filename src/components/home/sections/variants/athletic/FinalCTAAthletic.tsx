import Image from "next/image";
import { HOMEPAGE_CONTENT } from "@/data/homepage-content";
import { AccentCTA, renderBold } from "./_shared";

/**
 * FinalCTA — full-bleed image band under a heavy navy scrim with the closing
 * headline, body copy and an accent CTA. No calendar embed (button only).
 */
export function FinalCTAAthletic() {
  const { finalCta } = HOMEPAGE_CONTENT;
  return (
    <section
      className="relative overflow-hidden bg-bleu-nuit py-24 md:py-32"
      aria-labelledby="final-cta-title"
    >
      {/* full-bleed image band */}
      <Image
        src="/images/home/bart-and-son-2.webp"
        alt=""
        aria-hidden
        fill
        className="object-cover object-[65%_center]"
        sizes="100vw"
      />
      {/* heavy scrim for legibility */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(9,7,29,0.97) 0%, rgba(9,7,29,0.9) 45%, rgba(9,7,29,0.55) 80%, rgba(9,7,29,0.4) 100%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <h2 id="final-cta-title" className="mb-10 text-display uppercase text-white">
            {finalCta.headline}{" "}
            <span className="text-bleu-accent">{finalCta.highlightedText}</span>
          </h2>

          <div className="mb-12 max-w-2xl space-y-5">
            {finalCta.body.map((line, i) => {
              const isBold = line.startsWith("**") && line.endsWith("**");
              if (isBold) {
                return (
                  <p
                    key={i}
                    className="text-lead-lg font-black leading-tight text-white"
                  >
                    {line.slice(2, -2)}
                  </p>
                );
              }
              return (
                <p
                  key={i}
                  className="text-lead font-medium leading-relaxed text-white/80"
                >
                  {renderBold(line, "font-bold text-white")}
                </p>
              );
            })}
          </div>

          <AccentCTA label={finalCta.ctaText} />
        </div>
      </div>
    </section>
  );
}
