import type { ReactNode } from "react";

/**
 * TiltedLabel — the brand's tilted highlight label (e.g. "FAVORITE ATHLETE.").
 *
 * The offset accent "shadow" is rendered as a real rotated element rather than a
 * hard `box-shadow`, because a 0-blur box-shadow on a rotated element stair-steps
 * / pixelates (notably on iOS Safari). A real element's rotated edge anti-aliases
 * cleanly, so the brutalist hard edge stays crisp.
 *
 * - `widthClassName` controls how the box hugs its phrase (default `w-min`).
 * - `className` carries the box's background + text colours.
 */
export function TiltedLabel({
  children,
  className = "",
  widthClassName = "w-min",
}: {
  children: ReactNode;
  className?: string;
  widthClassName?: string;
}) {
  return (
    <span className={`relative inline-block max-w-full ${widthClassName}`}>
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 -rotate-1 translate-x-1 translate-y-1 bg-bleu-accent"
      />
      <span className={`relative block px-4 -rotate-1 ${className}`}>
        {children}
      </span>
    </span>
  );
}
