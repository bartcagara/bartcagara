"use client";

import { useEffect } from "react";

/**
 * CalScript - Initializes Cal.com embed script once per session.
 * - Loads the embed.js loader and inits the "discovery-call" namespace
 * - Applies brand theming
 *
 * Inline embeds and click-to-open popups consume this same namespace,
 * so this must be mounted before they render. The floating button is a
 * separate React component (CalFloatingButton) so its visibility can be
 * scoped per-route.
 */
export function CalScript() {
  useEffect(() => {
    if (document.getElementById("cal-init-script")) return;
    const script = document.createElement("script");
    script.id = "cal-init-script";
    script.textContent = `
      (function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if(typeof namespace === "string"){cal.ns[namespace] = cal.ns[namespace] || api;p(cal.ns[namespace], ar);p(cal, ["initNamespace", namespace]);} else p(cal, ar); return;} p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
      Cal("init", "discovery-call", {origin:"https://app.cal.com"});
      Cal.ns["discovery-call"]("ui", {"cssVarsPerTheme":{"light":{"cal-brand":"#09071D"},"dark":{"cal-brand":"#F9FAFB"}},"hideEventTypeDetails":false,"layout":"month_view"});
    `;
    document.head.appendChild(script);
  }, []);

  return null;
}
