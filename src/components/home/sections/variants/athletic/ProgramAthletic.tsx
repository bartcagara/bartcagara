import { HOMEPAGE_CONTENT } from "@/data/homepage-content";
import { Eyebrow, renderBold } from "./_shared";

/**
 * Program — FOUNDER ATHLETE OS. Big numbered phase cards on the navy base,
 * each with focus tag, protocol list, and a glowing accent "win" callout.
 */
export function ProgramAthletic() {
  const { program } = HOMEPAGE_CONTENT;
  return (
    <section
      id="program"
      className="bg-bleu-marine py-24 md:py-32"
      aria-labelledby="program-title"
    >
      <div className="mx-auto max-w-7xl px-6">
        <Eyebrow label="The Program" />
        <h2
          id="program-title"
          className="mb-8 text-h2 uppercase text-white"
        >
          {program.title.split("\n").map((line, i, arr) => (
            <span key={i}>
              {line}
              {i < arr.length - 1 && <br />}
            </span>
          ))}
        </h2>
        <p className="mb-20 max-w-3xl text-lead-lg font-medium leading-relaxed text-white/70">
          {program.subtitle}
        </p>

        {/* PHASES */}
        <div className="space-y-8">
          {program.phases.map((phase) => (
            <div
              key={phase.number}
              className="relative overflow-hidden rounded-sm border border-white/10 bg-bleu-nuit p-8 md:p-12"
            >
              <div className="flex flex-col gap-8 md:flex-row md:gap-12">
                {/* number + meta */}
                <div className="md:w-56 md:shrink-0">
                  <span
                    className="block text-6xl font-black leading-none text-bleu-accent md:text-8xl"
                    aria-label={`Phase ${phase.number}`}
                  >
                    {phase.number}
                  </span>
                  <h3 className="mt-4 text-2xl font-black uppercase leading-none text-white md:text-3xl">
                    {phase.title}
                  </h3>
                  <span className="mt-2 block font-bold uppercase tracking-tighter text-bleu-accent">
                    {phase.weeks}
                  </span>
                  <span className="mt-4 inline-block bg-bleu-accent/15 px-2 py-1 font-mono text-sm uppercase tracking-tighter text-bleu-accent">
                    <span aria-hidden>// </span>FOCUS: {phase.focus}
                  </span>
                </div>

                {/* protocol + win */}
                <div className="flex-1">
                  <ul className="space-y-3 text-lg font-medium leading-relaxed text-white/80">
                    {phase.items.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span
                          className="mr-4 font-black text-bleu-accent"
                          aria-hidden
                        >
                          /
                        </span>
                        <span>{renderBold(item, "font-bold text-white")}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 inline-block rounded-sm bg-bleu-accent p-5 shadow-[0_18px_40px_-12px_rgba(69,109,139,0.7)]">
                    <span className="mb-1 block text-sm font-black uppercase tracking-tighter text-white/70">
                      The Win:
                    </span>
                    <span className="block text-lg font-black uppercase leading-tight tracking-tighter text-white md:text-xl">
                      {phase.win}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* DELIVERY */}
        <div className="mt-16 max-w-3xl">
          <h3 className="mb-6 font-mono text-eyebrow text-bleu-accent">
            <span aria-hidden>// </span>
            {program.delivery.heading}
          </h3>
          <ul className="space-y-3 text-lg font-medium leading-relaxed text-white/80">
            {program.delivery.items.map((item, i) => (
              <li key={i} className="flex items-start">
                <span className="mr-4 font-black text-bleu-accent" aria-hidden>
                  /
                </span>
                <span>{renderBold(item, "font-bold text-white")}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
