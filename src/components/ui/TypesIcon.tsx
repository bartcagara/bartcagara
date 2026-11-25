/**
 * The quiz button's icon: four squares (the four restart types, like the four
 * cards above the button), one filled in: yours. Drawn on the same 24px grid
 * and 2.5 line weight as the lucide icons on the other buttons (the Brief's
 * envelope, the booking calendar), with square corners (Bart, 25 Nov).
 */
export function TypesIcon({ className = "w-5 h-5 md:w-6 md:h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={`${className} shrink-0`} fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinejoin="miter">
      <rect x="3.5" y="3.5" width="7" height="7" fill="currentColor" />
      <rect x="13.5" y="3.5" width="7" height="7" />
      <rect x="3.5" y="13.5" width="7" height="7" />
      <rect x="13.5" y="13.5" width="7" height="7" />
    </svg>
  );
}
