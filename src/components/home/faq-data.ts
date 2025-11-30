import type { FAQItems } from "./types";

export const FAQ_ITEMS: FAQItems = [
  {
    q: "Is the 15-Min Audit really free? What's the catch?",
    a: "<p>Yes, it is free. The catch is that I only work with executives I can actually help. This call is how I determine if you are a fit for my system. If you are, I'll show you what working together looks like. If not, you leave with a clear diagnosis of your problem.</p>",
  },
  {
    q: "Do I need to prepare anything for this call?",
    a: "<p>No. Just bring your calendar. We will look at your current schedule constraints and spot the leaks where your fitness attempts are failing.</p>",
  },
  {
    q: "I am extremely busy. Will this actually take 15 minutes?",
    a: "<p>Yes. We keep it strictly to 15 minutes. I respect your time.</p>",
  },
  {
    q: "What happens after the Audit?",
    a: "<p>You'll get an email from me with a detailed summary of what we discussed and the exact low-friction, high-impact fix you should implement immediately.</p><p>The email will also have a link to book a Strategy Call. So when you are ready to explore what working together looks like to build the full system, you can go ahead and schedule it. No pressure, just a plan.</p>",
  },
] as const;