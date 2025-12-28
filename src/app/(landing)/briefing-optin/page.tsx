import { OptinForm } from "@/components/newsletter/OptinForm";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Executive Athlete Briefing | Bart Cagara",
    description: "Every Sunday, get one client-tested insight to absorb chaos, reverse aging, and stay dangerous.",
};

export default function BriefingOptinPage() {
    return (
        <main className="min-h-screen bg-white flex flex-col">
            <div className="flex flex-col md:flex-row min-h-screen">
                {/* Left Column: Heading Only */}
                {/* FIX: Consistent padding with right column (px-6 mobile, p-12 desktop) without forcing different vertical centering alignment */}
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
                            Most fitness advice assumes you have time. <br className="hidden md:block" />
                            <span className="text-white block mt-1 md:inline md:mt-0">This briefing assumes you don't.</span>
                        </p>
                    </div>
                </div>

                {/* Right Column: Content & Form */}
                <div className="w-full md:w-1/2 bg-gray-50 flex flex-col justify-center px-6 py-12 md:p-16 lg:p-24">
                    <div className="max-w-md w-full">
                        {/* INTRO COPY */}
                        <p className="text-lg md:text-xl text-bleu-nuit font-medium mb-10 leading-relaxed">
                            Every Sunday, get one client-tested insight to:
                        </p>

                        {/* BULLETS - Tighter vertical rhythm */}
                        <div className="space-y-5 mb-12">
                            <div className="flex gap-4 items-start group">
                                <span className="text-bleu-accent font-black text-xl leading-none mt-1 group-hover:translate-x-1 transition-transform">//</span>
                                <div>
                                    <span className="text-bleu-nuit font-black uppercase tracking-tight text-base block mb-1">WIN THE ROAD GAME:</span>
                                    <span className="text-bleu-nuit/80 font-medium text-base leading-snug">Travel without regression. Maintain peak condition in any time zone.</span>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start group">
                                <span className="text-bleu-accent font-black text-xl leading-none mt-1 group-hover:translate-x-1 transition-transform">//</span>
                                <div>
                                    <span className="text-bleu-nuit font-black uppercase tracking-tight text-base block mb-1">OWN THE MENU:</span>
                                    <span className="text-bleu-nuit/80 font-medium text-base leading-snug">Master the business dinner. Stay lean without being "the diet guy."</span>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start group">
                                <span className="text-bleu-accent font-black text-xl leading-none mt-1 group-hover:translate-x-1 transition-transform">//</span>
                                <div>
                                    <span className="text-bleu-nuit font-black uppercase tracking-tight text-base block mb-1">OPERATE LIKE A VETERAN:</span>
                                    <span className="text-bleu-nuit/80 font-medium text-base leading-snug">Stop the "Rookie Grind." Execute with precision.</span>
                                </div>
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
                            These guys didn't <br className="md:hidden" /> "find more time."
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
                                    alt="Client result"
                                    width={400}
                                    height={500}
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
