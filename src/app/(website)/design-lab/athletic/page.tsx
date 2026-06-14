import type { Metadata } from "next";
import { HeroAthletic } from "@/components/home/sections/variants/athletic/HeroAthletic";
import { TrustedByAthletic } from "@/components/home/sections/variants/athletic/TrustedByAthletic";
import { DiagnosisAthletic } from "@/components/home/sections/variants/athletic/DiagnosisAthletic";
import { SolutionAthletic } from "@/components/home/sections/variants/athletic/SolutionAthletic";
import { ResultsAthletic } from "@/components/home/sections/variants/athletic/ResultsAthletic";
import { ProgramAthletic } from "@/components/home/sections/variants/athletic/ProgramAthletic";
import { AboutAthletic } from "@/components/home/sections/variants/athletic/AboutAthletic";
import { ObjectionsAthletic } from "@/components/home/sections/variants/athletic/ObjectionsAthletic";
import { FinalCTAAthletic } from "@/components/home/sections/variants/athletic/FinalCTAAthletic";
import { BriefingAthletic } from "@/components/home/sections/variants/athletic/BriefingAthletic";

/**
 * DESIGN-LAB — "Bold & Athletic" full homepage mockup.
 * TEMPORARY design-exploration route. Not linked, not indexed.
 */
export const metadata: Metadata = {
  title: "Design Lab — Bold & Athletic",
  robots: { index: false, follow: false },
};

export default function AthleticHomepage() {
  return (
    <main className="bg-bleu-nuit">
      <HeroAthletic />
      <TrustedByAthletic />
      <DiagnosisAthletic />
      <SolutionAthletic />
      <ResultsAthletic />
      <ProgramAthletic />
      <AboutAthletic />
      <ObjectionsAthletic />
      <FinalCTAAthletic />
      <BriefingAthletic />
    </main>
  );
}
