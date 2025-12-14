import Image from "next/image";
import { HOMEPAGE_CONTENT } from "@/data/homepage-content";
import { TRUST_LOGOS } from "./assets";

/**
 * TrustedBy Section - Displays client company logos
 * Shows social proof from executive clients
 */
export function TrustedBy() {
    const { trustedBy } = HOMEPAGE_CONTENT;

    return (
        <section className="py-8 bg-[#F3F4F6]">
            <div className="max-w-7xl mx-auto px-4">
                <div className="mt-0">
                    <p className="text-center font-bold uppercase text-[var(--bleu-nuit)]/60 tracking-wider mb-8 text-sm">
                        {trustedBy.title}
                    </p>
                    <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                        {TRUST_LOGOS.map((logo) => (
                            <div key={logo.name} className="relative h-8 w-24 md:h-10 md:w-32">
                                <Image
                                    src={logo.src}
                                    alt={`${logo.name} company logo`}
                                    fill
                                    className="object-contain"
                                    sizes="(max-width: 768px) 96px, 128px"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
