import { LANDING_CONTENT } from "@/data/landing-page-content";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import styles from "./homepage.module.css";

/**
 * FinalCTA - The final call-to-action section
 * Explains the audit process and drives conversions
 */
export function FinalCTA() {
    const { finalCta } = LANDING_CONTENT;

    return (
        <SectionWrapper
            id={finalCta.sectionId}
            background="fumee"
            className="border-b-0"
        >
            <div className={`${styles.container} ${styles.textCenter}`}>
                <div className={styles.maxW800}>
                    <SectionHeader level={3}>{finalCta.headline}</SectionHeader>
                    <p className={styles.textLargeNarrative}>
                        {finalCta.intro.split("why").map((part, index) =>
                            index === 0 ? (
                                part
                            ) : (
                                <span key={index}>
                                    <em>why</em>
                                    {part}
                                </span>
                            )
                        )}
                    </p>
                    <p className={styles.textLargeNarrative}>
                        <strong>{finalCta.processTitle}</strong>
                    </p>
                    {finalCta.steps.map((step) => (
                        <p
                            key={step.number}
                            className={styles.textLargeNarrative}
                            style={{ textAlign: "left" }}
                        >
                            <strong>
                                {step.number}. {step.title}
                            </strong>{" "}
                            {step.description}
                        </p>
                    ))}
                </div>
                <PrimaryButton
                    href={finalCta.ctaLink}
                    size="page"
                    className={styles.ctaFinalButton}
                >
                    {finalCta.ctaText}
                </PrimaryButton>
            </div>
        </SectionWrapper>
    );
}
