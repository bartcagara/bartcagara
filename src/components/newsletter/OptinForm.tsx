"use client";

import { useState, FormEvent } from "react";
import { usePostHog } from "posthog-js/react";
import { ArrowRight, CheckCircle2, AlertCircle } from "lucide-react";

type SubmitState = "idle" | "submitting" | "success" | "error";
type FormVariant = "light" | "dark";

const MIN_FORM_SUBMIT_TIME_MS = 3000;
const FETCH_TIMEOUT_MS = 10000; // 10 second timeout for form submission

interface OptinFormProps {
  variant?: FormVariant;
}

export function OptinForm({ variant = "light" }: OptinFormProps) {
  const isDark = variant === "dark";
  const [honeypot, setHoneypot] = useState("");
  const [formStartTime] = useState(Date.now());
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const posthog = usePostHog();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Check honeypot
    if (honeypot) {
      posthog?.capture('newsletter_spam_detected', {
        method: 'honeypot',
        // Don't log the actual honeypot value for privacy
      });
      return;
    }

    // Check timing
    const timeElapsed = Date.now() - formStartTime;
    if (timeElapsed < MIN_FORM_SUBMIT_TIME_MS) {
      posthog?.capture('newsletter_spam_detected', {
        method: 'timing',
        time_elapsed_ms: timeElapsed
      });
      return;
    }

    setSubmitState("submitting");
    posthog?.capture('newsletter_signup_started');

    // Create abort controller for timeout
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);

    try {
      const formData = new FormData(e.currentTarget);
      await fetch('https://app.kit.com/forms/7134584/subscriptions', {
        method: 'POST',
        body: formData,
        mode: 'no-cors', // ConvertKit doesn't support CORS
        signal: controller.signal,
      });

      // With no-cors, we can't read the response, so we assume success
      setSubmitState("success");
      posthog?.capture('newsletter_signup_completed');
    } catch (error) {
      setSubmitState("error");
      if (error instanceof Error && error.name === 'AbortError') {
        setErrorMessage("Request timed out. Please try again.");
      } else {
        setErrorMessage("Something went wrong. Please try again.");
      }
      posthog?.capture('newsletter_signup_error', {
        error: error instanceof Error ? error.message : 'Unknown error'
      });
    } finally {
      clearTimeout(timeoutId);
    }
  };

  // Success state
  if (submitState === "success") {
    return (
      <div className="w-full py-12 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-bleu-accent rounded-full">
          <CheckCircle2 className="w-10 h-10 text-white" />
        </div>
        <h3 className={`text-2xl md:text-3xl font-black uppercase tracking-tighter mb-3 ${isDark ? "text-white" : "text-bleu-nuit"}`}>
          You're In!
        </h3>
        <p className={`text-lg font-medium ${isDark ? "text-white/80" : "text-bleu-nuit/80"}`}>
          Check your email to confirm your subscription.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full">
      <form
        onSubmit={handleSubmit}
        className="space-y-6"
        noValidate
      >
        {/* Hidden Kit Fields */}
        <input type="hidden" name="id" value="7134584" />

        {/* Custom Honeypot */}
        <div className="absolute -left-[9999px]" aria-hidden="true">
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
          <div>
            <label htmlFor="first_name" className="sr-only">
              First Name
            </label>
            <input
              id="first_name"
              type="text"
              name="fields[first_name]"
              placeholder="FIRST NAME"
              required
              disabled={submitState === "submitting"}
              autoComplete="given-name"
              className={`w-full px-0 py-4 bg-transparent border-b-2 text-xl font-bold outline-none focus:border-bleu-accent transition-all rounded-none disabled:opacity-50 disabled:cursor-not-allowed ${
                isDark
                  ? "border-white/20 text-white placeholder:text-white/40 placeholder:font-bold focus:placeholder:text-white/60"
                  : "border-bleu-nuit/20 text-bleu-nuit placeholder:text-bleu-nuit/30 placeholder:font-bold focus:placeholder:text-bleu-nuit/50"
              }`}
            />
          </div>
          <div>
            <label htmlFor="email_address" className="sr-only">
              Email Address
            </label>
            <input
              id="email_address"
              type="email"
              name="email_address"
              placeholder="EMAIL ADDRESS"
              required
              disabled={submitState === "submitting"}
              autoComplete="email"
              className={`w-full px-0 py-4 bg-transparent border-b-2 text-xl font-bold outline-none focus:border-bleu-accent transition-all rounded-none disabled:opacity-50 disabled:cursor-not-allowed ${
                isDark
                  ? "border-white/20 text-white placeholder:text-white/40 placeholder:font-bold focus:placeholder:text-white/60"
                  : "border-bleu-nuit/20 text-bleu-nuit placeholder:text-bleu-nuit/30 placeholder:font-bold focus:placeholder:text-bleu-nuit/50"
              }`}
            />
          </div>
        </div>

        {/* Error Message */}
        {submitState === "error" && (
          <div className={`flex items-start gap-3 p-4 border-2 border-red-500 ${isDark ? "bg-red-900/30" : "bg-red-50"}`} role="alert">
            <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
            <p className={`text-sm font-bold ${isDark ? "text-red-300" : "text-red-700"}`}>{errorMessage}</p>
          </div>
        )}

        <div className="pt-6">
          <button
            type="submit"
            disabled={submitState === "submitting"}
            className={`w-full inline-flex items-center justify-center gap-3 px-6 py-5 md:px-10 md:py-6 text-xl font-black uppercase tracking-tighter border-2 transition-brutal disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-x-0 disabled:hover:translate-y-0 ${
              isDark
                ? "bg-bleu-accent text-white border-bleu-accent shadow-[4px_4px_0px_0px_rgba(255,255,255,0.3)] md:shadow-[6px_6px_0px_0px_rgba(255,255,255,0.3)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] md:hover:translate-x-[6px] md:hover:translate-y-[6px]"
                : "bg-bleu-nuit text-white border-bleu-nuit shadow-brutal-sm md:shadow-brutal-md hover-shadow-none hover-translate-brutal disabled:hover:shadow-brutal-sm"
            }`}
          >
            <span>{submitState === "submitting" ? "Subscribing..." : "Get The Briefing"}</span>
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>

        <p className={`text-xs font-black uppercase tracking-tight text-center mt-6 selection:bg-bleu-accent selection:text-white ${isDark ? "text-white/50" : "text-bleu-nuit/60"}`}>
          Join 400+ Former-Athlete Executives.<br />
          Read in 2 minutes.
        </p>
      </form>
    </div>
  );
}
