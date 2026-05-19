"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import { ArrowRight } from "lucide-react";
import "./optin-form.css";

const KIT_FORM_ID = "9460021";
const KIT_FORM_UID = "c2655decfb";

export function OptinForm() {
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const handleSuccess = () => setSuccess(true);
    window.addEventListener("ck:form:success", handleSuccess);
    return () => window.removeEventListener("ck:form:success", handleSuccess);
  }, []);

  return (
    <div className="w-full">
      <Script
        src="https://f.convertkit.com/ckjs/ck.5.js"
        strategy="afterInteractive"
      />

      {success && (
        <div className="flex flex-col items-center justify-center py-12 text-center">
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
      )}

      <div style={success ? { display: "none" } : undefined}>
        <form
          action={`https://app.kit.com/forms/${KIT_FORM_ID}/subscriptions`}
          method="post"
          className="seva-form formkit-form space-y-6"
          data-sv-form={KIT_FORM_ID}
          data-uid={KIT_FORM_UID}
          data-format="inline"
          data-version="5"
        >
          <ul
            className="formkit-alert formkit-alert-error"
            data-element="errors"
            data-group="alert"
          ></ul>

          <div
            data-element="fields"
            data-stacked="true"
            className="seva-fields formkit-fields space-y-6"
          >
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

            <div className="pt-6">
              <button
                type="submit"
                data-element="submit"
                className="formkit-submit w-full inline-flex items-center justify-center gap-3 px-6 py-5 md:px-10 md:py-6 text-xl bg-bleu-nuit text-white font-black uppercase tracking-tighter border-2 border-bleu-nuit shadow-brutal-sm md:shadow-brutal-md transition-brutal hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <div className="formkit-spinner">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
                <span>Get The Briefing</span>
                <ArrowRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </form>

        <p className="text-xs text-bleu-nuit/60 font-black uppercase tracking-tight text-center mt-6 selection:bg-bleu-accent selection:text-white">
          2 minutes every Sunday. Flip your perspective for the week.
        </p>
      </div>
    </div>
  );
}
