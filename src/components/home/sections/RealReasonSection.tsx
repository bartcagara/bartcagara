import Image from "next/image";
import { SectionBadge } from "@/components/ui/SectionBadge";
import type { RealReasonSectionProps } from "@/components/home/types";

/**
 * "The real reason": a pattern interrupt. Forget the weight; why is he really
 * doing this? Real client messages answer, each captioned with the reason.
 * `crop` shows only the top of a tall screenshot (in the image's own pixels).
 * Phone: one message after another. Desktop: the three short messages in a row, the two long ones under the first two.
 */
type ReasonItem = RealReasonSectionProps["content"]["reasons"][number];

function Reason({ reason }: { reason: ReasonItem }) {
  return (
    <li>
      <p className="mb-4 text-sm font-bold uppercase tracking-[-0.02em] text-bleu-nuit/70">{reason.caption}</p>
      <div
        className="max-w-[360px] border-2 border-bleu-nuit shadow-brutal-md bg-[#0b141a] overflow-hidden"
        style={reason.crop ? { aspectRatio: `${reason.width} / ${reason.crop}` } : undefined}
      >
        <Image
          src={reason.image}
          alt={reason.alt}
          width={reason.width}
          height={reason.height}
          sizes="360px"
          className={reason.crop ? "block w-full h-full object-cover object-top" : "block w-full h-auto"}
        />
      </div>
    </li>
  );
}

export function RealReasonSection({ content }: RealReasonSectionProps) {
  return (
    <section id="real-reason" className="bg-bleu-fumee text-bleu-nuit border-t-2 border-bleu-nuit" aria-labelledby="real-reason-title">
      <div className="max-w-7xl mx-auto px-6 py-16 lg:px-12 lg:py-28">
        <div className="max-w-[720px]">
          <SectionBadge>{content.label}</SectionBadge>
          <h2 id="real-reason-title" className="heading-section">
            {content.title}
          </h2>
          <p className="mt-6 text-statement">{content.question}</p>
        </div>

        <ul className="mt-12 lg:mt-16 grid gap-12 lg:grid-cols-3 lg:gap-10 lg:items-start" aria-label="Why clients did it, in their own messages">
          {content.reasons.slice(0, 3).map((reason) => (
            <Reason key={reason.image} reason={reason} />
          ))}
        </ul>
        <ul className="mt-12 grid gap-12 lg:grid-cols-3 lg:gap-10 lg:items-start" aria-label="More reasons, in their own messages">
          {content.reasons.slice(3).map((reason) => (
            <Reason key={reason.image} reason={reason} />
          ))}
        </ul>

        <p className="mt-12 lg:mt-16 max-w-[720px] text-statement">
          {content.closing}
        </p>
      </div>
    </section>
  );
}
