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
      <div className="max-w-7xl mx-auto lg:px-12 lg:py-28 lg:grid lg:grid-cols-[minmax(0,640px)_minmax(0,1fr)] lg:gap-20 lg:items-center">
        <div className="px-6 pt-16 pb-12 lg:p-0">
          <SectionBadge>{content.label}</SectionBadge>
          <h2 id="scene-title" className="heading-section">
            {content.title}
          </h2>
          <p className="mt-6 text-statement">
            {content.moments}
          </p>
          <div className="mt-8 space-y-4 text-body text-bleu-nuit/75">
            {content.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <p className="mt-8 text-statement">
            {content.closing}
          </p>
        </div>

        <figure className="px-6 pb-16 lg:p-0 lg:justify-self-end">
          <figcaption className="mb-4 text-sm font-bold uppercase tracking-[-0.02em] text-bleu-nuit/70">
            {content.message.caption}
          </figcaption>
          <div className="w-[280px] lg:w-[340px] border-2 border-bleu-nuit shadow-brutal-md bg-[#0b141a]">
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
