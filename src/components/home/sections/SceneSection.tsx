import Image from "next/image";
import { SectionBadge } from "@/components/ui/SectionBadge";
import type { SceneSectionProps } from "@/components/home/types";

/**
 * "Something this year made you look": he recognizes himself.
 * One flowing large line, three short paragraphs, one closing line, then the
 * old-photos message, which hands off to "The follow-up photos".
 * Phone: the message sits on a full-width soft band under the words.
 * Desktop: words on the left, the message on the right.
 */
export function SceneSection({ content }: SceneSectionProps) {
  return (
    <section id="you" className="bg-gray-50 text-bleu-nuit" aria-labelledby="scene-title">
      <div className="max-w-7xl mx-auto lg:px-12 lg:py-28 lg:grid lg:grid-cols-[minmax(0,640px)_minmax(0,1fr)] lg:gap-20 lg:items-end">
        <div className="px-6 pt-14 pb-12 lg:p-0">
          <SectionBadge>{content.label}</SectionBadge>
          <h2 id="scene-title" className="font-black tracking-[-0.04em] leading-[1.05] text-[clamp(1.75rem,1rem+3vw,3rem)] text-balance">
            {content.title}
          </h2>
          <p className="mt-8 font-black tracking-[-0.03em] leading-[1.2] text-lead-lg">
            {content.moments}
          </p>
          <div className="mt-8 space-y-4 text-lead font-medium leading-[1.45] text-bleu-nuit/75">
            {content.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <p className="mt-8 font-black tracking-[-0.03em] leading-[1.2] text-lead-lg text-balance">
            {content.closing}
          </p>
        </div>

        <figure className="bg-bleu-fumee py-10 px-6 lg:bg-transparent lg:p-0 lg:justify-self-center">
          <figcaption className="mb-4 text-center text-sm font-bold uppercase tracking-[-0.02em] text-bleu-nuit/70">
            {content.message.caption}
          </figcaption>
          <div className="mx-auto w-[280px] lg:w-[340px] border-2 border-bleu-nuit shadow-brutal-md bg-[#0b141a]">
            <Image
              src={content.message.image}
              alt={content.message.alt}
              width={802}
              height={1100}
              sizes="(max-width: 1024px) 280px, 340px"
              className="block w-full h-auto"
            />
          </div>
        </figure>
      </div>
    </section>
  );
}
