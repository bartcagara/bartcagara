import Image from "next/image";
import { HOMEPAGE_CONTENT } from "@/data/homepage-content";
import { SectionBadge } from "@/components/ui/SectionBadge";
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
        <section id="results" className="py-24 md:py-32 bg-white border-b-2 border-bleu-nuit" aria-labelledby="results-title">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-24">
                    <SectionBadge>The Results</SectionBadge>
                    <h2 id="results-title" className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] text-bleu-nuit mb-8">
                        {results.headline.split('\n').map((line, i) => (
                            <span key={i}>
                                {line}
                                {i < results.headline.split('\n').length - 1 && <br />}
                            </span>
                        ))}
                    </h2>
                    <p className="text-2xl md:text-3xl font-medium text-bleu-nuit/70 max-w-3xl leading-relaxed">
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
                        className="senja-embed block w-full"
                        data-id="fc88ed05-b40d-4ef9-ad5e-1592601df582"
                        data-mode="shadow"
                        data-lazyload="true"
                    />
                </ScrollSection>
            </div>
        </section>
    );
}
