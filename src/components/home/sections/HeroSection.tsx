import Image from "next/image";
import { CTAButton } from "@/components/ui/CTAButton";
import { TiltedLabel } from "@/components/ui/TiltedLabel";
import { TRUST_LOGOS } from "@/components/home/assets";
import type { HeroSectionProps } from "@/components/home/types";

/**
 * The hero. One job: in five seconds he knows it's for him and what to press.
 * Phone: headline, one line, the button, then a real client message, then the
 * logos. Desktop: words on the left, the message on the right, logos under both.
 */
export function HeroSection({ content }: HeroSectionProps) {
  return (
    <section className="bg-bleu-nuit text-white overflow-hidden" aria-label="Hero">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-28 pb-14 lg:pt-44 lg:pb-20">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_440px] lg:gap-20 items-center">
          <div>
            <h1 className="font-black tracking-[-0.04em] leading-[0.95] text-[clamp(2.75rem,1.6rem+6vw,6rem)]">
              {content.headline}
              <br />
              <TiltedLabel className="bg-gray-50 text-bleu-nuit" widthClassName="w-max mt-2">{content.highlightedText}</TiltedLabel>
            </h1>
            <p className="mt-8 lg:mt-10 text-body text-white/80 max-w-[30em] text-pretty">
              {content.subheadline}
            </p>
            <div className="mt-8 lg:mt-10">
              <CTAButton variant="light" cal className="w-full justify-center sm:w-auto">
                {content.ctaText}
              </CTAButton>
            </div>
          </div>

          <figure className="max-w-[440px] w-full mx-auto lg:mx-0">
            <figcaption className="mb-4 text-sm font-bold uppercase tracking-[-0.02em] text-white/70">
              {content.proof.caption}
            </figcaption>
            <div className="border-2 border-white shadow-[3px_3px_0_0_var(--bleu-accent)]">
              <Image
                src={content.proof.image}
                alt={content.proof.alt}
                width={1064}
                height={658}
                priority
                sizes="(max-width: 1024px) 100vw, 440px"
                className="block w-full h-auto"
              />
            </div>
          </figure>
        </div>

        <div className="mt-14 lg:mt-20 pt-8 border-t border-white/10">
          <p className="text-sm font-bold uppercase tracking-[-0.02em] text-white/60">{content.logosLabel}</p>
          <div className="mt-5 flex flex-wrap items-center gap-x-8 gap-y-5 lg:gap-x-14 brightness-0 invert opacity-50">
            {TRUST_LOGOS.map((logo) => (
              <div key={logo.name} className="relative h-6 w-20 lg:h-8 lg:w-28">
                <Image src={logo.src} alt={`${logo.name} logo`} fill className="object-contain object-left" sizes="112px" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
