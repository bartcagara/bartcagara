/**
 * The restart quiz (/quiz): every word and every weight lives here, so Bart's
 * edits are one file. The copy is Bart's, approved word for word on 20 Nov 2026
 * (HQ: 03_content/ideas/2026-11-20_design_restart-quiz.md). Change a line only
 * on his say.
 */

export type QuizType = "C" | "A" | "F" | "E";
export type AnswerLetter = "a" | "b" | "c" | "d" | "e" | "f";

/** Points one answer gives, by type. An empty object scores nothing. */
export type Points = Partial<Record<QuizType, number>>;

export interface QuizAnswer {
  letter: AnswerLetter;
  text: string;
  points: Points;
}

export interface QuizQuestion {
  /** q1 to q8, as the events name them. */
  id: string;
  text: string;
  answers: QuizAnswer[];
}

export const QUESTIONS: QuizQuestion[] = [
  {
    id: "q1",
    text: "How long have you been starting over?",
    answers: [
      { letter: "a", text: "A year or two", points: {} },
      { letter: "b", text: "Three to five years", points: {} },
      { letter: "c", text: "Five to ten years", points: {} },
      { letter: "d", text: "Longer than I'd like to admit", points: {} },
    ],
  },
  {
    id: "q2",
    text: "Think about the last time you were on track. What ended it?",
    answers: [
      { letter: "a", text: "I went on a trip, or work or home got heavy, and I never got back on track.", points: { C: 4 } },
      { letter: "b", text: "I had one bad weekend and then wrote off the rest of the month.", points: { A: 4 } },
      { letter: "c", text: "The challenge, the trainer or the goal date ended, and I drifted after that.", points: { F: 4 } },
      { letter: "d", text: "Nothing really happened. I just ran out of gas.", points: { E: 4 } },
      { letter: "e", text: "I got hurt or sick.", points: {} },
    ],
  },
  {
    id: "q3",
    text: "How do you usually start again?",
    answers: [
      { letter: "a", text: "I go all in on a Monday, with training every day, clean food and no drinks.", points: { A: 3 } },
      { letter: "b", text: "I sign up for something, like a challenge, a trainer or an app.", points: { F: 3 } },
      { letter: "c", text: "I wait for a quiet stretch and then set up a routine.", points: { C: 3 } },
      { letter: "d", text: "I don't really start. I just tell myself tonight will be different.", points: { E: 3 } },
    ],
  },
  {
    id: "q4",
    text: "It's 3pm on a workday. What have you eaten so far?",
    answers: [
      { letter: "a", text: "Coffee, and maybe a protein bar.", points: { E: 3 } },
      { letter: "b", text: "Whatever was closest when I had a minute.", points: { E: 2, C: 1 } },
      { letter: "c", text: "It depends. When I'm on a plan it's measured, and when I'm off it's anything.", points: { A: 2 } },
      { letter: "d", text: "Whatever the plan says, and when I don't have a plan I'm guessing.", points: { F: 3 } },
      { letter: "e", text: "A proper lunch, most days.", points: {} },
    ],
  },
  {
    id: "q5",
    text: "You're away from home for three days, for work or with family. What happens to your routine?",
    answers: [
      { letter: "a", text: "It stops, and it takes me weeks to get back on track.", points: { C: 4 } },
      { letter: "b", text: "I go off completely and tell myself I'll start again on Monday.", points: { A: 3 } },
      { letter: "c", text: "I barely eat during the day and then make up for it at dinner.", points: { E: 3 } },
      { letter: "d", text: "I'm fine if someone's checking on me, but on my own I let it go.", points: { F: 3 } },
      { letter: "e", text: "I'm rarely away. My weeks fall apart at home.", points: { C: 2 } },
      { letter: "f", text: "It holds up fine. Being away isn't what throws me off.", points: {} },
    ],
  },
  {
    id: "q6",
    text: "It's 9:30 at night. What's usually going on?",
    answers: [
      { letter: "a", text: "I end up in the pantry and I don't really know why.", points: { E: 4 } },
      { letter: "b", text: "I'm having a drink or two to wind down.", points: { E: 2, A: 1 } },
      { letter: "c", text: "I'm fine, unless I slipped earlier in the day. Then I write off the night.", points: { A: 3 } },
      { letter: "d", text: "I'm still working, because evenings are when I catch up.", points: { C: 3 } },
      { letter: "e", text: "Nothing much. Evenings aren't a problem for me.", points: {} },
    ],
  },
  {
    id: "q7",
    text: "Think of the best shape you've been in as an adult. What kept you on track?",
    answers: [
      { letter: "a", text: "A coach, a team, a training partner or a challenge.", points: { F: 4 } },
      { letter: "b", text: "A deadline, like a wedding, a race or a vacation.", points: { F: 3 } },
      { letter: "c", text: "A calm stretch of life, with fewer hours and less going on.", points: { C: 3 } },
      { letter: "d", text: "Mostly force. I white-knuckled it for a few months.", points: { A: 3 } },
      { letter: "e", text: "I haven't really had one.", points: {} },
    ],
  },
  {
    id: "q8",
    text: "What bothers you most right now?",
    answers: [
      { letter: "a", text: "Who I am at home. The people I live with get what's left of me.", points: {} },
      { letter: "b", text: "My health. My doctor has started bringing things up.", points: {} },
      { letter: "c", text: "My energy. I'm wiped out by the evening.", points: {} },
      { letter: "d", text: "How I look. I don't recognize the guy in the photos.", points: {} },
      { letter: "e", text: "That I keep failing at this one thing.", points: {} },
    ],
  },
];

