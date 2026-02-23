import { OptinForm } from "@/components/newsletter/OptinForm";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Founder Athlete Briefing | Weekly Newsletter",
    description: "Real client breakthroughs and personal insights on fitness, guilt, and workaholism. For former-athlete founders. One email every Sunday.",
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
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div className="min-h-screen bg-white flex flex-col">
                <div className="flex flex-col md:flex-row min-h-screen">
                    {/* Left Column: Heading Only */}
                    <div className="w-full md:w-1/2 bg-bleu-nuit flex flex-col justify-center px-6 py-12 md:p-16 lg:p-24 relative overflow-hidden">
                        <div className="absolute inset-0 opacity-10" aria-hidden="true"></div>
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
                                    <span className="block text-bleu-nuit/40 mb-2 font-medium">You&apos;ve tried the basic fitness tips. They never stick.</span>
                                    <span className="block text-bleu-nuit">Here&apos;s what I actually cover:</span>
                                </p>
                            </div>

                            {/* BULLETS - Clean, High-Contrast */}
                            <div className="space-y-8 mb-12">
                                <div className="pl-6 border-l-4 border-bleu-nuit group hover:border-bleu-accent transition-colors duration-300">
                                    <h2 className="text-xl md:text-2xl text-bleu-nuit font-black uppercase tracking-tighter block mb-1 group-hover:text-bleu-accent transition-colors">
                                        Client Breakthroughs
                                    </h2>
                                    <p className="text-base text-bleu-nuit/70 font-medium leading-relaxed">
                                        Real stories from former-athlete founders who cracked it. Like Drew - father of two - couldn&apos;t get back in shape no matter what he tried. Then his schedule got even more chaotic. He started traveling more. That&apos;s when everything clicked. 34 lbs down. Best shape of his life.
                                    </p>
                                </div>

                                <div className="pl-6 border-l-4 border-bleu-nuit group hover:border-bleu-accent transition-colors duration-300">
                                    <h2 className="text-xl md:text-2xl text-bleu-nuit font-black uppercase tracking-tighter block mb-1 group-hover:text-bleu-accent transition-colors">
                                        Personal Insights
                                    </h2>
                                    <p className="text-base text-bleu-nuit/70 font-medium leading-relaxed">
                                        On fitness, life, guilt, shame, workaholism - and how I deal with it all to become a better founder, father, and coach. No &apos;look at me&apos; garbage. Just the unfiltered truth.
                                    </p>
                                </div>
                            </div>

                            <OptinForm />
                        </div>
                    </div>
                </div>

                {/* Newsletter Subscriber Testimonial */}
                <section className="px-6 py-16 md:py-20 bg-white border-t-2 border-bleu-nuit" aria-labelledby="testimonial-title">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-16 md:mb-20">
                            <h2 id="testimonial-title" className="text-2xl md:text-5xl font-black uppercase tracking-tighter text-bleu-nuit leading-tight mb-4">
                                &ldquo;Your shit really speaks to me.&rdquo;
                            </h2>
                            <p className="text-lg md:text-2xl font-medium text-bleu-nuit/60">
                                DM from a founder who reads the Briefing every Sunday.
                            </p>
                        </div>
                        <div className="flex justify-center">
                            <Image
                                src="/images/newsletter-subscriber-dm.jpg"
                                alt="Unsolicited DM from newsletter subscriber - founder-athlete testimonial"
                                width={800}
                                height={1000}
                                quality={90}
                                className="w-full max-w-[800px] h-auto shadow-[4px_4px_0px_0px_var(--bleu-nuit)] md:shadow-[8px_8px_0px_0px_var(--bleu-nuit)] border-2 border-bleu-nuit"
                                sizes="(max-width: 768px) 100vw, 800px"
                            />
                        </div>
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
