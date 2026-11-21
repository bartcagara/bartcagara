import Image from "next/image";
import Link from "next/link";
import { HomeBookButton } from "@/components/home/HomeBookButton";
import { Moment } from "@/components/home/Moment";
import { CONTAINER, FRAME, GUTTER, H2, PROSE, SECTION } from "@/components/home/ui";
import type { HomepageContent } from "@/components/home/types";

/**
 * The proof, at the places the page has just named: a conference, a hotel
 * week, a vacation (with two before/afters). One heading over all three, the
 * button, and the quiz for the man not ready to book.
 */
export function ProofSection({ content }: { content: HomepageContent["proof"] }) {
  return (
    <section className={GUTTER} aria-labelledby="proof-title">
      <div className={`${CONTAINER} ${SECTION}`}>
        <h2 id="proof-title" className={`${H2} max-w-3xl`}>{content.title}</h2>
        <Moment moment={content.conference} className="mt-12 md:mt-16" />
        <Moment moment={content.hotel} className="mt-16 md:mt-24" />
        <Moment moment={content.vacation} className="mt-16 md:mt-24" />
        <div className="mt-10 md:mt-12 grid md:grid-cols-2 gap-8 lg:gap-10">
          {content.beforeAfters.map((item) => (
            <Image
              key={item.src}
              src={item.src}
              alt={item.alt}
              width={940}
              height={788}
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 50vw"
              className={`block w-full h-auto ${FRAME}`}
            />
          ))}
        </div>
        <div className="mt-12 md:mt-16">
          <HomeBookButton location="proof">{content.ctaText}</HomeBookButton>
        </div>
        <p className={`mt-8 ${PROSE}`}>
          {content.quiz.lead}{" "}
          <Link
            href={content.quiz.href}
            className="font-bold text-bleu-nuit underline underline-offset-4 decoration-2 decoration-bleu-accent hover:text-bleu-accent transition-colors whitespace-nowrap"
          >
            {content.quiz.link}
          </Link>
        </p>
      </div>
    </section>
  );
}
