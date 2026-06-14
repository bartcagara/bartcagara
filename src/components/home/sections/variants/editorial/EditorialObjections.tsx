import { HOMEPAGE_CONTENT } from "@/data/homepage-content";
import { Eyebrow, serif } from "./_shared";

/**
 * EditorialObjections — a quiet Q&A spread on the frost base.
 * Each objection set as a two-column editorial row with a hairline rule.
 */
export function EditorialObjections() {
  const { objections } = HOMEPAGE_CONTENT;
  return (
    <section className="bg-bleu-fumee text-bleu-nuit" aria-labelledby="objections-title">
      <div className="max-w-7xl mx-auto px-6 py-24 md:py-36">
        <div className="max-w-3xl mb-16 md:mb-20">
          <Eyebrow>The Questions</Eyebrow>
          <h2
            id="objections-title"
            style={serif}
            className="text-[clamp(2rem,1.2rem+3vw,3.75rem)] leading-[1.05] tracking-[-0.02em]"
          >
            Before you ask.
          </h2>
        </div>

        <div className="border-t border-bleu-nuit/15">
          {objections.map((item, i) => (
            <div
              key={i}
              className="grid md:grid-cols-12 gap-6 md:gap-12 border-b border-bleu-nuit/15 py-10 md:py-12"
            >
              <h3
                style={serif}
                className="md:col-span-5 text-[clamp(1.3rem,1rem+1vw,1.8rem)] leading-snug tracking-[-0.01em] text-bleu-nuit"
              >
                {item.question}
              </h3>
              <p className="md:col-span-7 font-sans text-lead leading-relaxed text-bleu-nuit/70">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
