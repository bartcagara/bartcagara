import { LANDING_CONTENT } from "@/data/landing-page-content";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import styles from "./homepage.module.css";

/**
 * SystemSection - The 4-stage operating system
 * Displays the complete coaching program structure
 */
export function SystemSection() {
    const { system } = LANDING_CONTENT;

    return (
        <SectionWrapper
            id={system.sectionId}
            background="fumee"
            customPadding="5rem 0 3rem 0"
        >
            <div className={`${styles.maxW800} ${styles.textCenter} ${styles.problemSectionIntro}`}>
                <SectionHeader centered>{system.headline}</SectionHeader>
                <p className={`${styles.textLargeNarrative} ${styles.systemIntroMargin}`}>
                    {system.intro}
                </p>

                {system.stages.map((stage, index) => {
                    const isFirstStage = index === 0;
                    const stageClass = isFirstStage ? styles.stage1 : "";

                    return (
                        <div
                            key={stage.number}
                            className={`${styles.systemStep} ${stageClass}`}
                            style={{ textAlign: "left" }}
                        >
                            <div className={styles.stepHeader}>STAGE {stage.number}: {stage.title}</div>
                            <div className={styles.stepBody}>
                                <p className={styles.stepTitle}>{stage.description}</p>
                                <ul className={styles.checkList}>
                                    {stage.items.map((item, itemIndex) => (
                                        <li key={itemIndex}>{item}</li>
                                    ))}
                                </ul>
                                <div className={styles.stepMeta}>
                                    <p>
                                        <strong>Deliverable:</strong> {stage.deliverable}
                                    </p>
                                    <p>
                                        <strong>Rhythm:</strong> {stage.rhythm}
                                    </p>
                                </div>
                            </div>
                        </div>
                    );
                })}

                <div className={`${styles.textCenter} ${styles.systemCtaSection}`}>
                    <PrimaryButton href={system.ctaLink} size="page">
                        {system.ctaText}
                    </PrimaryButton>
                </div>
            </div>
        </SectionWrapper>
    );
}
