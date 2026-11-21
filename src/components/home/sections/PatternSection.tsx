import { HomeBookButton } from "@/components/home/HomeBookButton";
import { Moment } from "@/components/home/Moment";
import { CONTAINER, GUTTER, H2, SECTION } from "@/components/home/ui";
import { Paragraphs } from "./RichText";
import type { HomepageContent } from "@/components/home/types";

/** Why every plan kept ending: the news, then a client's week in a hotel. */
export function PatternSection({ content }: { content: HomepageContent["pattern"] }) {
  return (
    <section className={GUTTER} aria-labelledby="pattern-title">
      <div className={`${CONTAINER} ${SECTION}`}>
        <h2 id="pattern-title" className={`${H2} max-w-3xl`}>{content.title}</h2>
        <Paragraphs items={content.body} className="mt-8 md:mt-10" />
        <Moment moment={content.moment} className="mt-16 md:mt-24" />
        <div className="mt-10 md:mt-12">
          <HomeBookButton location="why">{content.ctaText}</HomeBookButton>
        </div>
      </div>
    </section>
  );
}
