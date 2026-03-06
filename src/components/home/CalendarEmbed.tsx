'use client'
import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export function CalendarEmbed() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "discovery-call" });
      cal("ui", {
        cssVarsPerTheme: {
          light: { "cal-brand": "#09071d" },
          dark: { "cal-brand": "#f9fafb" },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <Cal
      namespace="discovery-call"
      calLink="bartcagara/discovery-call"
      style={{ width: "100%", height: "100%", overflow: "scroll" }}
      config={{ layout: "month_view", useSlotsViewOnSmallScreen: "true" }}
    />
  );
}
