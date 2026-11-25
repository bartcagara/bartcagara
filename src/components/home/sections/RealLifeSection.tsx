import Image from "next/image";
import { SectionBadge } from "@/components/ui/SectionBadge";
import type { RealLifeSectionProps } from "@/components/home/types";

type Message = RealLifeSectionProps["content"]["messages"][number];

function MessageFigure({ message, className = "" }: { message: Message; className?: string }) {
  return (
    <figure className={className}>
      <figcaption className="mb-4 text-center lg:text-left text-sm font-bold uppercase tracking-[-0.02em] text-bleu-nuit/70">
        {message.caption}
      </figcaption>
      <div className="mx-auto lg:mx-0 w-[280px] lg:w-[340px] border-2 border-bleu-nuit shadow-brutal-md bg-[#0b141a]">
        <Image src={message.image} alt={message.alt} width={message.width} height={message.height} sizes="(max-width: 1024px) 280px, 340px" className="block w-full h-auto" />
      </div>
    </figure>
  );
}

/**
 * "Real life": what working with Bart looks like in the weeks that used to
 * end every attempt. Two beats, each next to the client message that proves it.
 * Phone: words, message, words, message, closing line.
 * Desktop: two rows, words on the left and the message on the right.
 */
export function RealLifeSection({ content }: RealLifeSectionProps) {
  const [road, payoff] = content.messages;
  return (
    <section id="real-life" className="bg-gray-50 text-bleu-nuit" aria-labelledby="real-life-title">
      <div className="max-w-7xl mx-auto py-14 lg:px-12 lg:py-28 lg:grid lg:grid-cols-[minmax(0,640px)_minmax(0,1fr)] lg:gap-x-20 lg:gap-y-16 lg:items-start">
        <div className="px-6 lg:px-0">
          <SectionBadge>{content.label}</SectionBadge>
          <h2 id="real-life-title" className="heading-section">
            {content.title}
          </h2>
          <p className="mt-6 text-body text-bleu-nuit/75">{content.road}</p>
          <p className="mt-4 text-body text-bleu-nuit/75">{content.adjust}</p>
        </div>
        <MessageFigure message={road} className="mt-10 lg:mt-0 bg-bleu-fumee lg:bg-transparent py-10 lg:py-0 px-6 lg:px-0" />

        <div className="px-6 lg:px-0 mt-10 lg:mt-0 lg:pt-12">
          <p className="text-body text-bleu-nuit/75">{content.payoff}</p>
          <p className="mt-8 text-statement">{content.closing}</p>
        </div>
        <MessageFigure message={payoff} className="mt-10 lg:mt-0 bg-bleu-fumee lg:bg-transparent py-10 lg:py-0 px-6 lg:px-0 lg:row-start-2 lg:col-start-2" />
      </div>
    </section>
  );
}
