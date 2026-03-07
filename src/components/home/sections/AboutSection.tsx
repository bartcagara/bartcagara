"use client";

import { useState } from "react";
import Image from "next/image";
import { Check } from "lucide-react";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { TransformationModal } from "@/components/home/TransformationModal";
import type { AboutSectionProps } from "@/components/home/types";

const TRANSFORMATION_MARKER = "{{transformation-link}}";

function renderParagraphWithLink(text: string, onLinkClick: () => void) {
  const parts = text.split(TRANSFORMATION_MARKER);
  if (parts.length === 1) return text;

  return (
    <>
      {parts[0]}
      <button
        type="button"
        onClick={onLinkClick}
        className="underline underline-offset-4 decoration-bleu-accent hover:text-bleu-accent transition-colors cursor-pointer"
      >
        here it is
      </button>
      {parts[1]}
    </>
  );
}

/**
 * AboutSection - About Bart section
 * Displays bio, photo, and credentials
 */
export function AboutSection({
  title,
  subtitle,
  imageSrc,
  imageAlt,
  subhead,
  paragraphs,
  transformationImage,
  credentials
}: AboutSectionProps) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section id="about" className="py-24 md:py-32 border-b-2 border-bleu-nuit bg-white text-bleu-nuit" aria-labelledby="about-title">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-24">
          <SectionBadge>The Coach</SectionBadge>
          <h2 id="about-title" className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] text-bleu-nuit">
            {title}<br />{subtitle}
          </h2>
          <p className="text-2xl md:text-3xl font-medium text-bleu-nuit/70 mt-8 max-w-2xl">
            {subhead}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-32 items-start">
          {/* Image (Left) w/ Frame */}
          <div className="p-4 border-2 border-bleu-nuit bg-white shadow-brutal-lg">
            <div className="aspect-[2/3] relative border-2 border-bleu-nuit">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                loading="lazy"
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Content (Right) */}
          <div>
            <div className="space-y-8 text-xl md:text-2xl font-medium leading-relaxed text-bleu-nuit/80">
              {paragraphs.map((paragraph, index) => {
                const isBold = paragraph.startsWith('**') && paragraph.endsWith('**');
                const isFootnote = paragraph.startsWith('*') && !isBold;
                const text = isBold ? paragraph.slice(2, -2) : isFootnote ? paragraph : paragraph;
                const hasLink = text.includes(TRANSFORMATION_MARKER);
                return (
                  <p key={index} className={
                    isBold
                      ? "text-2xl md:text-3xl text-bleu-nuit font-black leading-tight"
                      : isFootnote
                        ? "text-base md:text-lg text-bleu-nuit/60 italic"
                        : ""
                  }>
                    {hasLink ? renderParagraphWithLink(text, () => setModalOpen(true)) : text}
                  </p>
                );
              })}
            </div>

            <div className="mt-16 flex flex-col md:flex-row gap-8">
              {credentials.map((credential, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="p-1 bg-bleu-accent rounded-full text-white">
                    <Check className="w-5 h-5" strokeWidth={4} aria-hidden="true" />
                  </div>
                  <span className="font-bold uppercase tracking-tighter text-lg">{credential}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {transformationImage && (
        <TransformationModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          imageSrc={transformationImage}
          imageAlt="Bart Cagara's personal transformation"
        />
      )}
    </section>
  );
}
