import Image from "next/image";
import { Moment } from "@/components/home/Moment";
import { CONTAINER, FRAME, GUTTER, H2, SECTION } from "@/components/home/ui";
import type { HomepageContent } from "@/components/home/types";

/** What he gets: on vacation, two bodies, at the doctor's. No words of Bart's under the title. */
export function GetsSection({ content }: { content: HomepageContent["gets"] }) {
  return (
    <section className={GUTTER} aria-labelledby="gets-title">
      <div className={`${CONTAINER} ${SECTION}`}>
        <h2 id="gets-title" className={`${H2} max-w-3xl`}>{content.title}</h2>
        <Moment moment={content.vacation} className="mt-12 md:mt-16" />
        <div className="mt-14 md:mt-20 grid md:grid-cols-2 gap-8 lg:gap-10">
          {content.beforeAfters.map((item) => (
            <Image
              key={item.src}
              src={item.src}
              alt={item.alt}
              width={940}
              height={788}
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 50vw"
              className={`block w-full h-auto ${FRAME}`}
            />
          ))}
        </div>
        <Moment moment={content.doctor} className="mt-16 md:mt-24" />
      </div>
    </section>
  );
}
