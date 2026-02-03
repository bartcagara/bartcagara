/**
 * Homepage Content - The Golden Copy
 * All text, headlines, and copy for the homepage
 * This ensures content integrity and makes updates instant
 */

export const HOMEPAGE_CONTENT = {
  hero: {
    headline: "You Built The Career.",
    highlightedText: "Your Body Paid The Price.",
    subheadline: "For the former-athlete executive who traded his health for success.",
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
      "Your therapist is clueless about your nutrition or training.",
      "Your PT doesn't understand your stress or your schedule.",
      "Your nutritionist doesn't know how to accelerate training results.",
    ],
    afterText: "So you try to piece it together yourself. And every time your schedule gets heavy, the whole thing collapses.",
    outcome: "The outcome? More tired, more fat, more isolated - dependent on protocols that were never designed for you.",
  },

  solution: {
    title: "BODY. MIND. SCHEDULE.\nINTEGRATED.",
    subtitle: "One coach who sees the full picture.",
    items: [
      "Your nutrition adapts to travel and dining out.",
      "Your training adjusts to your changing schedule.",
      "Your stress response improves because you finally recover.",
    ],
    afterText: "You get to work with someone where you can dump the weight, understand the patterns, regroup, and keep moving.",
    outcome: "The outcome? You get fit, feel sharp, and adapt to chaos intuitively - without rigid protocols holding you hostage.",
  },

  results: {
    headline: "THESE GUYS DIDN'T\nFIND MORE TIME.",
    subheadline: "They fixed a broken system.",
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
          "**Travel Protocols** - Unfamiliar restaurants and hotel gyms, handled",
          "**Bloodwork Intel** - Optimize from data, not guesswork",
        ],
        win: "CLOTHES FIT DIFFERENT. PEOPLE START NOTICING.",
      },
      {
        number: "03",
        title: "The Exit",
        weeks: "Weeks 13-24",
        focus: "FULL AUTONOMY",
        items: [
          "**Intuitive Eating** - No tracking, no pointless restrictions",
          "**Longevity Focus** - Optimize for the decades ahead",
          "**Life Integration** - Weddings, vacations, chaos - nothing derails you",
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
      "I was an athletic kid. Played sports my whole life. Wasn't good enough to go pro, but the obsession with performance never left.",
      "So I spent years mastering nutrition and strength training - first for myself, then for clients.",
      "Over time, a pattern emerged. I started connecting with former athletes. Guys who'd built impressive careers but let their bodies fall apart. Guys who'd tried everything and couldn't make it stick.",
      "I started noticing what was actually breaking them. It wasn't discipline. It was noise. Rigid approaches designed for people with perfect schedules and low stress.",
      "So I built something different.",
      "A system that integrates nutrition, training, and mental support in the context of an executive lifestyle - high-stakes dinners, heavy travel, and zero room for \"perfect world\" routines.",
      "It's led to amazing relationships with guys who've always been strong - just carrying too much to do it alone.",
      "That's why it works.",
    ],
    credentials: ["Sports Nutritionist", "Performance Coach"],
  },

  finalCta: {
    headline: "Get Back In",
    highlightedText: "The Game.",
    subheadline: "The best athletes get smarter with age. Let's build a system for the man you are today.",
    ctaText: "Book Discovery Call",
    ctaLink: "https://cal.com/bartcagara/discovery-call",
  },
} as const;
