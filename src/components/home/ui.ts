/**
 * The homepage's type and spacing, taken from /brief and /quiz so the three
 * pages read as one family: pale ground, heavy tight Inter in bleu-nuit, a
 * calm grey-navy body, 2px navy lines with the accent offset shadow.
 * One scale: H1 > H2 > H3 (the middle tier) > PROSE > MICRO.
 */

/** Page gutter and width, as /brief's header and main. */
export const CONTAINER = "max-w-6xl mx-auto";
export const GUTTER = "px-6 md:px-12";

/** Every section below the first screen: the same rule on top, the same space. */
export const SECTION = "border-t-2 border-bleu-nuit py-16 md:py-24";

/** /brief's headline. */
export const H1 =
  "text-[clamp(2.25rem,10.6vw,3rem)] md:text-[3.5rem] lg:text-[3.75rem] xl:text-[4.5rem] font-black tracking-[-0.04em] leading-[0.98] text-balance";

/** Section titles, the size of /quiz's question headings, one step up on wide screens. */
export const H2 =
  "text-[clamp(2rem,8.6vw,2.5rem)] md:text-[3rem] lg:text-[3.5rem] font-black tracking-[-0.04em] leading-[1.02] text-balance";

/** The middle tier: key lines, quotes, step names (as /quiz's result headline). */
export const H3 =
  "text-[clamp(1.375rem,6vw,1.75rem)] md:text-[2rem] font-black tracking-[-0.03em] leading-[1.1] text-balance";

/** Body copy, as /brief/confirmed and the quiz result. */
export const PROSE = "space-y-5 text-lg md:text-xl leading-[1.45] text-pretty font-medium text-bleu-nuit/75";

/** The small label style ("DM from one of my readers"). */
export const MICRO = "text-sm font-bold uppercase tracking-[-0.02em] text-bleu-nuit/70";

/** Photos, screenshots and cards: the 2px line and the accent offset shadow. */
export const FRAME = "border-2 border-bleu-nuit shadow-brutal-md";

/** The navy button: full width on a phone, as /quiz's start button. */
export const BUTTON =
  "w-full sm:w-auto inline-flex items-center justify-center gap-3 min-h-14 px-10 py-4 bg-bleu-nuit text-white border-2 border-bleu-nuit text-lg font-black uppercase tracking-tight shadow-brutal-sm transition-brutal hover:shadow-none hover-translate-brutal cursor-pointer";
