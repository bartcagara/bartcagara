/**
 * Homepage Content - The Golden Copy
 * All text, headlines, and copy for the homepage
 * This ensures content integrity and makes updates instant
 */

export const HOMEPAGE_CONTENT = {
  hero: {
    headline: "Founder's pace.",
    highlightedText: "Athlete's body.",
    subheadline: "For the former-athlete founder who's building the business he loves in a body he hates.",
    ctaText: "BOOK DISCOVERY CALL",
    ctaLink: "https://cal.com/bartcagara/discovery-call",
  },

  trustedBy: {
    title: "Trusted by founders from:",
  },

  diagnosis: {
    title: "YOUR BODY CAN'T\nCARRY YOUR VISION",
    subtitle: "",
    items: [
      "You're on vacation with your family.",
      "Your kids are calling you to join them in the pool.",
      "You wave. \"I'll come in later.\"",
      "But you never do.",
      "You tell yourself it's because you're thinking about work. Noble excuse—it supports the family.",
      "**But the truth?**",
      "You're too fucking self-conscious about how out of shape you are to take your shirt off.",
      "So you sit there. Phone in hand. Watching your kids grow up from the sidelines.",
      "**Not because you're busy. Because your body won't let you be present.**",
    ],
    afterText: "",
    outcome: "",
  },

  solution: {
    title: "YOU LOOK AND THINK\nLIKE AN ATHLETE",
    subtitle: "",
    items: [
      "Your nutrition fuels the grind without making you sluggish.",
      "Your training fits your schedule—short, effective, targeted.",
      "Your recovery keeps you sharp instead of restless.",
      "**You show up.**",
      "At the pool with your kids. At investor dinners. In the mirror.",
      "**Because your body and mind are finally aligned—carrying your vision instead of holding it back.**",
    ],
    afterText: "",
    outcome: "",
  },

  results: {
    headline: "THESE FOUNDERS DIDN'T\nWAIT TILL THINGS GOT QUIET",
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
    subtitle: "Six months to rebuild your body and your identity.",
    phases: [
      {
        number: "01",
        title: "The Reset",
        weeks: "Weeks 1-4",
        focus: "IMMEDIATE CONTROL",
        items: [
          "**Nutrition baseline** - You start eating the way you like—but for results.",
          "**Training baseline** - You master form and gain the strength foundation.",
          "**Pattern recognition** - We study what made you quit before and build momentum.",
        ],
        win: "You drop 10-15 lbs. Your energy returns. You understand why you've been failing.",
      },
      {
        number: "02",
        title: "The Build",
        weeks: "Weeks 5-12",
        focus: "PERFORMANCE UNDER PRESSURE",
        items: [
          "**Physique construction** - Your training evolves. Your body starts looking athletic.",
          "**Travel-proofing** - Restaurants, airports, hotel gyms—handled.",
          "**Bloodwork optimization** - We go beyond basic improvements. We optimize for performance and longevity.",
        ],
        win: "Clothes fit different. People notice. You feel dangerous again.",
      },
      {
        number: "03",
        title: "The Exit",
        weeks: "Weeks 13-24",
        focus: "FULL AUTONOMY",
        items: [
          "**Life integration** - Vacations, pivots, chaos—nothing derails you.",
          "**Training refinement** - Addressing weak points, adjusting program for the future.",
          "**Mindset mastery** - Future-proofing and continuous identity work.",
        ],
        win: "You fire me. You own this. Forever.",
      },
    ],
    methodology: {
      headline: "ALL DELIVERED THROUGH THE ART OF CONVERSATION.",
      body: [
        "High-touch environment. Continuous communication.",
        "I don't believe in chest-beating, cold plunging, or yelling at you every week.",
        "I believe in two mission-driven men sitting down, dropping their guard, picking apart broken patterns, and doing the inner work that drives true and lasting transformation.",
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
      "I was the athletic kid. Wasn't good enough to go pro, but the obsession with performance never left.",
      "Came up in the startup world doing marketing. Loved the growth phase. Then it got political. I hated it.",
      "So I left and built my own thing.",
      "Over time, a pattern emerged. The founders I connected with most were former athletes who sacrificed their body to build their business.",
      "I got them because I understood what they valued: building over politics, freedom over bureaucracy.",
      "Their problem wasn't discipline. It was rigid protocols designed for people with low stress and predictable schedules.",
      "So I built something different. A system that works when you forget to eat between investor meetings and end up inhaling snacks—while planning your next move during a family weekend.",
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
      "Or will you still be running on caffeine, takeout, and borrowed time—building something great in a body that's falling apart?",
      "**If that sits wrong, let's talk.**",
      "You'll walk away with clarity—whether we work together or not.",
    ],
    ctaText: "BOOK DISCOVERY CALL",
    ctaLink: "https://cal.com/bartcagara/discovery-call",
  },
} as const;
