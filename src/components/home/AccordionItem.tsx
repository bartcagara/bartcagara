"use client";

import { memo, useRef } from "react";
import type { AccordionItemProps } from "./types";
import styles from "./homepage.module.css";

export const AccordionItem = memo(({
  question,
  answer,
  isOpen,
  onClick,
}: AccordionItemProps) => {
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div className={styles.accordionItem}>
      <button
        className={`${styles.accordionHeader} ${isOpen ? styles.active : ""}`}
        onClick={onClick}
        aria-expanded={isOpen}
        aria-controls={`accordion-content-${question.slice(0, 20)}`}
      >
        {question}
      </button>
      <div
        id={`accordion-content-${question.slice(0, 20)}`}
        ref={contentRef}
        className={`${styles.accordionContent} ${isOpen ? styles.active : ""}`}
        style={{
          maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : "0px",
        }}
        role="region"
        aria-labelledby={`accordion-button-${question.slice(0, 20)}`}
      >
        <div
          className={styles.accordionBody}
          dangerouslySetInnerHTML={{ __html: answer }}
        />
      </div>
    </div>
  );
});

AccordionItem.displayName = "AccordionItem";