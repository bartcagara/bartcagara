import { OptinForm } from "@/components/newsletter/OptinForm";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Founder Athlete Briefing | Weekly Newsletter",
    description: "You've built a good business. Your body's the one thing you can't crack. For former-athlete founders done with fad diets and fitness challenges. One email every Sunday.",
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
        description: "You've built a good business. Your body's the one thing you can't crack. For former-athlete founders. One email every Sunday.",
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
        description: "You've built a good business. Your body's the one thing you can't crack. For former-athlete founders. One email every Sunday.",
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
    "description": "Weekly newsletter for former-athlete founders who've built a good business but can't crack the body problem",
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
                                The Newsletter
                            </span>
                            {/* HEADLINE - Optical alignment tweaks */}
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tighter leading-tight text-white mb-6 md:mb-8">
                                You&apos;ve built a good business.{" "}
                                <span className="text-bleu-accent">Your body&apos;s the one thing you can&apos;t crack.</span>
                            </h1>
                            {/* SUBHEAD - Lighter weight, cleaner size */}
                            <p className="text-base md:text-lg text-bleu-fumee/90 font-medium leading-relaxed max-w-md md:max-w-lg">
                                For the former-athlete founder done with fad diets, meal plans, and fitness challenges. It&apos;s where eating and training finally fit the man you&apos;ve become.
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
                                        Real <strong>challenges and breakthroughs</strong> from coaching guys like you - putting out fires at work, parachuting in at home, carrying it alone.
                                    </p>
                                </div>

                                <div className="pl-6 border-l-4 border-bleu-nuit">
                                    <p className="text-lg md:text-xl text-bleu-nuit font-semibold leading-tight">
                                        The <strong>diagnosis behind every failed restart</strong> - the stress that never stops, the body you&apos;ve traded for the company, the belief you can&apos;t run both at once.
                                    </p>
                                </div>

                                <div className="pl-6 border-l-4 border-bleu-nuit">
                                    <p className="text-lg md:text-xl text-bleu-nuit font-semibold leading-tight">
                                        The <strong>voice of a teammate</strong> in a locker room - never lecturing but telling you like it is.
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
