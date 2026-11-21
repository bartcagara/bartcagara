import { HomeBookButton } from "@/components/home/HomeBookButton";
import { CONTAINER, GUTTER, H1 } from "@/components/home/ui";
import type { HomepageContent } from "@/components/home/types";

/**
 * The first screen, as /quiz's start screen: the headline, the subhead, the
 * button and the line under it, nothing else.
 */
export function HeroSection({ content }: { content: HomepageContent["hero"] }) {
  return (
    <section className={GUTTER} aria-label="Hero">
      <div className={`${CONTAINER} pt-10 pb-16 md:pt-20 md:pb-24`}>
        <div className="max-w-[760px]">
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
      </div>
    </section>
  );
}
