/**
 * The buttons' arrow, drawn to match the button text: as heavy as Inter
 * Black, square ends and a sharp point like the site's square corners, sized
 * to the letters (0.85em), and it moves a little forward when the button is
 * pressed or hovered (the button carries `group`).
 */
export function ButtonArrow() {
  return (
    <svg
      viewBox="0 0 20 20"
      aria-hidden="true"
      className="w-[0.85em] h-[0.85em] shrink-0 transition-transform duration-200 group-hover:translate-x-[3px]"
      fill="none"
      stroke="currentColor"
      strokeWidth={3.4}
      strokeLinecap="square"
      strokeLinejoin="miter"
    >
      <path d="M2.5 10H16" />
      <path d="M10.5 3.5L17 10L10.5 16.5" />
    </svg>
  );
}
