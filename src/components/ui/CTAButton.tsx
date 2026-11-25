"use client";

import Link from "next/link";
import { Calendar } from "lucide-react";
import { BUTTON_BASE, BUTTON_SIZE, BUTTON_VARIANT, BUTTON_ICON, ICON_STROKE } from "@/components/ui/buttonStyle";
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
  const baseClasses = BUTTON_BASE;
  const sizeClasses = BUTTON_SIZE[size === 'sm' ? 'sm' : 'md'];
  const variantClasses = BUTTON_VARIANT[variant === 'dark' ? 'dark' : 'light'];

  const classes = `${baseClasses} ${sizeClasses} ${variantClasses} ${className}`;


  if (cal) {
    return (
      <button type="button" {...CAL_POPUP_ATTRIBUTES} onClick={onClick} className={classes}>
        {icon && <Calendar className={BUTTON_ICON[size === 'sm' ? 'sm' : 'md']} strokeWidth={ICON_STROKE} aria-hidden="true" />}
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
