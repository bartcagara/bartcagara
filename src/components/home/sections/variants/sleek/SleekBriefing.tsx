import { HOMEPAGE_CONTENT } from "@/data/homepage-content";
import { Eyebrow, Glow } from "./_shared";

/** The Briefing — static email-capture form inside a glass card. */
export function SleekBriefing() {
  const { briefing } = HOMEPAGE_CONTENT;
  return (
    <section
      className="relative overflow-hidden bg-bleu-marine py-24 md:py-32"
      aria-labelledby="sleek-briefing-title"
    >
      <Glow className="-left-32 bottom-0 h-[440px] w-[440px] bg-bleu-accent opacity-20" />

      <div className="relative mx-auto max-w-2xl px-6">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center shadow-[0_30px_80px_-40px_rgba(0,0,0,0.8)] backdrop-blur-md md:p-12">
          <Eyebrow label={briefing.label} />
          <h2 id="sleek-briefing-title" className="mt-7 text-h2 text-white">
            <span className="bg-gradient-to-r from-white via-bleu-fumee to-bleu-accent bg-clip-text text-transparent">
              {briefing.heading}
            </span>
          </h2>

          <div className="mx-auto mt-6 max-w-md space-y-3">
            {briefing.body.map((line, index) => (
              <p
                key={index}
                className="text-base font-medium leading-relaxed text-white/60"
              >
                {line}
              </p>
            ))}
          </div>

          <form className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
            <label htmlFor="sleek-briefing-email" className="sr-only">
              Email address
            </label>
            <input
              id="sleek-briefing-email"
              type="email"
              name="email"
              placeholder="you@company.com"
              autoComplete="email"
              className="w-full flex-1 rounded-2xl border border-white/15 bg-white/5 px-5 py-4 text-base text-white placeholder:text-white/40 backdrop-blur-md outline-none transition-colors focus:border-bleu-accent/60"
            />
            <button
              type="submit"
              className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-2xl bg-gradient-to-b from-bleu-accent to-[#34546e] px-7 py-4 text-base font-bold uppercase tracking-tight text-white shadow-[0_20px_50px_-12px_rgba(69,109,139,0.7)] ring-1 ring-white/10 transition-all hover:-translate-y-0.5 hover:shadow-[0_24px_60px_-12px_rgba(69,109,139,0.9)]"
            >
              {briefing.submitLabel}
              <span aria-hidden className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
