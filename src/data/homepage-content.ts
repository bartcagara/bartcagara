/**
 * Homepage Content - The Golden Copy
 * All text, headlines, and copy for the homepage
 * This ensures content integrity and makes updates instant
 */

export const HOMEPAGE_CONTENT = {
  hero: {
    headline: "Executive schedule.",
    highlightedText: "Athletic body.",
    subheadline: "For the former athlete who traded his health for success.",
    ctaText: "BOOK DISCOVERY CALL",
    ctaLink: "https://cal.com/bartcagara/discovery-call",
  },

  trustedBy: {
    title: "Trusted by executives from:",
  },

  diagnosis: {
    title: "DIFFERENT SIGNALS.\nNOTHING CONNECTS.",
    subtitle: "Three experts. None of them seeing the full picture.",
    items: [
      "Your therapist can't build your nutrition or training.",
      "Your PT doesn't understand your stress or your schedule.",
      "Your nutritionist doesn't know how to maximize training results.",
    ],
    afterText: "So you try to piece it together yourself. And every time your schedule gets heavy, the whole thing collapses.",
    outcome: "The outcome? More tired, more fat, more isolated - dependent on protocols that were never designed for you.",
  },

  solution: {
    title: "BODY. MIND. SCHEDULE.\nINTEGRATED.",
    subtitle: "One coach who sees the full picture.",
    items: [
      "Your training adapts to your schedule.",
      "Your nutrition works with travel and dining out.",
      "Your stress goes down with proper recovery.",
    ],
    afterText: "You finally work with someone where you can dump the weight, understand the patterns, regroup, and keep moving.",
    outcome: "The outcome? You get fit, feel sharp, and adapt to chaos intuitively - without rigid protocols holding you hostage.",
  },

  results: {
    headline: "THESE GUYS DIDN'T\nFIND MORE TIME.",
    subheadline: "They ditched the scattered approach.",
    sections: {
      transformations: "Client Photos",
      interviews: "Client Interviews",
      dms: "Client DMs",
      testimonials: "Client Testimonials",
    },
  },

  program: {
    title: "EXECUTIVE\nATHLETE OS",
    subtitle: "Six months to rebuild your body. Built for your schedule, your travel, your life.",
    phases: [
      {
        number: "01",
        title: "The Foundation",
        weeks: "Weeks 1-4",
        focus: "IMMEDIATE CONTROL",
        items: [
          "**Nutrition Reset** - Eat more, burn more, stop snacking",
          "**Training Baseline** - Build a foundation that fits your schedule",
          "**Energy Systems** - Kill the afternoon crash and be present again",
        ],
        win: "YOU DROP 10-15 LBS. ENERGY RETURNS. YOU'RE BACK.",
      },
      {
        number: "02",
        title: "The Build",
        weeks: "Weeks 5-12",
        focus: "PHYSIQUE & SYSTEMS",
        items: [
          "**Targeted Training** - Build a body that's lean, strong, and capable",
          "**Travel Protocols** - Unfamiliar restaurants and hotel gyms - handled",
          "**Bloodwork Intel** - Lipids, hormones - optimized",
        ],
        win: "CLOTHES FIT DIFFERENT. PEOPLE START NOTICING.",
      },
      {
        number: "03",
        title: "The Exit",
        weeks: "Weeks 13-24",
        focus: "FULL AUTONOMY",
        items: [
          "**Intuitive Eating** - No more overthinking food",
          "**Longevity Focus** - Optimize for the decades ahead",
          "**Life Integration** - Weekends, vacations, chaos - nothing derails you",
        ],
        win: "YOU FIRE ME. YOU OWN THE SYSTEM.",
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
      "I played sports as a kid. Wasn't good enough to go pro, but the obsession with performance never left.",
      "So I spent years mastering nutrition and strength training - first for myself, then for clients.",
      "Over time, a pattern emerged. The clients I hit it off with most were former athletes. Guys who'd built impressive careers but let their bodies fall apart. Guys who'd tried everything and couldn't make it stick.",
      "What was breaking them wasn't discipline. It was noise. Rigid approaches designed for people with perfect schedules and low stress.",
      "So I built something different. A system that integrates nutrition, training, and mental support in the context of an executive lifestyle - high-stakes dinners, heavy travel, and zero room for \"perfect world\" routines.",
    ],
    credentials: ["Sports Nutritionist", "Performance Coach"],
  },

  finalCta: {
    headline: "Fast-forward",
    highlightedText: "6 months.",
    subheadline: "Are you okay being in the same spot? Cool. But if that thought sits wrong, let's have a conversation. You'll walk away with clarity - whether we work together or not.",
    ctaText: "BOOK DISCOVERY CALL",
    ctaLink: "https://cal.com/bartcagara/discovery-call",
  },
} as const;
