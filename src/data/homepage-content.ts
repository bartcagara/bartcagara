/**
 * Homepage Content - The Golden Copy
 * All text, headlines, and copy for the homepage
 * This ensures content integrity and makes updates instant
 */

export const HOMEPAGE_CONTENT = {
  hero: {
    headline: "Become your kid's",
    highlightedText: "Favorite athlete.",
    subheadline: "6 months to get you lean, strong and off the restart cycle. For good.",
    ctaText: "BOOK MY RESTART AUDIT",
    ctaLink: "https://cal.com/bartcagara/discovery-call",
    socialProof: "50+ founders coached since 2019",
  },

  trustedBy: {
    title: "Trusted by the guys who built:",
  },

  diagnosis: {
    title: "TAKING YOUR SHIRT OFF RUINS THE WHOLE THING",
    subtitle: "",
    items: [
      "Your kids are in the pool, calling for you.",
      "\"In a minute!\"",
      "**There is no minute.** There's a calculation: shirt off, move fast, into the water before anyone sees.",
      "It wasn't always like this. You played sports back in school. The body just worked.",
      "Then you built a company, and the body paid for it.",
      "You've tried. Every January, three good weeks, the business eats a month, back to zero. **Every restart harder than the last.**",
      "And lately, a voice: **maybe this is just your forties now.**",
      "**You're reading this because you don't believe that.**",
    ],
  },

  solution: {
    title: "THE LAST RESTART",
    subtitle: "",
    items: [
      "**6 months from now, it's a regular Tuesday**.",
      "Up before the alarm. Training's done by seven. **Not discipline — it's just what you do now.**",
      "Your son hits you at the door at full speed. You catch him, throw him over your shoulder, take the stairs two at a time.",
      "The business still eats whole weeks. **It doesn't take the body with it anymore.**",
      "Your wife stops worrying out loud.",
      "January comes and goes. **Nothing to restart.**",
      "Then one day you overhear your kid bragging about you to his friends.",
      "**He's not exaggerating.**",
    ],
  },

  results: {
    headline: "THEY DIDN'T HAVE TIME EITHER",
    subheadline: "Founders in their forties. Companies, kids, travel weeks.",
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
          "**Pattern Recognition** — We find what killed every January and cut it off at the source.",
        ],
        win: "10-15 lbs down. Energy back. And you finally see why it never stuck.",
      },
      {
        number: "02",
        title: "The Build",
        weeks: "Weeks 5-12",
        focus: "PERFORMANCE UNDER PRESSURE",
        items: [
          "**Physique Construction** — The body starts looking athletic again. Not gym-big. Athlete.",
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
          "**Life Integration** — Vacations, pivots, chaos. Nothing derails you.",
          "**Training Refinement** — We eliminate weak points and build the program that outlasts me.",
          "**The Handoff** — The programming, the nutrition calls, the adjustments. All of it moves from my head to yours.",
        ],
        win: "You fire me. You own this. Forever.",
      },
    ],
    delivery: {
      heading: "HOW IT RUNS",
      items: [
        "**Weekly Calls** — You and me, every week. The program fixes the body. The calls fix what kept breaking it.",
        "**WhatsApp, 24/7** — Stuck at an airport, staring at a menu, lost a week? Message me. I'm there.",
        "**The App** — Your program, built around the equipment you actually have. Home rack, hotel gym, full club.",
      ],
    },
  },

  about: {
    title: "WHO THE FUCK",
    subtitle: "IS BART?",
    imageSrc: "/images/home/bart-and-son-2.webp",
    imageAlt: "Bart Cagara with his son",
    subhead: "Fair question.",
    paragraphs: [
      "I was an athletic kid. Sports was identity.",
      "College changed that. Training fell off. By the time I graduated, the body was different.",
      "Then came years of trying to build businesses. No mission. No purpose. Everything I touched failed. The body was just the part that showed it on the outside.",
      "Tail between my legs, I took a job at a fitness startup.",
      "It rebuilt me. Surrounded by coaches and nutritionists who knew things I didn't, I went after it — the body, the mind, the sense of purpose I'd lost. For the first time in years, I recognized myself again.",
      "That's when I built this.",
      "**I've been coaching founders and executives since 2019. The guys I always hit it off with were like me — athletic kids who built a business, body paid the price, not quite themselves in their own skin. Privately fighting demons that slowly kill their presence and their confidence.**",
      "**My son is watching. I built this so he grows up with a dad who's actually himself.**",
      "*If you're curious about my own transformation — {{transformation-link}}.",
    ],
    transformationImage: "/images/transformations/bart-transformation.webp",
    credentials: ["Sports Nutritionist", "Performance Coach"],
  },

  finalCta: {
    headline: "Fast-forward",
    highlightedText: "6 months.",
    body: [
      "Your business will be further along. Will your body?",
      "Or will you still be drained, self-conscious, watching your kids from the sidelines?",
      "**If that sits wrong, let's talk.**",
      "You'll walk away with clarity — whether we work together or not.",
    ],
    ctaText: "BOOK MY DISCOVERY CALL",
    ctaLink: "https://cal.com/bartcagara/discovery-call",
  },

  objections: [
    {
      question: "I've tried fitness programs before. They never stick.",
      answer: "Because they forced you into a plan without fixing the pattern. We find why you keep quitting — then build something that works inside your actual life, not against it.",
    },
    {
      question: "I travel constantly. How does this work on the road?",
      answer: "A big chunk of Phase 2 is literally Travel-Proofing. Restaurants, airports, hotel gyms. Every system is tailored for a founder's schedule, not a gym bro.",
    },
    {
      question: "I don't have time for a 6-month commitment.",
      answer: "I get it. But most clients actually spend less time on health after starting — because we replace the guessing with something that fits your schedule. The 6 months? That's what makes sure you never rebound again.",
    },
  ],
} as const;
