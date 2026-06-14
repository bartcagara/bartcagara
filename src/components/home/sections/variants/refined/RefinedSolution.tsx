import { HOMEPAGE_CONTENT } from "@/data/homepage-content";
import { DotGrid, Kicker, renderBold } from "./_shared";

/** Solution — the "last restart" payoff on a dark surface. */
export function RefinedSolution() {
  const { solution } = HOMEPAGE_CONTENT;
  return (
    <section
      className="relative overflow-hidden border-b-2 border-bleu-nuit bg-bleu-nuit py-24 md:py-32"
      aria-labelledby="solution-title"
    >
      <DotGrid />
      <div className="relative mx-auto max-w-7xl px-6">
        <Kicker label="THE SOLUTION" />
        <h2
          id="solution-title"
          className="mb-16 max-w-4xl text-h2 font-black uppercase tracking-tighter text-white"
        >
          {solution.title}
        </h2>

        <div className="max-w-3xl space-y-6">
          {solution.items.map((item, index) => {
            const isBold = item.startsWith("**") && item.endsWith("**");
            const text = isBold ? item.slice(2, -2) : item;
            return (
              <p
                key={index}
                className={
                  isBold
                    ? "text-lead-lg font-black leading-tight text-white"
                    : "text-lead font-medium leading-relaxed text-white/80"
                }
              >
                {isBold ? text : renderBold(text, "font-bold text-white")}
              </p>
            );
          })}
        </div>
      </div>
    </section>
  );
}
