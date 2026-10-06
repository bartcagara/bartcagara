import type { SectionBadgeProps } from "@/components/home/types";

/**
 * SectionBadge - Reusable section label component
 * Used throughout the homepage for section headers
 */
export function SectionBadge({ children, variant = 'dark' }: SectionBadgeProps) {
  const baseClasses = "inline-block bg-bleu-accent text-white font-mono text-xs uppercase tracking-tighter px-3 py-1 mb-8";
  const shadowClass = variant === 'light'
    ? 'shadow-brutal-white-sm'
    : 'shadow-brutal-nuit-sm';

  return (
    <span className={`${baseClasses} ${shadowClass}`}>
      {children}
    </span>
  );
}
