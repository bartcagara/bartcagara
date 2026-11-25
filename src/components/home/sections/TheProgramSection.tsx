import Image from "next/image";
import { SectionBadge } from "@/components/ui/SectionBadge";
import type { TheProgramSectionProps } from "@/components/home/types";

/**
 * The program: the six months laid out, so nothing about what he's buying is
 * vague. Navy band. Three phase cards (each ends on its win), then how every
 * week runs, with one real message beside it.
 */
export function TheProgramSection({ content }: TheProgramSectionProps) {
  return (
    <section id="program" className="bg-bleu-nuit text-white" aria-labelledby="program-title">
      <div className="max-w-7xl mx-auto px-6 py-16 lg:px-12 lg:py-28">
        <div className="max-w-[720px]">
          <SectionBadge variant="light">{content.label}</SectionBadge>
          <h2 id="program-title" className="heading-section">
            {content.title}
          </h2>
          <p className="mt-6 text-body text-white/80">{content.intro}</p>
        </div>

        <ol className="mt-12 lg:mt-16 grid gap-6 lg:grid-cols-3 lg:gap-8">
          {content.phases.map((phase) => (
            <li key={phase.number} className="flex flex-col border-2 border-white bg-white text-bleu-nuit shadow-[3px_3px_0_0_var(--bleu-accent)]">
              <div className="px-6 pt-6 pb-8 flex-1">
                <p className="text-sm font-bold uppercase tracking-[-0.02em] text-bleu-nuit/60">
                  {phase.number} · {phase.weeks}
                </p>
                <h3 className="mt-2 heading-card">{phase.name}</h3>
                <p className="mt-4 text-lg font-medium leading-[1.45] text-bleu-nuit/75">{phase.text}</p>
              </div>
              <p className="px-6 py-5 lg:min-h-[5.5rem] lg:flex lg:items-center bg-bleu-fumee border-t-2 border-bleu-nuit font-black tracking-[-0.02em] leading-[1.25] text-lg">
                {phase.win}
              </p>
            </li>
          ))}
        </ol>

        <div className="mt-16 lg:mt-24 lg:grid lg:grid-cols-[minmax(0,1fr)_400px] lg:gap-20 lg:items-start">
          <div>
            <p className="text-sm font-bold uppercase tracking-[-0.02em] text-white/60">{content.weekly.label}</p>
            <ul className="mt-6 space-y-8">
              {content.weekly.items.map((item) => (
                <li key={item.title} className="border-l-4 border-bleu-accent pl-5">
                  <p className="heading-card">{item.title}</p>
                  <p className="mt-2 text-body text-white/80">{item.text}</p>
                </li>
              ))}
            </ul>
          </div>
          <figure className="mt-12 lg:mt-0">
            <figcaption className="mb-4 text-sm font-bold uppercase tracking-[-0.02em] text-white/70">{content.message.caption}</figcaption>
            <div
              className="max-w-[400px] border-2 border-white shadow-[3px_3px_0_0_var(--bleu-accent)] bg-[#0b141a] overflow-hidden"
              style={{ aspectRatio: `${content.message.width} / ${content.message.crop}` }}
            >
              <Image src={content.message.image} alt={content.message.alt} width={content.message.width} height={content.message.height} sizes="400px" className="block w-full h-full object-cover object-top" />
            </div>
          </figure>
        </div>
      </div>
    </section>
  );
}
