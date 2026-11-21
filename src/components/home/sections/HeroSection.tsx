import Image from "next/image";
import { HomeBookButton } from "@/components/home/HomeBookButton";
import { CONTAINER, FRAME, GUTTER, H1 } from "@/components/home/ui";
import type { HomepageContent } from "@/components/home/types";

/**
 * The first screen, as /brief's: the headline, the subhead, the button and
 * the line under it; the photo of Bart and his son beside them on a wide
 * screen, right under them on a phone.
 */
export function HeroSection({ content }: { content: HomepageContent["hero"] }) {
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
    </section>
  );
}
