import Image from "next/image";
import { LANDING_CONTENT } from "@/data/landing-page-content";
import { TRUST_LOGOS } from "./assets";
import styles from "./homepage.module.css";

/**
 * TrustedBy Section - Displays client company logos
 * Shows social proof from executive clients
 */
export function TrustedBy() {
    const { trustedBy } = LANDING_CONTENT;

    return (
        <section style={{ padding: "1.5rem 0" }}>
            <div className={styles.container}>
                <div className={styles.trustLogos} style={{ marginTop: 0 }}>
                    <p className={styles.trustLogosTitle}>{trustedBy.title}</p>
                    <div className={styles.logoGrid}>
                        {TRUST_LOGOS.map((logo) => (
                            <Image
                                key={logo.name}
                                src={logo.src}
                                alt={`${logo.name} company logo`}
                                className={styles.trustLogo}
                                width={logo.width}
                                height={logo.height}
                                priority
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
