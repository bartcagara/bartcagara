import { HOMEPAGE_CONTENT } from "@/data/homepage-content";
import { Eyebrow, Glow, renderBold } from "./_shared";

/** The Solution — the aspirational future state, mirrored layout vs Diagnosis. */
export function SleekSolution() {
  const { solution } = HOMEPAGE_CONTENT;
  return (
    <section
      className="relative overflow-hidden bg-bleu-marine py-24 md:py-32"
      aria-labelledby="sleek-solution-title"
    >
      <Glow className="-right-32 top-1/4 h-[480px] w-[480px] bg-bleu-accent opacity-20" />

      <div className="relative mx-auto max-w-4xl px-6">
        <div className="mb-14 text-center">
          <Eyebrow label="The Solution" />
          <h2
            id="sleek-solution-title"
            className="mt-7 text-h2 text-white"
          >
            <span className="bg-gradient-to-r from-white via-bleu-fumee to-bleu-accent bg-clip-text text-transparent">
              {solution.title}
            </span>
          </h2>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-8 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.8)] backdrop-blur-md md:p-12">
          <div className="space-y-6">
            {solution.items.map((item, index) => {
              const isBold = item.startsWith("**") && item.endsWith("**");
              if (isBold) {
                return (
                  <p
                    key={index}
                    className="text-lead-lg font-bold leading-snug text-white"
                  >
                    {item.slice(2, -2)}
                  </p>
                );
              }
              return (
                <p
                  key={index}
                  className="text-lead font-medium leading-relaxed text-white/60"
                >
                  {renderBold(item, "font-bold text-white")}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
