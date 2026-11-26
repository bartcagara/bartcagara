import Image from "next/image";
import Link from "next/link";
import { COPY } from "@/data/quiz";

/**
 * /brief's header and quiet footer around the quiz and its result pages:
 * nothing new, the same label, name, headshot and navy rule.
 */
export function QuizFrame({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen flex flex-col bg-gray-50 text-bleu-nuit">
            <header className="px-6 md:px-12">
                <div className="max-w-6xl mx-auto h-[72px] md:h-24 [@media(max-height:500px)]:h-16 flex items-center justify-between border-b-2 border-bleu-nuit">
                    {/* SectionBadge's label with a 2px shadow instead of 4px, as on /brief */}
                    <span className="inline-block whitespace-nowrap bg-bleu-accent text-white font-mono text-xs uppercase tracking-normal px-3 py-1 shadow-[2px_2px_0_0_var(--bleu-nuit)]">{COPY.headerLabel}</span>
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

            <div className="flex-1 px-6 md:px-12 pt-6 pb-16 md:pt-12 md:pb-20">
                <div className="max-w-[640px] mx-auto">{children}</div>
            </div>

            {/* /brief's quiet footer line */}
            <footer className="px-6 md:px-12">
                <div className="max-w-6xl mx-auto py-6 flex items-center justify-between gap-6 border-t border-bleu-nuit/10 text-xs text-bleu-nuit/50">
                    <span>&copy; {new Date().getFullYear()} Dad with Style OÜ</span>
                    <nav aria-label="Legal" className="flex items-center gap-5">
                        <Link href="/privacy" className="hover:text-bleu-nuit transition-colors">Privacy</Link>
                        <Link href="/terms" className="hover:text-bleu-nuit transition-colors">Terms</Link>
                    </nav>
                </div>
            </footer>
        </div>
    );
}
