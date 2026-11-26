import Image from "next/image";
import { SectionBadge } from "@/components/ui/SectionBadge";
import type { WhyItNeverHeldSectionProps } from "@/components/home/types";

/**
 * "Why it never held": the news he hasn't heard. Navy band.
 * Phone: all the words first, then the client message under them (as in the
 * other sections). Desktop: words on the left, the message on the right.
 */
export function WhyItNeverHeldSection({ content }: WhyItNeverHeldSectionProps) {
  return (
    <section id="why" className="bg-bleu-nuit text-white" aria-labelledby="why-title">
      <div className="max-w-7xl mx-auto px-6 py-16 lg:px-12 lg:py-28 lg:grid lg:grid-cols-[minmax(0,640px)_minmax(0,1fr)] lg:gap-x-20 lg:items-center">
        <div className="lg:col-start-1 lg:row-start-1">
          <SectionBadge variant="light">{content.label}</SectionBadge>
          <h2 id="why-title" className="heading-section">
            {content.title}
          </h2>
          <p className="mt-6 text-body text-white/80">{content.allIn}</p>
        </div>


        <div className="mt-6 lg:col-start-1 lg:row-start-2">
          <p className="text-body text-white/80">{content.trip}</p>
          <p className="mt-10 text-statement">{content.closing}</p>
        </div>

        <figure className="mt-12 lg:mt-0 lg:col-start-2 lg:row-start-1 lg:row-span-2 lg:self-center lg:justify-self-end">
          <figcaption className="mb-4 text-sm font-bold uppercase tracking-[-0.02em] text-white/70">{content.message.caption}</figcaption>
          <div className="border-2 border-white shadow-[3px_3px_0_0_var(--bleu-accent)] max-w-[440px]">
            <Image src={content.message.image} alt={content.message.alt} width={1295} height={662} sizes="(max-width: 1024px) 100vw, 440px" className="block w-full h-auto" />
          </div>
        </figure>
      </div>
    </section>
  );
}
