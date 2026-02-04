import Image from "next/image";
import { HOMEPAGE_CONTENT } from "@/data/homepage-content";
import { ScrollSection } from "./ScrollSection";
import { TRANSFORMATIONS, CLIENT_INTERVIEWS, CLIENT_DMS } from "./assets";
import { YouTubeLite } from "./YouTubeLite";
import styles from "./homepage.module.css";

/**
 * ResultsSection - Client social proof
 * Displays transformation photos, client interviews, DMs, and testimonials
 * Optimized with lazy loading for images and YouTube embeds
 */
export function ResultsSection() {
    const { results } = HOMEPAGE_CONTENT;

    return (
        <div id="results" className="py-16 md:py-24 lg:py-32 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-12 md:mb-16">
                    <div className="inline-block bg-[var(--bleu-accent)] text-white font-mono text-xs uppercase tracking-tighter px-3 py-1 mb-6 md:mb-8 shadow-[4px_4px_0px_0px_var(--bleu-nuit)]">
                        The Results
                    </div>
                    <h2 className="text-[2rem] sm:text-4xl md:text-5xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.9] text-[var(--bleu-nuit)] mb-4 md:mb-6">
                        THESE GUYS DIDN'T<br />FIND MORE TIME.
                    </h2>
                    <p className="text-base md:text-lg lg:text-xl font-medium text-[var(--bleu-nuit)]/70 max-w-3xl leading-relaxed">
                        {results.subheadline}
                    </p>
                </div>

                <ScrollSection title={results.sections.transformations}>
                    {TRANSFORMATIONS.map((item) => (
                        <div key={item.src} className={styles.scrollItemTransformation}>
                            <Image
                                src={item.src}
                                alt={item.alt}

                                width={400}
                                height={400}
                                loading="lazy"
                                className={`${styles.transformationImage} w-auto h-[400px]`}
                            />
                        </div>
                    ))}
                </ScrollSection>

                <ScrollSection title={results.sections.interviews}>
                    {CLIENT_INTERVIEWS.map((id) => (
                        <div key={id} className={styles.scrollItem}>
                            <YouTubeLite
                                videoId={id}
                                title={`Client Interview video ${id}`}
                            />
                        </div>
                    ))}
                </ScrollSection>

                <ScrollSection title={results.sections.dms}>
                    {CLIENT_DMS.map((src, index) => (
                        <div key={src} className={styles.scrollItemDm}>
                            <Image
                                src={src}
                                alt={`Client testimonial direct message ${index + 1}`}
                                width={300}
                                height={500}
                                loading="lazy"
                                className="w-auto h-[500px]"
                            />
                        </div>
                    ))}
                </ScrollSection>

                <ScrollSection title={results.sections.testimonials}>
                    <div
                        className="senja-embed block-full"
                        data-id="fc88ed05-b40d-4ef9-ad5e-1592601df582"
                        data-mode="shadow"
                        data-lazyload="true"
                    />
                </ScrollSection>
            </div>
        </div>
    );
}

