import dynamic from "next/dynamic";
import { HeroSection } from "@/components/home/sections";
import { HomeHeader } from "@/components/home/HomeHeader";
import { HomeFooter } from "@/components/home/HomeFooter";
import { HOMEPAGE_CONTENT } from "@/data/homepage-content";
import { SectionSkeleton } from "@/components/ui/LoadingSkeleton";
import { ErrorBoundary } from "@/components/ui/ErrorBoundary";

// Lazy load heavy below-the-fold sections to improve initial page load
const DiagnosisSection = dynamic(() => import("@/components/home/sections").then(mod => ({ default: mod.DiagnosisSection })), {
  loading: () => <SectionSkeleton bgColor="bg-gray-50" />
});

const FirstProofSection = dynamic(() => import("@/components/home/sections").then(mod => ({ default: mod.FirstProofSection })), {
  loading: () => <SectionSkeleton bgColor="bg-gray-50" />
});

const GetsSection = dynamic(() => import("@/components/home/sections").then(mod => ({ default: mod.GetsSection })), {
  loading: () => <SectionSkeleton bgColor="bg-gray-50" />
});

const PatternSection = dynamic(() => import("@/components/home/sections").then(mod => ({ default: mod.PatternSection })), {
  loading: () => <SectionSkeleton bgColor="bg-gray-50" />
});

const ResultsSection = dynamic(() => import("@/components/home/ResultsSection").then(mod => ({ default: mod.ResultsSection })), {
  loading: () => <SectionSkeleton bgColor="bg-gray-50" />
});

const ProgramSection = dynamic(() => import("@/components/home/sections").then(mod => ({ default: mod.ProgramSection })), {
  loading: () => <SectionSkeleton bgColor="bg-gray-50" />
});

const AboutSection = dynamic(() => import("@/components/home/sections").then(mod => ({ default: mod.AboutSection })), {
  loading: () => <SectionSkeleton bgColor="bg-gray-50" />
});

const ObjectionsSection = dynamic(() => import("@/components/home/sections").then(mod => ({ default: mod.ObjectionsSection })), {
  loading: () => <SectionSkeleton bgColor="bg-gray-50" />
});

const FinalCTASection = dynamic(() => import("@/components/home/sections").then(mod => ({ default: mod.FinalCTASection })), {
  loading: () => <SectionSkeleton minHeight="min-h-[400px]" bgColor="bg-gray-50" />
});

const BriefingSection = dynamic(() => import("@/components/home/sections").then(mod => ({ default: mod.BriefingSection })), {
  loading: () => <SectionSkeleton minHeight="min-h-[300px]" bgColor="bg-gray-50" />
});

const businessJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Founder Athlete OS",
  "description": "Health and performance coaching for former-athlete founders",
  "url": "https://bartcagara.com",
  "image": "https://bartcagara.com/images/og-home.jpg",
  "sameAs": ["https://x.com/bartcagara"],
  "founder": {
    "@type": "Person",
    "name": "Bart Cagara",
    "jobTitle": "Health Coach",
    "url": "https://bartcagara.com"
  },
  "areaServed": "Worldwide",
  "priceRange": "$$$$"
};

// FAQPage structured data sourced from the questions section
// so the JSON-LD always matches the on-page copy verbatim
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": HOMEPAGE_CONTENT.objections.map((item) => ({
    "@type": "Question",
    "name": item.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": item.answer,
    },
  })),
};

/**
 * Home Page
 * Main landing page for Founder Athlete OS
 * Optimized with component modularity, accessibility, and performance best practices
 */
export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-bleu-nuit font-sans selection:bg-bleu-accent selection:text-white">
        <HomeHeader label={HOMEPAGE_CONTENT.headerLabel} />
        {/* Schema.org JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
        {/* 1. FIRST SCREEN: the promise and the button */}
        <HeroSection content={HOMEPAGE_CONTENT.hero} />

        {/* AT A CONFERENCE: Ben F., Bart and his son, the quiz door */}
        <ErrorBoundary>
          <FirstProofSection content={HOMEPAGE_CONTENT.firstProof} />
        </ErrorBoundary>

        {/* 2. THIS IS YOU */}
        <ErrorBoundary>
          <DiagnosisSection content={HOMEPAGE_CONTENT.diagnosis} />
        </ErrorBoundary>

        {/* 3. WHY IT KEPT ENDING */}
        <ErrorBoundary>
          <PatternSection content={HOMEPAGE_CONTENT.pattern} />
        </ErrorBoundary>

        {/* 4. WHAT HE GETS: on vacation, two bodies, at the doctor's */}
        <ErrorBoundary>
          <GetsSection content={HOMEPAGE_CONTENT.gets} />
        </ErrorBoundary>

        {/* 5. THE MEN */}
        <ErrorBoundary>
          <ResultsSection />
        </ErrorBoundary>

        {/* 6. THE OFFER */}
        <ErrorBoundary>
          <ProgramSection content={HOMEPAGE_CONTENT.program} />
        </ErrorBoundary>

        {/* 7. BART */}
        <ErrorBoundary>
          <AboutSection content={HOMEPAGE_CONTENT.about} />
        </ErrorBoundary>

        {/* 8. QUESTIONS */}
        <ErrorBoundary>
          <ObjectionsSection title={HOMEPAGE_CONTENT.objectionsTitle} objections={HOMEPAGE_CONTENT.objections} />
        </ErrorBoundary>

        {/* 9. THE CALL */}
        <ErrorBoundary>
          <FinalCTASection content={HOMEPAGE_CONTENT.finalCta} />
        </ErrorBoundary>

        {/* NOT BOOKING TODAY: THE BRIEF */}
        <ErrorBoundary>
          <BriefingSection
            heading={HOMEPAGE_CONTENT.briefing.heading}
            body={HOMEPAGE_CONTENT.briefing.body}
            submitLabel={HOMEPAGE_CONTENT.briefing.submitLabel}
          />
        </ErrorBoundary>

        <HomeFooter tagline={HOMEPAGE_CONTENT.briefing.tagline} />
    </div>
  );
}
