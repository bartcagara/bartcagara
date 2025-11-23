"use client";

import { memo } from "react";
import styles from "./homepage.module.css";

export const Footer = memo(() => (
  <footer className={styles.footer} role="contentinfo">
    <p>&copy; {new Date().getFullYear()} Bart Cagara | Convenience-First Fitness</p>
  </footer>
));

Footer.displayName = "Footer";