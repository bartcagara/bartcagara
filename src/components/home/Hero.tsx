import { LANDING_CONTENT } from "@/data/landing-page-content";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import styles from "./homepage.module.css";

/**
 * Hero Section - The main landing page hero
 * Displays headline, subheadline, and primary CTA
 */
export function Hero() {
    const { hero } = LANDING_CONTENT;

    return (
        <section className={styles.hero}>
            <div className={styles.container}>
                <SectionHeader level={1} className={styles.h1}>
                    {hero.headline}
                </SectionHeader>
                <p className={styles.heroSub}>{hero.subheadline}</p>

                <div className={styles.heroCtaContainer}>
                    <PrimaryButton href={hero.ctaLink} size="page">
                        {hero.ctaText}
                    </PrimaryButton>
                    <p className={styles.heroNote}>
                        <em>{hero.ctaNote}</em>
                    </p>
                </div>
            </div>
        </section>
    );
}
