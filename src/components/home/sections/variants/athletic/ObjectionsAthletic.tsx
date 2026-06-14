import { HOMEPAGE_CONTENT } from "@/data/homepage-content";
import { Eyebrow } from "./_shared";

/**
 * Objections — Q&A cards on the marine band. Static (no client interactivity).
 */
export function ObjectionsAthletic() {
  const { objections } = HOMEPAGE_CONTENT;
  return (
    <section
      className="bg-bleu-marine py-24 md:py-32"
      aria-labelledby="objections-title"
    >
      <div className="mx-auto max-w-7xl px-6">
        <Eyebrow label="Straight Answers" />
        <h2
          id="objections-title"
          className="mb-16 max-w-3xl text-h2 uppercase text-white"
        >
          The Questions You&rsquo;re Already Asking
        </h2>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {objections.map((o, i) => (
            <div
              key={i}
              className="rounded-sm border border-white/10 bg-bleu-nuit p-7 md:p-8"
            >
              <h3 className="mb-4 flex items-start text-xl font-black uppercase leading-tight tracking-tighter text-white">
                <span className="mr-3 text-bleu-accent" aria-hidden>
                  Q.
                </span>
                {o.question}
              </h3>
              <p className="text-base font-medium leading-relaxed text-white/70">
                {o.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
