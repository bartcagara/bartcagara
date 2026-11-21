import { HomeBookButton } from "@/components/home/HomeBookButton";
import { CONTAINER, GUTTER, H2, SECTION } from "@/components/home/ui";
import { Paragraphs } from "./RichText";
import type { HomepageContent } from "@/components/home/types";

/** The call. The question in navy, its last words in the accent, as /brief's headline. */
export function FinalCTASection({ content }: { content: HomepageContent["finalCta"] }) {
  return (
    <section id="calendar-section" className={GUTTER} aria-labelledby="final-cta-title">
      <div className={`${CONTAINER} ${SECTION}`}>
        <h2 id="final-cta-title" className={`${H2} max-w-4xl`}>
          {content.headline} <span className="text-bleu-accent">{content.highlightedText}</span>
        </h2>
        <Paragraphs items={content.body} className="mt-8 md:mt-10" />
        <div id="book-call" className="mt-10 scroll-mt-8">
          <HomeBookButton location="final">{content.ctaText}</HomeBookButton>
        </div>
      </div>
    </section>
  );
}
