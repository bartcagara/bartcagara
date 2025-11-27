import Image from "next/image";
import { LANDING_CONTENT } from "@/data/landing-page-content";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollSection } from "./ScrollSection";
import { TRANSFORMATIONS, CLIENT_INTERVIEWS, CLIENT_DMS } from "./assets";
import styles from "./homepage.module.css";

/**
 * ResultsSection - Client transformations and testimonials
 * Displays transformation photos, interviews, DMs, and testimonials
 */
export function ResultsSection() {
    const { results } = LANDING_CONTENT;

    return (
        <SectionWrapper>
            <div className={`${styles.textCenter} ${styles.maxW800} ${styles.problemSectionIntro}`}>
                <SectionHeader>{results.headline}</SectionHeader>
            </div>

            <ScrollSection title={results.sections.transformations}>
                {TRANSFORMATIONS.map((item) => (
                    <div key={item.src} className={styles.scrollItemTransformation}>
                        <Image
                            src={item.src}
                            alt={item.alt}
                            className={styles.transformationImage}
                            width={400}
                            height={400}
                            style={{ width: "auto", height: "400px" }}
                        />
                    </div>
                ))}
            </ScrollSection>

            <ScrollSection title={results.sections.interviews}>
                {CLIENT_INTERVIEWS.map((id) => (
                    <div key={id} className={styles.scrollItem}>
                        <iframe
                            width="445"
                            height="250"
                            src={`https://www.youtube.com/embed/${id}`}
                            title={`Client Interview video ${id}`}
                            style={{ border: 0 }}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className={styles.videoEmbed}
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
                            style={{ width: "auto", height: "500px" }}
                        />
                    </div>
                ))}
            </ScrollSection>

            <ScrollSection title={results.sections.testimonials}>
                <div
                    className="senja-embed"
                    data-id="fc88ed05-b40d-4ef9-ad5e-1592601df582"
                    data-mode="shadow"
                    data-lazyload="false"
                    style={{ display: "block", width: "100%" }}
                />
            </ScrollSection>
        </SectionWrapper>
    );
}
