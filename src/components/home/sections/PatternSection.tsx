import { HomeBookButton } from "@/components/home/HomeBookButton";
import { MessageShot } from "@/components/home/MessageShot";
import { CONTAINER, GUTTER, H2, SECTION } from "@/components/home/ui";
import { Paragraphs } from "./RichText";
import type { HomepageContent } from "@/components/home/types";

/** Why every plan kept ending. Leads with a client's week in a hotel. */
export function PatternSection({ content }: { content: HomepageContent["pattern"] }) {
  return (
    <section className={GUTTER} aria-labelledby="pattern-title">
      <div className={`${CONTAINER} ${SECTION} grid lg:grid-cols-[minmax(0,1fr)_440px] gap-12 xl:gap-24 items-start`}>
        <MessageShot message={content.message} className="lg:order-2 lg:mt-2 max-w-[520px]" />
        <div className="lg:order-1">
          <h2 id="pattern-title" className={`${H2} max-w-3xl`}>{content.title}</h2>
          <Paragraphs items={content.body} className="mt-8 md:mt-10" />
          <div className="mt-10">
            <HomeBookButton location="why">{content.ctaText}</HomeBookButton>
          </div>
        </div>
      </div>
    </section>
  );
}
