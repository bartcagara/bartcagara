/**
 * Cal.com booking configuration — the single source of truth.
 *
 * CalScript boots the embed loader and inits this namespace; CTAButton and
 * CalendarEmbed consume it. Change the event or layout here, nowhere else.
 */
export const CAL_LINK = "bartcagara/discovery-call";
export const CAL_NAMESPACE = "discovery-call";
export const CAL_ORIGIN = "https://app.cal.com";
export const CAL_CONFIG =
  '{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}';

/** Spread onto any element that should open the booking popup on click. */
export const CAL_POPUP_ATTRIBUTES = {
  "data-cal-link": CAL_LINK,
  "data-cal-namespace": CAL_NAMESPACE,
  "data-cal-config": CAL_CONFIG,
} as const;
