import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ErrorReporter from "@/components/ui/ErrorReporter";
import Script from "next/script";
import { PostHogProviderClient } from "./providers";
import { PostHogPageView } from "@/components/analytics/PostHogPageView";
import { Suspense } from "react";
import { Navbar, Footer } from "@/components/layout";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "The Health & Physique Protocol for Executives | Bart Cagara",
  description: "End the weight loss restart cycle. A protocol built for travel, client dinners, and chaotic schedules. No meal prep. No tracking. Book your 15-Min Audit.",
  keywords: [
    "executive fitness coaching",
    "convenience-first fitness",
    "fitness for busy professionals",
    "nutrition coaching for executives",
    "weight loss without meal prep",
    "fitness while traveling",
    "restaurant nutrition",
    "sustainable fitness for executives"
  ],
  authors: [{ name: "Bart Cagara" }],
  creator: "Bart Cagara",
  publisher: "Bart Cagara",
  metadataBase: new URL("https://bartcagara.com"),
  alternates: {
    canonical: "/"
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Convenience-First Fitness",
    title: "You are winning at work, but losing your body.",
    description: "Stop managing your decline. The Convenience-First Protocol for executives.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Bart Cagara - Convenience-First Fitness Coaching"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Convenience-First Fitness for Busy Executives | Bart Cagara",
    description: "Learn to stay fit while eating out, traveling, and operating in chaos. 6-month coaching program for executives.",
    images: ["/og-image.jpg"],
    creator: "@bartcagara"
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
        {/* Font Preloading */}
        <link
          rel="preload"
          href="/_next/static/css/app/layout.css"
          as="style"
        />

        {/* Resource Hints for External Services */}
        <link rel="preconnect" href="https://b2bjsstore.s3.us-west-2.amazonaws.com" />
        <link rel="preconnect" href="https://snap.licdn.com" />
        <link rel="dns-prefetch" href="https://widget.senja.io" />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        <PostHogProviderClient>
          <Suspense fallback={null}>
            <PostHogPageView />
          </Suspense>
          <ErrorReporter />

          {/* RB2B Tracking Script */}
          <Script id="rb2b-tracking" strategy="lazyOnload">
            {`
              !function(key) {
                if (window.reb2b) return;
                window.reb2b = {loaded: true};
                var s = document.createElement("script");
                s.async = true;
                s.src = "https://b2bjsstore.s3.us-west-2.amazonaws.com/b/" + key + "/" + key + ".js.gz";
                document.getElementsByTagName("script")[0].parentNode.insertBefore(s, document.getElementsByTagName("script")[0]);
              }("EN4M0H1QG9OM");
            `}
          </Script>

          {/* LinkedIn Insight Tag */}
          <Script id="linkedin-insight-tag-init" strategy="lazyOnload">
            {`
              _linkedin_partner_id = "8890513";
              window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
              window._linkedin_data_partner_ids.push(_linkedin_partner_id);
            `}
          </Script>
          <Script id="linkedin-insight-tag" strategy="lazyOnload">
            {`
              (function(l) {
                if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
                window.lintrk.q=[]}
                var s = document.getElementsByTagName("script")[0];
                var b = document.createElement("script");
                b.type = "text/javascript";b.async = true;
                b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
                s.parentNode.insertBefore(b, s);
              })(window.lintrk);
            `}
          </Script>
          <noscript>
            <img height="1" width="1" style={{ display: 'none' }} alt="" src="https://px.ads.linkedin.com/collect/?pid=8890513&fmt=gif" />
          </noscript>

          {/* Senja Widget Script */}
          <Script
            src="https://widget.senja.io/widget/fc88ed05-b40d-4ef9-ad5e-1592601df582/platform.js"
            strategy="lazyOnload"
            async
          />

          <Navbar />
          <main className="min-h-screen flex flex-col">
            {children}
          </main>
          <Footer />
        </PostHogProviderClient>
      </body>
    </html>
  );
}