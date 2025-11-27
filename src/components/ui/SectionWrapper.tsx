import { ReactNode } from "react";
import styles from "@/components/home/homepage.module.css";

interface SectionWrapperProps {
    children: ReactNode;
    className?: string;
    id?: string;
    background?: "white" | "fumee";
    noPadding?: boolean;
    customPadding?: string;
}

/**
 * SectionWrapper - Enforces consistent section padding and background colors
 * This is the foundation for all landing page sections
 */
export function SectionWrapper({
    children,
    className = "",
    id,
    background = "white",
    noPadding = false,
    customPadding,
}: SectionWrapperProps) {
    const bgClass = background === "fumee" ? styles.bgFumee : "";
    const paddingClass = noPadding ? "" : styles.sectionPadding;
    const customStyle = customPadding ? { padding: customPadding } : undefined;

    return (
        <section
            id={id}
            className={`${paddingClass} ${bgClass} ${className}`.trim()}
            style={customStyle}
        >
            <div className={styles.container}>{children}</div>
        </section>
    );
}
