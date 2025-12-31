"use client";

import { useEffect, useState } from "react";
import { usePostHog } from "posthog-js/react";
import { ArrowRight } from "lucide-react";
import Script from "next/script";

export function OptinForm() {
  const posthog = usePostHog();
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [referrer, setReferrer] = useState("");
  const [tagError, setTagError] = useState(false);

  // Capture referrer (full page URL with UTM params) on mount
  useEffect(() => {
    // Use full page URL as referrer so Kit can parse UTM params from it
    setReferrer(window.location.href);
  }, []);

  // Handle mutual exclusivity for checkboxes (radio button behavior)
  const handleTagChange = (value: string) => {
    setSelectedTag(selectedTag === value ? null : value);
    setTagError(false); // Clear error when user selects an option
  };

  // Validate before allowing Kit to submit
  const handleSubmit = (e: React.FormEvent) => {
    if (!selectedTag) {
      e.preventDefault();
      setTagError(true);
      return false;
    }
    return true;
  };

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
        onSubmit={handleSubmit}
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

          {/* Qualifying Question */}
          <div className="formkit-field pt-2">
            <fieldset data-group="checkboxes" className="formkit-5778">
              <legend className="text-sm font-black uppercase tracking-tighter text-bleu-nuit mb-4">
                Are you a former-athlete exec? <span className="text-red-500">*</span>
              </legend>
              {tagError && (
                <p className="text-red-500 text-sm font-bold mb-3">Please select an option</p>
              )}
              <div className="flex gap-6">
                {/* Yes Option */}
                <div
                  className="formkit-checkboxes flex items-center cursor-pointer group"
                  data-element="tags-checkboxes"
                  data-group="checkbox"
                >
                  <input
                    className="formkit-checkbox sr-only"
                    id="tag-yes"
                    type="checkbox"
                    name="tags[]"
                    value="13912459"
                    checked={selectedTag === "13912459"}
                    onChange={() => handleTagChange("13912459")}
                  />
                  <label
                    htmlFor="tag-yes"
                    className="relative flex items-center gap-3 cursor-pointer text-lg font-bold text-bleu-nuit uppercase tracking-tight"
                  >
                    <span className={`w-6 h-6 border-4 bg-transparent flex items-center justify-center transition-all ${selectedTag === "13912459" ? "border-bleu-accent" : "border-bleu-nuit/40 group-hover:border-bleu-nuit/60"}`}>
                      {selectedTag === "13912459" && <span className="w-3 h-3 bg-bleu-accent"></span>}
                    </span>
                    Yes
                  </label>
                </div>

                {/* No Option */}
                <div
                  className="formkit-checkboxes flex items-center cursor-pointer group"
                  data-element="tags-checkboxes"
                  data-group="checkbox"
                >
                  <input
                    className="formkit-checkbox sr-only"
                    id="tag-no"
                    type="checkbox"
                    name="tags[]"
                    value="13912460"
                    checked={selectedTag === "13912460"}
                    onChange={() => handleTagChange("13912460")}
                  />
                  <label
                    htmlFor="tag-no"
                    className="relative flex items-center gap-3 cursor-pointer text-lg font-bold text-bleu-nuit uppercase tracking-tight"
                  >
                    <span className={`w-6 h-6 border-4 bg-transparent flex items-center justify-center transition-all ${selectedTag === "13912460" ? "border-bleu-accent" : "border-bleu-nuit/40 group-hover:border-bleu-nuit/60"}`}>
                      {selectedTag === "13912460" && <span className="w-3 h-3 bg-bleu-accent"></span>}
                    </span>
                    No
                  </label>
                </div>
              </div>
            </fieldset>
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
          Join 400+ Former-Athlete Executives.
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
