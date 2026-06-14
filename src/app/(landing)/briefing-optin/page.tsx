import { OptinForm } from "@/components/newsletter/OptinForm";
import { SectionBadge } from "@/components/ui/SectionBadge";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
    title: "The Founder Athlete Briefing | One Email, Every Sunday",
    description: "The same stuff I tell the men who pay me. One email, every Sunday, on the restart cycle: why it keeps winning and what actually ends it.",
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
        title: "The Founder Athlete Briefing | The Same Stuff I Tell the Men Who Pay Me",
        description: "The same stuff I tell the men who pay me. One email, every Sunday, on the restart cycle: why it keeps winning and what actually ends it.",
        images: [
            {
                url: "/images/og-briefing.jpg",
                width: 1200,
                height: 630,
                alt: "The Founder Athlete Briefing - one email, every Sunday"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "The Founder Athlete Briefing | The Same Stuff I Tell the Men Who Pay Me",
        description: "The same stuff I tell the men who pay me. One email, every Sunday, on the restart cycle: why it keeps winning and what actually ends it.",
        images: ["/images/og-briefing.jpg"],
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

// "Periodical" is the schema.org type for serial publications like newsletters
// ("NewsletterService" is not part of the schema.org vocabulary)
const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Periodical",
    "name": "The Founder Athlete Briefing",
    "description": "The same stuff I tell the men who pay me. One email, every Sunday, on the restart cycle: why it keeps winning and what actually ends it.",
    "url": "https://bartcagara.com/briefing-optin",
    "inLanguage": "en",
    "publisher": {
        "@type": "Person",
        "name": "Bart Cagara",
        "url": "https://bartcagara.com"
    },
    "audience": {
        "@type": "Audience",
        "audienceType": "Former-athlete founders and entrepreneurs"
    }
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
                            {/* HEADSHOT */}
                            <Image
                                src="/images/bart-headshot.jpg"
                                alt="Bart Cagara"
                                width={224}
                                height={224}
                                priority
                                className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full object-cover border-2 border-white shadow-brutal-white-sm mb-8"
                            />
                            {/* BADGE */}
                            <SectionBadge variant="light">Founder Athlete Briefing</SectionBadge>
                            {/* HEADLINE - Optical alignment tweaks */}
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tighter leading-tight text-white mb-6 md:mb-8">
                                The same stuff I tell{" "}
                                <span className="text-bleu-accent">the men who pay me.</span>
                            </h1>
                            {/* SUBHEAD - Lighter weight, cleaner size */}
                            <p className="text-base md:text-lg text-bleu-fumee/90 font-medium leading-relaxed max-w-md md:max-w-lg">
                                One email, every Sunday, on the restart cycle: why it keeps winning and what actually ends it.
                            </p>
                        </div>
                    </div>

                    {/* Right Column: Content & Form */}
                    <div className="w-full md:w-1/2 bg-gray-50 flex flex-col justify-center px-6 py-12 md:p-16 lg:p-24">
                        <div className="max-w-md w-full">
                            {/* INTRO COPY */}
                            <div className="mb-10">
                                <p className="text-lg md:text-xl text-bleu-nuit font-bold leading-tight">
                                    Inside every issue:
                                </p>
                            </div>

                            {/* BULLETS */}
                            <div className="space-y-6 mb-12">
                                <div className="pl-6 border-l-4 border-bleu-nuit">
                                    <p className="text-lg md:text-xl text-bleu-nuit font-semibold leading-tight">
                                        <strong>The symptoms</strong> &mdash; 10pm decompression snacking. Weekend sabotage. Stress decisions you only see in hindsight.
                                    </p>
                                </div>

                                <div className="pl-6 border-l-4 border-bleu-nuit">
                                    <p className="text-lg md:text-xl text-bleu-nuit font-semibold leading-tight">
                                        <strong>The diagnosis</strong> &mdash; why discipline keeps losing, and what actually holds when the business eats a week.
                                    </p>
                                </div>

                                <div className="pl-6 border-l-4 border-bleu-nuit">
                                    <p className="text-lg md:text-xl text-bleu-nuit font-semibold leading-tight">
                                        <strong>The outcome</strong> &mdash; CEO down 140 lbs. A CFO at 12% body fat who flies weekly. Founders getting their energy back.
                                    </p>
                                </div>
                            </div>

                            <OptinForm submitLabel="Send Me The Briefing" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