/** Index of each question in QUESTIONS that the scoring reads by name. */
export const Q = { years: 0, lastRun: 1, restart: 2, lunch: 3, away: 4, evenings: 5, stake: 7 } as const;

/** When the top scores tie and neither tie-breaker settles it: most common first on calls. */
export const TIE_ORDER: QuizType[] = ["C", "A", "E", "F"];

/** Secondary type: shown only with at least this many points... */
export const SECONDARY_MIN_POINTS = 6;
/** ...and at least this share of the winner's points. */
export const SECONDARY_MIN_SHARE = 0.5;
/** A winner under this many points gets the weak-signal opening. */
export const WEAK_SIGNAL_BELOW = 10;
/** "I'm fairly sure" shows only from this many points up (cold reader, 21 Nov: 9 points from answers that barely fit read as overconfident). */
export const CONFIDENT_FROM = 12;

export interface QuizResult {
  type: QuizType;
  /** The address of its own page: /quiz/<slug>. Also the booking link's utm_content. */
  slug: string;
  name: string;
  /** The name inside a sentence (the gate line). */
  nameInSentence: string;
  headline: string;
  /**
   * Paragraphs after the echo lines. `{disruption}` is filled from Q5.
   * Words between **double stars** show in bold (one or two key lines per
   * result); the stars never show on the page.
   */
  body: string[];
  /** "This week", behind the gate. **Double stars** mark bold, as in body. */
  thisWeek: string[];
  /** The [SECOND] line when this type is the runner-up. */
  secondLine: string;
}

