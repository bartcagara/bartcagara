import { HOMEPAGE_CONTENT } from "@/data/homepage-content";
import { Eyebrow, serif } from "./_shared";

/**
 * EditorialBriefing — a quiet newsletter coda on the frost base.
 * Static email field + button (no client handlers in this static variant).
 */
export function EditorialBriefing() {
  const { briefing } = HOMEPAGE_CONTENT;
  return (
    <section className="bg-bleu-fumee text-bleu-nuit" aria-labelledby="briefing-title">
      <div className="max-w-7xl mx-auto px-6 py-24 md:py-32 grid md:grid-cols-12 gap-12 md:gap-16 items-center">
        <div className="md:col-span-6">
          <Eyebrow>{briefing.label}</Eyebrow>
          <h2
            id="briefing-title"
            style={serif}
            className="text-[clamp(2rem,1.2rem+3vw,3.5rem)] leading-[1.05] tracking-[-0.02em] mb-6"
          >
            {briefing.heading}
          </h2>
          <div className="space-y-4 max-w-md">
            {briefing.body.map((line, i) => (
              <p key={i} className="font-sans text-lead leading-relaxed text-bleu-nuit/70">
                {line}
              </p>
            ))}
          </div>
        </div>

        <div className="md:col-span-6">
          <form className="max-w-md md:ml-auto" aria-label="Subscribe to the briefing">
            <label htmlFor="briefing-email" className="sr-only">
              Email address
            </label>
            <div className="flex flex-col sm:flex-row gap-3 border-t border-bleu-nuit/15 pt-8">
              <input
                id="briefing-email"
                type="email"
                name="email"
                placeholder="you@company.com"
                className="flex-1 font-sans text-base bg-white border border-bleu-nuit/15 rounded-full px-6 py-4 text-bleu-nuit placeholder:text-bleu-nuit/40 focus:outline-none focus:border-bleu-accent"
              />
              <button
                type="submit"
                className="font-sans inline-flex items-center justify-center px-7 py-4 text-sm font-bold uppercase tracking-[0.12em] bg-bleu-nuit text-white rounded-full hover:bg-bleu-charron transition-colors whitespace-nowrap"
              >
                {briefing.submitLabel}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
