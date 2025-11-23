"use client";

import { memo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./homepage.module.css";

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
              <a href="#problem">The Problem</a>
              <a href="#solution">The Solution</a>
              <a href="#system">The System</a>
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