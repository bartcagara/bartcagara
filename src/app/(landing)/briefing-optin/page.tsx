import { OptinForm } from "@/components/newsletter/OptinForm";
import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Founder Athlete Briefing | Weekly Newsletter",
    description: "You've built a business. Your body's lagging behind. For former-athlete founders done with fad diets, meal plans, and fitness challenges. One email every Sunday.",
    keywords: [
        "Founder Newsletter",
        "Business Travel Fitness",
        "Founder Health",
        "Former Athletes",
        "Founder Performance",
        "Bart Cagara Newsletter"
    ],
    authors: [{ name: "Bart Cagara", url: "https://bartcagara.com" }],
    creator: "Bart Cagara",
    publisher: "Bart Cagara",
    alternates: {
        canonical: "/briefing-optin"
    },
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://bartcagara.com/briefing-optin",
        siteName: "Founder Athlete OS",
        title: "Founder Athlete Briefing | Weekly Newsletter",
        description: "You've built a business. Your body's lagging behind. For former-athlete founders. One email every Sunday.",
        images: [
            {
                url: "/images/briefing-og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Founder Athlete Briefing - Weekly newsletter for former-athlete founders"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "Founder Athlete Briefing | Weekly Newsletter",
        description: "You've built a business. Your body's lagging behind. For former-athlete founders. One email every Sunday.",
        images: ["/images/briefing-og-image.jpg"],
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
    }
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsletterService",
    "name": "Founder Athlete Briefing",
    "description": "Weekly newsletter for former-athlete founders who've built a business but whose body's lagging behind",
    "provider": {
        "@type": "Person",
        "name": "Bart Cagara"
    },
    "audience": "Former-athlete founders and entrepreneurs"
};

export default function BriefingOptinPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div className="min-h-screen bg-white flex flex-col">
                <div className="flex flex-col md:flex-row min-h-screen">
                    {/* Left Column: Heading Only */}
                    <div className="w-full md:w-1/2 bg-bleu-nuit flex flex-col justify-center px-6 py-12 md:p-16 lg:p-24">
                        <div className="max-w-xl">
                            {/* BADGE */}
                            <span className="inline-block bg-bleu-accent text-white font-mono text-xs uppercase tracking-tighter px-3 py-1 mb-8 shadow-[4px_4px_0px_0px_white]">
                                Founder Athlete Briefing
                            </span>
                            {/* HEADLINE - Optical alignment tweaks */}
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tighter leading-tight text-white mb-6 md:mb-8">
                                You&apos;ve built a business.{" "}
                                <span className="text-bleu-accent">Your body&apos;s lagging behind.</span>
                            </h1>
                            {/* SUBHEAD - Lighter weight, cleaner size */}
                            <p className="text-base md:text-lg text-bleu-fumee/90 font-medium leading-relaxed max-w-md md:max-w-lg">
                                Ditch the on-and-off fitness cycle. Run an operating system built for the former-athlete founder.
                            </p>
                        </div>
                    </div>

                    {/* Right Column: Content & Form */}
                    <div className="w-full md:w-1/2 bg-gray-50 flex flex-col justify-center px-6 py-12 md:p-16 lg:p-24">
                        <div className="max-w-md w-full">
                            {/* INTRO COPY */}
                            <div className="mb-10">
                                <p className="text-lg md:text-xl text-bleu-nuit font-bold leading-tight">
                                    Every Sunday, expect:
                                </p>
                            </div>

                            {/* BULLETS */}
                            <div className="space-y-6 mb-12">
                                <div className="pl-6 border-l-4 border-bleu-nuit">
                                    <p className="text-lg md:text-xl text-bleu-nuit font-semibold leading-tight">
                                        <strong>The symptoms</strong> &mdash; 10pm decompression snacking. Weekend progress sabotage. Stress decisions you only see in hindsight.
                                    </p>
                                </div>

                                <div className="pl-6 border-l-4 border-bleu-nuit">
                                    <p className="text-lg md:text-xl text-bleu-nuit font-semibold leading-tight">
                                        <strong>The fix</strong> &mdash; why discipline-based programs keep failing, and the systems + inner work that finally make it stick.
                                    </p>
                                </div>

                                <div className="pl-6 border-l-4 border-bleu-nuit">
                                    <p className="text-lg md:text-xl text-bleu-nuit font-semibold leading-tight">
                                        <strong>The proof</strong> &mdash; CEO down 140 lbs. Traveling CFO at 12% body fat after 20 years of neglect. Former athletes getting their energy back.
                                    </p>
                                </div>
                            </div>

                            <OptinForm />
                        </div>
                    </div>
                </div>

                {/* Testimonials */}
                <section className="px-6 py-16 md:py-20 bg-white border-t-2 border-bleu-nuit" aria-labelledby="testimonial-title">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-16 md:mb-20">
                            <h2 id="testimonial-title" className="text-2xl md:text-4xl font-black uppercase tracking-tighter text-bleu-nuit leading-tight">
                                These guys didn&apos;t learn discipline. They&apos;ve built an operating system.
                            </h2>
                        </div>
                        <Script
                            src="https://widget.senja.io/widget/6740d28e-90df-4998-b38b-6c0a7d2f6f52/platform.js"
                            strategy="lazyOnload"
                        />
                        <div
                            className="senja-embed"
                            data-id="6740d28e-90df-4998-b38b-6c0a7d2f6f52"
                            data-mode="shadow"
                            data-lazyload="false"
                            style={{ display: "block", width: "100%" }}
                        />
                    </div>
                </section>

                {/* Back to Main Site */}
                <nav className="py-6 text-center border-t border-bleu-nuit/10" aria-label="Back to main site">
                    <Link href="/" className="text-sm text-bleu-nuit/50 hover:text-bleu-accent transition-colors font-medium">
                        &larr; Founder Athlete OS
                    </Link>
                </nav>
            </div>
        </>
    );
}
