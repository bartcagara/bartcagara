import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Got it | Founder's Fitness Brief",
    robots: {
        index: false,
        follow: false
    }
};

/**
 * Where the "Not interested in this right now?" line at the bottom of a sales
 * sequence email lands (quiz follow-ups, call pick-up). Clicking the line tags
 * the reader in Kit, which stops the rest of that sequence; the Brief keeps coming.
 */
export default function BriefPausedPage() {
    return (
        <div className="min-h-screen flex flex-col bg-gray-50 text-bleu-nuit">
            <header className="px-6 md:px-12">
                <div className="max-w-6xl mx-auto h-[72px] md:h-24 flex items-center justify-between border-b-2 border-bleu-nuit">
                    <span className="inline-block whitespace-nowrap bg-bleu-accent text-white font-mono text-xs uppercase tracking-normal px-3 py-1 shadow-[2px_2px_0_0_var(--bleu-nuit)]">Founder&apos;s Fitness Brief</span>
                    <span className="flex items-center gap-3 text-sm font-bold uppercase tracking-[-0.02em]">
                        <span className="hidden sm:flex flex-col items-end gap-1">
                            Bart Cagara
                            <span className="text-xs font-medium normal-case tracking-normal text-bleu-nuit/60">Fitness Coach to Founders</span>
                        </span>
                        <Image
                            src="/images/bart-headshot.jpg"
                            alt="Bart Cagara"
                            width={224}
                            height={224}
                            priority
                            className="w-10 h-10 rounded-full object-cover border-2 border-bleu-nuit"
                        />
                    </span>
                </div>
            </header>

            <div className="flex-1 px-6 md:px-12 pt-10 pb-20 md:pt-16 md:pb-24">
                <div className="max-w-[600px] mx-auto">
                    <h1 className="text-[clamp(2.25rem,11vw,3rem)] md:text-[4rem] font-black tracking-[-0.04em] leading-[0.98]">
                        Got it.
                    </h1>
                    <div className="mt-8 md:mt-10 space-y-5 text-lg md:text-xl leading-[1.45] text-pretty font-medium text-bleu-nuit/75">
                        <p>I&apos;ve paused these emails.</p>
                        <p>You&apos;ll still get the Brief every Thursday.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
