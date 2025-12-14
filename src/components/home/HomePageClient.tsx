"use client";

import { Hero } from "./Hero";
import { TrustedBy } from "./TrustedBy";
import { RealityCheck } from "./RealityCheck";
import { TrapsSection } from "./TrapsSection";
import { SolutionSection } from "./SolutionSection";
import { ShiftSection } from "./ShiftSection";
import { ResultsSection } from "./ResultsSection";
import { SystemSection } from "./SystemSection";
import { FAQSection } from "./FAQSection";
import { FinalCTA } from "./FinalCTA";

/**
 * HomePageClient - Main landing page component
 * Clean orchestrator that assembles all modular sections
 * All content is data-driven from @/data/landing-page-content.ts
 */
export default function HomePageClient() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <RealityCheck />
      <TrapsSection />
      <SolutionSection />
      <ShiftSection />
      <ResultsSection />
      <SystemSection />
      <FAQSection />
      <FinalCTA />
    </>
  );
}
