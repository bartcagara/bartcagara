"use client";

import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
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
  const baseClasses = "inline-flex items-center font-black uppercase tracking-tighter border-2 transition-brutal hover:shadow-none hover-translate-brutal";

  const sizeClasses = size === 'sm'
    ? "gap-2 px-4 py-3 text-xs md:px-6 md:text-sm shadow-brutal-sm"
    : "gap-3 px-6 py-4 text-base md:px-10 md:py-6 md:text-xl shadow-brutal-sm md:shadow-brutal-md";

  const variantClasses = variant === 'dark'
    ? "bg-bleu-nuit text-white border-bleu-nuit"
    : "bg-gray-50 text-bleu-nuit border-gray-50";

  const classes = `${baseClasses} ${sizeClasses} ${variantClasses} ${className}`;

  const iconSize = size === 'sm' ? "w-4 h-4" : "w-5 h-5 md:w-6 md:h-6";
  const IconEl = cal ? Calendar : ArrowRight;

  if (cal) {
    return (
      <button type="button" {...CAL_POPUP_ATTRIBUTES} onClick={onClick} className={classes}>
        {icon && <IconEl className={iconSize} />}
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
      {icon && <IconEl className={iconSize} />}
    </Link>
  );
}
