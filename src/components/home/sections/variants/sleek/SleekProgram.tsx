import { HOMEPAGE_CONTENT } from "@/data/homepage-content";
import { Eyebrow, Glow, renderBold } from "./_shared";

/** The Program — 3 phases as glass cards + a delivery block. */
export function SleekProgram() {
  const { program } = HOMEPAGE_CONTENT;
  return (
    <section
      id="program"
      className="relative overflow-hidden bg-bleu-marine py-24 md:py-32"
      aria-labelledby="sleek-program-title"
    >
      <Glow className="-left-40 top-10 h-[500px] w-[500px] bg-bleu-accent opacity-20" />
      <Glow className="-right-40 bottom-10 h-[500px] w-[500px] bg-bleu-charron opacity-20" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <Eyebrow label="The Program" />
          <h2 id="sleek-program-title" className="mt-7 text-h2 text-white">
            <span className="bg-gradient-to-r from-white via-bleu-fumee to-bleu-accent bg-clip-text text-transparent">
              {program.title.split("\n").map((line, i, arr) => (
                <span key={i}>
                  {line}
                  {i < arr.length - 1 && <br />}
                </span>
              ))}
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lead font-medium leading-relaxed text-white/60">
            {program.subtitle}
          </p>
        </div>

        {/* Phase cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {program.phases.map((phase) => (
            <div
              key={phase.number}
              className="flex flex-col rounded-2xl border border-white/10 bg-white/5 p-7 shadow-[0_30px_80px_-50px_rgba(0,0,0,0.9)] backdrop-blur-md md:p-8"
            >
              <div className="mb-5 flex items-baseline gap-3">
                <span
                  className="bg-gradient-to-b from-bleu-accent to-bleu-fumee bg-clip-text text-5xl font-black leading-none text-transparent"
                  aria-hidden
                >
                  {phase.number}
                </span>
                <span className="text-eyebrow text-white/50">{phase.weeks}</span>
              </div>

              <h3 className="text-2xl font-bold text-white">{phase.title}</h3>
              <p className="mb-6 mt-1 text-eyebrow text-bleu-accent">
                {phase.focus}
              </p>

              <ul className="mb-6 space-y-3">
                {phase.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span
                      className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-bleu-accent"
                      aria-hidden
                    />
                    <span className="text-sm leading-relaxed text-white/60 md:text-base">
                      {renderBold(item, "font-semibold text-white")}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto rounded-xl border border-bleu-accent/30 bg-bleu-accent/10 p-4">
                <span className="mb-1 block text-eyebrow text-bleu-accent">
                  The Win
                </span>
                <span className="text-sm font-semibold leading-snug text-white md:text-base">
                  {phase.win}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Delivery */}
        <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-white/10 bg-white/5 p-8 shadow-[0_30px_80px_-50px_rgba(0,0,0,0.9)] backdrop-blur-md md:p-10">
          <h3 className="mb-6 text-eyebrow text-bleu-accent">
            {program.delivery.heading}
          </h3>
          <ul className="space-y-4">
            {program.delivery.items.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span
                  className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-bleu-accent"
                  aria-hidden
                />
                <span className="text-base leading-relaxed text-white/70">
                  {renderBold(item, "font-semibold text-white")}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
