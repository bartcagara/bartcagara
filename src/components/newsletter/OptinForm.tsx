"use client";

import { useRef, useState } from "react";
import { usePostHog } from "posthog-js/react";
import { ArrowRight } from "lucide-react";
import "./optin-form.css";

export function OptinForm() {
  const posthog = usePostHog();
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "submitting") return;

    const form = formRef.current;
    if (!form) return;

    setStatus("submitting");
    setErrorMessage("");

    const formData = new FormData(form);
    // Add referrer for UTM tracking
    formData.set("referrer", window.location.href);

    try {
      const res = await fetch("https://app.kit.com/forms/8922850/subscriptions", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        posthog?.capture("newsletter_signup_completed");
      } else {
        setStatus("error");
        setErrorMessage("Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Please check your connection and try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="w-full flex flex-col items-center justify-center py-12 text-center">
        <div className="flex items-center justify-center w-16 h-16 mb-6 bg-bleu-accent rounded-full border-2 border-bleu-nuit shadow-brutal-sm">
          <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <p className="text-2xl font-black uppercase tracking-tighter text-bleu-nuit">
          You&apos;re in.
        </p>
        <p className="mt-2 text-base font-bold text-bleu-nuit/70">
          Now check your email to confirm your subscription.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full">
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="seva-form formkit-form space-y-6"
        data-uid="8a3adb8456"
      >
        {/* Error message */}
        {status === "error" && errorMessage && (
          <ul className="formkit-alert formkit-alert-error" data-element="errors" data-group="alert">
            <li>{errorMessage}</li>
          </ul>
        )}

        <div data-element="fields" data-stacked="true" className="seva-fields formkit-fields space-y-6">
          {/* First Name */}
          <div className="formkit-field">
            <label htmlFor="fields_first_name" className="sr-only">
              First Name
            </label>
            <input
              id="fields_first_name"
              type="text"
              name="fields[first_name]"
              aria-label="First Name"
              placeholder="FIRST NAME"
              required
              autoComplete="given-name"
              className="formkit-input w-full px-0 py-4 bg-transparent border-b-4 border-bleu-nuit/40 text-xl font-bold text-bleu-nuit placeholder:text-bleu-nuit/30 placeholder:font-bold outline-none focus:border-bleu-accent focus:placeholder:text-bleu-nuit/50 transition-all rounded-none"
            />
          </div>

          {/* Email */}
          <div className="formkit-field">
            <label htmlFor="email_address" className="sr-only">
              Email Address
            </label>
            <input
              id="email_address"
              type="email"
              name="email_address"
              aria-label="Email Address"
              placeholder="EMAIL ADDRESS"
              required
              autoComplete="email"
              className="formkit-input w-full px-0 py-4 bg-transparent border-b-4 border-bleu-nuit/40 text-xl font-bold text-bleu-nuit placeholder:text-bleu-nuit/30 placeholder:font-bold outline-none focus:border-bleu-accent focus:placeholder:text-bleu-nuit/50 transition-all rounded-none"
            />
          </div>

          {/* Submit Button */}
          <div className="pt-6">
            <button
              type="submit"
              disabled={status === "submitting"}
              aria-busy={status === "submitting"}
              className="formkit-submit w-full inline-flex items-center justify-center gap-3 px-6 py-5 md:px-10 md:py-6 text-xl bg-bleu-nuit text-white font-black uppercase tracking-tighter border-2 border-bleu-nuit shadow-brutal-sm md:shadow-brutal-md transition-brutal hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "submitting" && (
                <div className="formkit-spinner flex">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              )}
              <span>{status === "submitting" ? "Subscribing..." : "Get The Briefing"}</span>
              {status !== "submitting" && <ArrowRight className="w-6 h-6" />}
            </button>
          </div>
        </div>

        <p className="text-xs text-bleu-nuit/60 font-black uppercase tracking-tight text-center mt-6 selection:bg-bleu-accent selection:text-white">
          One email every Sunday. No punches pulled.
        </p>
      </form>
    </div>
  );
}
