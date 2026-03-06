'use client'
import Script from 'next/script'

export function CalendarEmbed() {
  return (
    <>
      <div
        id="my-cal-inline-discovery-call"
        style={{ width: '100%', minHeight: '700px' }}
      />
      <Script
        src="https://app.cal.com/embed/embed.js"
        strategy="lazyOnload"
        onLoad={() => {
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
              dark: { "cal-brand": "#f9fafb" }
            },
            hideEventTypeDetails: false,
            layout: "month_view"
          });
        }}
      />
    </>
  );
}
