/**
 * Homepage Content - The Golden Copy
 * All text, headlines, and copy for the homepage
 * This ensures content integrity and makes updates instant
 */

export const HOMEPAGE_CONTENT = {
  hero: {
    headline: "The founder's",
    highlightedText: "Last restart.",
    subheadline: "6 months to get you lean, athletic and off the restart cycle. For good.",
    ctaText: "BOOK RESTART AUDIT",
    stats: [
      { value: "50+", label: "Founders coached" },
      { value: "1:1", label: "You and me" },
      { value: "6 mo", label: "Then no more restarts" },
    ],
  },

  trustedBy: {
    title: "Trusted by the guys who built:",
  },

  diagnosis: {
    title: "SHIRT OFF RUINS THE WHOLE THING",
    subtitle: "",
    items: [
      "Your kids are in the pool, calling for you.",
      "\"In a minute.\"",
      "There is no minute. There's a calculation: shirt off, move fast, into the water before anyone sees.",
      "It wasn't always like this. You played sports back in school. The body just worked.",
      "Then you built a company, and the body paid for it.",
      "You've tried. Every January, three good weeks, the business eats a month, back to zero. Every restart harder than the last.",
      "You blame your discipline. **It was never the problem.**",
      "And lately, a voice: maybe this is just your forties now.",
      "**You're reading this because you don't believe that.**",
    ],
  },

  solution: {
    title: "THE LAST RESTART",
    subtitle: "",
    items: [
      "6 months from now, it's a regular Tuesday.",
      "Up before the alarm. Training's done by seven. It's just what you do now.",
      "Your son hits you at the door at full speed. You catch him, throw him over your shoulder, take the stairs two at a time.",
      "The business still eats whole weeks. You feel good and look strong anyway.",
      "Your wife stops worrying out loud.",
      "January comes and goes. **Nothing to restart.**",
      "Then one day you overhear your kid bragging about you to his friends.",
      "**He's not exaggerating.**",
    ],
  },

  results: {
    headline: "THEY DIDN'T HAVE TIME EITHER",
    subheadline: "Founders in their forties. Travel, mergers, kids getting sick.",
    sections: {
      transformations: "Client Photos",
      interviews: "Client Interviews",
      dms: "Client DMs",
      testimonials: "Client Testimonials",
    },
  },

  program: {
    title: "FOUNDER\nATHLETE OS",
    subtitle: "Six months. Three phases. One outcome: you never start over again.",
    phases: [
      {
        number: "01",
        title: "The Reset",
        weeks: "Weeks 1-4",
        focus: "IMMEDIATE CONTROL",
        items: [
          "**Nutrition Baseline** — You eat food you actually like. The weight moves anyway.",
          "**Training Baseline** — You build strength and master form. No wasted time in the gym.",
          "**The Pattern** — We find what kills every attempt and cut it off at the source.",
        ],
        win: "Up to 10 lbs down. Energy back. And you finally see why it never stuck.",
      },
      {
        number: "02",
        title: "The Build",
        weeks: "Weeks 5-12",
        focus: "PERFORMANCE UNDER PRESSURE",
        items: [
          "**Physique** — The body starts looking athletic again. Not gym-big. Athlete.",
          "**Travel-Proofing** — Restaurants, airports, hotel gyms. Handled.",
          "**Bloodwork** — Full panel, real analysis. The inside catches up with the outside.",
        ],
        win: "Clothes fit different. People notice. You feel like yourself again.",
      },
      {
        number: "03",
        title: "The Exit",
        weeks: "Weeks 13-24",
        focus: "FULL AUTONOMY",
        items: [
          "**Real Life** — Vacations, pivots, sick kids. The plan holds.",
          "**Your Program** — We eliminate weak points and build the program that outlasts me.",
          "**The Handoff** — The programming, the nutrition calls, the adjustments. All of it moves from my head to yours.",
        ],
        win: "You fire me. You own this.",
      },
    ],
    delivery: {
      heading: "HOW IT RUNS",
      items: [
        "**Weekly Calls** — You and me, every week. The program fixes the body. The calls fix what kept breaking it.",
        "**WhatsApp, 24/7** — Stuck at an airport, staring at a menu, lost a week? Message me. I'm there.",
        "**The App** — Food, training, sleep and steps, connected. It shows you what to fix first, so you're never cutting calories when the real problem is your sleep.",
      ],
    },
  },

  about: {
    title: "WHO THE FUCK",
    subtitle: "IS BART?",
    imageSrc: "/images/home/bart-and-son-2.webp",
    imageAlt: "Bart Cagara with his son",
    subhead: "",
    paragraphs: [
      "By the time I finished college, the athlete in me was long gone.",
      "What came after was a string of failed businesses and diets that left me stuck in a body I wasn't proud of.",
      "So I took a job at a fitness startup, and surrounded by coaches and nutritionists, I rebuilt myself.",
      "I got hooked, started my own coaching business, and since 2019 I've coached over 50 founders. These days I also run Stack, a fitness app for coaches and their clients. And I'm a proud father of this little guy standing next to me.",
      "Coaching men with constant stress and travel taught me that fitness can't become your life. It has to get out of the way so you can be the father and business owner you want to be.",
      "**That's how I make sure this is your last restart.**",
      "P.S. Not big on shirtless selfies, but {{transformation-link|here's my before and after}}.",
    ],
    transformationImage: "/images/transformations/bart-transformation.webp",
    credentials: ["Sports Nutritionist", "Performance Coach"],
  },

  finalCta: {
    headline: "Make this the",
    highlightedText: "Last restart",
    body: [
      "Six months from now, your business will be further along. Will your body?",
      "You know how this goes if nothing changes. **You've restarted enough times.**",
      "**If that sits wrong, let's talk.**",
    ],
  },

  briefing: {
    label: "Founder's Fitness Brief",
    heading: "Not booking today? Fair.",
    body: [
      "Most of the men I coach read for months before they ever said a word.",
      "The Brief is one email a week on making this restart your last.",
    ],
    submitLabel: "Get the Brief",
  },

  objections: [
    {
      question: "I've tried fitness programs before. They never stick.",
      answer: "Because they handed you a plan and never asked why the last three failed. The reason you quit is specific, findable, and it was never discipline. Finding it is half of what the Restart Audit does.",
    },
    {
      question: "I don't have time for a 6-month commitment.",
      answer: "You're already spending the time. The calculating, the renegotiating every meal, the starting over — that's the expensive version. This replaces it with a few hours a week and a plan that fits the calendar you actually have.",
    },
    {
      question: "I travel constantly. How does this work on the road?",
      answer: "A big chunk of Phase 2 is Travel-Proofing. Restaurants, airports, hotel gyms. One of my clients is a CFO who flies weekly — he's at 12% body fat after 20 years of neglect.",
    },
    {
      question: "What does it cost?",
      answer: "It's a serious investment. We talk exact numbers on the call, once I know what you actually need. Payment plans exist. If you're shopping for the cheapest way to lose weight, this isn't it. If you're done restarting, it is.",
    },
    {
      question: "What actually happens on the Restart Audit?",
      answer: "45 minutes, you and me. Tell me the whole story, and I'll give you my honest read on what it takes to make this your last restart. If we're a fit, I'll tell you. If we're not, I'll tell you that too.",
    },
  ],
} as const;
