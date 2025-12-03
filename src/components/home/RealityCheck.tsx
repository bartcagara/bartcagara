import Image from "next/image";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import styles from "./homepage.module.css";

/**
 * RealityCheck Section - Matt's transformation story
 * Features before/after images with narrative
 */
export function RealityCheck() {
    return (
        <SectionWrapper>
            {/* Before Image */}
            <div className="flex justify-center my-12">
                <Image
                    src="/fat.jpg"
                    alt="Matt Before Transformation"
                    width={400}
                    height={533}
                    className={styles.mattStoryImage}
                    style={{ width: "auto", height: "auto", maxWidth: "400px" }}
                    priority
                />
            </div>

            {/* Story */}
            <div className="max-w-3xl mx-auto">
                <p className="font-bold text-xl mb-6">
                    This is Matt. A successful Sales Exec but let's be honest—his body didn't show it.
                </p>

                <p className="text-xl mb-6">
                    He felt sharp in meetings... until he caught his reflection in the glass. He didn't see a leader. He saw the "heavy guy at the table."
                </p>

                <p className="text-xl mb-6">
                    He tried to fix it. He went strict Paleo Monday through Thursday. But one client dinner would destroy two weeks of progress.
                </p>

                <p className="text-xl mb-6">
                    Even with no dinners, the stress won by Friday. The weekends became a blur of mindless eating.
                </p>

                <p className="text-xl mb-6">
                    His training? He told himself he was "too busy."
                </p>

                <p className="text-xl mb-6">
                    The gap between the athlete he used to be and the man he was becoming was widening.
                </p>

                <p className="text-xl mb-6">
                    He realized he was just managing his decline.
                </p>

                <p className="font-bold text-xl mb-4">
                    So we fixed the system. Here is Matt 14 months and 87 pounds later:
                </p>
            </div>

            {/* After Image */}
            <div className="flex justify-center mt-8 mb-16">
                <Image
                    src="/fit.jpg"
                    alt="Matt After Transformation - 14 months later"
                    width={800}
                    height={533}
                    className={styles.mattStoryImage}
                    style={{ width: "auto", height: "auto", maxWidth: "600px" }}
                />
            </div>
        </SectionWrapper>
    );
}
