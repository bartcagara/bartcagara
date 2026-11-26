"use client";

import { LayoutGrid } from "lucide-react";
import { BUTTON_BASE, BUTTON_SIZE, BUTTON_VARIANT, BUTTON_ICON, ICON_STROKE } from "@/components/ui/buttonStyle";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
    COPY,
    DISRUPTION,
    HURT,
    LUNCH,
    LAST_RUN_LINES,
    QUESTIONS,
    QUIZ_KIT_FORM,
    RESULTS,
    STAKE_LINES,
    STAKE_PAIN,
    YEARS_LINES,
    YEARS_VALUE,
    type AnswerLetter,
} from "@/data/quiz";
import { scoreQuiz, type QuizScore } from "@/lib/quiz-score";
import { usePostHogClient } from "@/lib/posthog-context";
import { OptinForm } from "@/components/newsletter/OptinForm";
import { MicroHeading, PROSE, Para, ResultHeading, ThisWeek, fillBody } from "./ResultParts";

/** 0 is the start screen, 1 to 8 the questions, 9 the result. */
const RESULT_STEP = QUESTIONS.length + 1;

type HistoryState = { quizStep?: number } | null;

/**
 * The quiz: answers live in memory only (nothing is stored on his device, a
 * refresh starts over). Each screen pushes a history entry, so the phone's
 * back button goes back one question, not off the page. The address stays
 * /quiz (with whatever UTMs he came with) the whole way.
 */
