"use client";

import { memo, useRef, useState, useEffect, useCallback } from "react";
import type { ScrollSectionProps } from "./types";
import styles from "./homepage.module.css";

export const ScrollSection = memo(({ title, children }: ScrollSectionProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);

  const checkScroll = useCallback(() => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setShowLeft(scrollLeft > 10);
      setShowRight(scrollLeft + clientWidth < scrollWidth - 10);
    }
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      el.addEventListener("scroll", checkScroll);
      checkScroll();
      
      const handleResize = () => checkScroll();
      window.addEventListener("resize", handleResize);
      
      return () => {
        el.removeEventListener("scroll", checkScroll);
        window.removeEventListener("resize", handleResize);
      };
    }
  }, [checkScroll]);

  const scroll = useCallback((direction: number) => {
    if (scrollRef.current) {
      const scrollAmount = 350;
      scrollRef.current.scrollBy({
        left: direction * scrollAmount,
        behavior: "smooth",
      });
    }
  }, []);

  return (
    <div className={styles.scrollSectionWrapper}>
      <h3 className={styles.scrollSectionTitle}>{title}</h3>
      <button
        className={`${styles.scrollBtn} ${styles.left} ${showLeft ? styles.visible : ""}`}
        onClick={() => scroll(-1)}
        aria-label={`Scroll ${title} left`}
        type="button"
      >
        &#8592;
      </button>
      <div 
        className={styles.scrollContainer} 
        ref={scrollRef}
        role="region"
        aria-label={`${title} horizontal scroll container`}
      >
        {children}
      </div>
      <button
        className={`${styles.scrollBtn} ${styles.right} ${!showRight ? styles.hidden : ""}`}
        onClick={() => scroll(1)}
        aria-label={`Scroll ${title} right`}
        type="button"
      >
        &#8594;
      </button>
    </div>
  );
});

ScrollSection.displayName = "ScrollSection";