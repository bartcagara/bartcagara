import Image from "next/image";
import { HOMEPAGE_CONTENT } from "@/data/homepage-content";
import { TRUST_LOGOS } from "@/components/home/assets";

/**
 * EditorialTrustedBy — quiet, light logo row with a hairline frame.
 */
export function EditorialTrustedBy() {
  const { trustedBy } = HOMEPAGE_CONTENT;
  return (
    <section className="bg-white border-y border-bleu-nuit/10" aria-label="Trusted by">
      <div className="max-w-7xl mx-auto px-6 py-14 md:py-16">
        <p className="text-center font-sans text-xs uppercase tracking-[0.3em] font-semibold text-bleu-charron mb-10">
          {trustedBy.title}
        </p>
        <div className="flex flex-wrap justify-center gap-10 md:gap-16 items-center opacity-60">
          {TRUST_LOGOS.map((logo) => (
            <div key={logo.name} className="relative h-7 w-24 md:h-8 md:w-28">
              <Image
                src={logo.src}
                alt={`${logo.name} company logo`}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 96px, 112px"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
