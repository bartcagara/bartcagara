import Link from "next/link";
import styles from "@/components/home/homepage.module.css";

interface PrimaryButtonProps {
    href: string;
    children: React.ReactNode;
    className?: string;
    size?: "default" | "page";
}

/**
 * PrimaryButton - Enforces consistent CTA button styling
 * Handles hover states, shadows, and links to booking page
 */
export function PrimaryButton({
    href,
    children,
    className = "",
    size = "default",
}: PrimaryButtonProps) {
    const sizeClass = size === "page" ? styles.pageSize : "";

    return (
        <Link
            href={href}
            className={`${styles.btnCta} ${sizeClass} ${className}`.trim()}
        >
            {children}
        </Link>
    );
}
