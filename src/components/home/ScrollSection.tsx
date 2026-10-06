"use client";

import { memo, useRef, useState, useEffect, useCallback } from "react";
import type { ScrollSectionProps } from "./types";
import { ArrowLeft, ArrowRight } from "lucide-react";

/* Fallback when the row is empty and a card can't be measured. */
const FALLBACK_SCROLL_PX = 350;

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

  // Advance by exactly one card (first item's width + the row gap), measured
  // at click time so it tracks the responsive card size.
  const scroll = useCallback((direction: number) => {
    const el = scrollRef.current;
    if (!el) return;
    const firstCard = el.firstElementChild;
    const gap = parseFloat(getComputedStyle(el).columnGap) || 0;
    const amount =
      firstCard instanceof HTMLElement
        ? firstCard.offsetWidth + gap
        : FALLBACK_SCROLL_PX;
    el.scrollBy({ left: direction * amount, behavior: "smooth" });
  }, []);

  return (
    <div className="mb-20">
      <div className="flex justify-between items-center gap-4 mb-8">
        <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight flex-shrink min-w-0">
          <span className="text-bleu-accent mr-2" aria-hidden="true">/</span>
          {title}
        </h3>
        <div className="flex gap-2 flex-shrink-0">
          <button
            onClick={() => scroll(-1)}
            className={`w-12 h-12 border-2 border-bleu-nuit flex items-center justify-center transition-all hover:bg-bleu-nuit hover:text-white ${!showLeft ? 'opacity-40 cursor-not-allowed' : 'opacity-100'}`}
            disabled={!showLeft}
            aria-label="Scroll left"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <button
            onClick={() => scroll(1)}
            className={`w-12 h-12 border-2 border-bleu-nuit flex items-center justify-center transition-all hover:bg-bleu-nuit hover:text-white ${!showRight ? 'opacity-40 cursor-not-allowed' : 'opacity-100'}`}
            disabled={!showRight}
            aria-label="Scroll right"
          >
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>
      </div>

      <div
        className="flex gap-6 overflow-x-auto pb-8 scrollbar-hide snap-x"
        ref={scrollRef}
      >
        {children}
      </div>
    </div>
  );
});

ScrollSection.displayName = "ScrollSection";