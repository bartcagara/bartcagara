"use client";

import {
  Hero,
  TrustedBy,
  RealityCheck,
  TrapsSection,
  SolutionSection,
  ShiftSection,
  ResultsSection,
  SystemSection,
  FAQSection,
  FinalCTA,
} from "@/components/home";

/**
 * HomePageClient - Main landing page component
 * Clean orchestrator that assembles all modular sections
 * All content is data-driven from landing-page-content.ts
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
