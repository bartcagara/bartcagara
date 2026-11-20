import {
  QUESTIONS,
  Q,
  TIE_ORDER,
  SECONDARY_MIN_POINTS,
  SECONDARY_MIN_SHARE,
  WEAK_SIGNAL_BELOW,
  RARELY_AWAY_ANSWER,
  type AnswerLetter,
  type Points,
  type QuizType,
} from "@/data/quiz";

export interface QuizScore {
  primary: QuizType;
  /** Runner-up, only when it clears the secondary rule. */
  secondary: QuizType | null;
  totals: Record<QuizType, number>;
  /** The top score was shared and a tie-breaker picked the winner. */
  tieBroken: boolean;
  /** The winner has under WEAK_SIGNAL_BELOW points. */
  weakSignal: boolean;
  /** Q1 answer: how long he has been restarting. */
  years: AnswerLetter;
  /** Q2 answer: what ended the last run. */
  lastRun: AnswerLetter;
  /** Q8 answer: what bothers him most. */
  stake: AnswerLetter;
  /** Q5 said he is rarely away from home. */
  rarelyAway: boolean;
}

function pointsFor(questionIndex: number, letter: AnswerLetter): Points {
  return QUESTIONS[questionIndex].answers.find((a) => a.letter === letter)?.points ?? {};
}

/** The type an answer points to most (Q2 e gives A2, C1: A). Null if it scores nothing. */
function leadingType(points: Points): QuizType | null {
  let best: QuizType | null = null;
  for (const type of TIE_ORDER) {
    const p = points[type] ?? 0;
    if (p > 0 && (best === null || p > (points[best] ?? 0))) best = type;
  }
  return best;
}

/**
 * Works out the result from the eight answers (one letter per question, in
 * order). Pure: same answers, same result.
 */
export function scoreQuiz(answers: AnswerLetter[]): QuizScore {
  if (answers.length !== QUESTIONS.length) {
    throw new Error(`Expected ${QUESTIONS.length} answers, got ${answers.length}`);
  }

  const totals: Record<QuizType, number> = { C: 0, A: 0, F: 0, E: 0 };
  answers.forEach((letter, i) => {
    const points = pointsFor(i, letter);
    for (const type of TIE_ORDER) totals[type] += points[type] ?? 0;
  });

  const top = Math.max(...TIE_ORDER.map((t) => totals[t]));
  const tied = TIE_ORDER.filter((t) => totals[t] === top);

  // Tie-breakers: the type of his Q2 answer, then of his Q3 answer, then TIE_ORDER.
  let primary: QuizType = tied[0];
  if (tied.length > 1) {
    const byLastRun = leadingType(pointsFor(Q.lastRun, answers[Q.lastRun]));
    const byRestart = leadingType(pointsFor(Q.restart, answers[Q.restart]));
    if (byLastRun && tied.includes(byLastRun)) primary = byLastRun;
    else if (byRestart && tied.includes(byRestart)) primary = byRestart;
    else primary = tied[0]; // tied is already in TIE_ORDER
  }

  // Runner-up: highest of the rest, ties going by TIE_ORDER.
  const rest = TIE_ORDER.filter((t) => t !== primary);
  const runnerUp = rest.reduce((best, t) => (totals[t] > totals[best] ? t : best), rest[0]);
  const secondary =
    totals[runnerUp] >= SECONDARY_MIN_POINTS && totals[runnerUp] >= totals[primary] * SECONDARY_MIN_SHARE
      ? runnerUp
      : null;

  return {
    primary,
    secondary,
    totals,
    tieBroken: tied.length > 1,
    weakSignal: totals[primary] < WEAK_SIGNAL_BELOW,
    years: answers[Q.years],
    lastRun: answers[Q.lastRun],
    stake: answers[Q.stake],
    rarelyAway: answers[Q.away] === RARELY_AWAY_ANSWER,
  };
}
