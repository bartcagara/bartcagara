/**
 * Homepage Content - The Golden Copy
 * All text, headlines, and copy for the homepage
 * This ensures content integrity and makes updates instant
 */

export const HOMEPAGE_CONTENT = {
  hero: {
    headline: "Stop The Decline.",
    highlightedText: "Reclaim The Athlete.",
    subheadline: "For the former-athlete executive whose physical decline just got real. You didn't come this far to look like you gave up.",
    ctaText: "Book Discovery Call",
    ctaLink: "https://cal.com/bartcagara/discovery-call",
  },

  trustedBy: {
    title: "Trusted by executives from:",
  },

  diagnosis: {
    title: "YOU ARE GRINDING\nLIKE A ROOKIE.",
    subtitle: "Fighting your physiology.\nRelying on willpower.\nForcing the game.",
    pillars: [
      {
        title: "Diet",
        items: [
          "Frustration leading to restrictive diets you can't maintain.",
          "White-knuckling Mon-Thu. Collapsing on the weekend.",
          "One business trip destroys weeks of progress.",
        ],
      },
      {
        title: "Training",
        items: [
          "Using \"College Athlete\" logic on a 40-year-old body.",
          "The \"All-or-Nothing\" loop: 2 weeks on, 2 months off.",
          "Burning calories, but never building muscle.",
        ],
      },
    ],
    outcome: "The outcome? You stay trapped in the restart cycle, managing a physical decline instead of reversing it.",
  },

  solution: {
    title: "START OPERATING\nLIKE A VETERAN.",
    subtitle: "Picking your spots.\nManaging your energy.\nLetting the game come to you.",
    pillars: [
      {
        title: "Diet",
        items: [
          "Nutrition without the starvation.",
          "Dining out without looking like the \"diet guy.\"",
          "Traveling without losing momentum.",
        ],
      },
      {
        title: "Training",
        items: [
          "Short, targeted sessions. Zero wasted effort.",
          "Building muscle with hotel gym dumbbells.",
          "Injury prevention built into every session.",
        ],
      },
    ],
    outcome: "The outcome? A system that absorbs the chaos. You look athletic and feel dangerous, no matter where the job takes you.",
  },

  results: {
    headline: "THESE GUYS DIDN'T\nFIND MORE TIME.",
    subheadline: "They built a better system.",
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
