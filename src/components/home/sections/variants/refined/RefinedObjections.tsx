import { HOMEPAGE_CONTENT } from "@/data/homepage-content";
import { DotGrid, Kicker } from "./_shared";

/** Objections — Q&A list. */
export function RefinedObjections() {
  const { objections } = HOMEPAGE_CONTENT;
  return (
    <section
      className="relative overflow-hidden border-b-2 border-bleu-nuit bg-bleu-marine py-24 md:py-32"
      aria-labelledby="objections-title"
    >
      <DotGrid />
      <div className="relative mx-auto max-w-7xl px-6">
        <Kicker label="THE OBJECTIONS" />
        <h2
          id="objections-title"
          className="mb-16 text-h2 font-black uppercase tracking-tighter text-white"
        >
          You&apos;re not the first to ask
        </h2>

        <dl className="max-w-4xl space-y-6">
          {objections.map((obj, index) => (
            <div
              key={index}
              className="border-2 border-bleu-fumee bg-bleu-nuit p-6 shadow-brutal-white-sm md:p-8"
            >
              <dt className="mb-3 flex items-start gap-4">
                <span
                  className="font-mono text-lg font-black text-bleu-accent"
                  aria-hidden
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-xl font-black uppercase leading-tight tracking-tighter text-white md:text-2xl">
                  {obj.question}
                </span>
              </dt>
              <dd className="pl-10 text-lead font-medium leading-relaxed text-white/75">
                {obj.answer}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
