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
    title: "TAKING YOUR SHIRT OFF RUINS THE WHOLE THING",
    subtitle: "",
    items: [
      "Your kids are in the pool. They're calling for you.",
      "You say you'll be in later.",
      "**Then you calculate... Shirt off, move fast, into the water before anyone sees.**",
      "You built something real. You're respected in every room you walk into. But nobody knows how much headspace goes to managing how you look. The family photo you angled yourself out of.",
      "**The shame is private. And it's constant.**",
      "It bleeds into everything.",
      "And the cynicism that's crept in - that's the part that scares you most.",
      "**Because that's not you.**",
    ],
  },

  solution: {
    title: "THIS TIME YOU DON'T THINK TWICE",
    subtitle: "",
    items: [
      "6 months from now, it just stops.",
      "Not because you hit a number. Not because you crossed a finish line.",
      "**You just look up and realize the noise is gone.**",
      "You're on the beach with your kids. Shirt's off. You're already in the game before they finish asking.",
      "**Not calculating. Not managing. Just there.**",
      "Your wife sees it. So do the other wives.",
      "You didn't notice when it happened.",
      "**That's how you know it's real.**",
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
        "**The training adapts to your schedule. The nutrition works on the road. But it's the identity work - done in those sessions - that makes any of it last.**",
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
