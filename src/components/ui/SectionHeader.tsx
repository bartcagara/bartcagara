import React, { ReactNode } from "react";
import styles from "@/components/home/homepage.module.css";

interface SectionHeaderProps {
    level?: 1 | 2 | 3;
    children: ReactNode;
    className?: string;
    centered?: boolean;
}

/**
 * SectionHeader - Enforces typography hierarchy and spacing for section headlines
 * Ensures consistent h1, h2, h3 styling across the landing page
 */
export function SectionHeader({
    level = 2,
    children,
    className = "",
    centered = false,
}: SectionHeaderProps) {
    const Tag = `h${level}` as "h1" | "h2" | "h3";
    const styleClass = level === 1 ? styles.h1 : level === 2 ? styles.h2 : styles.h3;
    const centerClass = centered ? styles.textCenter : "";

    return (
        <Tag className={`${styleClass} ${centerClass} ${className}`.trim()}>
            {children}
        </Tag>
    );
}
