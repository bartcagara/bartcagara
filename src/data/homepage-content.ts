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
    title: "TAKING YOUR SHIRT OFF\nSHOULDN'T COST YOU STATUS",
    subtitle: "",
    items: [
      "Your kids call you to join them in the pool.",
      "You wave. \"I'll come in later.\" You never do.",
      "**Not because you don't want to. Because taking your shirt off in public would instantly lower your status.**",
      "* Diets don't stick. You forget to eat between meetings and inhale everything at night.",
      "* Hiring a trainer feels absurd. Getting lectured on consistency by someone who's never built a business gets old fast.",
      "**So you wait until things slow down.**",
      "They never do. Not with the life you've chosen.",
    ],
  },

  solution: {
    title: "YOUR BODY COMMUNICATES\nWHO YOU REALLY ARE",
    subtitle: "",
    items: [
      "Fast-forward 6 months.",
      "Schedule's still crazy. But something's different.",
      "**You walk into meetings feeling sharp. Your energy lights up the room. Your kids get the best version of you.**",
      "* Your training adjusts to your schedule. You keep building muscle instead of punishing yourself for missing sessions.",
      "* Your nutrition works on the road. No more protocols that can't survive your week. You stop overthinking food.",
      "**The athlete and the founder are finally the same guy.**",
      "You didn't wait for things to slow down.",
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
    subtitle: "Six months to reclaim your body and your identity.",
    phases: [
      {
        number: "01",
        title: "The Reset",
        weeks: "Weeks 1-4",
        focus: "IMMEDIATE CONTROL",
        items: [
          "**Nutrition Baseline** - You start eating the way you like and getting results",
          "**Training Baseline** - You build strength and master form. No wasted time in the gym.",
          "**Pattern Recognition** - We figure out exactly what made you quit before and cut it off at the source",
        ],
        win: "You drop 10-15 lbs. Your energy returns. You understand why you've been failing.",
      },
      {
        number: "02",
        title: "The Build",
        weeks: "Weeks 5-12",
        focus: "PERFORMANCE UNDER PRESSURE",
        items: [
          "**Physique Construction** - Your training evolves. Your body starts looking athletic again",
          "**Travel-Proofing** - Restaurants, airports, hotel gyms. Handled.",
          "**Bloodwork Optimization** - We optimize for performance and longevity, not just basic improvements",
        ],
        win: "Clothes fit different. People notice. You feel like yourself again.",
      },
      {
        number: "03",
        title: "The Exit",
        weeks: "Weeks 13-24",
        focus: "FULL AUTONOMY",
        items: [
          "**Life Integration** - Vacations, pivots, chaos. Nothing derails you.",
          "**Training Refinement** - We eliminate weak points and build a program that outlasts our work together",
          "**Identity Work** - You close the gap between who you are and how you show up. For good.",
        ],
        win: "You fire me. You own this. Forever.",
      },
    ],
    methodology: {
      headline: "",
      body: [
        "I don't believe in hype, chest-beating, or yelling at you every week.",
        "I believe in the art of conversation. Two men sitting down, dropping their guard, getting to the bottom of what's actually broken.",
        "**The program adapts to your schedule. The nutrition works on the road. But it's the identity work - done in those sessions - that makes any of it last.**",
      ],
    },
  },

  about: {
    title: "WHO THE FUCK",
    subtitle: "IS BART?",
    imageSrc: "/images/home/bart-and-son.jpg",
    imageAlt: "Bart Cagara with son - founder athlete health coach",
    subhead: "Fair question.",
    paragraphs: [
      "I was an athletic kid. Not good enough to go pro, but the obsession with performance never left.",
      "Came up in the startup world doing marketing. Loved the growth phase. Then it got political. I hated it.",
      "So I left and built my own thing.",
      "The guys I connected with most? Former athletes who sacrificed their body to build their business.",
      "I understood them because I understood what they valued: building over politics, freedom over bureaucracy.",
      "Their problem wasn't discipline. It was rigid protocols designed for people with low stress and predictable schedules.",
      "**So I built something that works when you forget to eat between investor meetings and end up inhaling snacks on a family weekend.**",
      "I've been coaching founders and former athletes since 2019. Built this from scratch.",
      "**I know these guys. Because I am one.**",
    ],
    credentials: ["Sports Nutritionist", "Performance Coach"],
  },

  finalCta: {
    headline: "Fast-forward",
    highlightedText: "6 months.",
    body: [
      "Your business will be further along. Will your body?",
      "Or will you still be drained, self-conscious, watching your kids from the sidelines?",
      "**If that sits wrong, let's talk.**",
      "You'll walk away with clarity - whether we work together or not.",
    ],
    ctaText: "BOOK DISCOVERY CALL",
    ctaLink: "https://cal.com/bartcagara/discovery-call",
  },
} as const;
