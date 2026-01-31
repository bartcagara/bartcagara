import { OptinForm } from "@/components/newsletter/OptinForm";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Executive Athlete Briefing | Weekly Newsletter for Former-Athlete Executives",
    description: "Every Sunday, get one client-tested insight to stay lean and sharp in schedule chaos. Join 200+ former-athlete executives. Read it in 2 minutes.",
    keywords: [
        "Executive Newsletter",
        "Business Travel Fitness",
        "Executive Health",
        "Former Athletes",
        "Executive Performance",
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
        url: "/briefing-optin",
        siteName: "Executive Athlete OS",
        title: "Executive Athlete Briefing",
        description: "Most fitness advice assumes you have time. This briefing assumes you don't. Client-tested systems to stay fit on an executive schedule.",
        images: [
            {
                url: "/opengraph-briefing.png",
                width: 1200,
                height: 630,
                alt: "Executive Athlete Briefing - Weekly Newsletter by Bart Cagara"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "Executive Athlete Briefing",
        description: "Most fitness advice assumes you have time. This briefing assumes you don't. Every Sunday, get one client-tested insight.",
        images: ["/opengraph-briefing.png"],
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

export default function BriefingOptinPage() {
    return (
        <main className="min-h-screen bg-white flex flex-col">
            <div className="flex flex-col md:flex-row min-h-screen">
                {/* Left Column: Heading Only */}
                <div className="w-full md:w-1/2 bg-bleu-nuit flex flex-col justify-center px-6 py-12 md:p-16 lg:p-24 relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10 bg-[url('/noise.png')]"></div>
                    <div className="relative z-10 max-w-xl">
                        {/* BADGE */}
                        <div className="inline-block bg-bleu-accent text-white font-mono text-xs uppercase tracking-tighter px-3 py-1 mb-8 shadow-[4px_4px_0px_0px_white]">
                            The Newsletter
                        </div>
                        {/* HEADLINE - Optical alignment tweaks */}
                        <h1 className="text-[2.75rem] md:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.9] text-white mb-6 md:mb-8">
                            Executive <br />
                            Athlete <br />
                            <span className="text-bleu-accent">Briefing</span>
                        </h1>
                        {/* SUBHEAD - Lighter weight, cleaner size */}
                        <p className="text-lg md:text-2xl text-bleu-fumee/90 font-medium leading-relaxed max-w-sm md:max-w-md">
                            For the former athlete who traded his health for a career.
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
                                <span className="block text-bleu-nuit">Just real stories and insights from coaching former athletes like:</span>
                            </p>
                        </div>

                        {/* BULLETS - Clean, High-Contrast */}
                        <div className="space-y-8 mb-12">
                            <div className="pl-6 border-l-4 border-bleu-nuit group hover:border-bleu-accent transition-colors duration-300">
                                <span className="text-xl md:text-2xl text-bleu-nuit font-black uppercase tracking-tighter block mb-1 group-hover:text-bleu-accent transition-colors">
                                    Ryan, Sales Executive
                                </span>
                                <span className="text-base text-bleu-nuit/70 font-medium leading-relaxed">
                                    Flies 3 days a week. Lost 120 lbs. Calls it the most sustainable thing he's ever done.
                                </span>
                            </div>

                            <div className="pl-6 border-l-4 border-bleu-nuit group hover:border-bleu-accent transition-colors duration-300">
                                <span className="text-xl md:text-2xl text-bleu-nuit font-black uppercase tracking-tighter block mb-1 group-hover:text-bleu-accent transition-colors">
                                    Adrian, CFO
                                </span>
                                <span className="text-base text-bleu-nuit/70 font-medium leading-relaxed">
                                    Reversed 20 years of neglect. 12% body fat. Finally hit a single-digit handicap.
                                </span>
                            </div>

                            <div className="pl-6 border-l-4 border-bleu-nuit group hover:border-bleu-accent transition-colors duration-300">
                                <span className="text-xl md:text-2xl text-bleu-nuit font-black uppercase tracking-tighter block mb-1 group-hover:text-bleu-accent transition-colors">
                                    Drew, Entrepreneur
                                </span>
                                <span className="text-base text-bleu-nuit/70 font-medium leading-relaxed">
                                    2 little kids. Down 34 lbs. Rebuilt his body, his stress response, and his identity.
                                </span>
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
                        <h3 className="text-2xl md:text-5xl font-black uppercase tracking-tighter text-bleu-nuit leading-tight mb-4">
                            These guys didn't <br className="md:hidden" /> find more time.
                        </h3>
                        <p className="text-xl md:text-3xl font-bold text-bleu-accent uppercase tracking-tighter">
                            They fixed a broken system.
                        </p>
                    </div>
                    {/* Masonry Grid */}
                    <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((i) => (
                            <div key={i} className="break-inside-avoid">
                                <Image
                                    src={`/images/briefing/dm${i}.jpg`}
                                    alt={`Client transformation result ${i} - Executive Athlete coaching testimonial`}
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
        </main>
    );
}
