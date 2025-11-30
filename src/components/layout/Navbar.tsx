"use client";

import { memo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../home/homepage.module.css";

export const Navbar = memo(() => {
  const pathname = usePathname();
  const isBookPage = pathname === "/book";

  return (
    <nav className={styles.navbar} role="navigation" aria-label="Main navigation">
      <div className={styles.navContainer}>
        {isBookPage ? (
          <>
            <div className={styles.navLinks}>
              <Link href="/" className={styles.navLink} aria-label="Return to homepage">
                ← Back to Home
              </Link>
            </div>
            <div />
          </>
        ) : (
          <>
            {/* Desktop Navigation Links - Hidden on Mobile */}
            <div className={`${styles.navLinks} hidden md:flex`}>
              <Link href="/#problem">The Problem</Link>
              <Link href="/#solution">The Solution</Link>
              <Link href="/#system">The System</Link>
            </div>

            {/* CTA Button - Centered on Mobile, Right-aligned on Desktop */}
            <Link
              href="https://cal.com/bartcagara/audit-call"
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.btnCta} ${styles.navSize} text-[10px] px-3 py-2 md:text-sm md:px-6 md:py-3 whitespace-nowrap mx-auto md:mx-0`}
            >
              BOOK 15-MIN AUDIT
            </Link>
          </>
        )}
      </div>
    </nav>
  );
});

Navbar.displayName = "Navbar";