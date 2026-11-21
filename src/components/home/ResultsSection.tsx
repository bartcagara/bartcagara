import Image from "next/image";
import { HOMEPAGE_CONTENT } from "@/data/homepage-content";
import { ScrollSection } from "./ScrollSection";
import { TRANSFORMATIONS, CLIENT_DMS } from "./assets";
import { TestimonialsMarquee } from "./TestimonialsMarquee";
import { FeaturedVideo } from "./FeaturedVideo";
import { InterviewWall } from "./InterviewWall";
import { Moment } from "./Moment";
import { CONTAINER, GUTTER, H2, SECTION } from "./ui";
import styles from "./homepage.module.css";

/**
 * More of them: Matt B. at the doctor's, one client video large, the wall of
 * interview faces, then the rows to swipe. No words of Bart's, only the title.
 */
export function ResultsSection() {
  const { results } = HOMEPAGE_CONTENT;
  // The two before/afters shown large in the section above are not repeated in the row.
  const shownLarge = new Set<string>(HOMEPAGE_CONTENT.proof.beforeAfters.map((b) => b.src));
  const rowPhotos = TRANSFORMATIONS.filter((t) => !shownLarge.has(t.src));

  return (
    <section id="results" className={GUTTER} aria-labelledby="results-title">
      <div className={`${CONTAINER} ${SECTION}`}>
        <h2 id="results-title" className={`${H2} max-w-3xl`}>{results.headline}</h2>

        <Moment moment={results.doctor} className="mt-12 md:mt-16" />

        <div className="mt-16 md:mt-24 max-w-4xl">
          <FeaturedVideo video={results.featuredVideo} />
          <div className="mt-12 md:mt-16">
            <InterviewWall />
          </div>
        </div>

        <div className="mt-16 md:mt-24 space-y-12 md:space-y-16">
          <ScrollSection title={results.sections.transformations}>
            {rowPhotos.map((item) => (
              <div key={item.src} className={styles.scrollItem}>
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={400}
                  height={400}
                  loading="lazy"
                  className={`${styles.transformationImage} w-auto h-[360px]`}
                />
              </div>
            ))}
          </ScrollSection>

          <ScrollSection title={results.sections.dms}>
            {CLIENT_DMS.map((src, index) => (
              <div key={src} className={styles.scrollItemDm}>
                <Image src={src} alt={`Client message ${index + 1}`} width={300} height={500} loading="lazy" />
              </div>
            ))}
          </ScrollSection>

          <ScrollSection title={results.sections.testimonials}>
            <TestimonialsMarquee />
          </ScrollSection>
        </div>
      </div>
    </section>
  );
}
