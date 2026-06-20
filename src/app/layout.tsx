import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ErrorReporter from "@/components/ui/ErrorReporter";
import Script from "next/script";
import { PostHogProviderClient } from "./providers";
import { PostHogPageView } from "@/components/analytics/PostHogPageView";
import { Suspense } from "react";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  preload: true,
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  title: "Founder Athlete OS | 1:1 Health Coaching for Founders",
  description: "The founder's last restart. 6 months to get you lean, athletic and off the restart cycle. For good. 1:1 coaching for former-athlete founders.",
  authors: [{ name: "Bart Cagara", url: "https://bartcagara.com" }],
  creator: "Bart Cagara",
  publisher: "Bart Cagara",
  metadataBase: new URL("https://bartcagara.com"),
  alternates: {
    canonical: "/"
  },
  category: "Health & Fitness",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bartcagara.com",
    siteName: "Founder Athlete OS",
    title: "The Founder's Last Restart | Founder Athlete OS",
    description: "The founder's last restart. 6 months to get you lean, athletic and off the restart cycle. For good. 1:1 coaching for former-athlete founders.",
    images: [
      {
        url: "/images/og-home.jpg",
        width: 1200,
        height: 630,
        alt: "Founder Athlete OS - The founder's last restart"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "The Founder's Last Restart | Founder Athlete OS",
    description: "The founder's last restart. 6 months to get you lean, athletic and off the restart cycle. For good. 1:1 coaching for former-athlete founders.",
    images: ["/images/og-home.jpg"],
    creator: "@bartcagara",
    site: "@bartcagara"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        {/* Theme Color for Mobile Browsers */}
        <meta name="theme-color" content="#09071D" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

        {/* Resource Hints - Only critical for initial load */}
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        {/* PostHog proxy: preconnect (not just dns-prefetch) so the session-replay
            recorder and first events establish their connection sooner. */}
        <link rel="preconnect" href="https://e.bartcagara.com" />
        <link rel="dns-prefetch" href="https://eu.i.posthog.com" />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        <PostHogProviderClient>
          <Suspense fallback={null}>
            <PostHogPageView />
          </Suspense>
          <ErrorReporter />

          {/* Senja Widget Script - Deferred to reduce initial load */}
          <Script
            id="senja-widget"
            strategy="lazyOnload"
          >
            {`
              (function() {
                const s = document.createElement("script");
                s.src = "https://widget.senja.io/widget/fc88ed05-b40d-4ef9-ad5e-1592601df582/platform.js";
                s.async = true;
                s.onerror = () => {
                  console.warn('Senja widget script failed to load');
                };
                document.head.appendChild(s);
              })();
            `}
          </Script>

          <div className="min-h-screen flex flex-col">
            {children}
          </div>
        </PostHogProviderClient>
      </body>
    </html>
  );
}
