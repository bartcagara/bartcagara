import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Moment } from "@/components/home/Moment";
import { CONTAINER, FRAME, GUTTER, H3, SECTION } from "@/components/home/ui";
import type { HomepageContent } from "@/components/home/types";

/**
 * Straight under the first screen: Ben F. at a conference, then Bart and his
 * son (message first, photo after), and the door to the quiz.
 */
export function FirstProofSection({ content }: { content: HomepageContent["firstProof"] }) {
  // The last two words and the arrow stay together on one line.
  const quizWords = content.quizLink.text.split(" ");
  const quizLast = quizWords.splice(-2).join(" ");
  const quizLead = quizWords.join(" ");

  return (
    <section className={GUTTER} aria-label="A client at a conference">
      <div className={`${CONTAINER} ${SECTION} grid lg:grid-cols-[minmax(0,1fr)_400px] gap-12 xl:gap-24 items-center`}>
        <div>
          <Moment moment={content.moment} />
          <p className="mt-12 md:mt-16 hidden lg:block">
            <QuizLink href={content.quizLink.href} lead={quizLead} last={quizLast} />
          </p>
        </div>
        <div className="w-full max-w-[400px]">
          <div className={`relative aspect-[4/5] ${FRAME}`}>
            <Image
              src={content.imageSrc}
              alt={content.imageAlt}
              fill
              loading="lazy"
              className="object-cover object-[50%_18%]"
              sizes="(max-width: 1024px) 100vw, 400px"
            />
          </div>
        </div>
        <p className="lg:hidden">
          <QuizLink href={content.quizLink.href} lead={quizLead} last={quizLast} />
        </p>
      </div>
    </section>
  );
}

function QuizLink({ href, lead, last }: { href: string; lead: string; last: string }) {
  return (
    <Link
      href={href}
      className={`group ${H3} !text-xl md:!text-2xl text-bleu-nuit underline decoration-bleu-accent decoration-2 underline-offset-[6px] hover:text-bleu-accent transition-colors`}
    >
      {lead}{" "}
      {/* the arrow stays on the line with the last words */}
      <span className="whitespace-nowrap">
        {last}
        <ArrowRight className="inline-block ml-2 -mt-1 w-6 h-6 transition-transform group-hover:translate-x-1" strokeWidth={2.5} aria-hidden="true" />
      </span>
    </Link>
  );
}
