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
  title: "Executive Athlete OS™ | Bart Cagara",
  description: "Stop the physical decline. High-performance health infrastructure for the 40+ executive. Reclaim the athlete without pausing your career.",
  keywords: [
    "Executive Coaching",
    "Weight Loss for Executives",
    "High Performance Health",
    "Bart Cagara",
    "Executive Athlete"
  ],
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
    url: "/",
    siteName: "Executive Athlete OS",
    title: "Executive Athlete OS™",
    description: "We don't manage the decline. We stop it. Engineered for the former athlete turned executive who is winning at work but losing the physical battle.",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Executive Athlete OS™ - Bart Cagara"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Executive Athlete OS™",
    description: "We don't manage the decline. We stop it. Engineered for the former athlete turned executive who is winning at work but losing the physical battle.",
    images: ["/opengraph-image.png"],
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
  },
  verification: {
    // Add your verification codes here when you have them
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
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
        <link rel="dns-prefetch" href="https://slelguoygbfzlpylpxfs.supabase.co" />
        <link rel="dns-prefetch" href="https://us.i.posthog.com" />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        <PostHogProviderClient>
          <Suspense fallback={null}>
            <PostHogPageView />
          </Suspense>
          <ErrorReporter />

          {/* RB2B Tracking Script - Deferred to reduce initial load */}
          <Script id="rb2b-tracking" strategy="lazyOnload">
            {`
              (function() {
                const loadRB2B = () => {
                  if (window.reb2b) return;
                  window.reb2b = {loaded: true};
                  var s = document.createElement("script");
                  s.async = true;
                  s.src = "https://b2bjsstore.s3.us-west-2.amazonaws.com/b/${process.env.NEXT_PUBLIC_RB2B_KEY}/${process.env.NEXT_PUBLIC_RB2B_KEY}.js.gz";
                  document.head.appendChild(s);
                };

                // Use requestIdleCallback for better performance
                if ('requestIdleCallback' in window) {
                  requestIdleCallback(loadRB2B, { timeout: 5000 });
                } else {
                  setTimeout(loadRB2B, 5000);
                }
              })();
            `}
          </Script>

          {/* Senja Widget Script - Deferred to reduce initial load */}
          <Script
            src="https://widget.senja.io/widget/fc88ed05-b40d-4ef9-ad5e-1592601df582/platform.js"
            strategy="lazyOnload"
          />

          <main className="min-h-screen flex flex-col">
            {children}
          </main>
        </PostHogProviderClient>
      </body>
    </html>
  );
}