import type { Metadata } from "next";
import { Fraunces } from "next/font/google";

import { EditorialHero } from "@/components/home/sections/variants/editorial/EditorialHero";
import { EditorialTrustedBy } from "@/components/home/sections/variants/editorial/EditorialTrustedBy";
import { EditorialDiagnosis } from "@/components/home/sections/variants/editorial/EditorialDiagnosis";
import { EditorialSolution } from "@/components/home/sections/variants/editorial/EditorialSolution";
import { EditorialResults } from "@/components/home/sections/variants/editorial/EditorialResults";
import { EditorialProgram } from "@/components/home/sections/variants/editorial/EditorialProgram";
import { EditorialAbout } from "@/components/home/sections/variants/editorial/EditorialAbout";
import { EditorialObjections } from "@/components/home/sections/variants/editorial/EditorialObjections";
import { EditorialFinalCta } from "@/components/home/sections/variants/editorial/EditorialFinalCta";
import { EditorialBriefing } from "@/components/home/sections/variants/editorial/EditorialBriefing";

// TEMPORARY design-exploration route — "Premium Editorial" direction.
// Not linked, not indexed. Removed once a direction is chosen.
export const metadata: Metadata = {
  title: "Design Lab — Editorial",
  robots: { index: false, follow: false },
};

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  weight: ["400", "500", "600"],
});

export default function EditorialHomepage() {
  return (
    <div className={fraunces.variable}>
      <EditorialHero />
      <EditorialTrustedBy />
      <EditorialDiagnosis />
      <EditorialSolution />
      <EditorialResults />
      <EditorialProgram />
      <EditorialAbout />
      <EditorialObjections />
      <EditorialFinalCta />
      <EditorialBriefing />
    </div>
  );
}
