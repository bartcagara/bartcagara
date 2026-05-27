"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { usePostHog } from "posthog-js/react";
import "./optin-form.css";

const KIT_FORM_ID = "9460021";
const KIT_FORM_UID = "c2655decfb";
const KIT_SUBSCRIBE_URL = `https://app.kit.com/forms/${KIT_FORM_ID}/subscriptions`;
const KIT_EMBED_URL = `https://bartcagara.kit.com/${KIT_FORM_UID}/index.js`;

type Status = "idle" | "submitting" | "success" | "error";

export function OptinForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const trackerRef = useRef<HTMLDivElement>(null);
  const posthog = usePostHog();
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  // Kit visitor tracking: hidden but in-viewport so ck.5.js fires
  // the pixel. Our visible form has no formkit-* attrs, so ck.5.js
  // ignores it and React's onSubmit owns submission.
  useEffect(() => {
    const container = trackerRef.current;
    if (!container || container.dataset.kitLoaded) return;
    container.dataset.kitLoaded = "true";

    const script = document.createElement("script");
    script.async = true;
    script.src = KIT_EMBED_URL;
    script.setAttribute("data-uid", KIT_FORM_UID);
    container.appendChild(script);
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "submitting" || !formRef.current) return;

    setStatus("submitting");
    setErrorMessage("");

    const formData = new FormData(formRef.current);
    formData.set("referrer", window.location.href);

    try {
      const res = await fetch(KIT_SUBSCRIBE_URL, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });
      if (!res.ok) {
        setStatus("error");
        setErrorMessage("Something went wrong. Please try again.");
        return;
      }
      setStatus("success");
      posthog?.capture("newsletter_signup_completed", {
        form_uid: KIT_FORM_UID,
      });
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Please check your connection.");
    }
  }

  if (status === "success") return <SuccessState />;

  const isSubmitting = status === "submitting";

  return (
    <div className="w-full">
      <div ref={trackerRef} aria-hidden="true" className="kit-tracker" />

      <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
        {status === "error" && errorMessage && (
          <ul className="newsletter-error">
            <li>{errorMessage}</li>
          </ul>
        )}

        <div className="space-y-6">
          <div>
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
              className="w-full px-0 py-4 bg-transparent border-b-4 border-bleu-nuit/40 text-xl font-bold text-bleu-nuit placeholder:text-bleu-nuit/30 placeholder:font-bold outline-none focus:border-bleu-accent focus:placeholder:text-bleu-nuit/50 transition-all rounded-none"
            />
          </div>

          <div className="pt-6">
            <button
              type="submit"
              disabled={isSubmitting}
              aria-busy={isSubmitting}
              className="w-full inline-flex items-center justify-center gap-3 px-6 py-5 md:px-10 md:py-6 text-xl bg-bleu-nuit text-white font-black uppercase tracking-tighter border-2 border-bleu-nuit shadow-brutal-sm md:shadow-brutal-md transition-brutal hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span>{isSubmitting ? "Subscribing..." : "Get My Briefing"}</span>
              {!isSubmitting && <ArrowRight className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </form>

      <p className="text-xs text-bleu-nuit/60 font-black uppercase tracking-tight text-center mt-6 selection:bg-bleu-accent selection:text-white">
        Transformed 50+ founders since 2019.
      </p>
    </div>
  );
}

function SuccessState() {
  return (
    <div className="w-full flex flex-col items-center justify-center py-12 text-center">
      <div className="flex items-center justify-center w-16 h-16 mb-6 bg-bleu-accent rounded-full border-2 border-bleu-nuit shadow-brutal-sm">
        <svg
          className="w-8 h-8 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={3}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>
      <p className="text-2xl font-black uppercase tracking-tighter text-bleu-nuit">
        You&apos;re in.
      </p>
      <p className="mt-2 text-base font-bold text-bleu-nuit/70">
        Check your email to confirm your subscription.
      </p>
      <div className="mt-8 pt-8 border-t-2 border-bleu-nuit/10 w-full">
        <p className="text-sm font-bold uppercase tracking-tighter text-bleu-nuit/50 mb-4">
          Ready to move faster?
        </p>
        <button
          type="button"
          data-cal-link="bartcagara/discovery-call"
          data-cal-namespace="discovery-call"
          data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
          className="inline-flex items-center gap-2 px-6 py-3 bg-bleu-nuit text-white font-black uppercase text-sm tracking-tighter border-2 border-bleu-nuit shadow-brutal-sm transition-brutal hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]"
        >
          <ArrowRight className="w-4 h-4" />
          Book My Discovery Call
        </button>
      </div>
    </div>
  );
}
