import dynamic from "next/dynamic";
import { HeroSection } from "@/components/home/sections";
import { HOMEPAGE_CONTENT } from "@/data/homepage-content";
import { SectionSkeleton } from "@/components/ui/LoadingSkeleton";
import { ErrorBoundary } from "@/components/ui/ErrorBoundary";

// Lazy load heavy below-the-fold sections to improve initial page load
const TrustedBy = dynamic(() => import("@/components/home/TrustedBy").then(mod => ({ default: mod.TrustedBy })), {
  loading: () => <SectionSkeleton minHeight="100px" bgColor="bg-bleu-nuit" />
});

const DiagnosisSection = dynamic(() => import("@/components/home/sections").then(mod => ({ default: mod.DiagnosisSection })), {
  loading: () => <SectionSkeleton minHeight="600px" bgColor="bg-white" />
});

const SolutionSection = dynamic(() => import("@/components/home/sections").then(mod => ({ default: mod.SolutionSection })), {
  loading: () => <SectionSkeleton minHeight="600px" bgColor="bg-gray-50" />
});

const ResultsSection = dynamic(() => import("@/components/home/ResultsSection").then(mod => ({ default: mod.ResultsSection })), {
  loading: () => <SectionSkeleton minHeight="600px" bgColor="bg-white" />
});

const ProgramSection = dynamic(() => import("@/components/home/sections").then(mod => ({ default: mod.ProgramSection })), {
  loading: () => <SectionSkeleton minHeight="600px" bgColor="bg-white" />
});

const AboutSection = dynamic(() => import("@/components/home/sections").then(mod => ({ default: mod.AboutSection })), {
  loading: () => <SectionSkeleton minHeight="600px" bgColor="bg-gray-50" />
});

const FinalCTASection = dynamic(() => import("@/components/home/sections").then(mod => ({ default: mod.FinalCTASection })), {
  loading: () => <SectionSkeleton minHeight="400px" bgColor="bg-white" />
});

/**
 * Home Page
 * Main landing page for Executive Athlete OS
 * Optimized with component modularity, accessibility, and performance best practices
 */
export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-bleu-nuit font-sans selection:bg-bleu-accent selection:text-white">
        {/* 1. HERO SECTION */}
        <HeroSection content={HOMEPAGE_CONTENT.hero} />

        {/* TRUSTED BY */}
        <ErrorBoundary>
          <TrustedBy />
        </ErrorBoundary>

        {/* 2. THE DIAGNOSIS */}
        <ErrorBoundary>
          <DiagnosisSection
            title={HOMEPAGE_CONTENT.diagnosis.title}
            subtitle={HOMEPAGE_CONTENT.diagnosis.subtitle}
            pillars={HOMEPAGE_CONTENT.diagnosis.pillars}
            outcome={HOMEPAGE_CONTENT.diagnosis.outcome}
          />
        </ErrorBoundary>

        {/* 3. THE SOLUTION */}
        <ErrorBoundary>
          <SolutionSection
            title={HOMEPAGE_CONTENT.solution.title}
            subtitle={HOMEPAGE_CONTENT.solution.subtitle}
            pillars={HOMEPAGE_CONTENT.solution.pillars}
            outcome={HOMEPAGE_CONTENT.solution.outcome}
          />
        </ErrorBoundary>

        {/* 4. THE RESULTS */}
        <section className="border-b-2 border-bleu-nuit">
          <ErrorBoundary>
            <ResultsSection />
          </ErrorBoundary>
        </section>

        {/* 5. THE PROGRAM */}
        <ErrorBoundary>
          <ProgramSection
            title={HOMEPAGE_CONTENT.program.title}
            subtitle={HOMEPAGE_CONTENT.program.subtitle}
            phases={HOMEPAGE_CONTENT.program.phases}
          />
        </ErrorBoundary>

        {/* 6. ABOUT */}
        <ErrorBoundary>
          <AboutSection
            title={HOMEPAGE_CONTENT.about.title}
            subtitle={HOMEPAGE_CONTENT.about.subtitle}
            imageSrc={HOMEPAGE_CONTENT.about.imageSrc}
            imageAlt={HOMEPAGE_CONTENT.about.imageAlt}
            paragraphs={HOMEPAGE_CONTENT.about.paragraphs}
            credentials={HOMEPAGE_CONTENT.about.credentials}
          />
        </ErrorBoundary>

        {/* 7. FINAL CTA */}
        <ErrorBoundary>
          <FinalCTASection
            headline={HOMEPAGE_CONTENT.finalCta.headline}
            highlightedText={HOMEPAGE_CONTENT.finalCta.highlightedText}
            subheadline={HOMEPAGE_CONTENT.finalCta.subheadline}
            ctaText={HOMEPAGE_CONTENT.finalCta.ctaText}
            ctaLink={HOMEPAGE_CONTENT.finalCta.ctaLink}
          />
        </ErrorBoundary>
    </main>
  );
}
