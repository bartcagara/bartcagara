import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { COPY, DISRUPTION, RESULTS, RESULT_TYPES, type QuizResult } from "@/data/quiz";
import { QuizFrame } from "@/components/quiz/QuizFrame";
import { MicroHeading, PROSE, Para, ResultHeading, ThisWeek, fillBody } from "@/components/quiz/ResultParts";

/**
 * One plain page per result (/quiz/calm-week and so on) for the follow-up
 * emails to link to: the type's full text without his personal lines.
 * Hidden from search engines.
 */
export const dynamicParams = false;

export function generateStaticParams() {
    return RESULT_TYPES.map((t) => ({ type: RESULTS[t].slug }));
}

function findResult(slug: string): QuizResult | undefined {
    return RESULT_TYPES.map((t) => RESULTS[t]).find((r) => r.slug === slug);
}

export async function generateMetadata({ params }: { params: Promise<{ type: string }> }): Promise<Metadata> {
    const { type } = await params;
    const result = findResult(type);
    if (!result) return {};
    return {
        title: `${result.name} | The Restart Quiz`,
        description: result.headline,
        alternates: { canonical: `/quiz/${result.slug}` },
        robots: { index: false, follow: false },
        openGraph: { images: [{ url: "/images/og-quiz.jpg", width: 1200, height: 630 }] },
        twitter: { card: "summary_large_image", images: ["/images/og-quiz.jpg"] },
    };
}

export default async function QuizResultPage({ params }: { params: Promise<{ type: string }> }) {
    const { type } = await params;
    const result = findResult(type);
    if (!result) notFound();

    // No answers here, so the general wording of the one slot inside the text.
    const body = fillBody(result, DISRUPTION.travels);

    return (
        <QuizFrame>
            <article>
                <ResultHeading result={result} label={COPY.typePageLabel} />
                <section className="mt-10">
                    <MicroHeading>{COPY.goingOnHeading}</MicroHeading>
                    <div className={PROSE}>
                        {body.map((p) => (
                            <Para key={p} text={p} />
                        ))}
                    </div>
                </section>
                <div className="mt-10">
                    <ThisWeek result={result} />
                </div>
            </article>
        </QuizFrame>
    );
}
