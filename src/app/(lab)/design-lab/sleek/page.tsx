import type { Metadata } from "next";
import { SleekHero } from "@/components/home/sections/variants/sleek/SleekHero";
import { SleekTrustedBy } from "@/components/home/sections/variants/sleek/SleekTrustedBy";
import { SleekDiagnosis } from "@/components/home/sections/variants/sleek/SleekDiagnosis";
import { SleekSolution } from "@/components/home/sections/variants/sleek/SleekSolution";
import { SleekResults } from "@/components/home/sections/variants/sleek/SleekResults";
import { SleekProgram } from "@/components/home/sections/variants/sleek/SleekProgram";
import { SleekAbout } from "@/components/home/sections/variants/sleek/SleekAbout";
import { SleekObjections } from "@/components/home/sections/variants/sleek/SleekObjections";
import { SleekFinalCTA } from "@/components/home/sections/variants/sleek/SleekFinalCTA";
import { SleekBriefing } from "@/components/home/sections/variants/sleek/SleekBriefing";
import { SleekNav, SleekFooter } from "@/components/home/sections/variants/sleek/SleekChrome";

// TEMPORARY design-exploration route — "Modern & Sleek" full homepage mockup.
// Not linked, not indexed.
export const metadata: Metadata = {
  title: "Design Lab — Modern & Sleek",
  robots: { index: false, follow: false },
};

export default function SleekHomepage() {
  return (
    <>
      <SleekNav />
      <main className="bg-bleu-nuit">
        <SleekHero />
        <SleekTrustedBy />
        <SleekDiagnosis />
        <SleekSolution />
        <SleekResults />
        <SleekProgram />
        <SleekAbout />
        <SleekObjections />
        <SleekFinalCTA />
        <SleekBriefing />
      </main>
      <SleekFooter />
    </>
  );
}
