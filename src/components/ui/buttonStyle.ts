/**
 * The site's one button style, taken from the Brief page's button (Bart,
 * 25 Nov): Inter Black capitals set tight, an icon in front, a fine 3px blue
 * shadow that stays put, and the colour deepens under the mouse. Every
 * button on the site is built from these, with lucide icons at line weight
 * 2.5, so buttons and icons are one family everywhere.
 */
export const BUTTON_BASE =
  "inline-flex items-center justify-center font-black uppercase tracking-tight leading-none whitespace-nowrap border-2 shadow-[3px_3px_0_0_var(--bleu-accent)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed";

export const BUTTON_SIZE = {
  md: "gap-3 h-14 px-5 text-base sm:px-8 sm:text-lg md:h-16",
  sm: "gap-2 h-11 px-4 text-sm",
} as const;

export const BUTTON_VARIANT = {
  dark: "bg-bleu-nuit text-white border-bleu-nuit hover:bg-bleu-charron hover:border-bleu-charron",
  light: "bg-white text-bleu-nuit border-white hover:bg-bleu-fumee hover:border-bleu-fumee",
} as const;

export const BUTTON_ICON = {
  md: "w-5 h-5 md:w-6 md:h-6 shrink-0",
  sm: "w-4 h-4 shrink-0",
} as const;

export const ICON_STROKE = 2.5;
