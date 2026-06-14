import { HOMEPAGE_CONTENT } from "@/data/homepage-content";
import { Eyebrow, renderBold, serif } from "./_shared";

/**
 * EditorialProgram — the dark anchor section. Six months, three phases,
 * laid out as a numbered editorial table with a delivery coda.
 */
export function EditorialProgram() {
  const { program } = HOMEPAGE_CONTENT;
  return (
    <section
      id="program"
      className="bg-bleu-nuit text-white"
      aria-labelledby="program-title"
    >
      <div className="max-w-7xl mx-auto px-6 py-24 md:py-36">
        <div className="max-w-3xl mb-20">
          <Eyebrow tone="light">The Program</Eyebrow>
          <h2
            id="program-title"
            style={serif}
            className="text-[clamp(2.25rem,1.4rem+3.5vw,4.5rem)] leading-[1.02] tracking-[-0.02em] text-white mb-6"
          >
            {program.title.split("\n").map((line, i, arr) => (
              <span key={i}>
                {line.charAt(0) + line.slice(1).toLowerCase()}
                {i < arr.length - 1 && <br />}
              </span>
            ))}
          </h2>
          <p className="font-sans text-lead leading-relaxed text-white/70">
            {program.subtitle}
          </p>
        </div>

        <div className="space-y-16">
          {program.phases.map((phase) => (
            <div
              key={phase.number}
              className="grid md:grid-cols-12 gap-8 md:gap-12 border-t border-white/15 pt-12"
            >
              <div className="md:col-span-4">
                <div className="flex items-baseline gap-5 mb-4">
                  <span
                    style={serif}
                    className="text-bleu-accent text-5xl md:text-6xl leading-none"
                  >
                    {phase.number}
                  </span>
                  <div>
                    <h3
                      style={serif}
                      className="text-[clamp(1.6rem,1.2rem+1vw,2.25rem)] leading-tight text-white"
                    >
                      {phase.title}
                    </h3>
                    <span className="font-sans text-sm text-white/50">{phase.weeks}</span>
                  </div>
                </div>
                <span className="font-sans text-xs uppercase tracking-[0.25em] font-semibold text-bleu-accent">
                  {phase.focus}
                </span>
              </div>

              <div className="md:col-span-8">
                <ul className="space-y-4 mb-8">
                  {phase.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <span
                        className="mt-2.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-bleu-accent"
                        aria-hidden
                      />
                      <span className="font-sans text-lead leading-relaxed text-white/75">
                        {renderBold(item, "font-semibold text-white")}
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="border-l-2 border-bleu-accent pl-5 font-sans text-base leading-relaxed text-white/60">
                  <span className="font-semibold uppercase tracking-[0.2em] text-xs text-bleu-accent block mb-1">
                    The win
                  </span>
                  {phase.win}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Delivery */}
        <div className="mt-20 border-t border-white/15 pt-12 grid md:grid-cols-12 gap-8 md:gap-12">
          <div className="md:col-span-4">
            <h3
              style={serif}
              className="text-[clamp(1.6rem,1.2rem+1vw,2.25rem)] leading-tight text-white"
            >
              {program.delivery.heading.charAt(0) +
                program.delivery.heading.slice(1).toLowerCase()}
            </h3>
          </div>
          <ul className="md:col-span-8 space-y-4">
            {program.delivery.items.map((item, i) => (
              <li key={i} className="flex items-start gap-4">
                <span
                  className="mt-2.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-bleu-accent"
                  aria-hidden
                />
                <span className="font-sans text-lead leading-relaxed text-white/75">
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
