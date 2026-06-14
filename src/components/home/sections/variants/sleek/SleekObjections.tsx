import { HOMEPAGE_CONTENT } from "@/data/homepage-content";
import { Eyebrow, Glow } from "./_shared";

/** Objections — Q&A in glass cards on navy. */
export function SleekObjections() {
  const objections = HOMEPAGE_CONTENT.objections;
  return (
    <section
      className="relative overflow-hidden bg-bleu-marine py-24 md:py-32"
      aria-labelledby="sleek-objections-title"
    >
      <Glow className="-right-32 top-1/4 h-[460px] w-[460px] bg-bleu-charron opacity-20" />

      <div className="relative mx-auto max-w-4xl px-6">
        <div className="mb-14 text-center">
          <Eyebrow label="Straight Answers" />
          <h2 id="sleek-objections-title" className="mt-7 text-h2 text-white">
            <span className="bg-gradient-to-r from-white via-bleu-fumee to-bleu-accent bg-clip-text text-transparent">
              Questions you&apos;re already asking
            </span>
          </h2>
        </div>

        <div className="space-y-5">
          {objections.map((objection) => (
            <div
              key={objection.question}
              className="rounded-2xl border border-white/10 bg-white/5 p-7 shadow-[0_30px_80px_-50px_rgba(0,0,0,0.9)] backdrop-blur-md md:p-8"
            >
              <h3 className="mb-3 text-lg font-bold leading-snug text-white md:text-xl">
                {objection.question}
              </h3>
              <p className="text-base font-medium leading-relaxed text-white/60">
                {objection.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
