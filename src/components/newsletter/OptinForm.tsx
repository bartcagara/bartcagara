"use client";

import { useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import "./optin-form.css";

const KIT_FORM_ID = "9460021";
const KIT_ACTION = `https://app.kit.com/forms/${KIT_FORM_ID}/subscriptions`;

export function OptinForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "submitting") return;

    const form = formRef.current;
    if (!form) return;

    setStatus("submitting");
    setErrorMessage("");

    const formData = new FormData(form);
    formData.set("referrer", window.location.href);

    try {
      const res = await fetch(KIT_ACTION, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
        setErrorMessage("Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMessage(
        "Network error. Please check your connection and try again.",
      );
    }
  }

  return (
    <div className="w-full">
      {status === "success" ? (
        <div className="flex flex-col items-center justify-center py-12 text-center">
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
            Now check your email to confirm your subscription.
          </p>
        </div>
      ) : (
        <>
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
                  disabled={status === "submitting"}
                  aria-busy={status === "submitting"}
                  className="w-full inline-flex items-center justify-center gap-3 px-6 py-5 md:px-10 md:py-6 text-xl bg-bleu-nuit text-white font-black uppercase tracking-tighter border-2 border-bleu-nuit shadow-brutal-sm md:shadow-brutal-md transition-brutal hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span>
                    {status === "submitting"
                      ? "Subscribing..."
                      : "Get The Briefing"}
                  </span>
                  {status !== "submitting" && <ArrowRight className="w-6 h-6" />}
                </button>
              </div>
            </div>
          </form>

          <p className="text-xs text-bleu-nuit/60 font-black uppercase tracking-tight text-center mt-6 selection:bg-bleu-accent selection:text-white">
            2 minutes every Sunday. Flip your perspective for the week.
          </p>
        </>
      )}
    </div>
  );
}
