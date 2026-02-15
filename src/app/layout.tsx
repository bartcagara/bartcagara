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
  title: "Founder Athlete OS | Coaching for Former Athletes",
  description: "For former-athlete founders building a business they love in a body they hate. Six months to reclaim your body and rebuild your identity.",
  keywords: [
    "Founder Coaching",
    "Weight Loss for Founders",
    "High Performance Health",
    "Bart Cagara",
    "Founder Athlete",
    "Health Coaching for Founders",
    "Former Athlete Fitness",
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
    url: "https://bartcagara.com",
    siteName: "Founder Athlete OS",
    title: "Founder Athlete OS | Coaching for Former Athletes",
    description: "For former-athlete founders building a business they love in a body they hate. Six months to reclaim your body and rebuild your identity.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Founder Athlete OS - Coaching for former-athlete founders"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Founder Athlete OS | Coaching for Former Athletes",
    description: "For former-athlete founders building a business they love in a body they hate.",
    images: ["/images/og-image.jpg"],
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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Founder Athlete OS",
  "description": "Health and performance coaching for former-athlete founders",
  "url": "https://bartcagara.com",
  "founder": {
    "@type": "Person",
    "name": "Bart Cagara",
    "jobTitle": "Health Coach"
  },
  "areaServed": "Worldwide",
  "priceRange": "$$$$"
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
        <link rel="dns-prefetch" href="https://e.bartcagara.com" />
        <link rel="dns-prefetch" href="https://eu.i.posthog.com" />

        {/* Schema.org JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
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
                  const s = document.createElement("script");
                  s.async = true;
                  s.src = "https://b2bjsstore.s3.us-west-2.amazonaws.com/b/${process.env.NEXT_PUBLIC_RB2B_KEY}/${process.env.NEXT_PUBLIC_RB2B_KEY}.js.gz";
                  s.onerror = () => {
                    console.warn('RB2B tracking script failed to load');
                    window.reb2b = {loaded: false, error: true};
                  };
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

          <main className="min-h-screen flex flex-col">
            {children}
          </main>
        </PostHogProviderClient>
      </body>
    </html>
  );
}
