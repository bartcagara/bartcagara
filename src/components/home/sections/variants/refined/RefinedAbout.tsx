import Image from "next/image";
import { HOMEPAGE_CONTENT } from "@/data/homepage-content";
import { Kicker, renderBold } from "./_shared";

/** About — bio narrative + portrait. */
export function RefinedAbout() {
  const { about } = HOMEPAGE_CONTENT;
  return (
    <section
      className="border-b-2 border-bleu-nuit bg-white py-24 md:py-32"
      aria-labelledby="about-title"
    >
      <div className="mx-auto max-w-7xl px-6">
        <Kicker label="THE COACH" tone="light" />
        <h2
          id="about-title"
          className="mb-16 text-h2 font-black uppercase tracking-tighter text-bleu-nuit"
        >
          {about.title} {about.subtitle}
        </h2>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Portrait */}
          <div className="order-1 lg:order-2">
            <div className="relative aspect-[4/5] overflow-hidden border-2 border-bleu-nuit shadow-brutal-md">
              <Image
                src={about.imageSrc}
                alt={about.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <ul className="mt-6 flex flex-wrap gap-3">
              {about.credentials.map((c) => (
                <li
                  key={c}
                  className="border-2 border-bleu-nuit bg-bleu-fumee px-4 py-2 font-mono text-eyebrow text-bleu-nuit"
                >
                  {c}
                </li>
              ))}
            </ul>
          </div>

          {/* Bio */}
          <div className="order-2 max-w-2xl space-y-6 lg:order-1">
            {about.paragraphs.map((para, index) => {
              const isBold = para.startsWith("**") && para.endsWith("**");
              const text = (isBold ? para.slice(2, -2) : para).replace(
                "{{transformation-link}}",
                "see my before-and-after above"
              );
              return (
                <p
                  key={index}
                  className={
                    isBold
                      ? "text-lead-lg font-black leading-tight text-bleu-nuit"
                      : "text-lead font-medium leading-relaxed text-bleu-nuit/80"
                  }
                >
                  {isBold ? text : renderBold(text, "font-bold text-bleu-nuit")}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
