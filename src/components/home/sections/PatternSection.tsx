import { CONTAINER, GUTTER, H2, SECTION } from "@/components/home/ui";
import { Paragraphs } from "./RichText";
import type { HomepageContent } from "@/components/home/types";

/** Why it kept ending: the plans needed a calm week; this one is planned around the busy ones. */
export function PatternSection({ content }: { content: HomepageContent["pattern"] }) {
  return (
    <section className={GUTTER} aria-labelledby="pattern-title">
      <div className={`${CONTAINER} ${SECTION}`}>
        <h2 id="pattern-title" className={`${H2} max-w-3xl`}>{content.title}</h2>
        <Paragraphs items={content.body} className="mt-8 md:mt-10" />
      </div>
    </section>
  );
}
