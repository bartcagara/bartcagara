import { OptinForm } from "@/components/newsletter/OptinForm";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
    title: "Founder Athlete Briefing | Weekly Newsletter for Former-Athlete Founders",
    description: "Get real client breakthroughs and personal insights on fitness, guilt, shame, and workaholism. For former-athlete founders. One email every Sunday. Read in 2 minutes.",
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
        description: "Real client breakthroughs and personal insights. For former-athlete founders. One email every Sunday.",
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
        description: "Real client breakthroughs and personal insights. For former-athlete founders. One email every Sunday.",
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
    "description": "Weekly newsletter with client breakthroughs and personal insights for former-athlete founders",
    "provider": {
        "@type": "Person",
        "name": "Bart Cagara"
    },
    "audience": "Former-athlete founders and entrepreneurs"
};

export default function BriefingOptinPage() {
    return (
        <>
            <Script
                id="briefing-jsonld"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div className="min-h-screen bg-white flex flex-col">
                <div className="flex flex-col md:flex-row min-h-screen">
                    {/* Left Column: Heading Only */}
                    <div className="w-full md:w-1/2 bg-bleu-nuit flex flex-col justify-center px-6 py-12 md:p-16 lg:p-24 relative overflow-hidden">
                        <div className="absolute inset-0 opacity-10 bg-[url('/noise.png')]"></div>
                        <div className="relative z-10 max-w-xl">
                            {/* BADGE */}
                            <span className="inline-block bg-bleu-accent text-white font-mono text-xs uppercase tracking-tighter px-3 py-1 mb-8 shadow-[4px_4px_0px_0px_white]">
                                The Newsletter
                            </span>
                            {/* HEADLINE - Optical alignment tweaks */}
                            <h1 className="text-[2.75rem] md:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.9] text-white mb-6 md:mb-8">
                                Founder <br />
                                Athlete <br />
                                <span className="text-bleu-accent">Briefing</span>
                            </h1>
                            {/* SUBHEAD - Lighter weight, cleaner size */}
                            <p className="text-lg md:text-2xl text-bleu-fumee/90 font-medium leading-relaxed max-w-sm md:max-w-md">
                                For the former-athlete founder building a business he loves in a body he hates.
                            </p>
                        </div>
                    </div>

                    {/* Right Column: Content & Form */}
                    <div className="w-full md:w-1/2 bg-gray-50 flex flex-col justify-center px-6 py-12 md:p-16 lg:p-24">
                        <div className="max-w-md w-full">
                            {/* INTRO COPY - Direct Value Proposition */}
                            <div className="mb-10">
                                <p className="text-xl md:text-2xl text-bleu-nuit font-bold leading-tight">
                                    <span className="block text-bleu-nuit/40 mb-2 font-medium">No basic fitness tips. No 5-minute workouts. No high-protein recipes.</span>
                                    <span className="block text-bleu-nuit">Just the real stuff like:</span>
                                </p>
                            </div>

                            {/* BULLETS - Clean, High-Contrast */}
                            <div className="space-y-8 mb-12">
                                <div className="pl-6 border-l-4 border-bleu-nuit group hover:border-bleu-accent transition-colors duration-300">
                                    <h2 className="text-xl md:text-2xl text-bleu-nuit font-black uppercase tracking-tighter block mb-1 group-hover:text-bleu-accent transition-colors">
                                        Client Breakthroughs
                                    </h2>
                                    <p className="text-base text-bleu-nuit/70 font-medium leading-relaxed">
                                        How a guy like Drew—entrepreneur, former athlete, father of two—couldn&apos;t get back in shape no matter what he tried. Then his schedule got even more chaotic, he started traveling, and everything clicked. 34 lbs down, best shape of his life.
                                    </p>
                                </div>

                                <div className="pl-6 border-l-4 border-bleu-nuit group hover:border-bleu-accent transition-colors duration-300">
                                    <h2 className="text-xl md:text-2xl text-bleu-nuit font-black uppercase tracking-tighter block mb-1 group-hover:text-bleu-accent transition-colors">
                                        Personal Insights
                                    </h2>
                                    <p className="text-base text-bleu-nuit/70 font-medium leading-relaxed">
                                        It&apos;s the only space online where I don&apos;t pull any punches. On fitness, life, guilt, shame, workaholism... and how I battle them daily to become a better father, coach, and business owner.
                                    </p>
                                </div>
                            </div>

                            <OptinForm />
                        </div>
                    </div>
                </div>

                {/* Bottom Section: Masonry Grid of DMs */}
                <div className="px-6 py-12 md:p-16 bg-white border-t-2 border-bleu-nuit">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-12 md:mb-16">
                            <h2 className="text-2xl md:text-5xl font-black uppercase tracking-tighter text-bleu-nuit leading-tight mb-4">
                                These guys didn&apos;t <br className="md:hidden" /> find more time.
                            </h2>
                            <p className="text-xl md:text-3xl font-bold text-bleu-accent uppercase tracking-tighter">
                                They ditched the scattered approach.
                            </p>
                        </div>
                        {/* Masonry Grid */}
                        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((i) => (
                                <div key={i} className="break-inside-avoid">
                                    <Image
                                        src={`/images/briefing/dm${i}.jpg`}
                                        alt={`Former athlete founder client testimonial ${i} - Founder Athlete coaching result`}
                                        width={400}
                                        height={500}
                                        loading={i <= 3 ? "eager" : "lazy"}
                                        quality={85}
                                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                        className="w-full h-auto shadow-[4px_4px_0px_0px_var(--bleu-nuit)] md:shadow-[8px_8px_0px_0px_var(--bleu-nuit)] border-2 border-bleu-nuit hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_var(--bleu-nuit)] transition-all duration-200"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Back to Main Site */}
                <div className="py-6 text-center border-t border-bleu-nuit/10">
                    <Link href="/" className="text-sm text-bleu-nuit/50 hover:text-bleu-accent transition-colors font-medium">
                        &larr; Founder Athlete OS
                    </Link>
                </div>
            </div>
        </>
    );
}
