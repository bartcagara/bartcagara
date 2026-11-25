"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
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
  /* No drop shadow: the shadow frames the pictures and cards, so a button
     wearing it read as one more card. A button is a solid block that swaps
     to an outline under the mouse (Bart, 25 Nov). */
  const baseClasses = "inline-flex items-center justify-center font-extrabold uppercase tracking-[0.03em] leading-none whitespace-nowrap border-2 transition-colors duration-200";

  const sizeClasses = size === 'sm'
    ? "gap-2 h-10 px-4 text-[13px]"
    : "gap-2.5 h-12 px-6 text-[14px] md:h-14 md:px-7 md:text-[15px]";

  const variantClasses = variant === 'dark'
    ? "bg-bleu-nuit text-white border-bleu-nuit hover:bg-transparent hover:text-bleu-nuit"
    : "bg-white text-bleu-nuit border-white hover:bg-transparent hover:text-white";

  const classes = `${baseClasses} ${sizeClasses} ${variantClasses} ${className}`;

  const iconSize = "w-4 h-4";
  const IconEl = ArrowRight;

  if (cal) {
    return (
      <button type="button" {...CAL_POPUP_ATTRIBUTES} onClick={onClick} className={classes}>
        {children}
        {icon && <IconEl className={iconSize} strokeWidth={2.5} />}
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
      {icon && <IconEl className={iconSize} strokeWidth={2.5} />}
    </Link>
  );
}
