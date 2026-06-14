import { HOMEPAGE_CONTENT } from "@/data/homepage-content";
import { Kicker, renderBold } from "./_shared";

/** Diagnosis — narrative pain copy on a light surface. */
export function RefinedDiagnosis() {
  const { diagnosis } = HOMEPAGE_CONTENT;
  return (
    <section
      className="border-b-2 border-bleu-nuit bg-white py-24 md:py-32"
      aria-labelledby="diagnosis-title"
    >
      <div className="mx-auto max-w-7xl px-6">
        <Kicker label="THE DIAGNOSIS" tone="light" />
        <h2
          id="diagnosis-title"
          className="mb-16 max-w-4xl text-h2 font-black uppercase tracking-tighter text-bleu-nuit"
        >
          {diagnosis.title}
        </h2>

        <div className="max-w-3xl space-y-6">
          {diagnosis.items.map((item, index) => {
            const isBold = item.startsWith("**") && item.endsWith("**");
            const text = isBold ? item.slice(2, -2) : item;
            return (
              <p
                key={index}
                className={
                  isBold
                    ? "text-lead-lg font-black leading-tight text-bleu-nuit"
                    : "text-lead font-medium leading-relaxed text-bleu-nuit/80"
                }
              >
                {isBold
                  ? text
                  : renderBold(text, "font-bold text-bleu-nuit")}
              </p>
            );
          })}
        </div>
      </div>
    </section>
  );
}
