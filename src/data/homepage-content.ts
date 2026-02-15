/**
 * Homepage Content - The Golden Copy
 * All text, headlines, and copy for the homepage
 * This ensures content integrity and makes updates instant
 */

export const HOMEPAGE_CONTENT = {
  hero: {
    headline: "Founder's pace.",
    highlightedText: "Athlete's body.",
    subheadline: "For the former-athlete founder building a business he loves in a body he hates.",
    ctaText: "BOOK DISCOVERY CALL",
    ctaLink: "https://cal.com/bartcagara/discovery-call",
  },

  trustedBy: {
    title: "Trusted by guys building:",
  },

  diagnosis: {
    title: "YOUR BODY CAN'T\nCARRY YOUR VISION",
    subtitle: "",
    items: [
      "You're on vacation with your family.",
      "Your kids are calling you to join them in the pool.",
      "You wave. \"I'll come in later.\"",
      "But you never do.",
      "You tell yourself it's because you're thinking about work. Noble excuse. It supports the family.",
      "**But the truth?**",
      "You're too fucking self-conscious about how out of shape you are to take your shirt off.",
      "So you sit there. Phone in hand. Watching your kids grow up from the sidelines.",
      "**Not because you're busy. Because your body won't let you be present.**",
    ],
  },

  solution: {
    title: "YOU LOOK AND THINK\nLIKE AN ATHLETE",
    subtitle: "",
    items: [
      "Fast-forward 6 months.",
      "You're scaling your business. Still working hard, still meeting investors, still traveling...",
      "But something's different.",
      "You're not second-guessing yourself anymore. You walk into rooms with quiet confidence. Your body actually matches the vision you're building.",
      "At home? You're back. You have the energy. You're present. No longer guilt-tripping yourself about not watching your kids grow up.",
      "**Here's what changed:**",
      "Your nutrition fuels the work without making you sluggish. Your training fits your schedule—short, effective, targeted. Your recovery keeps you sharp instead of restless.",
      "Your body and mind finally aligned—carrying your vision instead of holding it back.",
    ],
  },

  results: {
    headline: "THESE GUYS DIDN'T\nWAIT FOR LIFE TO SLOW DOWN",
    subheadline: "They built something that worked with their chaos, not against it.",
    sections: {
      transformations: "Client Photos",
      interviews: "Client Interviews",
      dms: "Client DMs",
      testimonials: "Client Testimonials",
    },
  },

  program: {
    title: "FOUNDER\nATHLETE OS",
    subtitle: "Six months to reclaim your body and rebuild your identity.",
    phases: [
      {
        number: "01",
        title: "The Reset",
        weeks: "Weeks 1-4",
        focus: "IMMEDIATE CONTROL",
        items: [
          "**Nutrition Baseline** - You start eating the way you like—and actually get results",
          "**Training Baseline** - You build strength and master form—no wasted time in the gym",
          "**Pattern Recognition** - We study what made you quit before and build momentum",
        ],
        win: "You drop 10-15 lbs. Your energy returns. You understand why you've been failing.",
      },
      {
        number: "02",
        title: "The Build",
        weeks: "Weeks 5-12",
        focus: "PERFORMANCE UNDER PRESSURE",
        items: [
          "**Physique Construction** - Your training evolves. Your body starts looking athletic",
          "**Travel-Proofing** - Restaurants, airports, hotel gyms—handled",
          "**Bloodwork Optimization** - We go beyond basic improvements. We optimize for performance and longevity",
        ],
        win: "Clothes fit different. People notice. You feel like yourself again.",
      },
      {
        number: "03",
        title: "The Exit",
        weeks: "Weeks 13-24",
        focus: "FULL AUTONOMY",
        items: [
          "**Life Integration** - Vacations, pivots, chaos—nothing derails you",
          "**Training Refinement** - We address weak points and adjust your program for the future",
          "**Mindset Mastery** - Future-proofing and continuous identity work",
        ],
        win: "You fire me. You own this. Forever.",
      },
    ],
    methodology: {
      headline: "All delivered in a high-touch coaching environment.",
      body: [
        "I don't believe in hype, chest-beating, or yelling at you every week.",
        "**I believe in the art of conversation.**",
        "Two men sitting down, dropping their guard, picking apart what's broken, and doing the work that actually changes things.",
      ],
    },
  },

  about: {
    title: "WHO THE FUCK",
    subtitle: "IS BART?",
    imageSrc: "/images/home/bart-and-son.jpg",
    imageAlt: "Bart Cagara and son flexing",
    subhead: "Fair question.",
    paragraphs: [
      "I was the athletic kid. Not good enough to go pro, but the obsession with performance never left.",
      "Came up in the startup world doing marketing. Loved the growth phase. Then it got political. I hated it.",
      "So I left and built my own thing.",
      "The founders I connected with most? Former athletes who sacrificed their body to build their business.",
      "I understood them because I understood what they valued: building over politics, freedom over bureaucracy.",
      "Their problem wasn't discipline. It was rigid protocols designed for people with low stress and predictable schedules.",
      "So I built something that works when you forget to eat between investor meetings and end up inhaling snacks—while planning your next move during a family weekend.",
      "I've built this business from scratch. Been coaching founders and former athletes since 2019.",
      "I know the chaos. I know what breaks.",
      "**And I know how to make sure your body carries your vision.**",
    ],
    credentials: ["Sports Nutritionist", "Performance Coach"],
  },

  finalCta: {
    headline: "Fast-forward",
    highlightedText: "6 months.",
    body: [
      "Your business will be further along. Will your body?",
      "Or will you still be running on caffeine, takeout, and borrowed time—watching your kids from the sidelines because you're too self-conscious to join them?",
      "**If that sits wrong, let's talk.**",
      "You'll walk away with clarity—whether we work together or not.",
    ],
    ctaText: "BOOK DISCOVERY CALL",
    ctaLink: "https://cal.com/bartcagara/discovery-call",
  },
} as const;
