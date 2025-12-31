"use client";

import { useState, useEffect, FormEvent } from "react";
import { usePostHog } from "posthog-js/react";
import { ArrowRight, CheckCircle2, AlertCircle } from "lucide-react";

type SubmitState = "idle" | "submitting" | "success" | "error";

interface UTMParams {
  referrer: string;
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  utm_term: string;
  utm_content: string;
}

const MIN_FORM_SUBMIT_TIME_MS = 3000;
const FETCH_TIMEOUT_MS = 10000; // 10 second timeout for form submission

export function OptinForm() {
  const [honeypot, setHoneypot] = useState("");
  const [formStartTime] = useState(Date.now());
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [utmParams, setUtmParams] = useState<UTMParams>({
    referrer: "",
    utm_source: "",
    utm_medium: "",
    utm_campaign: "",
    utm_term: "",
    utm_content: "",
  });
  const posthog = usePostHog();

  // Capture UTM parameters and referrer on mount
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setUtmParams({
      referrer: document.referrer || "",
      utm_source: params.get("utm_source") || "",
      utm_medium: params.get("utm_medium") || "",
      utm_campaign: params.get("utm_campaign") || "",
      utm_term: params.get("utm_term") || "",
      utm_content: params.get("utm_content") || "",
    });
  }, []);

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Check honeypot
    if (honeypot) {
      posthog?.capture('newsletter_spam_detected', {
        method: 'honeypot',
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

    // Validate first name
    const trimmedFirstName = firstName.trim();
    if (!trimmedFirstName || trimmedFirstName.length < 2) {
      setSubmitState("error");
      setErrorMessage("Please enter your first name (at least 2 characters).");
      return;
    }

    // Validate email
    const trimmedEmail = email.trim();
    if (!trimmedEmail) {
      setSubmitState("error");
      setErrorMessage("Please enter your email address.");
      return;
    }
    if (!validateEmail(trimmedEmail)) {
      setSubmitState("error");
      setErrorMessage("Please enter a valid email address.");
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
        <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter text-bleu-nuit mb-3">
          You're In!
        </h3>
        <p className="text-lg text-bleu-nuit/80 font-medium">
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

        {/* UTM Tracking Fields for Kit */}
        <input type="hidden" name="referrer" value={utmParams.referrer} />
        <input type="hidden" name="utm_source" value={utmParams.utm_source} />
        <input type="hidden" name="utm_medium" value={utmParams.utm_medium} />
        <input type="hidden" name="utm_campaign" value={utmParams.utm_campaign} />
        <input type="hidden" name="utm_term" value={utmParams.utm_term} />
        <input type="hidden" name="utm_content" value={utmParams.utm_content} />

        {/* Custom Honeypot */}
        <div className="absolute -left-[5000px]" aria-hidden="true">
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
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
                if (submitState === "error") setSubmitState("idle");
              }}
              className="w-full px-0 py-4 bg-transparent border-b-4 border-bleu-nuit/40 text-xl font-bold text-bleu-nuit placeholder:text-bleu-nuit/30 placeholder:font-bold outline-none focus:border-bleu-accent focus:placeholder:text-bleu-nuit/50 transition-all rounded-none disabled:opacity-50 disabled:cursor-not-allowed"
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
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (submitState === "error") setSubmitState("idle");
              }}
              className="w-full px-0 py-4 bg-transparent border-b-4 border-bleu-nuit/40 text-xl font-bold text-bleu-nuit placeholder:text-bleu-nuit/30 placeholder:font-bold outline-none focus:border-bleu-accent focus:placeholder:text-bleu-nuit/50 transition-all rounded-none disabled:opacity-50 disabled:cursor-not-allowed"
            />
          </div>
        </div>

        {/* Error Message */}
        {submitState === "error" && (
          <div className="flex items-start gap-3 p-4 bg-red-50 border-2 border-red-500" role="alert">
            <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
            <p className="text-sm font-bold text-red-700">{errorMessage}</p>
          </div>
        )}

        <div className="pt-6">
          <button
            type="submit"
            disabled={submitState === "submitting"}
            className="w-full inline-flex items-center justify-center gap-3 px-6 py-5 md:px-10 md:py-6 text-xl bg-bleu-nuit text-white font-black uppercase tracking-tighter border-2 border-bleu-nuit shadow-brutal-sm md:shadow-brutal-md transition-brutal hover-shadow-none hover-translate-brutal disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-brutal-sm disabled:hover:translate-x-0 disabled:hover:translate-y-0"
          >
            <span>{submitState === "submitting" ? "Subscribing..." : "Get The Briefing"}</span>
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>

        <p className="text-xs text-bleu-nuit/60 font-black uppercase tracking-tight text-center mt-6 selection:bg-bleu-accent selection:text-white">
          Join 400+ Former-Athlete Executives.<br />
          Read in 2 minutes.
        </p>
      </form>
    </div>
  );
}
