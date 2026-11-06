/**
 * Cal.com booking configuration — the single source of truth.
 *
 * Nothing of Cal.com's loads until it is wanted: a visitor presses a booking
 * button (CalScript), or reaches a calendar on the page (CalendarEmbed: /book
 * and /brief/confirmed on arrival, the home page's last section on scrolling
 * near it). Both go through bootCal().
 * Change the event or layout here, nowhere else.
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

const BOOT_SCRIPT_ID = "cal-init-script";

const bootListeners = new Set<() => void>();

function isCalBooted(): boolean {
  return document.getElementById(BOOT_SCRIPT_ID) !== null;
}

/**
 * Loads Cal.com's embed.js and inits our namespace with the brand theming.
 * Safe to call repeatedly. The inline snippet defines window.Cal as a queue
 * synchronously, so Cal.ns[CAL_NAMESPACE] can be called straight after this;
 * embed.js replays the queue when it arrives.
 */
export function bootCal(): void {
  if (isCalBooted()) return;
  const script = document.createElement("script");
  script.id = BOOT_SCRIPT_ID;
  script.textContent = `
    (function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if(typeof namespace === "string"){cal.ns[namespace] = cal.ns[namespace] || api;p(cal.ns[namespace], ar);p(cal, ["initNamespace", namespace]);} else p(cal, ar); return;} p(cal, ar); }; })(window, "${CAL_ORIGIN}/embed/embed.js", "init");
    Cal("init", "${CAL_NAMESPACE}", {origin:"${CAL_ORIGIN}"});
    Cal.ns["${CAL_NAMESPACE}"]("ui", {"cssVarsPerTheme":{"light":{"cal-brand":"#09071D"},"dark":{"cal-brand":"#F9FAFB"}},"hideEventTypeDetails":false,"layout":"month_view"});
  `;
  document.head.appendChild(script);
  bootListeners.forEach((listener) => listener());
  bootListeners.clear();
}

/**
 * Runs `listener` once Cal is booted: now if it already is. Returns a function
 * that cancels a listener still waiting.
 */
export function onCalBooted(listener: () => void): () => void {
  if (isCalBooted()) {
    listener();
    return () => {};
  }
  bootListeners.add(listener);
  return () => bootListeners.delete(listener);
}

export type CalNamespace = (action: string, options: Record<string, unknown>) => void;

/** Our namespace's API. Exists from the moment bootCal() has run. */
export function getCalNamespace(): CalNamespace | undefined {
  const cal = (window as { Cal?: { ns?: Record<string, CalNamespace> } }).Cal;
  return cal?.ns?.[CAL_NAMESPACE];
}
