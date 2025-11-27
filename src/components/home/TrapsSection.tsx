import { LANDING_CONTENT } from "@/data/landing-page-content";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeader } from "@/components/ui/SectionHeader";
import styles from "./homepage.module.css";

/**
 * TrapsSection - The Problem section
 * Displays the 3 traps that executives fall into
 */
export function TrapsSection() {
    const { traps } = LANDING_CONTENT;

    return (
        <SectionWrapper id={traps.sectionId} background="fumee">
            <div className={`${styles.textCenter} ${styles.maxW800} ${styles.problemSectionIntro}`}>
                <SectionHeader>{traps.headline}</SectionHeader>
                {traps.intro.map((paragraph, index) => (
                    <p key={index} className={styles.textLargeNarrative}>
                        {index === 1 ? <strong>{paragraph}</strong> : paragraph}
                    </p>
                ))}
            </div>

            <div className={styles.grid3}>
                {traps.traps.map((trap, index) => (
                    <div key={index} className={styles.trapBox}>
                        <h3>
                            <strong>{trap.title}</strong>
                        </h3>
                        <div>
                            {"trigger" in trap && (
                                <p className={styles.trapBoxText}>
                                    <strong>The Trigger:</strong> {trap.trigger}
                                </p>
                            )}
                            {"effort" in trap && (
                                <p className={styles.trapBoxText}>
                                    <strong>The Effort:</strong> {trap.effort}
                                </p>
                            )}
                            {"plan" in trap && (
                                <p className={styles.trapBoxText}>
                                    <strong>The Plan:</strong> {trap.plan}
                                </p>
                            )}
                            {"spiral" in trap && (
                                <p className={styles.trapBoxText}>
                                    <strong>The Spiral:</strong> {trap.spiral}
                                </p>
                            )}
                            {"reality" in trap && (
                                <p className={styles.trapBoxText}>
                                    <strong>The Reality:</strong> {trap.reality}
                                </p>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </SectionWrapper>
    );
}
