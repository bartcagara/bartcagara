import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { HomeBookButton } from "@/components/home/HomeBookButton";
import { CONTAINER, FRAME, GUTTER, H1, H3, MICRO } from "@/components/home/ui";
import type { HomepageContent } from "@/components/home/types";

/**
 * The first screen, as /brief's: words on the left, the picture on the right.
 * On a phone the headline, subhead, button and the line under it come first;
 * the photo of Bart and his son follows. Then the first proof (Ben F.) and the
 * door to the quiz.
 */
export function HeroSection({ content }: { content: HomepageContent["hero"] }) {
  const quizWords = content.quizLink.text.split(" ");
  const quizLast = quizWords.pop();
  const quizLead = quizWords.join(" ");
  return (
    <section className={GUTTER} aria-label="Hero">
      <div className={`${CONTAINER} pt-10 pb-16 md:pt-16 md:pb-24 grid lg:grid-cols-[minmax(0,1fr)_400px] gap-12 xl:gap-24 items-center`}>
        <div className="max-w-[620px]">
          <h1 className={H1}>
            {content.headline}{" "}
            <span className="block text-bleu-accent">{content.highlightedText}</span>
          </h1>
          <p className="mt-4 md:mt-6 text-lg md:text-2xl leading-[1.45] text-pretty font-medium text-bleu-nuit/75 max-w-[30em]">
            {content.subheadline}
          </p>
          <div className="mt-8 md:mt-12">
            <HomeBookButton location="hero">{content.ctaText}</HomeBookButton>
            <p className="mt-4 text-sm md:text-base font-medium text-bleu-nuit/60 text-center sm:text-left">{content.ctaNote}</p>
          </div>
        </div>

        <div className="w-full max-w-[400px] mx-auto lg:mx-0">
          <div className={`relative aspect-[4/5] ${FRAME}`}>
            <Image
              src={content.imageSrc}
              alt={content.imageAlt}
              fill
              priority
              className="object-cover object-[50%_18%]"
              sizes="(max-width: 1024px) 100vw, 400px"
            />
          </div>
        </div>
      </div>

      {/* The first proof, on its own screen, and the quiz door under it */}
      <div className={`${CONTAINER} border-t-2 border-bleu-nuit py-16 md:py-24`}>
        <figure className="max-w-3xl">
          <blockquote>
            <p className="text-lg md:text-2xl font-medium leading-[1.45] text-bleu-nuit/75">&ldquo;{content.proof.lead}</p>
            <p className="mt-2 text-[clamp(2.25rem,10.6vw,3rem)] md:text-[3.5rem] lg:text-[4rem] font-black tracking-[-0.04em] leading-[0.98] text-balance text-bleu-nuit">
              {content.proof.bold}&rdquo;
            </p>
          </blockquote>
          <figcaption className={`mt-6 ${MICRO}`}>{content.proof.name}</figcaption>
        </figure>
        <p className="mt-12 md:mt-16">
          <Link
            href={content.quizLink.href}
            className={`group ${H3} !text-xl md:!text-2xl text-bleu-nuit underline decoration-bleu-accent decoration-2 underline-offset-[6px] hover:text-bleu-accent transition-colors`}
          >
            {quizLead}{" "}
            {/* the arrow stays on the line with the last word */}
            <span className="whitespace-nowrap">
              {quizLast}
              <ArrowRight className="inline-block ml-2 -mt-1 w-6 h-6 transition-transform group-hover:translate-x-1" strokeWidth={2.5} aria-hidden="true" />
            </span>
          </Link>
        </p>
      </div>
    </section>
  );
}