export const RESULTS: Record<QuizType, QuizResult> = {
  C: {
    type: "C",
    slug: "calm-week",
    name: "The Calm\u2011Week Plan",
    nameInSentence: "the Calm\u2011Week Plan",
    headline: "Your plan only works in a calm week.",
    body: [
      "When life is quiet you train, you eat well and it works, and you've probably done it more than once. Then, sooner or later, {disruption}, and your plan has nothing for a week like that, so it stops and you wait for things to calm down before starting again.",
      "You've probably put that down to not having the time. I'd look at the plan instead, because **every plan you've tried was competing with your schedule, and your schedule always wins.**",
    ],
    thisWeek: [
      "**Don't wait for a good week.** I've got a workout that fits into your worst one. It takes ten to fifteen minutes and you don't need a gym.",
      "Do push-ups, then inverted rows, then squats. For the rows, lie under a sturdy table, hold the edge and pull your chest up to it. Take every set close to the point where you can't do another rep, rest a minute and go through it again. If you have the time and the strength left, do a third round. If something's hurting, or you're coming back from being sick, keep every rep pain-free and stop a few reps short.",
      "Do it tomorrow morning, before work. You'll walk in feeling tighter, like a guy who already did something hard today, and you won't want to waste that.",
      "At lunch you'll want a real meal. Start the plate with a good piece of protein, then add vegetables and some slow carbs like rice or potatoes. By dinner you've made good decisions all day, so you don't overeat, and you actually talk with the people at the table.",
      "Next time you pick a plan, **ask yourself if it would survive your worst week.**",
    ],
    secondLine:
      "Your answers point to a second thing as well. Busy weeks throw you off, so whatever you do next has to work in a bad week too.",
  },
  A: {
    type: "A",
    slug: "all-in-all-out",
    name: "All In, All Out",
    nameInSentence: "All In, All Out",
    headline: "You're either all in or all out.",
    body: [
      "When you're on, you're all in, and for a few weeks it works.",
      "Most times it's something small, like a dinner out or a few drinks, that breaks the streak. **The plan only counted when you did all of it, so one miss feels like the end**, and “I'll start again Monday” often turns into a month.",
      "The harder you go during the week, the worse those moments get. If you've spent five days eating as little as you can, you sit down to Friday dinner starving, and you overeat.",
    ],
    thisWeek: [
      "This one might feel backwards. **For the next seven days, eat proper meals throughout the day, every day**, including the days you'd usually try to be good. Start every plate with a good piece of protein, and don't save anything up for the weekend.",
      "When you fuel yourself properly all week, you sleep better and you have the energy to train. Then you sit down at the dinner that usually throws you off, rested and not starving. You're in a position to make a good decision for yourself, and to actually talk with the people at the table.",
    ],
    secondLine:
      "Your answers point to a second thing as well, which is that you only count it when it's perfect. One slip and you write off the week, so keep an eye on that.",
  },
  F: {
    type: "F",
    slug: "finish-line",
    name: "The Finish Line",
    nameInSentence: "the Finish Line",
    headline: "Every time you got in shape, it ended when the program did.",
    body: [
      "When things went well, something was keeping you on track, like a coach, a challenge, a training partner or a date to work toward, and while it was there you did the work.",
      "Without it, the routine didn't last, because you'd been following someone else's plan and nobody showed you how to make your own.",
      "People will tell you that you need accountability. I see it differently. Someone checking on you only works while they're checking, and **what you never had was a way of doing this that's yours.**",
    ],
    thisWeek: [
      "Think back to the last time you were on track and pick the one or two small things you actually enjoyed back then, the ones that felt like nothing at the time. Maybe it was the breakfast that kept you away from the snacks all morning, or the long walk you took every weekend. **Forget everything else and do just those this week.**",
      "Keep them small enough that skipping would feel silly. A week from now you'll have stuck to something with nobody checking, only because you wanted to, and no program ever gave you that.",
    ],
    secondLine:
      "Your answers point to a second thing as well, which is that you do well while someone or something else is keeping you on track, and it ends when they do.",
  },
  E: {
    type: "E",
    slug: "running-on-empty",
    name: "Running on Empty",
    nameInSentence: "Running on Empty",
    headline: "By 9:30 at night you have nothing left.",
    body: [
      "I'd guess you barely eat during the day. Coffee gets you through the morning, then whatever's closest, if anything, so by the evening you're hungry and worn out at once. Dinner goes fast, you go back for more, and later you're in the pantry or pouring a drink without really deciding to.",
      "**Every plan you've tried asked you to say no at night, when you're hungry and worn out**, so when it didn't work, you blamed yourself. I'd look at what you ate before 3pm instead.",
    ],
    thisWeek: [
      "**Starting tomorrow, eat a bigger lunch every workday** and leave everything else as it is. The plate starts with a good piece of protein, then vegetables and some slow carbs like rice or potatoes.",
      "Think of that lunch as an investment in the second half of your day. You get through the afternoon on steady energy, and you sit down to dinner hungry but not starving, with enough left to talk with the people at the table.",
    ],
    secondLine:
      "Your answers point to a second thing as well, which is that by the evening you're running low, on food, on energy or both. Whatever you do next has to deal with that too.",
  },
};

export const RESULT_TYPES: QuizType[] = ["C", "A", "F", "E"];

/** [YEARS], from Q1. */
export const YEARS_LINES: Record<string, string> = {
  a: "You've been starting over for a year or two, which is early enough to stop it from turning into ten.",
  b: "You've been starting over for three to five years, which is long enough to know it isn't bad luck.",
  c: "You've been starting over for five to ten years, and that's too long to call it a rough patch.",
  d: "You said you've been starting over for longer than you'd like to admit. A lot of the men I talk to tell me the same thing.",
};

/** [LAST RUN], from Q2. Same paragraph, right after [YEARS]. */
export const LAST_RUN_LINES: Record<string, string> = {
  a: "The last time you were on track, a trip or a heavy stretch at work or at home ended it, and you never got going again.",
  b: "The last time you were on track, one bad weekend ended it, and then you wrote off the month.",
  c: "The last time you were on track, it lasted as long as the program did, and then you drifted.",
  d: "Nothing in particular ended it the last time you were on track. You just ran out of gas.",
  e: "The last time you were on track, getting hurt or sick ended it. I can't judge that from a quiz, so I went by your other answers.",
};

/** [DISRUPTION] in result C, from Q5. */
export const DISRUPTION = {
  travels: "a trip comes up or work takes over for a week",
  rarelyAway: "work takes over for a week or something at home needs all of you",
} as const;

