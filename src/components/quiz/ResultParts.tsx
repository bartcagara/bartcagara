import { COPY, type QuizResult } from "@/data/quiz";

/** Body copy, as on /brief/confirmed. */
export const PROSE = "space-y-5 text-lg md:text-xl leading-[1.45] text-pretty font-medium text-bleu-nuit/75";

/** The small label style of /brief/confirmed ("What's next"). */
const MICRO = "text-sm font-bold uppercase tracking-[-0.02em] text-bleu-nuit/70";

/** A short plain heading over one part of the result. */
export function MicroHeading({ children }: { children: React.ReactNode }) {
    return <h2 className={`${MICRO} mb-3`}>{children}</h2>;
}

/** Splits a line on **double stars** into plain and bold parts. */
export function splitEmphasis(text: string): { text: string; bold: boolean }[] {
    return text
        .split(/(\*\*[^*]+\*\*)/)
        .filter((part) => part !== "")
        .map((part) =>
            part.startsWith("**") && part.endsWith("**") && part.length > 4
                ? { text: part.slice(2, -2), bold: true }
                : { text: part, bold: false }
        );
}

/** The line without its stars, as the reader hears it. */
export function plainText(text: string): string {
    return splitEmphasis(text)
        .map((p) => p.text)
        .join("");
}

/** One paragraph, with its **double-star** parts in bold, as on /brief/confirmed. */
export function Para({ text }: { text: string }) {
    return (
        <p>
            {splitEmphasis(text).map((part, i) =>
                part.bold ? (
                    <strong key={i} className="font-bold text-bleu-nuit">
                        {part.text}
                    </strong>
                ) : (
                    part.text
                )
            )}
        </p>
    );
}

/** Small label, the name, the headline. */
export function ResultHeading({ result }: { result: QuizResult }) {
    return (
        <>
            <p className={MICRO}>{COPY.resultLabel}</p>
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
export function ThisWeek({ result, note, lines }: { result: QuizResult; note?: React.ReactNode; lines?: string[] }) {
    return (
        <section className="border-t-2 border-bleu-nuit pt-8" aria-labelledby="this-week">
            <h2 id="this-week" className="text-[clamp(1.75rem,8vw,2.25rem)] md:text-[2.75rem] font-black tracking-[-0.04em] leading-[1.02]">
                {COPY.thisWeekHeading}
            </h2>
            {note}
            <div className={`mt-6 ${PROSE}`}>
                {(lines ?? result.thisWeek).map((p) => (
                    <Para key={p} text={p} />
                ))}
            </div>
        </section>
    );
}

/** Fills the result's body slots. */
export function fillBody(result: QuizResult, disruption: string): string[] {
    return result.body.map((p) => p.replace("{disruption}", disruption));
}
