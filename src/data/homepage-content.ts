/**
 * Homepage Content - The Golden Copy
 * All words, and the proof each section leads with, for the homepage.
 * Components only lay these out, so the copy can be swapped here alone.
 *
 * Source: docs/redesign/fable-round-6-homepage.md, Part 1, with "Section 5,
 * with the program breakdown" and the Lead's edit to it (21 Nov 2026).
 *
 * Markup in strings: a line wrapped in ** is a key line (bold and larger);
 * **words** inside a line are bold in place.
 */

export const BOOK_LABEL = "Book Restart Audit";

export const HOMEPAGE_CONTENT = {
  /** The label in the header, as "The Restart Quiz" on /quiz. */
  headerLabel: "Founder Athlete OS",

  hero: {
    headline: "Get in shape",
    highlightedText: "one last time.",
    subheadline:
      "I'm Bart, a founder and a dad. I coach founders who played sports. We plan your trips and client dinners before they happen, so a stressful month doesn't set you back.",
    ctaText: BOOK_LABEL,
    ctaNote: "45 minutes, on video, with me.",
    imageSrc: "/images/home/bart-and-son-2.webp",
    imageAlt: "Bart Cagara in a suit, his son beside him looking up at him",
    proof: {
      lead: "Ate poorly at the closing party.",
      bold: "Weight stayed at exactly 200.",
      name: "Ben F., founder, the day after flying home from a conference",
    },
    quizLink: {
      text: "Find out why you keep starting over.",
      href: "/quiz",
    },
  },

  diagnosis: {
    title: "Shirt off ruins the whole thing.",
    items: [
      "Your kids are in the pool, calling for you.",
      "**\"In a minute.\"**",
      "There is no minute. You're waiting until nobody's looking.",
      "Back in school you were the athlete. Then you built a company, and **the body paid for it.**",
    ],
  },

  pattern: {
    title: "Every plan you tried only worked in a calm week.",
    message: {
      src: "/images/testimonials/dm-18-chicago.webp",
      width: 770,
      height: 272,
      alt: "Client message: \"Man I am so pumped. I lost weight this week while in a hotel ALL week in Chicago!\" and \"I love that I'm learning how to be bulletproof while on the road.\"",
      caption: "Drew W., CEO",
    },
    body: [
      "Every January you get three good weeks. Then a trip comes up or work takes over, the plan stops, and you wait for a quieter month.",
      "So this takes six months, long enough that the heavy weeks at work happen while I'm still around.",
      "Start in the busy stretch. **That's what we're solving.**",
    ],
    ctaText: BOOK_LABEL,
  },

  results: {
    headline: "They didn't have time either.",
    featuredVideo: {
      src: "/videos/mj-hurley-testimonial.mp4",
      captions: "/videos/mj-hurley-testimonial.vtt",
      poster: "/images/testimonials/mj-hurley-poster.webp",
      title: "MJ H., client interview",
      quote: "Looking forward to going to the pool and taking my shirt off.",
      name: "MJ H., co-founder, former college athlete",
    },
    beforeAfters: [
      {
        src: "/images/transformations/transformation-9.22cefe81.webp",
        alt: "Client before-and-after: major fat loss and visible muscle after 24 weeks",
      },
      {
        src: "/images/transformations/transformation-2.e76c02cb.webp",
        alt: "Client before-and-after: an athletic build rebuilt over 14 months",
      },
    ],
    message: {
      src: "/images/testimonials/dm-27.webp",
      width: 1169,
      height: 640,
      alt: "Client message: \"I feel much more confident on the beach... I'm not embarrassed to take my shirt off anymore!\"",
      caption: "Phil D., on vacation",
    },
    sections: {
      transformations: "Client Photos",
      dms: "Client Messages",
      testimonials: "Client Testimonials",
    },
  },

  program: {
    message: {
      src: "/images/testimonials/dm-15.webp",
      width: 670,
      height: 688,
      alt: "Client message: \"I really felt like you uncovered some big areas that were causing me to add way more calories than I realized... huge pieces to the puzzle that we uncovered in one call!\"",
      caption: "Drew W., CEO, the day after a call",
    },
    title: "Six months, you and me.",
    subtitle: "A call every week. WhatsApp in between.",
    steps: [
      {
        number: "01",
        title: "The Reset",
        weeks: "Weeks 1-4",
        outcome: "It fits the week you already have.",
        items: [
          "Two to four short sessions a week",
          "No meal plan. Food you actually like.",
          "We find what ended every attempt before this one.",
        ],
      },
      {
        number: "02",
        title: "The Build",
        weeks: "Weeks 5-12",
        outcome: "We make it hold on the road.",
        items: [
          "A hotel-gym version for trips",
          "Restaurants and airports, handled",
          "Before a client dinner, send me the menu",
        ],
      },
      {
        number: "03",
        title: "The Exit",
        weeks: "Weeks 13-24",
        outcome: "You run it yourself.",
        items: [
          "Vacations, pivots, sick kids. The plan holds.",
          "The decisions move from my head to yours.",
        ],
      },
    ],
    closer: "Then you fire me.",
    afterMessage: {
      src: "/images/testimonials/dm-28.webp",
      width: 738,
      height: 385,
      alt: "Client message: \"Returned same weight as departed with extensive trying of local cuisine. No limits, no restrictions, just understanding and awareness = recipe for fun. Proud to saw my 11yo to ask for steamed rice instead of fries, same as Daddy did\"",
      caption: "Adrian K., Group CFO",
      note: "This hit my phone 9 months after we finished. Nobody was checking in.",
    },
    ctaText: BOOK_LABEL,
  },

  about: {
    title: "Who the fuck is Bart?",
    imageSrc: "/images/bart-headshot.jpg",
    imageAlt: "Bart Cagara",
    paragraphs: [
      "By the end of college, the athlete was gone.",
      "I did Paleo, Primal and keto by the book, and ate lunch at my desk out of a container.",
    ],
    card: {
      columns: ["Then", "A year later"],
      rows: [
        { label: "LDL cholesterol", then: "360", now: "118" },
        { label: "Testosterone", then: "330", now: "540" },
      ],
    },
    paragraphsAfter: [
      "Now I lift four days a week, eat out, and have held 12 to 15% body fat for years.",
      "**My son is watching.**",
    ],
    transformationLink: {
      lead: "I bet you're curious about my before-after.",
      link: "See it here.",
    },
    transformationImage: "/images/transformations/bart-transformation.webp",
  },

  objectionsTitle: "What men ask me before they book.",

  objections: [
    {
      question: "I know what to do. I just need to do it.",
      answer: "Two out of three men tell me that on the call. What they haven't had is someone who sees the week changing and adjusts on the fly.",
    },
    {
      question: "What does it cost?",
      answer: "$7,000 paid in full, or about $7,500 split into payments. Same as on the booking form.",
    },
    {
      question: "What happens on the Restart Audit?",
      answer: "You tell me what's been going on and where you'd like to be. I tell you what I'd change. If we're not a fit, I'll say so.",
    },
  ],

  finalCta: {
    headline: "Six months from now, your business will be further along.",
    highlightedText: "Will your body?",
    body: [
      "One day you overhear your kid bragging about you to his friends.",
      "**He's not exaggerating.**",
    ],
    ctaText: BOOK_LABEL,
  },

  briefing: {
    heading: "Not booking today?",
    body: ["I send one email a week."],
    submitLabel: "Get the Brief",
  },
} as const;
