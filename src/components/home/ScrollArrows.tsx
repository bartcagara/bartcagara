"use client";

import { useCallback, useEffect, useState, type RefObject } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

/**
 * The page's one way of showing "this row scrolls" (Bart, 25 Nov): two square
 * arrow buttons above the row, on phone and desktop. A greyed arrow means
 * there is nothing more that way. Every sideways row on the homepage uses
 * this, so they all look and behave the same.
 */
export function useScrollArrows(ref: RefObject<HTMLElement | null>) {
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(true);

  const check = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    setCanLeft(el.scrollLeft > 10);
    setCanRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 10);
  }, [ref]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.scrollLeft = 0;
    check();
    el.addEventListener("scroll", check);
    window.addEventListener("resize", check);
    // The row only knows how wide it is once its pictures have loaded.
    el.addEventListener("load", check, true);
    const timer = window.setTimeout(check, 1500);
    return () => {
      el.removeEventListener("scroll", check);
      window.removeEventListener("resize", check);
      el.removeEventListener("load", check, true);
      window.clearTimeout(timer);
    };
  }, [ref, check]);

  const scroll = (dir: number) => {
    const el = ref.current;
    if (!el) return;
    const first = el.firstElementChild as HTMLElement | null;
    el.scrollBy({ left: dir * ((first?.offsetWidth ?? 320) + 24), behavior: "smooth" });
  };

  return { canLeft, canRight, scroll };
}

const arrowClass =
  "w-10 h-10 lg:w-11 lg:h-11 border-2 border-bleu-nuit flex items-center justify-center transition-colors hover:bg-bleu-nuit hover:text-white disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-bleu-nuit";

export function ScrollArrows({ canLeft, canRight, scroll, className = "" }: ReturnType<typeof useScrollArrows> & { className?: string }) {
  return (
    <div className={`flex gap-2 ${className}`}>
      <button type="button" className={arrowClass} onClick={() => scroll(-1)} disabled={!canLeft} aria-label="Scroll left"><ArrowLeft className="w-5 h-5" /></button>
      <button type="button" className={arrowClass} onClick={() => scroll(1)} disabled={!canRight} aria-label="Scroll right"><ArrowRight className="w-5 h-5" /></button>
    </div>
  );
}
