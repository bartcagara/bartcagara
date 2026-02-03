/**
 * Homepage Content - The Golden Copy
 * All text, headlines, and copy for the homepage
 * This ensures content integrity and makes updates instant
 */

export const HOMEPAGE_CONTENT = {
  hero: {
    headline: "Stop The Decline.",
    highlightedText: "Reclaim The Athlete.",
    subheadline: "For the former athlete who traded his health for a career. You didn't come this far to look like you gave up.",
    ctaText: "Book Discovery Call",
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
      "Your nutritionist has no idea how to adjust it for training, or travel.",
    ],
    afterText: "So you try to piece it together yourself. And every time your schedule gets heavy, the whole thing collapses.",
    outcome: "The outcome? More tired, more fat, more isolated - slowly suffocating the athlete in you. Dependent on protocols that were never designed for you.",
  },

  solution: {
    title: "BODY. MIND. SCHEDULE.\nINTEGRATED.",
    subtitle: "One coach who sees the full picture.",
    items: [
      "Your nutrition adapts to travel and dining out.",
      "Your training adjusts to your changing schedule.",
      "Your stress response changes because you finally recover.",
    ],
    afterText: "You enter a relationship where you can dump the weight, understand the patterns, regroup, and keep moving.",
    outcome: "The outcome? You get fit, feel sharp, and travel without losing momentum. You feel like yourself again - without rigid protocols holding you hostage.",
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
    subtitle: "Six months to reclaim the athlete. Built for your schedule, your travel, your life.",
    phases: [
      {
        number: "01",
        title: "The Reset",
        weeks: "Weeks 1-4",
        focus: "IMMEDIATE CONTROL",
        items: [
          "**Metabolic Repair** - Eat more, burn more, stop starving",
          "**30-Minute Baseline** - Build your strength foundation",
          "**Energy Systems** - Kill the afternoon crash",
        ],
        win: "YOU DROP 10-15 LBS. ENERGY RETURNS. YOU'RE BACK.",
      },
      {
        number: "02",
        title: "The Build",
        weeks: "Weeks 5-8",
        focus: "PHYSIQUE CONSTRUCTION",
        items: [
          "**Hypertrophy Training** - Building the V-Taper back",
          "**Travel-Proofing** - Airport & hotel systems",
          "**Anti-Fragility** - Injury prevention & mobility",
        ],
        win: "THE SHIRT GETS TIGHTER IN THE SHOULDERS, LOOSER IN THE WAIST.",
      },
      {
        number: "03",
        title: "The Armor",
        weeks: "Weeks 9-12",
        focus: "SOCIAL COMMAND",
        items: [
          "**Restaurant Protocols** - Dominate client dinners without breaking stride",
          "**Bloodwork Intel** - Optimize from data, not guesswork",
          "**Athletic Integration** - Get back in your sport without breaking down",
        ],
        win: "YOU HIT A NEW BASELINE. YOU'RE NOT GOING BACK.",
      },
      {
        number: "04",
        title: "The Exit",
        weeks: "Weeks 13-24",
        focus: "FULL AUTONOMY",
        items: [
          "**Intuitive Operation** - Decisions without rules or tracking",
          "**Longevity Protocols** - Healthspan extension beyond the program",
          "**Life Integration** - Weddings, vacations, celebrations - nothing derails you",
        ],
        win: "YOU FIRE ME. YOU OWN THE SYSTEM.",
      },
    ],
  },

  about: {
    title: "Who The FUCK",
    subtitle: "Is Bart?",
    imageSrc: "/images/home/bart-and-son.jpg",
    imageAlt: "Bart Cagara and son flexing",
    paragraphs: [
      "Fair question.",
      "I was an athletic kid like you. Just not gifted enough to go pro. But the obsession never left.",
      "I spent years mastering Sports Nutrition and Strength Training because I refused to be average. And because I want this little guy to be proud of his old man.",
      "As I built my practice, former athletes started gravitating toward me. (One client told me it's the Nick Saban in me.)",
      "But I kept seeing the same pattern - great guys trading their health for their career.",
      "So I built a system that translates physique and performance optimization into an executive lifestyle. High-stakes dinners. Heavy travel. Zero room for \"perfect world\" routines.",
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
