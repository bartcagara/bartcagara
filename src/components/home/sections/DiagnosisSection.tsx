import { CONTAINER, GUTTER, H2, SECTION } from "@/components/home/ui";
import { Paragraphs } from "./RichText";
import type { HomepageContent } from "@/components/home/types";

/** "This is you": only type and space, so the picture is the reader's own kids. */
export function DiagnosisSection({ content }: { content: HomepageContent["diagnosis"] }) {
  return (
    <section className={GUTTER} aria-labelledby="diagnosis-title">
      <div className={`${CONTAINER} ${SECTION}`}>
        <h2 id="diagnosis-title" className={`${H2} max-w-3xl`}>{content.title}</h2>
        <Paragraphs items={content.items} className="mt-8 md:mt-10" />
      </div>
    </section>
  );
}
