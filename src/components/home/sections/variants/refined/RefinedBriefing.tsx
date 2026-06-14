import { HOMEPAGE_CONTENT } from "@/data/homepage-content";
import { Kicker, renderBold } from "./_shared";

/** Briefing — newsletter capture. Static email input + button (no submit logic). */
export function RefinedBriefing() {
  const { briefing } = HOMEPAGE_CONTENT;
  return (
    <section
      className="bg-bleu-fumee py-24 md:py-32"
      aria-labelledby="briefing-title"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl border-2 border-bleu-nuit bg-white p-8 shadow-brutal-md md:p-12">
          <Kicker label={briefing.label.toUpperCase()} tone="light" />
          <h2
            id="briefing-title"
            className="mb-8 text-h2 font-black uppercase tracking-tighter text-bleu-nuit"
          >
            {briefing.heading}
          </h2>

          <div className="mb-10 space-y-4">
            {briefing.body.map((para, index) => {
              const isBold = para.startsWith("**") && para.endsWith("**");
              const text = isBold ? para.slice(2, -2) : para;
              return (
                <p
                  key={index}
                  className={
                    isBold
                      ? "text-lead-lg font-black leading-tight text-bleu-nuit"
                      : "text-lead font-medium leading-relaxed text-bleu-nuit/80"
                  }
                >
                  {isBold ? text : renderBold(text, "font-bold text-bleu-nuit")}
                </p>
              );
            })}
          </div>

          <form
            className="flex flex-col gap-4 sm:flex-row"
            aria-label="Briefing signup"
          >
            <label htmlFor="briefing-email" className="sr-only">
              Email address
            </label>
            <input
              id="briefing-email"
              type="email"
              name="email"
              placeholder="you@company.com"
              className="w-full border-2 border-bleu-nuit bg-bleu-fumee px-5 py-4 text-base font-medium text-bleu-nuit placeholder:text-bleu-nuit/40 focus:outline-none focus:ring-2 focus:ring-bleu-accent sm:flex-1"
            />
            <button
              type="button"
              className="inline-flex items-center justify-center gap-3 border-2 border-bleu-nuit bg-bleu-nuit px-8 py-4 text-base font-black uppercase tracking-tighter text-bleu-fumee shadow-brutal-sm transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none"
            >
              {briefing.submitLabel}
              <span aria-hidden>→</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
