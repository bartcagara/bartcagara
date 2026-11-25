"use client";

import { useState } from "react";
import Image from "next/image";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { TransformationModal } from "@/components/home/TransformationModal";
import type { CoachSectionProps } from "@/components/home/types";

/** "{{transformation-link|label}}" in a paragraph becomes a button that opens Bart's before-and-after. */
function withLink(text: string, onClick: () => void) {
  const match = text.match(/\{\{transformation-link(?:\|([^}]*))?\}\}/);
  if (!match || match.index === undefined) return text;
  return (
    <>
      {text.slice(0, match.index)}
      <button type="button" onClick={onClick} className="underline underline-offset-4 decoration-bleu-accent hover:text-bleu-accent transition-colors">
        {match[1] ?? "Here it is"}
      </button>
      {text.slice(match.index + match[0].length)}
    </>
  );
}

/**
 * "Who the fuck is Bart?": Bart's own About, word for word, with his paragraph
 * breaks. Only his first line is set large; the bold line stays bold.
 * Phone: label, the question, the photo, then his text.
 * Desktop: label and photo on the left, the question and his text on the right.
 */
export function CoachSection({ content }: CoachSectionProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const paragraphs = content.paragraphs;

  const renderParagraph = (p: string, i: number) => {
    const isBold = p.startsWith("**") && p.endsWith("**");
    const text = isBold ? p.slice(2, -2) : p;
    if (i === 0) {
      return <p key={i} className="font-black tracking-[-0.03em] leading-[1.2] text-lead-lg text-bleu-nuit">{text}</p>;
    }
    if (isBold) {
      return <p key={i} className="font-black tracking-[-0.03em] leading-[1.2] text-lead-lg text-bleu-nuit text-balance">{text}</p>;
    }
    if (text.startsWith("P.S.")) {
      return <p key={i} className="text-base text-bleu-nuit/70">{withLink(text, () => setModalOpen(true))}</p>;
    }
    return <p key={i}>{text}</p>;
  };

  const photo = (
    <figure>
      <div className="relative aspect-[2/3] border-2 border-bleu-nuit shadow-brutal-md bg-white">
        <Image src={content.imageSrc} alt={content.imageAlt} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 480px" />
      </div>
      <figcaption className="mt-4 px-6 sm:px-0 lg:px-0 text-sm font-bold uppercase tracking-[-0.02em] text-bleu-nuit/70">{content.credentials.join(" · ")}</figcaption>
    </figure>
  );

  return (
    <section id="about" className="bg-gray-50 text-bleu-nuit border-t-2 border-bleu-nuit" aria-labelledby="about-title">
      <div className="max-w-7xl mx-auto px-6 py-16 lg:px-12 lg:py-28 lg:grid lg:grid-cols-[480px_minmax(0,1fr)] lg:gap-20 lg:items-start">
        <div className="hidden lg:block lg:sticky lg:top-28">
          <SectionBadge>{content.label}</SectionBadge>
          {photo}
        </div>

        <div className="max-w-[640px]">
          <div className="lg:hidden"><SectionBadge>{content.label}</SectionBadge></div>
          <h2 id="about-title" className="lg:mt-[60px] font-black tracking-[-0.04em] leading-[1.05] text-[clamp(1.75rem,1rem+3vw,3rem)]">
            {content.title}
          </h2>
          <div className="lg:hidden mt-8 -mx-6 sm:mx-0">{photo}</div>
          <div className="mt-8 space-y-5 text-lead font-medium leading-[1.45] text-bleu-nuit/75">
            {paragraphs.map(renderParagraph)}
          </div>
        </div>
      </div>

      <TransformationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} imageSrc={content.transformationImage} imageAlt="Bart Cagara's personal transformation" />
    </section>
  );
}
