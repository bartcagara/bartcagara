import Image from "next/image";
import { HOMEPAGE_CONTENT } from "@/data/homepage-content";
import { Eyebrow, Glow, renderBold } from "./_shared";

/** About Bart — bio copy in glass column beside a framed portrait. */
export function SleekAbout() {
  const { about } = HOMEPAGE_CONTENT;
  return (
    <section
      className="relative overflow-hidden bg-bleu-nuit py-24 md:py-32"
      aria-labelledby="sleek-about-title"
    >
      <Glow className="-right-32 top-1/3 h-[450px] w-[450px] bg-bleu-charron opacity-20" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-2 md:gap-16">
          {/* Image */}
          <div className="md:sticky md:top-24">
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-[0_40px_100px_-50px_rgba(0,0,0,0.9)] backdrop-blur-md">
              <Image
                src={about.imageSrc}
                alt={about.imageAlt}
                width={800}
                height={1000}
                className="h-full w-full object-cover"
              />
            </div>
            <ul className="mt-6 flex flex-wrap gap-3">
              {about.credentials.map((credential) => (
                <li
                  key={credential}
                  className="rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-eyebrow text-white/70 backdrop-blur-md"
                >
                  {credential}
                </li>
              ))}
            </ul>
          </div>

          {/* Bio */}
          <div>
            <Eyebrow label="About" />
            <h2 id="sleek-about-title" className="mt-7 text-h2 text-white">
              <span className="bg-gradient-to-r from-white via-bleu-fumee to-bleu-accent bg-clip-text text-transparent">
                {about.title} {about.subtitle}
              </span>
            </h2>

            <div className="mt-8 space-y-5">
              {about.paragraphs.map((paragraph, index) => {
                const text = paragraph.replace("{{transformation-link}}", "");
                return (
                  <p
                    key={index}
                    className="text-lead font-medium leading-relaxed text-white/60"
                  >
                    {renderBold(text, "font-bold text-white")}
                  </p>
                );
              })}
            </div>

            {/* Transformation reveal */}
            <div className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-[0_40px_100px_-50px_rgba(0,0,0,0.9)] backdrop-blur-md">
              <Image
                src={about.transformationImage}
                alt="Bart's own transformation"
                width={1000}
                height={700}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
