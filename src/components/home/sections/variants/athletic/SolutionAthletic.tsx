import { HOMEPAGE_CONTENT } from "@/data/homepage-content";
import { Eyebrow, renderBold } from "./_shared";

/**
 * Solution — "The Last Restart". The optimistic flip, on a brighter marine
 * band with an accent left-rule to signal momentum/forward motion.
 */
export function SolutionAthletic() {
  const { solution } = HOMEPAGE_CONTENT;
  return (
    <section
      className="bg-bleu-marine py-24 md:py-32"
      aria-labelledby="solution-title"
    >
      <div className="mx-auto max-w-7xl px-6">
        <Eyebrow label="The Solution" />
        <h2
          id="solution-title"
          className="mb-16 max-w-4xl text-h2 uppercase text-white"
        >
          {solution.title}
        </h2>

        <div className="max-w-3xl border-l-4 border-bleu-accent pl-6 md:pl-10">
          <div className="space-y-6">
            {solution.items.map((item, index) => {
              const isBold = item.startsWith("**") && item.endsWith("**");
              if (isBold) {
                return (
                  <p
                    key={index}
                    className="text-lead-lg font-black leading-tight text-white"
                  >
                    {item.slice(2, -2)}
                  </p>
                );
              }
              return (
                <p
                  key={index}
                  className="text-lead font-medium leading-relaxed text-white/75"
                >
                  {renderBold(item, "font-bold text-bleu-accent")}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
