"use client";

import Link from "next/link";
import { ButtonArrow } from "@/components/ui/ButtonArrow";
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
  /* The button speaks in the headings' voice: Inter at its heaviest, tight,
     in normal case, not small uppercase letters. The small blue shadow says
     "press me", and the button sinks into it under the mouse (Bart, 25 Nov). */
  const baseClasses = "group inline-flex items-center justify-center font-black tracking-[-0.02em] leading-none whitespace-nowrap border-2 transition-brutal hover:shadow-none";

  const sizeClasses = size === 'sm'
    ? "gap-2 h-10 px-4 text-[15px] shadow-[3px_3px_0_0_var(--bleu-accent)] hover:translate-x-[3px] hover:translate-y-[3px]"
    : "gap-2 h-12 px-6 text-[17px] md:h-14 md:px-7 md:text-lg shadow-[4px_4px_0_0_var(--bleu-accent)] hover:translate-x-[4px] hover:translate-y-[4px]";

  const variantClasses = variant === 'dark'
    ? "bg-bleu-nuit text-white border-bleu-nuit"
    : "bg-white text-bleu-nuit border-white";

  const classes = `${baseClasses} ${sizeClasses} ${variantClasses} ${className}`;


  if (cal) {
    return (
      <button type="button" {...CAL_POPUP_ATTRIBUTES} onClick={onClick} className={classes}>
        {children}
        {icon && <ButtonArrow />}
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
      {icon && <ButtonArrow />}
    </Link>
  );
}
