/**
 * Homepage Content - The Golden Copy
 * All words, and the proof each section leads with, for the homepage.
 * Components only lay these out, so the copy can be swapped here alone.
 *
 * Source: docs/redesign/lead-round-8-homepage.md (21 Nov 2026), which keeps
 * round 7's offer, questions and close (docs/redesign/fable-round-7-homepage.md).
 *
 * Markup in strings: a line wrapped in ** is a key line (bold and larger);
 * **words** inside a line are bold in place.
 *
 * A "moment" is the page's repeating device: a small place label, one client
 * sentence very large, the screenshot under it, then the name line.
 */

export const BOOK_LABEL = "Book Restart Audit";

const SHOT = {
  chicago: {
    src: "/images/testimonials/dm-18-chicago.webp",
    width: 770,
    height: 272,
    alt: "Client message: \"Man I am so pumped. I lost weight this week while in a hotel ALL week in Chicago!\" and \"I love that I'm learning how to be bulletproof while on the road.\"",
  },
  beach: {
    src: "/images/testimonials/dm-27.webp",
    width: 1169,
    height: 640,
    alt: "Client message: \"I feel much more confident on the beach with a more slim and toned physique. I'm not embarrassed to take my shirt off anymore!\"",
  },
  lipids: {
    src: "/images/testimonials/dm-2-lipids.webp",
    width: 754,
    height: 262,
    alt: "Client message: \"Here are my results from my lipid panel: HDL: 46 (up 4 points), LDL: 177 (down 43 points), Triglycerides: 57 (down 53 points)\"",
  },
  scan: {
    src: "/images/testimonials/dm-29.webp",
    width: 1170,
    height: 692,
    alt: "Client message: \"Got my results back from my coronary artery calcium scan.....drumroll......0% blockage on all coronary arteries!\" Bart: \"Way to go, man.\" Client: \"Now my doctor can shut up about putting me on statins!\"",
  },
  oneCall: {
    src: "/images/testimonials/dm-15.webp",
    width: 670,
    height: 688,
    alt: "Client message: \"I really felt like you uncovered some big areas that were causing me to add way more calories than I realized... huge pieces to the puzzle that we uncovered in one call!\"",
  },
  vacation: {
    src: "/images/testimonials/dm-28.webp",
    width: 738,
    height: 385,
    alt: "Client message: \"Returned same weight as departed with extensive trying of local cuisine. No limits, no restrictions, just understanding and awareness = recipe for fun. Proud to saw my 11yo to ask for steamed rice instead of fries, same as Daddy did\"",
  },
  lake: {
    src: "/images/testimonials/dm-6-lake.webp",
    width: 778,
    height: 866,
    alt: "Client message: \"This was cool. Skipped the workout yesterday, but because of my 2 sons asked me to go to the lake near our house... I have a trick with my eldest, where I throw him in the air and he does a backflip. Last summer I was able to do that 3-4 times and then I was done, tired/pain, couldn't lift him enough. BUT NOW, I just couldn't stop... it was exactly the reason why I wanted to change my life.\" Bart: \"Now, that's a badass dad.\"",
  },
} as const;

