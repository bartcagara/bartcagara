import Image from "next/image";
import { HOMEPAGE_CONTENT } from "@/data/homepage-content";

const LOGOS = [
  { src: "/images/logos/lever.png", alt: "Lever" },
  { src: "/images/logos/esl.png", alt: "ESL" },
  { src: "/images/logos/nordstrom.png", alt: "Nordstrom" },
  { src: "/images/logos/singlestore.png", alt: "SingleStore" },
  { src: "/images/logos/beckhoff.png", alt: "Beckhoff" },
  { src: "/images/logos/wpengine.png", alt: "WP Engine" },
] as const;

/** TrustedBy — logo wall on a dark marine band. */
export function TrustedByAthletic() {
  const { trustedBy } = HOMEPAGE_CONTENT;
  return (
    <section
      className="bg-bleu-marine py-16 md:py-20"
      aria-labelledby="trustedby-title"
    >
      <div className="mx-auto max-w-7xl px-6">
        <h2
          id="trustedby-title"
          className="mb-10 text-center font-mono text-eyebrow text-white/50"
        >
          {trustedBy.title}
        </h2>
        <div className="grid grid-cols-2 items-center gap-x-8 gap-y-10 sm:grid-cols-3 md:grid-cols-6">
          {LOGOS.map((logo) => (
            <div key={logo.src} className="flex items-center justify-center">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={140}
                height={48}
                className="h-8 w-auto object-contain opacity-60 brightness-0 invert transition-opacity hover:opacity-100 md:h-10"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
