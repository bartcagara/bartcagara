'use client'
import { useEffect } from 'react'

export function CalendarEmbed() {
  useEffect(() => {
    // Mirrors the official Cal.com inline embed code exactly
    (function (C: any, A: string, L: string) {
      const p = function (a: any, ar: any) { a.q.push(ar); };
      const d = C.document;
      C.Cal = C.Cal || function () {
        const cal = C.Cal;
        const ar = arguments;
        if (!cal.loaded) {
          cal.ns = {};
          cal.q = cal.q || [];
          d.head.appendChild(d.createElement("script")).src = A;
          cal.loaded = true;
        }
        if (ar[0] === L) {
          const api = function () { p(api, arguments); };
          const namespace = ar[1];
          api.q = api.q || [];
          if (typeof namespace === "string") {
            cal.ns[namespace] = cal.ns[namespace] || api;
            p(cal.ns[namespace], ar);
            p(cal, ["initNamespace", namespace]);
          } else p(cal, ar);
          return;
        }
        p(cal, ar);
      };
    })(window, "https://app.cal.com/embed/embed.js", "init");

    const Cal = (window as any).Cal;
    Cal("init", "discovery-call", { origin: "https://app.cal.com" });
    Cal.ns["discovery-call"]("inline", {
      elementOrSelector: "#my-cal-inline-discovery-call",
      config: { layout: "month_view", useSlotsViewOnSmallScreen: "true" },
      calLink: "bartcagara/discovery-call",
    });
    Cal.ns["discovery-call"]("ui", {
      cssVarsPerTheme: {
        light: { "cal-brand": "#09071d" },
        dark: { "cal-brand": "#f9fafb" },
      },
      hideEventTypeDetails: false,
      layout: "month_view",
    });
  }, []);

  return (
    <div
      id="my-cal-inline-discovery-call"
      style={{ width: '100%', minHeight: '700px' }}
    />
  );
}
