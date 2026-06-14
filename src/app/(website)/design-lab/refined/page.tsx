import type { Metadata } from "next";
import { RefinedHero } from "@/components/home/sections/variants/refined/RefinedHero";
import { RefinedTrustedBy } from "@/components/home/sections/variants/refined/RefinedTrustedBy";
import { RefinedDiagnosis } from "@/components/home/sections/variants/refined/RefinedDiagnosis";
import { RefinedSolution } from "@/components/home/sections/variants/refined/RefinedSolution";
import { RefinedResults } from "@/components/home/sections/variants/refined/RefinedResults";
import { RefinedProgram } from "@/components/home/sections/variants/refined/RefinedProgram";
import { RefinedAbout } from "@/components/home/sections/variants/refined/RefinedAbout";
import { RefinedObjections } from "@/components/home/sections/variants/refined/RefinedObjections";
import { RefinedFinalCTA } from "@/components/home/sections/variants/refined/RefinedFinalCTA";
import { RefinedBriefing } from "@/components/home/sections/variants/refined/RefinedBriefing";

// TEMPORARY design-exploration route — "Refined Brutalist" direction.
// Not linked, not indexed.
export const metadata: Metadata = {
  title: "Design Lab · Refined Brutalist",
  robots: { index: false, follow: false },
};

export default function RefinedHomepage() {
  return (
    <main>
      <RefinedHero />
      <RefinedTrustedBy />
      <RefinedDiagnosis />
      <RefinedSolution />
      <RefinedResults />
      <RefinedProgram />
      <RefinedAbout />
      <RefinedObjections />
      <RefinedFinalCTA />
      <RefinedBriefing />
    </main>
  );
}
