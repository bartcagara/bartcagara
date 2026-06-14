import Image from "next/image";
import { HOMEPAGE_CONTENT } from "@/data/homepage-content";
import { Eyebrow, renderBold, serif } from "./_shared";

/**
 * EditorialAbout — bio spread with a framed portrait. Light base, 5/7 grid.
 * The {{transformation-link}} token in the closing paragraph is rendered as
 * plain emphasis text (no client-side modal in this static variant).
 */
export function EditorialAbout() {
  const { about } = HOMEPAGE_CONTENT;
  const title = `${about.title} ${about.subtitle}`;

  return (
    <section className="bg-white text-bleu-nuit" aria-labelledby="about-title">
      <div className="max-w-7xl mx-auto px-6 py-24 md:py-36 grid md:grid-cols-12 gap-12 md:gap-16 items-start">
        {/* Framed portrait */}
        <div className="md:col-span-5 md:sticky md:top-24">
          <div className="relative aspect-[4/5] w-full max-w-md border border-bleu-nuit/15 p-3 bg-bleu-fumee shadow-[0_30px_60px_-30px_rgba(9,7,29,0.45)]">
            <div className="relative w-full h-full">
              <Image
                src={about.imageSrc}
                alt={about.imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 90vw, 40vw"
              />
            </div>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            {about.credentials.map((c) => (
              <span
                key={c}
                className="font-sans text-xs uppercase tracking-[0.2em] font-semibold text-bleu-charron border border-bleu-nuit/15 rounded-full px-4 py-2"
              >
                {c}
              </span>
            ))}
          </div>
        </div>

        {/* Bio */}
        <div className="md:col-span-7">
          <Eyebrow>The Coach</Eyebrow>
          <h2
            id="about-title"
            style={serif}
            className="text-[clamp(2rem,1.2rem+3vw,3.75rem)] leading-[1.05] tracking-[-0.02em] mb-10"
          >
            {title.charAt(0) + title.slice(1).toLowerCase()}
          </h2>

          <div className="space-y-6">
            {about.paragraphs.map((p, i) => {
              const text = p.replace("{{transformation-link}}", "see for yourself");
              const isBold = text.startsWith("**") && text.endsWith("**");
              if (isBold) {
                return (
                  <p
                    key={i}
                    style={serif}
                    className="text-[clamp(1.3rem,1rem+1.2vw,1.8rem)] leading-snug tracking-[-0.01em] text-bleu-accent italic"
                  >
                    {text.slice(2, -2)}
                  </p>
                );
              }
              return (
                <p
                  key={i}
                  className="font-sans text-lead leading-relaxed text-bleu-nuit/70"
                >
                  {renderBold(text, "font-semibold text-bleu-nuit")}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
