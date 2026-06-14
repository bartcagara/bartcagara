"use client";

import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import type { CTAButtonProps } from "@/components/home/types";
import { getSamePageHashId, scrollToId } from "@/lib/scroll";

const CAL_CONFIG = '{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}';

/**
 * CTAButton - Reusable Call-to-Action button component
 * Consistent styling for all CTA buttons across the site
 */
export function CTAButton({
  href,
  children,
  variant = 'dark',
  icon = true,
  className = '',
  cal = false,
}: CTAButtonProps) {
  const baseClasses = "inline-flex items-center gap-3 px-6 py-4 text-base md:px-10 md:py-6 md:text-xl font-black uppercase tracking-tighter border-2 transition-brutal hover-shadow-none hover-translate-brutal focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-bleu-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bleu-nuit";

  const variantClasses = variant === 'dark'
    ? "bg-bleu-nuit text-white border-bleu-nuit shadow-brutal-sm md:shadow-brutal-md"
    : "bg-gray-50 text-bleu-nuit border-gray-50 shadow-brutal-sm md:shadow-brutal-md";

  const IconEl = cal ? Calendar : ArrowRight;

  if (cal) {
    return (
      <button
        type="button"
        data-cal-link="bartcagara/discovery-call"
        data-cal-namespace="discovery-call"
        data-cal-config={CAL_CONFIG}
        className={`${baseClasses} ${variantClasses} ${className}`}
      >
        {icon && <IconEl className="w-5 h-5 md:w-6 md:h-6" />}
        {children}
      </button>
    );
  }

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const id = getSamePageHashId(href);
    if (!id) return;
    if (scrollToId(id)) {
      e.preventDefault();
    }
  };

  return (
    <Link
      href={href}
      onClick={handleClick}
      className={`${baseClasses} ${variantClasses} ${className}`}
    >
      {children}
      {icon && <IconEl className="w-5 h-5 md:w-6 md:h-6" />}
    </Link>
  );
}
