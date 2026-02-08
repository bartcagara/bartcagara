/**
 * Homepage Content - The Golden Copy
 * All text, headlines, and copy for the homepage
 * This ensures content integrity and makes updates instant
 */

export const HOMEPAGE_CONTENT = {
  hero: {
    headline: "Founder's workload.",
    highlightedText: "Athletic body.",
    subheadline: "For the former-athlete founder who chose freedom over corporate—and sacrificed his body in the process.",
    ctaText: "BOOK DISCOVERY CALL",
    ctaLink: "https://cal.com/bartcagara/discovery-call",
  },

  trustedBy: {
    title: "Trusted by founders from:",
  },

  diagnosis: {
    title: "YOU CAN'T OUTSOURCE\nTHIS TO AN APP.",
    subtitle: "You've tried the quick fixes. None of them stick.",
    items: [
      "Diets that don't account for last-minute client dinners",
      "Workout programs designed for people with predictable schedules",
      "Fitness coaches who've never built a business and don't understand the chaos",
    ],
    afterText: "So you wing it. And every time your business demands more, your health collapses.",
    outcome: "The outcome? More tired. More fat. More isolated. Running a company you love in a body you hate.",
  },

  solution: {
    title: "A COACH WHO'S ACTUALLY\nBUILT SOMETHING.",
    subtitle: "You need someone who gets it.",
    items: [
      "Your training adapts when a deal falls through and you're stress-eating at midnight",
      "Your nutrition works with investor dinners, travel chaos, and family weekends",
      "Your recovery protocols fit around 60-hour work weeks, not Instagram wellness fantasies",
    ],
    afterText: "I've built a business from scratch. I know what it takes. I know what breaks.",
    outcome: "The outcome? You get lean, sharp, and resilient—without rigid protocols that assume you have a normal life.",
  },

  results: {
    headline: "THESE FOUNDERS DIDN'T\nMAGICALLY GET MORE TIME.",
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
          "**Stop the bleeding** - Fix the chaos eating, late-night binges, reliance on caffeine",
          "**Build a baseline** - Training that actually fits between investor calls and product launches",
          "**Reclaim energy** - Kill the 3pm crash so you can think clearly when it matters",
        ],
        win: "YOU DROP 10-15 LBS. ENERGY RETURNS. YOU'RE NOT RUNNING ON FUMES ANYMORE.",
      },
      {
        number: "02",
        title: "The Build",
        weeks: "Weeks 5-12",
        focus: "PERFORMANCE UNDER PRESSURE",
        items: [
          "**Get strong and lean** - Build a body that looks like you still give a shit",
          "**Navigate the chaos** - Eating strategies for client dinners, red-eyes, trade shows, chaos weeks",
          "**Optimize the engine** - Bloodwork, hormones, recovery—treat yourself like the asset you are",
        ],
        win: "CLOTHES FIT DIFFERENT. CLIENTS NOTICE. YOU FEEL DANGEROUS AGAIN.",
      },
      {
        number: "03",
        title: "The Exit",
        weeks: "Weeks 13-24",
        focus: "FULL AUTONOMY",
        items: [
          "**Intuitive everything** - No more tracking, no more overthinking food",
          "**Play the long game** - Optimize for 20 years of building, not 90-day sprints",
          "**Own the system** - Chaos weeks, vacations, pivots—nothing derails you",
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
    highlightedText: "6 months.",
    subheadline: "Your business will be further along. Will your body? Or will you still be running on caffeine, takeout, and borrowed time—building something great in a body that's falling apart? If that sits wrong, let's talk. You'll walk away with clarity—whether we work together or not.",
    ctaText: "BOOK DISCOVERY CALL",
    ctaLink: "https://cal.com/bartcagara/discovery-call",
  },
} as const;
