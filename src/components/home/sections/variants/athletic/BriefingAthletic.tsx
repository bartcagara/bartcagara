import { HOMEPAGE_CONTENT } from "@/data/homepage-content";
import { Eyebrow } from "./_shared";

/**
 * Briefing — static newsletter opt-in. A plain email input + submit button
 * (no client interactivity, no calendar embed). Cinematic navy base.
 */
export function BriefingAthletic() {
  const { briefing } = HOMEPAGE_CONTENT;
  return (
    <section
      className="bg-bleu-nuit py-24 md:py-32"
      aria-labelledby="briefing-title"
    >
      <div className="mx-auto max-w-3xl px-6 text-center">
        <div className="flex justify-center">
          <Eyebrow label={briefing.label} />
        </div>
        <h2
          id="briefing-title"
          className="mb-8 text-h2 uppercase text-white"
        >
          {briefing.heading}
        </h2>

        <div className="mx-auto mb-12 max-w-xl space-y-4">
          {briefing.body.map((line, i) => (
            <p
              key={i}
              className="text-lead font-medium leading-relaxed text-white/70"
            >
              {line}
            </p>
          ))}
        </div>

        <form
          className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row"
          aria-label="Briefing signup"
        >
          <label htmlFor="briefing-email" className="sr-only">
            Email address
          </label>
          <input
            id="briefing-email"
            type="email"
            name="email"
            autoComplete="email"
            placeholder="you@company.com"
            className="w-full flex-1 rounded-sm border border-white/15 bg-bleu-marine px-5 py-4 text-base font-medium text-white placeholder:text-white/40 focus:border-bleu-accent focus:outline-none"
          />
          <button
            type="submit"
            className="shrink-0 rounded-sm bg-bleu-accent px-7 py-4 text-base font-black uppercase tracking-tighter text-white shadow-[0_18px_40px_-12px_rgba(69,109,139,0.7)] transition-all hover:-translate-y-0.5 hover:bg-[#3a5d78]"
          >
            {briefing.submitLabel}
          </button>
        </form>
      </div>
    </section>
  );
}
