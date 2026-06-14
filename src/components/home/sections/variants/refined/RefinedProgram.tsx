import { HOMEPAGE_CONTENT } from "@/data/homepage-content";
import { DotGrid, Kicker, renderBold } from "./_shared";

/** Program — FOUNDER ATHLETE OS: 3-phase timeline + delivery list. */
export function RefinedProgram() {
  const { program } = HOMEPAGE_CONTENT;
  return (
    <section
      id="program"
      className="relative overflow-hidden border-b-2 border-bleu-nuit bg-bleu-nuit py-24 text-white md:py-32"
      aria-labelledby="program-title"
    >
      <DotGrid />
      <div className="relative mx-auto max-w-7xl px-6">
        <Kicker label="THE PROGRAM" />
        <h2
          id="program-title"
          className="mb-8 text-h2 font-black uppercase tracking-tighter text-white"
        >
          {program.title.split("\n").map((line, i, arr) => (
            <span key={i}>
              {line}
              {i < arr.length - 1 && <br />}
            </span>
          ))}
        </h2>
        <p className="max-w-3xl text-lead-lg font-medium leading-relaxed text-white/70">
          {program.subtitle}
        </p>

        {/* Timeline */}
        <div className="relative mt-20">
          <div
            className="absolute top-4 bottom-0 left-[19px] w-0.5 bg-white/20 md:left-[2.5rem]"
            aria-hidden
          />
          {program.phases.map((phase, index) => (
            <div
              key={phase.number}
              className={`relative pl-20 md:pl-32 ${
                index < program.phases.length - 1 ? "mb-20" : ""
              }`}
            >
              <span
                className="absolute top-[-10px] left-0 z-10 bg-bleu-nuit pr-2 text-5xl font-black leading-none text-bleu-accent md:text-7xl"
                aria-label={`Phase ${phase.number}`}
              >
                {phase.number}
              </span>
              <div
                className={
                  index < program.phases.length - 1
                    ? "border-b-2 border-white/10 pb-12"
                    : ""
                }
              >
                <h3 className="mb-4 text-2xl font-black uppercase leading-none text-white md:text-4xl">
                  {phase.title}
                  <span className="mt-2 block text-lg font-bold tracking-tighter text-bleu-accent md:text-2xl">
                    ({phase.weeks})
                  </span>
                </h3>

                <div className="mb-6">
                  <span className="inline-block bg-white/5 px-2 py-1 font-mono text-sm uppercase tracking-tighter text-bleu-accent">
                    <span aria-hidden>// </span>FOCUS: {phase.focus}
                  </span>
                </div>

                <ul className="mb-8 max-w-3xl space-y-2 text-xl font-medium leading-relaxed text-white/80">
                  {phase.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <span className="mr-4 font-black text-bleu-accent" aria-hidden>
                        /
                      </span>
                      <span>{renderBold(item, "text-white")}</span>
                    </li>
                  ))}
                </ul>

                <div className="inline-block bg-bleu-accent p-4 shadow-brutal-white-sm">
                  <span className="mb-1 block text-sm font-black uppercase tracking-tighter text-white opacity-70">
                    THE WIN:
                  </span>
                  <span className="block text-lg font-black uppercase leading-tight tracking-tighter text-white md:text-xl">
                    {phase.win}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Delivery */}
        <div className="mt-20 max-w-3xl">
          <div className="mb-6">
            <span className="inline-block bg-white/5 px-2 py-1 font-mono text-sm uppercase tracking-tighter text-bleu-accent">
              <span aria-hidden>// </span>
              {program.delivery.heading}
            </span>
          </div>
          <ul className="max-w-3xl space-y-2 text-xl font-medium leading-relaxed text-white/80">
            {program.delivery.items.map((item, itemIndex) => (
              <li key={itemIndex} className="flex items-start">
                <span className="mr-4 font-black text-bleu-accent" aria-hidden>
                  /
                </span>
                <span>{renderBold(item, "text-white")}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
