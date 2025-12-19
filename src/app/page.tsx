import { TrustedBy } from "@/components/home/TrustedBy";
import { ResultsSection } from "@/components/home/ResultsSection";
import {
  HeroSection,
  DiagnosisSection,
  SolutionSection,
  ProgramSection,
  AboutSection,
  FinalCTASection,
} from "@/components/home/sections";
import { HOMEPAGE_CONTENT } from "@/data/homepage-content";

/**
 * Home Page
 * Main landing page for Executive Athlete OS
 * Optimized with component modularity, accessibility, and performance best practices
 */
export default function Home() {
  return (
    <>
      {/* Skip to main content - Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-6 focus:py-3 focus:bg-bleu-nuit focus:text-white focus:font-bold focus:uppercase focus:shadow-brutal-sm"
      >
        Skip to main content
      </a>

      <main
        id="main-content"
        className="min-h-screen bg-bleu-fumee text-bleu-nuit font-sans selection:bg-bleu-accent selection:text-white"
      >
        {/* 1. HERO SECTION */}
        <HeroSection content={HOMEPAGE_CONTENT.hero} />

        {/* TRUSTED BY */}
        <div className="border-b-2 border-bleu-nuit bg-bleu-fumee">
          <TrustedBy />
        </div>

        {/* 2. THE DIAGNOSIS */}
        <DiagnosisSection
          title={HOMEPAGE_CONTENT.diagnosis.title}
          subtitle={HOMEPAGE_CONTENT.diagnosis.subtitle}
          pillars={HOMEPAGE_CONTENT.diagnosis.pillars}
          outcome={HOMEPAGE_CONTENT.diagnosis.outcome}
        />

        {/* 3. THE SOLUTION */}
        <SolutionSection
          title={HOMEPAGE_CONTENT.solution.title}
          subtitle={HOMEPAGE_CONTENT.solution.subtitle}
          pillars={HOMEPAGE_CONTENT.solution.pillars}
          outcome={HOMEPAGE_CONTENT.solution.outcome}
        />

        {/* 4. THE RESULTS */}
        <section className="border-b-2 border-bleu-nuit">
          <ResultsSection />
        </section>

        {/* 5. THE PROGRAM */}
        <ProgramSection
          title={HOMEPAGE_CONTENT.program.title}
          subtitle={HOMEPAGE_CONTENT.program.subtitle}
          phases={HOMEPAGE_CONTENT.program.phases}
        />

        {/* 6. ABOUT */}
        <AboutSection
          title={HOMEPAGE_CONTENT.about.title}
          subtitle={HOMEPAGE_CONTENT.about.subtitle}
          imageSrc={HOMEPAGE_CONTENT.about.imageSrc}
          imageAlt={HOMEPAGE_CONTENT.about.imageAlt}
          paragraphs={HOMEPAGE_CONTENT.about.paragraphs}
          credentials={HOMEPAGE_CONTENT.about.credentials}
        />

        {/* 7. FINAL CTA */}
        <FinalCTASection
          headline={HOMEPAGE_CONTENT.finalCta.headline}
          highlightedText={HOMEPAGE_CONTENT.finalCta.highlightedText}
          subheadline={HOMEPAGE_CONTENT.finalCta.subheadline}
          ctaText={HOMEPAGE_CONTENT.finalCta.ctaText}
          ctaLink={HOMEPAGE_CONTENT.finalCta.ctaLink}
        />
      </main>
    </>
  );
}
