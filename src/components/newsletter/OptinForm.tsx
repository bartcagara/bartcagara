"use client";

import { useState, FormEvent } from "react";
import { usePostHog } from "posthog-js/react";
import { ArrowRight } from "lucide-react";

export function OptinForm() {
  const [honeypot, setHoneypot] = useState("");
  const [formStartTime] = useState(Date.now());
  const posthog = usePostHog();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    // Check honeypot
    if (honeypot) {
      e.preventDefault();
      posthog?.capture('newsletter_spam_detected', {
        method: 'honeypot',
        honeypot_value: honeypot
      });
      return;
    }

    // Check timing
    const timeElapsed = Date.now() - formStartTime;
    if (timeElapsed < 3000) {
      e.preventDefault();
      posthog?.capture('newsletter_spam_detected', {
        method: 'timing',
        time_elapsed_ms: timeElapsed
      });
      return;
    }

    posthog?.capture('newsletter_signup_started');
  };

  return (
    <div className="w-full">
      <form
        action="https://app.kit.com/forms/7134584/subscriptions"
        method="POST"
        onSubmit={handleSubmit}
        className="space-y-6"
      >
        {/* Hidden Kit Fields */}
        <input type="hidden" name="id" value="7134584" />

        {/* Custom Honeypot */}
        <div style={{ position: "absolute", left: "-5000px" }} aria-hidden="true">
          <input
            type="text"
            name="honeypot"
            tabIndex={-1}
            autoComplete="off"
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
          />
        </div>

        <div className="space-y-6">
          <div className="relative group">
            <input
              type="text"
              name="fields[first_name]"
              placeholder="FIRST NAME"
              required
              className="w-full px-0 py-4 bg-transparent border-b-2 border-bleu-nuit/20 text-xl font-bold text-bleu-nuit placeholder:text-bleu-nuit/30 placeholder:font-bold outline-none focus:border-bleu-accent focus:placeholder:text-bleu-nuit/50 transition-all rounded-none"
            />
          </div>
          <div className="relative group">
            <input
              type="email"
              name="email_address"
              placeholder="EMAIL ADDRESS"
              required
              className="w-full px-0 py-4 bg-transparent border-b-2 border-bleu-nuit/20 text-xl font-bold text-bleu-nuit placeholder:text-bleu-nuit/30 placeholder:font-bold outline-none focus:border-bleu-accent focus:placeholder:text-bleu-nuit/50 transition-all rounded-none"
            />
          </div>
        </div>

        <div className="pt-6">
          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-3 px-6 py-5 md:px-10 md:py-6 text-xl bg-bleu-nuit text-white font-black uppercase tracking-tighter border-2 border-bleu-nuit shadow-brutal-sm md:shadow-brutal-md transition-brutal hover-shadow-none hover-translate-brutal"
          >
            <span>Get The Briefing</span>
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>

        <p className="text-xs text-bleu-nuit/60 font-black uppercase tracking-tight text-center mt-6 selection:bg-bleu-accent selection:text-white">
          Join 400+ Former-Athlete Executives. Read in 2 minutes.
        </p>
      </form>
    </div>
  );
}
