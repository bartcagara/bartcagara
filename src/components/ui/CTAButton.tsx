import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { CTAButtonProps } from "@/components/home/types";

/**
 * CTAButton - Reusable Call-to-Action button component
 * Consistent styling for all CTA buttons across the site
 */
export function CTAButton({
  href,
  children,
  variant = 'dark',
  icon = true,
  className = ''
}: CTAButtonProps) {
  const baseClasses = "inline-flex items-center gap-3 px-6 py-4 text-base md:px-10 md:py-6 md:text-xl font-black uppercase tracking-tighter border-2 transition-brutal hover-shadow-none hover-translate-brutal";

  const variantClasses = variant === 'dark'
    ? "bg-bleu-nuit text-white border-bleu-nuit shadow-brutal-sm md:shadow-brutal-md"
    : "bg-gray-50 text-bleu-nuit border-gray-50 shadow-brutal-sm md:shadow-brutal-md";

  return (
    <Link
      href={href}
      className={`${baseClasses} ${variantClasses} ${className}`}
    >
      {children}
      {icon && <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />}
    </Link>
  );
}
