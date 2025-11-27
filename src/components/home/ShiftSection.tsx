import { LANDING_CONTENT } from "@/data/landing-page-content";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeader } from "@/components/ui/SectionHeader";
import styles from "./homepage.module.css";

/**
 * ShiftSection - The Transformation/Comparison section
 * Shows the before/after mindset shift
 */
export function ShiftSection() {
    const { shift } = LANDING_CONTENT;

    return (
        <SectionWrapper background="fumee">
            <div className={`${styles.maxW800} ${styles.textCenter} ${styles.problemSectionIntro}`}>
                <SectionHeader>{shift.headline}</SectionHeader>
                <p className={styles.textLargeNarrative}>{shift.intro}</p>
            </div>

            <div className={styles.grid2}>
                <div className={styles.bentoCard}>
                    <h3>
                        <strong>{shift.comparison.old.title}</strong>
                    </h3>
                    <ul className={`${styles.checkList} ${styles.checkListCross}`}>
                        {shift.comparison.old.items.map((item, index) => (
                            <li key={index}>
                                <strong>{item.label}:</strong> {item.description}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={styles.bentoCard}>
                    <h3>
                        <strong>{shift.comparison.new.title}</strong>
                    </h3>
                    <ul className={styles.checkList}>
                        {shift.comparison.new.items.map((item, index) => (
                            <li key={index}>
                                <strong>{item.label}:</strong> {item.description}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </SectionWrapper>
    );
}
