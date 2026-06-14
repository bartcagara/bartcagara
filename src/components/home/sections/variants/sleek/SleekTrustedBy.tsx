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

/** Logo row band — muted, monochrome on navy. */
export function SleekTrustedBy() {
  const { trustedBy } = HOMEPAGE_CONTENT;
  return (
    <section className="bg-bleu-marine py-14 md:py-16" aria-labelledby="sleek-trustedby-title">
      <div className="mx-auto max-w-7xl px-6">
        <p
          id="sleek-trustedby-title"
          className="mb-10 text-center text-eyebrow text-white/50"
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
                className="h-8 w-auto object-contain opacity-60 brightness-0 invert transition-opacity hover:opacity-100 md:h-10"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
