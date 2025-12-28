import dynamic from "next/dynamic";
import { HeroSection } from "@/components/home/sections";
import { HOMEPAGE_CONTENT } from "@/data/homepage-content";

// Lazy load heavy below-the-fold sections to improve initial page load
// Disable SSR for sections not needed for initial render
const TrustedBy = dynamic(() => import("@/components/home/TrustedBy").then(mod => ({ default: mod.TrustedBy })), {
  loading: () => <div className="min-h-[100px] bg-gray-50" />,
  ssr: false
});

const DiagnosisSection = dynamic(() => import("@/components/home/sections").then(mod => ({ default: mod.DiagnosisSection })), {
  loading: () => <div className="min-h-[600px] bg-white" />,
  ssr: false
});

const SolutionSection = dynamic(() => import("@/components/home/sections").then(mod => ({ default: mod.SolutionSection })), {
  loading: () => <div className="min-h-[600px] bg-gray-50" />,
  ssr: false
});

const ResultsSection = dynamic(() => import("@/components/home/ResultsSection").then(mod => ({ default: mod.ResultsSection })), {
  loading: () => <div className="min-h-[600px] bg-white" />,
  ssr: false
});

const ProgramSection = dynamic(() => import("@/components/home/sections").then(mod => ({ default: mod.ProgramSection })), {
  loading: () => <div className="min-h-[600px] bg-white" />,
  ssr: false
});

const AboutSection = dynamic(() => import("@/components/home/sections").then(mod => ({ default: mod.AboutSection })), {
  loading: () => <div className="min-h-[600px] bg-gray-50" />,
  ssr: false
});

const FinalCTASection = dynamic(() => import("@/components/home/sections").then(mod => ({ default: mod.FinalCTASection })), {
  loading: () => <div className="min-h-[400px] bg-white" />,
  ssr: false
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
        <div className="border-b-2 border-bleu-nuit bg-gray-50">
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
  );
}
