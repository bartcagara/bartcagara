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
                    This is Matt. He is a successful Sales Executive. But let's be honest—his body didn't reflect that anymore.
                </p>

                <p className="text-xl mb-6">
                    Matt felt sharp walking into a meeting... until he caught his reflection in the glass. He didn't see a leader. He saw the "heavy guy at the table."
                </p>

                <p className="text-xl mb-6">
                    He tried to fix it. He ordered the salad while everyone else ate steak. He went to bed hungry. But when he stepped on the scale the next morning, the number hasn't moved. It drove him crazy.
                </p>

                <p className="text-xl mb-6">
                    Eventually, the stress won. He starved himself Monday through Thursday, but the moment he slowed down, he lost control. The weekend became a blur of mindless eating. His training? Non-existent.
                </p>

                <p className="text-xl mb-6">
                    He had built an incredible life, but he didn't have the energy to actually live it.
                </p>

                <p className="text-xl mb-6">
                    The gap between the athlete he used to be and the man he was becoming was widening. And deep down, he knew the truth: If he didn't fix this, he was just going to manage his decline.
                </p>

                <p className="font-bold text-xl mb-4">
                    So we fixed the system. Here is Matt 14 months later:
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
