import { HomeBookButton } from "@/components/home/HomeBookButton";
import { MessageShot } from "@/components/home/MessageShot";
import { CONTAINER, FRAME, GUTTER, H2, H3, MICRO, SECTION } from "@/components/home/ui";
import type { HomepageContent } from "@/components/home/types";

/**
 * The offer. A client's message about one call, the title, then the six
 * months as three step cards: one under the other on a phone, joined by a
 * thin line; three across on a wide screen. "Then you fire me." closes it,
 * with the message that came 9 months after coaching ended.
 */
export function ProgramSection({ content }: { content: HomepageContent["program"] }) {
  return (
    <section id="program" className={GUTTER} aria-labelledby="program-title">
      <div className={`${CONTAINER} ${SECTION}`}>
        <div className="grid lg:grid-cols-[minmax(0,1fr)_400px] gap-12 xl:gap-24 items-start">
          <MessageShot message={content.message} className="lg:order-2 lg:mt-2 max-w-[440px]" />
          <div className="lg:order-1">
            <h2 id="program-title" className={H2}>{content.title}</h2>
            <p className="mt-4 md:mt-6 text-lg md:text-2xl leading-[1.45] font-bold text-bleu-nuit text-balance">{content.subtitle}</p>
          </div>
        </div>

        <ol className="mt-14 md:mt-20 grid gap-10 md:grid-cols-3 md:gap-6 lg:gap-8 list-none">
          {content.steps.map((step, i) => (
            <li key={step.number} className="relative">
              {/* the thin line joining one step to the next (phone) */}
              {i < content.steps.length - 1 && (
                <span className="md:hidden absolute left-8 -bottom-10 h-10 w-0.5 bg-bleu-nuit" aria-hidden="true" />
              )}
              <div className={`h-full bg-white p-6 md:p-7 ${FRAME}`}>
                <div className="flex items-baseline justify-between gap-4">
                  <span className="text-5xl md:text-6xl font-black tracking-[-0.04em] leading-none text-bleu-accent" aria-hidden="true">
                    {step.number}
                  </span>
                  <span className={MICRO}>{step.weeks}</span>
                </div>
                <h3 className={`mt-5 ${H3} text-bleu-nuit`}>
                  <span className="sr-only">Step {step.number}: </span>
                  {step.title}
                </h3>
                <p className="mt-3 text-lg md:text-xl font-bold leading-snug text-bleu-nuit text-pretty">{step.outcome}</p>
                <ul className="mt-5 pt-5 border-t-2 border-bleu-nuit/10 space-y-3 list-none">
                  {step.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-base md:text-lg font-medium leading-snug text-bleu-nuit/75">
                      <span className="mt-[0.55em] h-1.5 w-1.5 shrink-0 bg-bleu-accent" aria-hidden="true" />
                      <span className="text-pretty">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-16 md:mt-24 grid lg:grid-cols-[minmax(0,1fr)_480px] gap-10 xl:gap-24 items-start">
          <div>
            <p className={H2}>{content.closer}</p>
            <div className="mt-8 md:mt-10 hidden lg:block">
              <HomeBookButton location="offer">{content.ctaText}</HomeBookButton>
            </div>
          </div>
          <MessageShot message={content.afterMessage} className="max-w-[520px]" />
          <div className="lg:hidden">
            <HomeBookButton location="offer">{content.ctaText}</HomeBookButton>
          </div>
        </div>
      </div>
    </section>
  );
}
