import { LANDING_CONTENT } from "@/data/landing-page-content";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import styles from "./homepage.module.css";

/**
 * RealityCheck Section - The intro narrative
 * Establishes the problem and emotional connection
 */
export function RealityCheck() {
    const { intro } = LANDING_CONTENT;

    return (
        <SectionWrapper>
            <div className={styles.maxW800}>
                {intro.paragraphs.map((paragraph, index) => {
                    const isFirst = index === 0;
                    const isLast = index === intro.paragraphs.length - 1;

                    return (
                        <p
                            key={index}
                            className={styles.textLargeNarrative}
                            style={{
                                fontWeight: isFirst ? "bold" : "normal",
                                fontSize: isFirst ? "1.25rem" : undefined,
                                marginBottom: isLast ? 0 : "2.5rem",
                            }}
                        >
                            {paragraph}
                        </p>
                    );
                })}
            </div>
        </SectionWrapper>
    );
}
