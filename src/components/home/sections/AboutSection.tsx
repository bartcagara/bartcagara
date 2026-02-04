import Image from "next/image";
import { Check } from "lucide-react";
import { SectionBadge } from "@/components/ui/SectionBadge";
import type { AboutSectionProps } from "@/components/home/types";

/**
 * AboutSection - About Bart section
 * Displays bio, photo, and credentials
 */
export function AboutSection({
  title,
  subtitle,
  imageSrc,
  imageAlt,
  subhead,
  paragraphs,
  credentials
}: AboutSectionProps) {
  return (
    <section id="about" className="py-16 md:py-24 lg:py-32 border-b-2 border-bleu-nuit bg-white text-bleu-nuit" aria-labelledby="about-title">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12 md:mb-16">
          <SectionBadge>The Coach</SectionBadge>
          <h2 id="about-title" className="text-[2rem] sm:text-4xl md:text-5xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.9] text-bleu-nuit">
            {title}<br />{subtitle}
          </h2>
          <p className="text-base md:text-lg lg:text-xl font-medium text-bleu-nuit/70 mt-4 md:mt-6 max-w-2xl">
            {subhead}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-32 items-start">
          {/* Image (Left) w/ Frame */}
          <div className="p-4 border-2 border-bleu-nuit bg-white shadow-brutal-lg">
            <div className="aspect-[4/5] relative border-2 border-bleu-nuit">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                loading="lazy"
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Content (Right) */}
          <div>
            <div className="space-y-5 md:space-y-6 text-base md:text-lg lg:text-xl font-medium leading-relaxed text-bleu-nuit/80">
              {paragraphs.map((paragraph, index) => {
                const isBold = paragraph.startsWith("So I built something different.");
                return (
                  <p key={index} className={isBold ? "text-bleu-nuit font-bold" : ""}>
                    {paragraph}
                  </p>
                );
              })}
            </div>

            <div className="mt-10 md:mt-12 flex flex-col md:flex-row gap-6 md:gap-8">
              {credentials.map((credential, index) => (
                <div key={index} className="flex items-center gap-3 md:gap-4">
                  <div className="p-1 bg-bleu-accent rounded-full text-white">
                    <Check className="w-4 h-4 md:w-5 md:h-5" strokeWidth={4} aria-hidden="true" />
                  </div>
                  <span className="font-bold uppercase tracking-tighter text-sm md:text-base">{credential}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
