import { HOMEPAGE_CONTENT } from "@/data/homepage-content";
import { Eyebrow, renderBold } from "./_shared";

/**
 * Diagnosis — narrative pain copy on the cinematic navy base.
 * **bold** lines render large and emphatic; the rest are muted body.
 */
export function DiagnosisAthletic() {
  const { diagnosis } = HOMEPAGE_CONTENT;
  return (
    <section
      className="bg-bleu-nuit py-24 md:py-32"
      aria-labelledby="diagnosis-title"
    >
      <div className="mx-auto max-w-7xl px-6">
        <Eyebrow label="The Diagnosis" />
        <h2
          id="diagnosis-title"
          className="mb-16 max-w-4xl text-h2 uppercase text-white"
        >
          {diagnosis.title}
        </h2>

        <div className="max-w-3xl space-y-6">
          {diagnosis.items.map((item, index) => {
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
                className="text-lead font-medium leading-relaxed text-white/70"
              >
                {renderBold(item, "font-bold text-white")}
              </p>
            );
          })}
        </div>
      </div>
    </section>
  );
}
