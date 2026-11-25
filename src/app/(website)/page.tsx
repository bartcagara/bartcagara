import dynamic from "next/dynamic";
import { HeroSection } from "@/components/home/sections";
import { HOMEPAGE_CONTENT } from "@/data/homepage-content";
import { SectionSkeleton } from "@/components/ui/LoadingSkeleton";
import { ErrorBoundary } from "@/components/ui/ErrorBoundary";

// Lazy load heavy below-the-fold sections to improve initial page load
const SceneSection = dynamic(() => import("@/components/home/sections").then(mod => ({ default: mod.SceneSection })), {
  loading: () => <SectionSkeleton bgColor="bg-gray-50" />
});

const FollowUpPhotosSection = dynamic(() => import("@/components/home/sections").then(mod => ({ default: mod.FollowUpPhotosSection })), {
  loading: () => <SectionSkeleton bgColor="bg-gray-50" />
});

const WhyItNeverHeldSection = dynamic(() => import("@/components/home/sections").then(mod => ({ default: mod.WhyItNeverHeldSection })), {
  loading: () => <SectionSkeleton bgColor="bg-bleu-nuit" />
});

const RealReasonSection = dynamic(() => import("@/components/home/sections").then(mod => ({ default: mod.RealReasonSection })), {
  loading: () => <SectionSkeleton bgColor="bg-gray-50" />
});

const ProofSection = dynamic(() => import("@/components/home/sections").then(mod => ({ default: mod.ProofSection })), {
  loading: () => <SectionSkeleton bgColor="bg-gray-50" />
});

const TheProgramSection = dynamic(() => import("@/components/home/sections").then(mod => ({ default: mod.TheProgramSection })), {
  loading: () => <SectionSkeleton bgColor="bg-bleu-nuit" />
});

const QuizInviteSection = dynamic(() => import("@/components/home/sections").then(mod => ({ default: mod.QuizInviteSection })), {
  loading: () => <SectionSkeleton bgColor="bg-gray-50" />
});

const CoachSection = dynamic(() => import("@/components/home/sections").then(mod => ({ default: mod.CoachSection })), {
  loading: () => <SectionSkeleton bgColor="bg-gray-50" />
});

const QuestionsSection = dynamic(() => import("@/components/home/sections").then(mod => ({ default: mod.QuestionsSection })), {
  loading: () => <SectionSkeleton bgColor="bg-gray-50" />
});

const FinalCTASection = dynamic(() => import("@/components/home/sections").then(mod => ({ default: mod.FinalCTASection })), {
  loading: () => <SectionSkeleton minHeight="min-h-[400px]" bgColor="bg-white" />
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

// FAQPage structured data sourced from the live "WHAT'S STOPPING YOU?" section
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
        {/* Schema.org JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
        {/* 1. HERO SECTION */}
        <HeroSection content={HOMEPAGE_CONTENT.hero} />

        {/* TRUSTED BY */}

        {/* 2. THE DIAGNOSIS */}
        <ErrorBoundary>
          <SceneSection content={HOMEPAGE_CONTENT.scene} />
        </ErrorBoundary>

        <ErrorBoundary>
          <FollowUpPhotosSection content={HOMEPAGE_CONTENT.followUp} />
        </ErrorBoundary>

        <ErrorBoundary>
          <WhyItNeverHeldSection content={HOMEPAGE_CONTENT.why} />
        </ErrorBoundary>

        <ErrorBoundary>
          <RealReasonSection content={HOMEPAGE_CONTENT.realReason} />
        </ErrorBoundary>

        <ErrorBoundary>
          <CoachSection content={{ ...HOMEPAGE_CONTENT.about, ...HOMEPAGE_CONTENT.coach }} />
        </ErrorBoundary>

        <ErrorBoundary>
          <TheProgramSection content={HOMEPAGE_CONTENT.theProgram} />
        </ErrorBoundary>

        {/* 4. THE RESULTS */}
        <ErrorBoundary>
          <ProofSection content={HOMEPAGE_CONTENT.proof} />
        </ErrorBoundary>

        {/* 7. OBJECTION PREEMPTION */}
        <ErrorBoundary>
          <QuestionsSection content={HOMEPAGE_CONTENT.questions} />
        </ErrorBoundary>

        {/* 8. FINAL CTA */}
        <ErrorBoundary>
          <FinalCTASection content={HOMEPAGE_CONTENT.finalCta} />
        </ErrorBoundary>

        {/* 9. THE QUIZ: the page ends on the soft option */}
        <ErrorBoundary>
          <QuizInviteSection content={HOMEPAGE_CONTENT.quizInvite} />
        </ErrorBoundary>
    </div>
  );
}
