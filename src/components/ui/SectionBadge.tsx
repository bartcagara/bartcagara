import type { SectionBadgeProps } from "@/components/home/types";

/**
 * SectionBadge - Reusable section label component
 * Used throughout the homepage for section headers
 */
export function SectionBadge({ children, variant = 'dark' }: SectionBadgeProps) {
  const baseClasses = "section-badge";
  const variantClasses = variant === 'light' ? 'section-badge-light' : '';

  return (
    <div className={`${baseClasses} ${variantClasses}`}>
      {children}
    </div>
  );
}