/** Q5 answers that mean being away isn't what throws him off (rarely away, or it holds up fine). */
export const AT_HOME_ANSWERS: AnswerLetter[] = ["e", "f"];

/** Q6 "Evenings aren't a problem for me": Running on Empty can't win or be second (Fable, 21 Nov). */
export const EVENINGS_FINE_ANSWER: AnswerLetter = "e";

/** Q4 "A proper lunch, most days" with Running on Empty: body[0] says what he told us instead. */
export const LUNCH = {
  answer: "e",
  bodyFrom: "I'd guess you barely eat during the day. Coffee gets you through the morning, then whatever's closest, if anything, so by the evening you're hungry and worn out at once.",
  bodyTo: "You told me you eat a proper lunch most days. I'd guess it's still not enough to get you through the day, because by the evening you're hungry and worn out at once.",
} as const;

/** [SECOND] when there is no secondary type. */
/**
 * When Q2 is "I got hurt or sick" (Bart, 21 Nov, after the cold reader): the
 * body drops
 * "You've probably put that down to not having the time", which would
 * contradict what he just said.
 */
export const HURT = {
  lastRun: "e",
  bodyFrom: "You've probably put that down to not having the time. I'd look at the plan instead, because ",
  bodyTo: "The way I see it, ",
} as const;

export const NO_SECOND_LINE = "Most of your answers point the same way, so I'm fairly sure about this one.";

/** Weak signal: first in the body; the no-secondary line is left out. */
export const WEAK_SIGNAL_LINE =
  "Nothing in your answers points strongly at one thing, so take what fits below and leave the rest.";

/** [STAKE], from Q8, just before the bridge. */
export const STAKE_LINES: Record<string, string> = {
  a: "You said what bothers you most is who you are at home, and that the people you live with get what's left of you. To me that's a better reason to sort this out than anything the scale says.",
  b: "You said what bothers you most is your health, and that your doctor has started bringing things up. I'd take that seriously, because it's the one part of this that won't wait for a quieter month.",
  c: "You said what bothers you most is your energy, and that you're wiped out by the evening. That's worth fixing for its own sake, because everything else you want to change takes energy you don't have right now.",
  d: "You said what bothers you most is how you look, and that you don't recognize the guy in the photos. That matters, and it's reason enough to sort this out.",
  e: "You said what bothers you most is that you keep failing at this one thing. I don't think you've been failing. You've been trying the same kind of plan again and again, and a plan can be changed.",
};

/** Q8 answer to the Kit pain tag it feeds (`pain - <word>`). */
export const STAKE_PAIN: Record<string, string> = {
  a: "family",
  b: "health",
  c: "energy",
  d: "looks",
  e: "restarts",
};

/** Q1 answer as the value Kit stores in quiz_years. */
export const YEARS_VALUE: Record<string, string> = {
  a: "1-2",
  b: "3-5",
  c: "5-10",
  d: "10+",
};

export const BRIDGE =
  "A quiz can only tell you so much, and I'd rather hear the whole story from you. On a Restart Audit you tell me what's been going on, and I'll give you my honest read on what it takes to make this your last restart. It's 45 minutes with me.";

export const BOOK_BUTTON = "Book Restart Audit";

export const COPY = {
  headerLabel: "The Restart Quiz",
  startHeadline: "Which of the 4 restart types are you?",
  startLine:
    "Answer 8 quick questions, and in two minutes you'll know what knocks you off track every time and what to do about it this week.",
  startButton: "Start",
  back: "Back",
  resultLabel: "What kills your restarts",
  /** In place of the result's headline when the signal is weak. */
  weakHeadline: "This is the closest match, but I'm not sure about it.",
  /** Small headings on the result, in order. "This week" is the big one behind the gate. */
  toldMeHeading: "What you told me",
  goingOnHeading: "What's going on",
  thisWeekHeading: "This week",
  nextStepHeading: "Your next step",
  gateHeading: "Want to know what I'd do first?",
  gateLine: "Leave your first name and email and I'll show you what I'd do this week if I were you.",
  gateButton: "Show me",
  gateNote:
    "You'll also get my newsletter, the Founder's Fitness Brief, every Thursday. It's one email a week and you can unsubscribe any time.",
} as const;

/**
 * The Kit form the quiz gate posts to: `opt-in - quiz` (created 20 Nov 2026).
 * Its automation `quiz - sort` (2288789) tags `entry - quiz`, the type tag and
 * the pain tag from the hidden fields quiz_result and quiz_stake.
 */
export const QUIZ_KIT_FORM = { id: "10217601", uid: "4589be8ab7" } as const;
