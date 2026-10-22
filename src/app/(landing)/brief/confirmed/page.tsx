import { CalendarEmbed } from "@/components/home/CalendarEmbed";
import type { Metadata } from "next";
import Image from "next/image";

const LINKEDIN_URL = "https://www.linkedin.com/in/bartcagara/";

export const metadata: Metadata = {
    title: "Confirmed | Founder's Fitness Brief",
    robots: {
        index: false,
        follow: false
    }
};

/**
 * Where the Confirm button in welcome email #1 lands. Not the opt-in's own
 * success state (that stays in OptinForm). Copy is Bart's, word for word.
 */
export default function BriefConfirmedPage() {
    return (
        <div className="min-h-screen flex flex-col bg-gray-50 text-bleu-nuit">
            <header className="px-6 md:px-12">
                <div className="max-w-6xl mx-auto h-[72px] md:h-24 flex items-center justify-between border-b-2 border-bleu-nuit">
                    {/* SectionBadge's label with a 2px shadow instead of 4px, as on /brief */}
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
                <div className="max-w-6xl mx-auto">
                    <div className="max-w-[600px] mx-auto">
                        <h1 className="text-[clamp(2.25rem,11vw,3rem)] md:text-[4rem] font-black tracking-[-0.04em] leading-[0.98]">
                            Confirmed.
                        </h1>

                        <section className="mt-10 md:mt-12" aria-labelledby="whats-next">
                            <h2 id="whats-next" className="text-sm font-bold uppercase tracking-[-0.02em] text-bleu-nuit/70">
                                Here&apos;s what&apos;s next:
                            </h2>
                            <ul className="mt-4 space-y-3 text-lg md:text-xl leading-[1.45] text-pretty font-medium text-bleu-nuit/75">
                                <li className="flex gap-3">
                                    <span aria-hidden="true" className="mt-[0.6em] shrink-0 w-2 h-2 bg-bleu-accent" />
                                    <span>Founder&apos;s Fitness Brief lands in your inbox every Sunday.</span>
                                </li>
                                <li className="flex gap-3">
                                    <span aria-hidden="true" className="mt-[0.6em] shrink-0 w-2 h-2 bg-bleu-accent" />
                                    <span>
                                        I post on{" "}
                                        <a
                                            href={LINKEDIN_URL}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="font-bold text-bleu-nuit underline decoration-2 decoration-bleu-accent underline-offset-4 hover:text-bleu-accent"
                                        >
                                            LinkedIn
                                        </a>{" "}
                                        a few times a week.
                                    </span>
                                </li>
                            </ul>
                        </section>

                        <section className="mt-12 pt-10 md:mt-16 md:pt-14 border-t-2 border-bleu-nuit" aria-labelledby="hands-on-help">
                            <h2 id="hands-on-help" className="text-[clamp(1.75rem,8vw,2.25rem)] md:text-[2.75rem] font-black tracking-[-0.04em] leading-[1.02] text-balance">
                                Looking for more{" "}
                                <span className="text-bleu-accent">hands-on help?</span>
                            </h2>
                            <div className="mt-6 md:mt-8 space-y-5 text-lg md:text-xl leading-[1.45] text-pretty font-medium text-bleu-nuit/75">
                                <p>
                                    <strong className="font-bold text-bleu-nuit">I coach founders who played sport and whose body no longer matches the man they are.</strong>
                                </p>
                                <p>
                                    It&apos;s six months, one-to-one. Training that fits your schedule. Food that fits how you already eat, restaurants and travel included. Built to keep working after we&apos;re done.
                                </p>
                                <p>
                                    If you&apos;ve started over more times than you can count, and the business eats every plan you try, this is for you.
                                </p>
                                <p>
                                    Book a Restart Audit below. In 45 minutes we&apos;ll see where it keeps breaking and whether we&apos;re a good fit.
                                </p>
                            </div>
                        </section>
                    </div>

                    <div id="book-call" className="mt-6 md:mt-4">
                        <CalendarEmbed />
                    </div>
                </div>
            </div>
        </div>
    );
}
