"use client";

import { useEffect, useState } from "react";
import { usePostHog } from "posthog-js/react";
import { ArrowRight } from "lucide-react";
import Script from "next/script";

export function OptinForm() {
  const posthog = usePostHog();
  const [referrer, setReferrer] = useState("");

  // Capture referrer (full page URL with UTM params) on mount
  useEffect(() => {
    // Use full page URL as referrer so Kit can parse UTM params from it
    setReferrer(window.location.href);
  }, []);

  // Track form submission via Kit's custom event
  useEffect(() => {
    const handleKitSuccess = () => {
      posthog?.capture("newsletter_signup_completed");
    };

    // Kit fires this event on successful submission
    window.addEventListener("ck:form:success", handleKitSuccess);
    return () => {
      window.removeEventListener("ck:form:success", handleKitSuccess);
    };
  }, [posthog]);

  const dataOptions = JSON.stringify({
    settings: {
      after_subscribe: {
        action: "message",
        success_message: "Success! Now check your email to confirm your subscription.",
        redirect_url: "",
      },
      analytics: {
        google: null,
        fathom: null,
        facebook: null,
        segment: null,
        pinterest: null,
        sparkloop: null,
        googletagmanager: null,
      },
      modal: {
        trigger: "timer",
        scroll_percentage: null,
        timer: 5,
        devices: "all",
        show_once_every: 15,
      },
      powered_by: {
        show: false,
        url: "https://kit.com/features/forms?utm_campaign=poweredby&utm_content=form&utm_medium=referral&utm_source=dynamic",
      },
      recaptcha: { enabled: false },
      return_visitor: { action: "show", custom_content: "" },
      slide_in: {
        display_in: "bottom_right",
        trigger: "timer",
        scroll_percentage: null,
        timer: 5,
        devices: "all",
        show_once_every: 15,
      },
      sticky_bar: {
        display_in: "top",
        trigger: "timer",
        scroll_percentage: null,
        timer: 5,
        devices: "all",
        show_once_every: 15,
      },
    },
    version: "5",
  });

  return (
    <div className="w-full">
      {/* Kit's form script - handles UTM tracking automatically */}
      <Script
        src="https://f.convertkit.com/ckjs/ck.5.js"
        strategy="lazyOnload"
      />

      <form
        action="https://app.kit.com/forms/8922850/subscriptions"
        method="post"
        data-sv-form="8922850"
        data-uid="8a3adb8456"
        data-format="inline"
        data-version="5"
        data-options={dataOptions}
        className="seva-form formkit-form space-y-6"
      >
        {/* Kit's error container */}
        <ul
          className="formkit-alert formkit-alert-error hidden"
          data-element="errors"
          data-group="alert"
        ></ul>

        {/* Hidden referrer field with full page URL for UTM tracking */}
        <input type="hidden" name="referrer" value={referrer} />

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
              data-element="submit"
              className="formkit-submit w-full inline-flex items-center justify-center gap-3 px-6 py-5 md:px-10 md:py-6 text-xl bg-bleu-nuit text-white font-black uppercase tracking-tighter border-2 border-bleu-nuit shadow-brutal-sm md:shadow-brutal-md transition-brutal hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {/* Kit's loading spinner */}
              <div className="formkit-spinner hidden">
                <div></div>
                <div></div>
                <div></div>
              </div>
              <span>Get The Briefing</span>
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        <p className="text-xs text-bleu-nuit/60 font-black uppercase tracking-tight text-center mt-6 selection:bg-bleu-accent selection:text-white">
          Join 200+ Former-Athlete Executives.
          <br />
          Read in 2 minutes.
        </p>
      </form>

      {/* Custom styles for Kit form states */}
      <style jsx global>{`
        /* Success message styling */
        .formkit-form[data-uid="8a3adb8456"] .formkit-alert-success {
          display: flex !important;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 3rem 1.5rem;
          text-align: center;
          background: transparent;
          border: none;
        }
        .formkit-form[data-uid="8a3adb8456"] .formkit-alert-success::before {
          content: "✓";
          display: flex;
          align-items: center;
          justify-content: center;
          width: 4rem;
          height: 4rem;
          margin-bottom: 1.5rem;
          background: var(--bleu-accent);
          border-radius: 50%;
          color: white;
          font-size: 2rem;
          font-weight: bold;
        }

        /* Error message styling */
        .formkit-form[data-uid="8a3adb8456"] .formkit-alert-error:not(:empty) {
          display: flex !important;
          align-items: flex-start;
          gap: 0.75rem;
          padding: 1rem;
          background: rgb(254 242 242);
          border: 2px solid rgb(239 68 68);
          color: rgb(185 28 28);
          font-size: 0.875rem;
          font-weight: 700;
          list-style: none;
        }

        /* Hide form fields on success */
        .formkit-form[data-uid="8a3adb8456"][data-state="success"] .formkit-fields {
          display: none !important;
        }

        /* Loading state */
        .formkit-form[data-uid="8a3adb8456"] .formkit-submit[data-active] {
          opacity: 0.7;
          cursor: not-allowed;
        }
        .formkit-form[data-uid="8a3adb8456"] .formkit-submit[data-active] .formkit-spinner {
          display: flex !important;
          gap: 0.25rem;
          margin-right: 0.5rem;
        }
        .formkit-form[data-uid="8a3adb8456"] .formkit-spinner > div {
          width: 8px;
          height: 8px;
          background: white;
          border-radius: 50%;
          animation: formkit-bounce 1.4s infinite ease-in-out both;
        }
        .formkit-form[data-uid="8a3adb8456"] .formkit-spinner > div:nth-child(1) {
          animation-delay: -0.32s;
        }
        .formkit-form[data-uid="8a3adb8456"] .formkit-spinner > div:nth-child(2) {
          animation-delay: -0.16s;
        }

        @keyframes formkit-bounce {
          0%, 80%, 100% { transform: scale(0); }
          40% { transform: scale(1); }
        }

        /* Hide powered by */
        .formkit-form[data-uid="8a3adb8456"] .formkit-powered-by-convertkit-container {
          display: none !important;
        }
      `}</style>
    </div>
  );
}
