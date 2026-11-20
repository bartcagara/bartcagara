import { COPY, type QuizResult } from "@/data/quiz";

/** Body copy, as on /brief/confirmed. */
export const PROSE = "space-y-5 text-lg md:text-xl leading-[1.45] text-pretty font-medium text-bleu-nuit/75";

/** Small label, the name, the headline. */
export function ResultHeading({ result }: { result: QuizResult }) {
    return (
        <>
            <p className="text-sm font-bold uppercase tracking-[-0.02em] text-bleu-nuit/70">{COPY.resultLabel}</p>
            <h1 className="mt-3 text-[clamp(2.25rem,11vw,3rem)] md:text-[4rem] font-black tracking-[-0.04em] leading-[0.98] text-balance">
                {result.name}
            </h1>
            <p className="mt-4 text-[clamp(1.375rem,6vw,1.75rem)] md:text-[2rem] font-black tracking-[-0.03em] leading-[1.1] text-bleu-accent text-balance">
                {result.headline}
            </p>
        </>
    );
}

/** "This week", the step behind the gate. */
export function ThisWeek({ result, note }: { result: QuizResult; note?: React.ReactNode }) {
    return (
        <section className="border-t-2 border-bleu-nuit pt-8" aria-labelledby="this-week">
            <h2 id="this-week" className="text-[clamp(1.75rem,8vw,2.25rem)] md:text-[2.75rem] font-black tracking-[-0.04em] leading-[1.02]">
                {COPY.thisWeekHeading}
            </h2>
            {note}
            <div className={`mt-6 ${PROSE}`}>
                {result.thisWeek.map((p) => (
                    <p key={p}>{p}</p>
                ))}
            </div>
        </section>
    );
}

/** Fills the result's body slots. */
export function fillBody(result: QuizResult, disruption: string): string[] {
    return result.body.map((p) => p.replace("{disruption}", disruption));
}
