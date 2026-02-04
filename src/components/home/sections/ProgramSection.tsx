import { SectionBadge } from "@/components/ui/SectionBadge";
import type { ProgramSectionProps } from "@/components/home/types";

/**
 * ProgramSection - EXECUTIVE ATHLETE OS program details
 * Shows the 4-phase program structure
 */
export function ProgramSection({ title, subtitle, phases }: ProgramSectionProps) {
  return (
    <section id="program" className="py-24 md:py-32 border-b-2 border-bleu-nuit bg-bleu-nuit text-white" aria-labelledby="program-title">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-24">
          <SectionBadge variant="light">The Program</SectionBadge>
          <h2 id="program-title" className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] text-white mb-8">
            {title.split('\n').map((line, i) => (
              <span key={i}>
                {line}
                {i < title.split('\n').length - 1 && <br />}
              </span>
            ))}
          </h2>
          <p className="text-3xl font-medium text-white/70 max-w-3xl leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* VERTICAL TIMELINE */}
        <div className="relative mt-24">
          {/* Vertical Line */}
          <div className="absolute left-[19px] top-4 bottom-0 w-0.5 bg-white/20 md:left-[2.5rem]" aria-hidden="true"></div>

          {phases.map((phase, index) => (
            <div key={phase.number} className={`relative pl-20 md:pl-32 ${index < phases.length - 1 ? 'mb-20' : ''}`}>
              <span className="absolute left-0 top-[-10px] text-5xl md:text-7xl font-black text-bleu-accent bg-bleu-nuit leading-none z-10 pr-2" aria-label={`Phase ${phase.number}`}>
                {phase.number}
              </span>
              <div className={index < phases.length - 1 ? "border-b-2 border-white/10 pb-12" : ""}>
                <h3 className="text-2xl md:text-4xl font-black uppercase mb-4 text-white leading-none">
                  {phase.title}
                  <span className="text-bleu-accent text-lg md:text-2xl block mt-2 font-bold tracking-tighter">
                    ({phase.weeks})
                  </span>
                </h3>

                {/* FOCUS */}
                <div className="mb-6">
                  <span className="font-mono text-bleu-accent tracking-tighter uppercase text-sm bg-white/5 px-2 py-1 inline-block">
                    // FOCUS: {phase.focus}
                  </span>
                </div>

                {/* PROTOCOL */}
                <ul className="text-2xl text-white/80 leading-relaxed font-medium mb-8 max-w-3xl space-y-2">
                  {phase.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <span className="text-bleu-accent mr-4 font-black" aria-hidden="true">/</span>
                      <span>
                        {item.split(/(\*\*.*?\*\*)/).map((part, i) => {
                          if (part.startsWith('**') && part.endsWith('**')) {
                            return <strong key={i} className="text-white">{part.slice(2, -2)}</strong>;
                          }
                          return part;
                        })}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* THE WIN */}
                <div className="inline-block bg-bleu-accent p-4 shadow-brutal-white-sm">
                  <span className="font-black text-white uppercase tracking-tighter block mb-1 text-sm opacity-70">
                    THE WIN:
                  </span>
                  <span className="font-black text-white uppercase tracking-tighter text-lg md:text-xl leading-tight block">
                    {phase.win}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
