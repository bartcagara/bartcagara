import type { FAQItems } from "./types";

export const FAQ_ITEMS: FAQItems = [
  {
    q: "Is the 15-Min Audit really free? What's the catch?",
    a: "<p>Yes, it is free. I have met many amazing people through these audits over the years. Many went on to become clients; many didn't.</p><p>Here is the reality: If we are a good fit, we will both know it by the end of the call, and we can schedule a time to talk about working together. If not, you walk away with a diagnosis and a fix you can use immediately.</p>",
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
    a: "<p>You'll get an email from me with a detailed summary of what we discussed and the exact low-friction, high-impact fix you should implement immediately.</p><p>The email will also have a link to book a Strategy Call. So when you are ready to explore what working together looks like to build the full system, you can go ahead and schedule it.</p>",
  },
] as const;