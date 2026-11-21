"use client";

import { useState } from "react";
import Image from "next/image";
import { TransformationModal } from "@/components/home/TransformationModal";
import { CONTAINER, FRAME, GUTTER, H2, MICRO, PROSE, SECTION } from "@/components/home/ui";
import { Paragraphs } from "./RichText";
import type { HomepageContent } from "@/components/home/types";

/**
 * Who Bart is. Leads with his face; the blood-test numbers sit in a card so
 * they read at a glance; his before/after opens on a tap.
 */
export function AboutSection({ content }: { content: HomepageContent["about"] }) {
  const [modalOpen, setModalOpen] = useState(false);
  const { card } = content;

  return (
    <section id="about" className={GUTTER} aria-labelledby="about-title">
      <div className={`${CONTAINER} ${SECTION} grid md:grid-cols-[280px_minmax(0,1fr)] lg:grid-cols-[360px_minmax(0,1fr)] gap-10 md:gap-16 xl:gap-24 items-start`}>
        <div className={`relative aspect-square w-40 md:w-full ${FRAME}`}>
          <Image
            src={content.imageSrc}
            alt={content.imageAlt}
            fill
            loading="lazy"
            className="object-cover"
            sizes="(max-width: 768px) 160px, 360px"
          />
        </div>

        <div>
          <h2 id="about-title" className={H2}>{content.title}</h2>
          <Paragraphs items={content.paragraphs} className="mt-8 md:mt-10" />

          {/* The numbers card */}
          <div className={`mt-10 max-w-[480px] bg-white ${FRAME}`}>
          <table className="w-full">
            <caption className="sr-only">Bart&apos;s blood tests</caption>
            <thead>
              <tr className="border-b-2 border-bleu-nuit">
                <td className="px-5 py-4" />
                {card.columns.map((col) => (
                  <th key={col} scope="col" className={`px-5 py-4 text-right ${MICRO}`}>
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {card.rows.map((row, i) => (
                <tr key={row.label} className={i < card.rows.length - 1 ? "border-b-2 border-bleu-nuit/10" : ""}>
                  <th scope="row" className="px-5 py-5 text-left text-base md:text-lg font-bold leading-tight text-bleu-nuit">
                    {row.label}
                  </th>
                  <td className="px-5 py-5 text-right text-3xl md:text-4xl font-black tracking-[-0.04em] tabular-nums text-bleu-nuit/40">{row.then}</td>
                  <td className="px-5 py-5 text-right text-3xl md:text-4xl font-black tracking-[-0.04em] tabular-nums text-bleu-accent">{row.now}</td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>

          <Paragraphs items={content.paragraphsAfter} className="mt-10" />

          <p className={`mt-2 ${PROSE}`}>
            {content.transformationLink.lead}{" "}
            <button
              type="button"
              onClick={() => setModalOpen(true)}
              className="font-bold text-bleu-nuit underline underline-offset-4 decoration-2 decoration-bleu-accent hover:text-bleu-accent transition-colors cursor-pointer"
            >
              {content.transformationLink.link}
            </button>
          </p>
        </div>
      </div>

      <TransformationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        imageSrc={content.transformationImage}
        imageAlt="Bart Cagara's personal transformation"
      />
    </section>
  );
}
