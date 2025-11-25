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
            <div className={styles.navLinks}>
              <Link href="/#problem">The Problem</Link>
              <Link href="/#solution">The Solution</Link>
              <Link href="/#system">The System</Link>
            </div>
            <Link href="/book" className={`${styles.btnCta} ${styles.navSize}`}>
              Book Nutrition Blueprint Call
            </Link>
          </>
        )}
      </div>
    </nav>
  );
});

Navbar.displayName = "Navbar";