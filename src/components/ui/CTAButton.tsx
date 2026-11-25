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
  const baseClasses = "inline-flex items-center justify-center font-extrabold uppercase tracking-[0.02em] leading-none whitespace-nowrap border-2 shadow-[4px_4px_0_0_var(--bleu-accent)] transition-brutal hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px]";

  const sizeClasses = size === 'sm'
    ? "gap-2 h-11 px-5 text-[13px] shadow-[3px_3px_0_0_var(--bleu-accent)] hover:translate-x-[3px] hover:translate-y-[3px]"
    : "gap-3 h-14 px-8 text-[15px] md:h-16 md:px-10 md:text-base";

  const variantClasses = variant === 'dark'
    ? "bg-bleu-nuit text-white border-bleu-nuit"
    : "bg-gray-50 text-bleu-nuit border-gray-50";

  const classes = `${baseClasses} ${sizeClasses} ${variantClasses} ${className}`;

  const iconSize = size === 'sm' ? "w-4 h-4" : "w-5 h-5";
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
