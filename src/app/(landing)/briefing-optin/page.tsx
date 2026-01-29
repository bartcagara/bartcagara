import { OptinForm } from "@/components/newsletter/OptinForm";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Executive Athlete Briefing | Weekly Newsletter for Former-Athlete Executives",
    description: "No basic fitness tips. Just real stories from coaching former-athlete execs. One raw, unfiltered email every Sunday. Read in 5 minutes.",
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
        description: "For former athletes who traded their health for a career. Real stories and insights from coaching former-athlete execs. Every Sunday.",
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
        description: "For former athletes who traded their health for a career. Real stories from coaching former-athlete execs. Every Sunday.",
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
                        {/* HEADLINE */}
                        <h1 className="text-[2.75rem] md:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.9] text-white mb-6 md:mb-8">
                            Executive <br />
                            Athlete <br />
                            <span className="text-bleu-accent">Briefing</span>
                        </h1>
                        {/* SUBHEAD */}
                        <p className="text-lg md:text-xl text-bleu-fumee/90 font-medium leading-relaxed mb-8 md:mb-10">
                            For former athletes who traded their health for a career.
                        </p>
                        {/* BODY COPY */}
                        <p className="text-base md:text-lg text-white/80 font-medium leading-relaxed mb-4">
                            No basic fitness tips. No 5-minute workouts. No high-protein recipes.
                        </p>
                        <p className="text-base md:text-lg text-white/80 font-medium leading-relaxed mb-6 md:mb-8">
                            Just real stories and insights from coaching former-athlete execs like:
                        </p>
                        {/* CLIENT STORIES */}
                        <ul className="space-y-4 mb-8 md:mb-10">
                            <li className="text-sm md:text-base text-white/70 leading-relaxed pl-4 border-l-2 border-bleu-accent/50">
                                <span className="text-white font-bold">Ryan, Sales Executive,</span> flies 3 days a week. Lost 120 lbs. Calls it the most sustainable thing he&apos;s ever done.
                            </li>
                            <li className="text-sm md:text-base text-white/70 leading-relaxed pl-4 border-l-2 border-bleu-accent/50">
                                <span className="text-white font-bold">Adrian, CFO.</span> Reversed 20 years of neglect. 12% body fat. Finally hit a single-digit handicap.
                            </li>
                            <li className="text-sm md:text-base text-white/70 leading-relaxed pl-4 border-l-2 border-bleu-accent/50">
                                <span className="text-white font-bold">Drew, entrepreneur.</span> Rebuilt his body, his identity, and completely rewired his stress response.
                            </li>
                        </ul>
                        {/* CLOSING LINE */}
                        <p className="text-lg md:text-xl text-white font-bold">
                            One raw, unfiltered email. Every Sunday.
                        </p>
                    </div>
                </div>

                {/* Right Column: Form */}
                <div className="w-full md:w-1/2 bg-gray-50 flex flex-col justify-center px-6 py-12 md:p-16 lg:p-24">
                    <div className="max-w-md w-full">
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
                            They built a better system.
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
