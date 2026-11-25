/**
 * The buttons' icons, in front of the words, saying what the button does:
 * a calendar for booking the call; for the quiz, four squares (the four
 * restart types, the same square cards as on the page), one filled in: yours.
 * Drawn to match the button text: lines as heavy as Inter Black, square ends
 * and corners like the rest of the site, sized to the letters (Bart, 25 Nov).
 */
export function ButtonIcon({ name }: { name: "calendar" | "types" }) {
  return (
    <svg
      viewBox="0 0 20 20"
      aria-hidden="true"
      className="w-[1em] h-[1em] shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.6}
      strokeLinecap="square"
      strokeLinejoin="miter"
    >
      {name === "calendar" ? (
        <>
          <rect x="2.5" y="4.5" width="15" height="13" />
          <path d="M2.5 9H17.5" />
          <path d="M6.5 2V5" />
          <path d="M13.5 2V5" />
        </>
      ) : (
        <>
          <rect x="2.5" y="2.5" width="6" height="6" fill="currentColor" />
          <rect x="11.5" y="2.5" width="6" height="6" />
          <rect x="2.5" y="11.5" width="6" height="6" />
          <rect x="11.5" y="11.5" width="6" height="6" />
        </>
      )}
    </svg>
  );
}
