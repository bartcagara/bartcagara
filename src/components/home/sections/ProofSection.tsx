"use client";

import { useRef } from "react";
import Image from "next/image";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { ScrollArrows, useScrollArrows } from "@/components/home/ScrollArrows";
import { YouTubeLite } from "@/components/home/YouTubeLite";
import { TestimonialSlides } from "@/components/home/TestimonialsMarquee";
import { CLIENT_INTERVIEWS } from "@/components/home/assets";
import type { ProofSectionProps } from "@/components/home/types";

/** A sideways row with a small caption and the page's scroll arrows. */
function Row({ caption, children, center = false }: { caption: string; children: React.ReactNode; center?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const arrows = useScrollArrows(ref);

  return (
    <div className="mt-14 first:mt-0">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between gap-4">
        <p className="text-sm font-bold uppercase tracking-[-0.02em] text-bleu-nuit/70">{caption}</p>
        <ScrollArrows {...arrows} />
      </div>
      <div ref={ref} className={`mt-5 flex ${center ? "items-start" : "items-start snap-x snap-proximity"} gap-6 overflow-x-auto px-6 scroll-px-6 lg:pl-[max(3rem,calc((100vw-80rem)/2+3rem))] lg:pr-12 lg:scroll-pl-[max(3rem,calc((100vw-80rem)/2+3rem))] pb-4 scrollbar-hide`}>
        {children}
      </div>
    </div>
  );
}

/**
 * The proof, all at once, after the program: the nine client videos, more
 * before-and-afters, the strongest messages, and the LinkedIn recommendations.
 */
export function ProofSection({ content }: ProofSectionProps) {
  return (
    <section id="proof" className="bg-gray-50 text-bleu-nuit border-t-2 border-bleu-nuit" aria-labelledby="proof-title">
      <div className="py-16 lg:py-28">
        <div className="max-w-7xl mx-auto"><div className="px-6 lg:px-12 max-w-[calc(720px+6rem)]">
          <SectionBadge>{content.label}</SectionBadge>
          <h2 id="proof-title" className="heading-section">
            {content.title}
          </h2>
          <p className="mt-6 text-body text-bleu-nuit/75">{content.intro}</p>
        </div></div>

        <div className="mt-12 lg:mt-16">
          <Row caption={content.captions.videos}>
            {CLIENT_INTERVIEWS.map((id) => (
              <div key={id} className="snap-start shrink-0">
                <YouTubeLite videoId={id} title="Client interview" />
              </div>
            ))}
          </Row>

          <Row caption={content.captions.photos}>
            {content.photos.map((p) => (
              <div key={p.src} className="snap-start shrink-0 w-[300px] lg:w-[380px] border-2 border-bleu-nuit shadow-brutal-md bg-white">
                <Image src={p.src} alt={p.alt} width={940} height={788} sizes="380px" className="block w-full h-auto" />
              </div>
            ))}
          </Row>

          <Row caption={content.captions.messages} center>
            {content.messages.map((m) => (
              <div key={m.image} className="snap-start shrink-0 border-2 border-bleu-nuit shadow-brutal-md bg-[#0b141a]">
                <Image
                  src={m.image}
                  alt={m.alt}
                  width={m.width}
                  height={m.height}
                  sizes="(max-width: 1024px) 80vw, 360px"
                  className="block h-auto w-auto max-w-[80vw] max-h-[55vh] lg:max-w-[360px] lg:max-h-[520px]"
                />
              </div>
            ))}
          </Row>

          <Row caption={content.captions.linkedin}>
            <TestimonialSlides />
          </Row>
        </div>
      </div>

    </section>
  );
}
