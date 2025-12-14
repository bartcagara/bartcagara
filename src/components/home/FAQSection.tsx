"use client";

import { useState, useCallback } from "react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AccordionItem } from "./AccordionItem";
import { FAQ_ITEMS } from "./faq-data";
import styles from "./homepage.module.css";

/**
 * FAQSection - Frequently Asked Questions
 * Interactive accordion-style FAQ section
 */
export function FAQSection() {
    const [openAccordionIndex, setOpenAccordionIndex] = useState<number | null>(null);

    const toggleAccordion = useCallback((index: number) => {
        setOpenAccordionIndex((prev) => (prev === index ? null : index));
    }, []);

    return (
        <SectionWrapper>
            <div className={styles.maxW800}>
                <SectionHeader centered className={styles.faqSectionTitle}>
                    FAQ
                </SectionHeader>
                <div className={styles.faqContainer}>
                    {FAQ_ITEMS.map((item, index) => (
                        <AccordionItem
                            key={item.q}
                            question={item.q}
                            answer={item.a}
                            isOpen={openAccordionIndex === index}
                            onClick={() => toggleAccordion(index)}
                        />
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
}
