import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Founder Athlete OS",
    short_name: "Founder Athlete",
    description: "Health and performance coaching for former-athlete founders",
    start_url: "/",
    display: "standalone",
    // Matches the app's dark theme (and the theme-color meta in layout.tsx).
    // iOS paints this behind the launch screen, so a light value flashed white
    // every time the home-screen app was relaunched.
    background_color: "#09071D",
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
