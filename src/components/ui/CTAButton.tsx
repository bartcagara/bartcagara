"use client";

import Link from "next/link";
import { Calendar } from "lucide-react";
import type { CTAButtonProps } from "@/components/home/types";
import { CAL_POPUP_ATTRIBUTES } from "@/lib/cal";
import { getSamePageHashId, scrollToId } from "@/lib/scroll";

/**
 * CTAButton - THE call-to-action button. Every booking/action button on the
 * site renders through this component so sizing, shadows, hover motion, and
 * focus treatment stay identical everywhere.
 *
 * Keyboard focus comes from the global :focus-visible outline (globals.css).
 */
export function CTAButton({
  href,
  children,
  variant = 'dark',
  size = 'md',
  icon = true,
  className = '',
  cal = false,
  onClick,
}: CTAButtonProps) {
  /* The Brief page's button, the one Bart picked (25 Nov): Inter Black in
     capitals, set tight, an icon in front, a fine 3px blue shadow that stays
     put, and the colour deepens under the mouse. */
  const baseClasses = "inline-flex items-center justify-center font-black uppercase tracking-tight leading-none whitespace-nowrap border-2 shadow-[3px_3px_0_0_var(--bleu-accent)] transition-colors";

  const sizeClasses = size === 'sm'
    ? "gap-2 h-11 px-4 text-sm"
    : "gap-3 h-14 px-5 text-base sm:px-8 sm:text-lg md:h-16";

  const variantClasses = variant === 'dark'
    ? "bg-bleu-nuit text-white border-bleu-nuit hover:bg-bleu-charron hover:border-bleu-charron"
    : "bg-white text-bleu-nuit border-white hover:bg-bleu-fumee hover:border-bleu-fumee";

  const classes = `${baseClasses} ${sizeClasses} ${variantClasses} ${className}`;


  if (cal) {
    return (
      <button type="button" {...CAL_POPUP_ATTRIBUTES} onClick={onClick} className={classes}>
        {icon && <Calendar className={size === 'sm' ? "w-4 h-4 shrink-0" : "w-5 h-5 md:w-6 md:h-6 shrink-0"} strokeWidth={2.5} aria-hidden="true" />}
        {children}
      </button>
    );
  }

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    onClick?.();
    const id = getSamePageHashId(href ?? "");
    if (!id) return;
    if (scrollToId(id)) {
      e.preventDefault();
    }
  };

  return (
    <Link
      href={href ?? "/"}
      onClick={handleClick}
      className={classes}
    >
      {children}
    </Link>
  );
}
