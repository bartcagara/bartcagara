import { HomeBookButton } from "@/components/home/HomeBookButton";
import { Moment } from "@/components/home/Moment";
import { CONTAINER, GUTTER, H2, SECTION } from "@/components/home/ui";
import { Paragraphs } from "./RichText";
import type { HomepageContent } from "@/components/home/types";

/** The call: the dad at the lake, then "Think back 24 weeks." and the last button. */
export function FinalCTASection({ content }: { content: HomepageContent["finalCta"] }) {
  return (
    <section id="calendar-section" className={GUTTER} aria-labelledby="final-cta-title">
      <div className={`${CONTAINER} ${SECTION}`}>
        <Moment moment={content.moment} />
        <h2 id="final-cta-title" className={`${H2} max-w-3xl mt-16 md:mt-24`}>{content.headline}</h2>
        <Paragraphs items={content.body} className="mt-8 md:mt-10" />
        <div id="book-call" className="mt-10 scroll-mt-8">
          <HomeBookButton location="final">{content.ctaText}</HomeBookButton>
          <p className="mt-4 text-base md:text-lg font-medium leading-snug text-bleu-nuit/75 text-center sm:text-left text-pretty max-w-[30em]">
            {content.ctaNote}
          </p>
        </div>
      </div>
    </section>
  );
}
