/**
 * Homepage Content - The Golden Copy
 * All text, headlines, and copy for the homepage
 * This ensures content integrity and makes updates instant
 */

export const HOMEPAGE_CONTENT = {
  hero: {
    headline: "Founder's pace.",
    highlightedText: "Athlete's body.",
    subheadline: "For the former-athlete founder who chose freedom over corporate—and sacrificed his body in the process.",
    ctaText: "BOOK DISCOVERY CALL",
    ctaLink: "https://cal.com/bartcagara/discovery-call",
  },

  trustedBy: {
    title: "Trusted by founders from:",
  },

  diagnosis: {
    title: "YOUR SCHEDULE EATS\nYOUR FITNESS",
    subtitle: "Some weeks you're on fire. Most weeks, everything falls apart.",
    items: [
      "Your diet works only when you eat at home.",
      "Your training plan collapses the second you travel.",
      "Your trainer has never built a company or raised kids.",
    ],
    afterText: "",
    outcome: "The outcome? You're 30 lbs overweight, exhausted, too stuck in your head to watch your kids grow up.",
  },

  solution: {
    title: "YOUR LIFESTYLE AND\nFITNESS—INTEGRATED",
    subtitle: "You operate without thinking. Your body keeps up. Chaos doesn't derail you.",
    items: [
      "Your nutrition handles investor dinners and family weekends.",
      "Your training is short, effective, and adapts to your schedule.",
      "Your coach spots broken patterns and adjusts for continued progress.",
    ],
    afterText: "",
    outcome: "The outcome? You're lean, strong, and present. Your body carries your vision.",
  },

  results: {
    headline: "THESE GUYS DIDN'T\nWAIT TILL THINGS GOT QUIET",
    subheadline: "They invested in a system built for their pace.",
    sections: {
      transformations: "Client Photos",
      interviews: "Client Interviews",
      dms: "Client DMs",
      testimonials: "Client Testimonials",
    },
  },

  program: {
    title: "FOUNDER\nATHLETE OS",
    subtitle: "Six months to reclaim your body while building your business.",
    phases: [
      {
        number: "01",
        title: "The Reset",
        weeks: "Weeks 1-4",
        focus: "IMMEDIATE CONTROL",
        items: [
          "**Stop the bleeding** - Fix the chaos eating, late-night binges, reliance on caffeine.",
          "**Build a baseline** - Training that actually fits between investor calls and product launches.",
          "**Reclaim energy** - Kill the 3pm crash so you can think clearly when it matters.",
        ],
        win: "YOU DROP 10-15 LBS. ENERGY RETURNS. YOU'RE NOT RUNNING ON FUMES ANYMORE.",
      },
      {
        number: "02",
        title: "The Build",
        weeks: "Weeks 5-12",
        focus: "PERFORMANCE UNDER PRESSURE",
        items: [
          "**Get lean and strong** - Build a body that communicates you've got your shit together.",
          "**Navigate the chaos** - Eating strategies for client dinners, red-eyes, trade shows, chaos weeks.",
          "**Optimize the engine** - Bloodwork, hormones, recovery—treat yourself like the asset you are.",
        ],
        win: "CLOTHES FIT DIFFERENT. CLIENTS NOTICE. YOU FEEL DANGEROUS AGAIN.",
      },
      {
        number: "03",
        title: "The Exit",
        weeks: "Weeks 13-24",
        focus: "FULL AUTONOMY",
        items: [
          "**Intuitive everything** - No more tracking, no more overthinking food.",
          "**Play the long game** - Optimize for 20 years of building, not 90-day sprints.",
          "**Own the system** - Chaos weeks, vacations, pivots—nothing derails you.",
        ],
        win: "YOU FIRE ME. YOU OWN THIS. FOREVER.",
      },
    ],
  },

  about: {
    title: "WHO THE FUCK",
    subtitle: "IS BART?",
    imageSrc: "/images/home/bart-and-son.jpg",
    imageAlt: "Bart Cagara and son flexing",
    subhead: "Fair question.",
    paragraphs: [
      "I was the athletic kid. Wasn't good enough to go pro, but the obsession with performance never left.",
      "Came up in the startup world doing marketing. Loved the growth phase. Then it got political. I hated it.",
      "So I left and built my own thing.",
      "Over time, a pattern emerged. The clients I connected with most were founders who used to be athletes. Guys who played D1 ball, then chose to build companies—and let their bodies fall apart in the process.",
      "I got them because I understood what they valued: building over politics, freedom over bureaucracy.",
      "Their problem wasn't discipline. It was rigid protocols designed for people with low stress and predictable schedules.",
      "So I built something different. A system that works when you forget to eat between investor meetings and end up inhaling snacks—while planning your next move during a family weekend.",
      "I've built my business from scratch. Been coaching founders and executives since 2019. I know the chaos. I know what breaks.",
      "And I know how to fix it so your body can carry your vision.",
    ],
    credentials: ["Sports Nutritionist", "Performance Coach"],
  },

  finalCta: {
    headline: "Fast-forward",
    highlightedText: "6 months",
    subheadline: "Your business will be further along. Will your body? Or will you still be running on caffeine, takeout, and borrowed time—building something great in a body that's falling apart? If that sits wrong, let's talk. You'll walk away with clarity—whether we work together or not.",
    ctaText: "BOOK DISCOVERY CALL",
    ctaLink: "https://cal.com/bartcagara/discovery-call",
  },
} as const;
