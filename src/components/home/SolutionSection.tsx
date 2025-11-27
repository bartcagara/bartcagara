import { LANDING_CONTENT } from "@/data/landing-page-content";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import styles from "./homepage.module.css";

/**
 * SolutionSection - The Solution/Pillars section
 * Displays the two main pillars of the program
 */
export function SolutionSection() {
    const { solution } = LANDING_CONTENT;

    return (
        <SectionWrapper id={solution.sectionId}>
            <div className={`${styles.textCenter} ${styles.maxW800} ${styles.problemSectionIntro}`}>
                <SectionHeader>{solution.headline}</SectionHeader>
                <p className={styles.textLargeNarrative}>{solution.intro}</p>
            </div>

            <div className={styles.grid2}>
                {solution.pillars.map((pillar, index) => (
                    <div key={index} className={styles.bentoCard}>
                        <h3>
                            <strong>{pillar.title}</strong>
                        </h3>
                        <p className={styles.bentoIntro}>{pillar.intro}</p>
                        {pillar.features.map((feature, featureIndex) => (
                            <div key={featureIndex}>
                                <div className={styles.featureTitle}>{feature.title}</div>
                                <p className={styles.bentoText}>{feature.description}</p>
                            </div>
                        ))}
                    </div>
                ))}
            </div>

            <div className={`${styles.textCenter} ${styles.solutionCtaSection}`}>
                <PrimaryButton href={solution.ctaLink} size="page">
                    {solution.ctaText}
                </PrimaryButton>
            </div>
        </SectionWrapper>
    );
}
