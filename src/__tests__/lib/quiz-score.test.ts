import { scoreQuiz } from '@/lib/quiz-score';
import type { AnswerLetter } from '@/data/quiz';

/** Q1, then Q2 to Q7 as a string, then Q8: `a('c', 'aaacca', 'b')`. */
function a(q1: string, middle: string, q8: string): AnswerLetter[] {
  return [q1, ...middle.split(''), q8] as AnswerLetter[];
}

describe('scoreQuiz: clean cases', () => {
  it('Calm-Week Plan: trip ended it, waits for calm, routine stops away, works late, calm stretch', () => {
    const r = scoreQuiz(a('c', 'acbadc', 'a'));
    expect(r.primary).toBe('C');
    expect(r.totals.C).toBe(18);
    expect(r.secondary).toBeNull();
    expect(r.tieBroken).toBe(false);
    expect(r.weakSignal).toBe(false);
  });

  it('All In, All Out scores its maximum of 18', () => {
    const r = scoreQuiz(a('b', 'bacbcd', 'e'));
    expect(r.primary).toBe('A');
    expect(r.totals.A).toBe(18);
    expect(r.secondary).toBeNull();
  });

  it('The Finish Line scores its maximum of 17', () => {
    const r = scoreQuiz(a('a', 'cbddea', 'd'));
    expect(r.primary).toBe('F');
    expect(r.totals.F).toBe(17);
    expect(r.secondary).toBeNull();
  });

  it('Running on Empty scores its maximum of 17', () => {
    const r = scoreQuiz(a('d', 'ddacae', 'c'));
    expect(r.primary).toBe('E');
    expect(r.totals.E).toBe(17);
    expect(r.secondary).toBeNull();
  });

  it('hands back the answers the result writes back to him', () => {
    const r = scoreQuiz(a('d', 'ddacee', 'b'));
    expect(r).toMatchObject({ years: 'd', lastRun: 'd', stake: 'b', rarelyAway: false });
    expect(scoreQuiz(a('a', 'acbedc', 'a')).rarelyAway).toBe(true);
  });

  it('refuses anything but eight answers', () => {
    expect(() => scoreQuiz(['a', 'b'] as AnswerLetter[])).toThrow();
  });
});

describe('scoreQuiz: tie-breakers', () => {
  it('a tie goes to the type of his "what ended your last good run" answer', () => {
    // C 8 (Q2 a, Q5 a), A 8 (Q3 a, Q4 c, Q6 c)
    const r = scoreQuiz(a('a', 'aacace', 'a'));
    expect(r.totals.C).toBe(8);
    expect(r.totals.A).toBe(8);
    expect(r.primary).toBe('C');
    expect(r.tieBroken).toBe(true);
    // The tied loser clears the secondary rule
    expect(r.secondary).toBe('A');
  });

  it('Q2 "hurt or sick" (A2, C1) breaks a tie toward All In, All Out', () => {
    // C 8 (Q2 e 1, Q3 c 3, Q5 a 4), A 8 (Q2 e 2, Q6 c 3, Q7 d 3)
    const r = scoreQuiz(a('a', 'eceacd', 'a'));
    expect(r.totals.C).toBe(8);
    expect(r.totals.A).toBe(8);
    expect(r.primary).toBe('A');
    expect(r.tieBroken).toBe(true);
  });

  it('when Q2 does not settle it, his "how do you start again" answer does', () => {
    // A 6 and E 6 tie; Q2 points to C (not tied); Q3 a points to A
    const r = scoreQuiz(a('a', 'aaacca', 'a'));
    expect(r.totals).toEqual({ C: 4, A: 6, F: 4, E: 6 });
    expect(r.primary).toBe('A');
    expect(r.tieBroken).toBe(true);
  });

  it('when neither settles it, the order is C, then A, then E, then F', () => {
    // E 7 and F 7 tie; Q2 points to C, Q3 to A: neither tied, so E before F
    const r = scoreQuiz(a('a', 'aaadaa', 'a'));
    expect(r.totals).toEqual({ C: 4, A: 3, F: 7, E: 7 });
    expect(r.primary).toBe('E');
    expect(r.tieBroken).toBe(true);
  });
});

describe('scoreQuiz: the secondary rule', () => {
  it('shows the runner-up with at least 6 points and at least half the winner', () => {
    // The composite case from the design: calm-week system, binges at night
    const r = scoreQuiz(a('c', 'acaaac', 'c'));
    expect(r.primary).toBe('C');
    expect(r.totals.C).toBe(14);
    expect(r.totals.E).toBe(7);
    expect(r.secondary).toBe('E');
  });

  it('no secondary when the runner-up has under half the winner, even with 6 points', () => {
    const r = scoreQuiz(a('a', 'abdadc', 'a'));
    expect(r.totals).toEqual({ C: 14, A: 0, F: 6, E: 0 });
    expect(r.secondary).toBeNull();
  });

  it('no secondary when the runner-up has under 6 points, even at half the winner', () => {
    // C 9 (Q2 a, Q3 c, Q5 e), A 5 (Q4 c, Q7 d): 5 is over half of 9 but under 6
    const r = scoreQuiz(a('a', 'acceed', 'a'));
    expect(r.totals.C).toBe(9);
    expect(r.totals.A).toBe(5);
    expect(r.primary).toBe('C');
    expect(r.secondary).toBeNull();
  });
});

describe('scoreQuiz: the weak-signal rule', () => {
  it('a winner under 8 points is a weak signal, and still gets the closest type', () => {
    const r = scoreQuiz(a('a', 'aaabba', 'a'));
    expect(r.totals).toEqual({ C: 4, A: 7, F: 4, E: 5 });
    expect(r.primary).toBe('A');
    expect(r.weakSignal).toBe(true);
    expect(r.secondary).toBeNull();
  });

  it('a weak signal can still carry a secondary', () => {
    const r = scoreQuiz(a('a', 'aaabaa', 'a'));
    expect(r.totals).toEqual({ C: 4, A: 6, F: 4, E: 7 });
    expect(r.primary).toBe('E');
    expect(r.weakSignal).toBe(true);
    expect(r.secondary).toBe('A');
  });

  it('exactly 8 points is not a weak signal', () => {
    const r = scoreQuiz(a('a', 'aacace', 'a'));
    expect(r.totals.C).toBe(8);
    expect(r.weakSignal).toBe(false);
  });

  it('all "not my problem" answers still give a result', () => {
    // Only Q2 a, Q3 a and Q5 e score: C 6, A 3
    const r = scoreQuiz(a('a', 'aaeeee', 'a'));
    expect(r.primary).toBe('C');
    expect(r.weakSignal).toBe(true);
  });
});
