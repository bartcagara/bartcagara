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
    a: "<p>If we identify the problem and you want to fix it, we can discuss installing the Convenience-First system. If you just want the diagnosis, that is fine too.</p>",
  },
] as const;