export const HOMEPAGE_CONTENT = {
  /** The label in the header, as "The Restart Quiz" on /quiz. */
  headerLabel: "Bart Cagara",

  hero: {
    headline: "Get in shape",
    highlightedText: "one last time.",
    subheadline:
      "I'm Bart, a founder and a dad. I coach founders who played sports. We plan your trips and client dinners before they happen, so a stressful month doesn't set you back.",
    ctaText: BOOK_LABEL,
    ctaNote: "45 minutes, on video, with me.",
    imageSrc: "/images/home/bart-and-son-2.webp",
    imageAlt: "Bart Cagara in a suit, his son beside him looking up at him",
  },

  diagnosis: {
    title: "You've gotten in shape before.",
    items: [
      "Three good weeks, maybe three good months. Then a conference, a week in a hotel, a vacation, and you're back where you started.",
      "Last summer your kids were in the pool, calling for you.",
      "**\"In a minute.\"**",
      "You were waiting until nobody was looking.",
      "Every time, it's harder to start again.",
    ],
  },

  pattern: {
    title: "Every plan you tried needed a calm week.",
    body: [
      "You don't get many. So we start in the busy stretch and plan around the conference, the hotel week, the vacation. We work together for six months, long enough that all of them happen while I'm still with you.",
    ],
  },

  /** The proof, at the places named above, each under its place label. */
  proof: {
    title: "The places that used to put you back at the start.",
    conference: {
      label: "At a conference",
      lead: "Ate poorly at the closing party.",
      quote: "Weight stayed at exactly 200.",
      name: "Ben F., founder, the day after flying home",
    },
    hotel: {
      label: "In a hotel all week",
      quote: "I lost weight this week while in a hotel ALL week in Chicago!",
      name: "Drew W., CEO",
      shots: [SHOT.chicago],
    },
    vacation: {
      label: "On vacation",
      quote: "I'm not embarrassed to take my shirt off anymore!",
      name: "Phil D.",
      shots: [SHOT.beach],
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
    ctaText: BOOK_LABEL,
    quiz: {
      lead: "Not ready to book?",
      link: "Take the 2-minute quiz.",
      href: "/quiz",
    },
  },

  results: {
    headline: "They didn't have time either.",
    doctor: {
      label: "At the doctor's",
      quote: "Now my doctor can shut up about putting me on statins!",
      name: "Matt B.",
      shots: [SHOT.lipids, SHOT.scan],
    },

    featuredVideo: {
      src: "/videos/mj-hurley-testimonial.mp4",
      captions: "/videos/mj-hurley-testimonial.vtt",
      poster: "/images/testimonials/mj-hurley-poster.webp",
      title: "MJ H., client interview",
      quote: "Looking forward to going to the pool and taking my shirt off.",
      name: "MJ H., co-founder, former college athlete",
    },
    sections: {
      transformations: "Client Photos",
      dms: "Client Messages",
      testimonials: "Client Testimonials",
    },
  },

  program: {
    moment: {
      label: "The day after a call",
      quote: "Huge pieces to the puzzle that we uncovered in one call!",
      name: "Drew W., CEO",
      shots: [SHOT.oneCall],
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
    after: {
      label: "9 months after we finished",
      quote: "Returned same weight as departed.",
      name: "Adrian K., Group CFO",
      note: "Nobody was checking in.",
      shots: [SHOT.vacation],
    },
    ctaText: BOOK_LABEL,
  },

  about: {
    title: "Who the fuck is Bart?",
    imageSrc: "/images/bart-headshot.jpg",
    imageAlt: "Bart Cagara",
    paragraphs: [
      "I played sports my whole childhood. By the end of college, the athlete was gone.",
      "Then I did what you've probably done. Paleo, Primal, keto, all by the book. At the fitness startup I'd just joined, I ate lunch at my desk out of a container while everyone else went out.",
      "I lost weight every time. I also lost muscle, strength and my libido. So I got my blood checked. LDL cholesterol at 360. Testosterone at 330.",
      "I asked the nutritionists I worked with for help, and they coached me properly.",
    ],
    card: {
      columns: ["Then", "A year later"],
      rows: [
        { label: "LDL cholesterol", then: "360", now: "118" },
        { label: "Testosterone", then: "330", now: "540" },
      ],
    },
    paragraphsAfter: [
      "Today I lift four days a week, I eat out, and I've held 12 to 15% body fat for years.",
      "**I can sit down at any table, be fine, and focus on the people around me.**",
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
      answer: "$7,000 paid in full, or about $7,500 split into payments.",
    },
  ],

  finalCta: {
    /** The lake: screenshot above the sentence; no name line until Bart says who sent it. */
    moment: {
      label: "At the lake with his sons",
      quote: "It was exactly the reason why I wanted to change my life.",
      shots: [SHOT.lake],
      shotsFirst: true,
    },
    headline: "Think back 24 weeks.",
    body: [
      "How many times have you started over since then?",
      "Now picture the next 24 weeks going the other way. A bit stronger every week, a bit leaner, and for once it doesn't fall apart when work gets crazy.",
      "**Let's start with 45 minutes.**",
    ],
    ctaText: BOOK_LABEL,
    ctaNote: "You tell me what's been going on. I tell you what I'd change.",
  },

  briefing: {
    heading: "Not booking today?",
    body: ["I send one email a week."],
    submitLabel: "Get the Brief",
    tagline: "Founder's pace. Athlete's body.",
  },
} as const;
