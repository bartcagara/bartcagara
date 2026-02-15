import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Founder Athlete OS",
    short_name: "Founder Athlete",
    description: "Health and performance coaching for former-athlete founders",
    start_url: "/",
    display: "standalone",
    background_color: "#FFFFFF",
    theme_color: "#09071D",
    icons: [
      {
        src: "/icon.png",
        sizes: "any",
        type: "image/png",
      },
    ],
  };
}
