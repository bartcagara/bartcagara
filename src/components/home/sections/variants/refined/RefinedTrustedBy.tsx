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

/** Logo row band. Light-on-dark to bridge hero into the narrative. */
export function RefinedTrustedBy() {
  const { trustedBy } = HOMEPAGE_CONTENT;
  return (
    <section
      className="border-b-2 border-bleu-nuit bg-bleu-marine py-14 md:py-16"
      aria-labelledby="trustedby-title"
    >
      <div className="mx-auto max-w-7xl px-6">
        <p
          id="trustedby-title"
          className="mb-10 text-center font-mono text-eyebrow text-bleu-fumee/60"
        >
          {trustedBy.title}
        </p>
        <ul className="grid grid-cols-2 items-center gap-x-8 gap-y-10 sm:grid-cols-3 md:grid-cols-6">
          {LOGOS.map((logo) => (
            <li key={logo.src} className="flex items-center justify-center">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={140}
                height={48}
                className="h-8 w-auto object-contain opacity-70 brightness-0 invert md:h-10"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