export function RestartQuiz() {
    const posthog = usePostHogClient();
    const [step, setStep] = useState(0);
    const [answers, setAnswers] = useState<AnswerLetter[]>([]);
    const [gated, setGated] = useState(false);

    const stepRef = useRef(step);
    const answersRef = useRef(answers);
    const posthogRef = useRef(posthog);
    useEffect(() => {
        stepRef.current = step;
        answersRef.current = answers;
        posthogRef.current = posthog;
    });

    const score: QuizScore | null = useMemo(
        () => (answers.length === QUESTIONS.length ? scoreQuiz(answers) : null),
        [answers]
    );

    // The start screen is this page's first history entry.
    useEffect(() => {
        window.history.replaceState({ ...(window.history.state ?? {}), quizStep: 0 }, "");

        const onPopState = (e: PopStateEvent) => {
            const wanted = (e.state as HistoryState)?.quizStep ?? 0;
            const answered = answersRef.current.length;
            // Never show a question past the first unanswered one.
            const next = Math.min(wanted, answered === QUESTIONS.length ? RESULT_STEP : answered + 1);
            if (next < stepRef.current) {
                posthogRef.current?.capture("quiz_back", { step: stepRef.current });
            }
            setStep(next);
        };
        window.addEventListener("popstate", onPopState);
        return () => window.removeEventListener("popstate", onPopState);
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [step]);

    // quiz_viewed: once, when the start screen shows (PostHog loads after paint).
    const viewedSent = useRef(false);
    useEffect(() => {
        if (step === 0 && posthog && !viewedSent.current) {
            viewedSent.current = true;
            posthog.capture("quiz_viewed");
        }
    }, [step, posthog]);

    // quiz_result_viewed: once per result shown.
    const resultSent = useRef<string | null>(null);
    useEffect(() => {
        if (step !== RESULT_STEP || !score || !posthog) return;
        const key = answers.join("");
        if (resultSent.current === key) return;
        resultSent.current = key;
        posthog.capture("quiz_result_viewed", { primary: score.primary });
    }, [step, score, answers, posthog]);

    const goTo = useCallback((next: number) => {
        window.history.pushState({ ...(window.history.state ?? {}), quizStep: next }, "");
        setStep(next);
    }, []);

    function start() {
        posthog?.capture("quiz_started");
        goTo(1);
    }

    function answer(letter: AnswerLetter) {
        const index = step - 1;
        const nextAnswers = [...answers.slice(0, index), letter];
        setAnswers(nextAnswers);
        posthog?.capture("quiz_question_answered", {
            question: QUESTIONS[index].id,
            answer: letter,
            step,
        });

        if (nextAnswers.length === QUESTIONS.length) {
            const result = scoreQuiz(nextAnswers);
            // Stamps the type on every later event this visit, call_booked included.
            posthog?.register({ quiz_type: result.primary });
            posthog?.capture("quiz_completed", {
                primary: result.primary,
                secondary: result.secondary,
                tie_broken: result.tieBroken,
                weak_signal: result.weakSignal,
                stake: result.stake,
                years: result.years,
            });
            goTo(RESULT_STEP);
        } else {
            goTo(step + 1);
        }
    }

    if (step === 0) return <StartScreen onStart={start} />;

    if (step === RESULT_STEP && score) {
        return (
            <ResultScreen
                score={score}
                gated={gated}
                onGated={() => {
                    posthog?.capture("quiz_gate_submitted", { primary: score.primary });
                    setGated(true);
                }}
            />
        );
    }

    const question = QUESTIONS[step - 1];
    if (!question) return <StartScreen onStart={start} />;

    return (
        <div>
            <div className="flex items-center justify-between text-sm font-bold">
                <button
                    type="button"
                    onClick={() => window.history.back()}
                    className="-ml-1 px-1 py-2 text-bleu-nuit/70 underline underline-offset-2 hover:text-bleu-accent transition-colors"
                >
                    {COPY.back}
                </button>
                <span className="text-bleu-nuit/70" aria-live="polite">
                    {step} of {QUESTIONS.length}
                </span>
            </div>
            <div
                className="mt-2 h-1.5 w-full bg-bleu-nuit"
                role="progressbar"
                aria-valuemin={0}
                aria-valuemax={QUESTIONS.length}
                aria-valuenow={step}
                aria-label="Progress"
            >
                <div className="h-full bg-bleu-accent transition-[width] duration-300" style={{ width: `${(step / QUESTIONS.length) * 100}%` }} />
            </div>

            <h1 className="mt-8 md:mt-10 text-[clamp(1.625rem,7.5vw,2.25rem)] md:text-[2.5rem] font-black tracking-[-0.04em] leading-[1.05] text-balance">
                {question.text}
            </h1>

            <ul className="mt-8 space-y-4">
                {question.answers.map((a) => (
                    <li key={`${question.id}-${a.letter}`}>
                        <button
                            type="button"
                            onClick={() => answer(a.letter)}
                            className="w-full min-h-14 px-5 py-4 text-left bg-white text-bleu-nuit text-lg font-bold leading-snug border-2 border-bleu-nuit shadow-brutal-sm transition-brutal hover:shadow-none hover-translate-brutal focus-visible:outline-2 focus-visible:outline-bleu-accent focus-visible:outline-offset-2"
                        >
                            {a.text}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

function StartScreen({ onStart }: { onStart: () => void }) {
    return (
        <div className="md:pt-2">
            <h1 className="text-[clamp(2rem,9.5vw,3rem)] md:text-[3.25rem] font-black tracking-[-0.04em] leading-[0.98] text-balance md:[text-wrap:wrap]">
                {/* One sentence per line, the second in the accent blue, as on the share card. */}
                {COPY.startHeadline.split(/(?<=\.) /).map((sentence, i) => (
                    <span key={sentence} className={`block text-balance ${i > 0 ? "text-bleu-accent" : ""}`}>
                        {sentence}
                    </span>
                ))}
            </h1>
            <p className="mt-3 md:mt-5 text-[1.0625rem] md:text-xl leading-[1.45] text-pretty font-medium text-bleu-nuit/75">{COPY.startIntro}</p>
            {/* The four types as cards, like the homepage's types section. */}
            <ol className="mt-3 md:mt-5 grid grid-cols-2 gap-3 md:gap-4">
                {Object.values(RESULTS).map((type, i) => (
                    <li key={type.name} className="flex items-center gap-2.5 border-2 border-bleu-nuit bg-white shadow-brutal-md px-3 py-2 md:px-4 md:py-3">
                        <span className="text-xs md:text-sm font-bold text-bleu-accent">0{i + 1}</span>
                        <span className="font-black tracking-[-0.03em] leading-[1.15] text-base md:text-lg">{type.name}</span>
                    </li>
                ))}
            </ol>
            <p className="mt-3 md:mt-5 text-[1.0625rem] md:text-xl leading-[1.45] text-pretty font-medium text-bleu-nuit/75">{COPY.startAfter}</p>
            <button
                type="button"
                onClick={onStart}
                className={`mt-5 md:mt-7 ${BUTTON_BASE} ${BUTTON_SIZE.md} ${BUTTON_VARIANT.dark}`}
            >
                <LayoutGrid className={BUTTON_ICON.md} strokeWidth={ICON_STROKE} aria-hidden="true" />
                {COPY.startButton}
            </button>
        </div>
    );
}

function ResultScreen({ score, gated, onGated }: { score: QuizScore; gated: boolean; onGated: () => void }) {
    const posthog = usePostHogClient();
    const result = RESULTS[score.primary];
    const hurt = score.lastRun === HURT.lastRun;
    const body = fillBody(result, score.rarelyAway ? DISRUPTION.rarelyAway : DISRUPTION.travels).map((p) =>
        (hurt ? p.replace(HURT.bodyFrom, HURT.bodyTo) : p)
    ).map((p) => (score.lunch === LUNCH.answer ? p.replace(LUNCH.bodyFrom, LUNCH.bodyTo) : p));

    // quiz_fix_viewed when "This week" shows.
    const fixSent = useRef(false);
    useEffect(() => {
        if (gated && posthog && !fixSent.current) {
            fixSent.current = true;
            posthog.capture("quiz_fix_viewed", { primary: score.primary });
        }
    }, [gated, posthog, score.primary]);

    return (
        <article>
            <ResultHeading result={result} label={COPY.resultLabel} />

            <section className="mt-10">
                <MicroHeading>{COPY.toldMeHeading}</MicroHeading>
                <div className={PROSE}>
                    <p>
                        {YEARS_LINES[score.years]} {LAST_RUN_LINES[score.lastRun]}
                    </p>
                    <p>{STAKE_LINES[score.stake]}</p>
                </div>
            </section>

            <section className="mt-10">
                <MicroHeading>{COPY.goingOnHeading}</MicroHeading>
                <div className={PROSE}>
                    {body.map((p) => (
                        <Para key={p} text={p} />
                    ))}
                </div>
            </section>

            <div className="mt-10">
                {gated ? (
                    <ThisWeek result={result} />
                ) : (
                    <Gate score={score} onGated={onGated} />
                )}
            </div>
        </article>
    );
}

/** The light blue box with the navy bar on top, as at the foot of every newsletter issue. */
function Gate({ score, onGated }: { score: QuizScore; onGated: () => void }) {
    const posthog = usePostHogClient();
    const boxRef = useRef<HTMLDivElement>(null);
    const shownSent = useRef(false);

    useEffect(() => {
        const box = boxRef.current;
        if (!box || !posthog || shownSent.current || typeof IntersectionObserver === "undefined") return;
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries.some((e) => e.isIntersecting) && !shownSent.current) {
                    shownSent.current = true;
                    posthog.capture("quiz_gate_shown", { primary: score.primary });
                    observer.disconnect();
                }
            },
            { threshold: 0.5 }
        );
        observer.observe(box);
        return () => observer.disconnect();
    }, [posthog, score.primary]);

    return (
        <div ref={boxRef} className="bg-bleu-fumee border-t-4 border-bleu-nuit px-5 py-6 md:px-8 md:py-8">
            <h2 className="text-xl md:text-2xl font-black tracking-[-0.03em] leading-tight">{COPY.gateHeading}</h2>
            <p className="mt-3 text-base md:text-lg leading-[1.45] text-pretty font-medium text-bleu-nuit/75">
                {COPY.gateLine.replace("{name}", RESULTS[score.primary].name).replace("{end}", RESULTS[score.primary].gateEnd)}
            </p>
            <div className="mt-6">
                <OptinForm
                    layout="joined"
                    firstName
                    submitLabel={COPY.gateButton}
                    kitForm={QUIZ_KIT_FORM}
                    hiddenFields={{
                        quiz_result: score.primary,
                        quiz_second: score.secondary ?? "none",
                        quiz_stake: STAKE_PAIN[score.stake],
                        quiz_years: YEARS_VALUE[score.years],
                        // E1 reads this: "proper" swaps its "you don't stop to eat" paragraph (Bart, 24 Nov).
                        quiz_lunch: score.lunch === LUNCH.answer ? "proper" : "light",
                    }}
                    onSuccess={onGated}
                    successContent={null}
                    note={<p className="mt-4 text-sm leading-normal text-pretty text-bleu-nuit/60">{COPY.gateNote}</p>}
                />
            </div>
        </div>
    );
}
