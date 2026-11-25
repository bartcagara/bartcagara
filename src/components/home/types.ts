/**
 * Homepage Component Types
 * Type definitions for homepage components
 */

export interface ScrollSectionProps {
  title: string;
  children: React.ReactNode;
}

/**
 * Program/System Phase
 */
export interface ProgramPhase {
  readonly number: string;
  readonly title: string;
  readonly weeks: string;
  readonly focus: string;
  readonly items: readonly string[];
  readonly win: string;
}

/**
 * Component Props
 */
export interface SectionBadgeProps {
  children: React.ReactNode;
  variant?: 'dark' | 'light';
}

export interface CTAButtonProps {
  /** Link target. Ignored when `cal` is set (the popup handles the click). */
  href?: string;
  children: React.ReactNode;
  variant?: 'dark' | 'light';
  /** 'md' is the hero/section scale; 'sm' fits chrome like the navbar. */
  size?: 'md' | 'sm';
  icon?: boolean;
  className?: string;
  /**
   * When true, render as a button that opens the Cal.com booking popup on
   * click (via data-cal-* attributes) instead of a link.
   */
  cal?: boolean;
  /** Extra click handler (e.g. closing the mobile menu). */
  onClick?: () => void;
}

export interface HeroSectionProps {
  content: {
    headline: string;
    highlightedText: string;
    subheadline: string;
    ctaText: string;
    proof: { caption: string; image: string; alt: string };
    logosLabel: string;
  };
}

export interface ObjectionItem {
  readonly question: string;
  readonly answer: string;
}

export interface SceneSectionProps {
  content: {
    label: string;
    title: string;
    moments: string;
    paragraphs: readonly string[];
    closing: string;
    message: { caption: string; image: string; alt: string };
  };
}

export interface FollowUpPhotosSectionProps {
  content: {
    label: string;
    title: string;
    intro: string;
    photos: readonly { src: string; alt: string }[];
  };
}

export interface WhyItNeverHeldSectionProps {
  content: {
    label: string;
    title: string;
    allIn: string;
    message: { caption: string; image: string; alt: string };
    trip: string;
    closing: string;
  };
}

export interface TheProgramSectionProps {
  content: {
    label: string;
    title: string;
    intro: string;
    phases: readonly { number: string; weeks: string; name: string; text: string; win: string }[];
    weekly: { label: string; items: readonly { title: string; text: string }[] };
    message: { caption: string; image: string; width: number; height: number; crop: number; alt: string };
  };
}

export interface ProofSectionProps {
  content: {
    label: string;
    title: string;
    intro: string;
    captions: { videos: string; photos: string; messages: string; linkedin: string };
    photos: readonly { src: string; alt: string }[];
    messages: readonly { image: string; width: number; height: number; alt: string }[];
  };
}

export interface QuestionsSectionProps {
  content: {
    label: string;
    title: string;
    items: readonly { question: string; answer: string }[];
  };
}

export interface QuizInviteSectionProps {
  content: {
    label: string;
    title: string;
    intro: string;
    after: string;
    types: readonly string[];
    button: string;
    href: string;
  };
}

export interface CoachSectionProps {
  content: {
    label: string;
    title: string;
    imageSrc: string;
    imageAlt: string;
    paragraphs: readonly string[];
    transformationImage: string;
    credentials: readonly string[];
  };
}

export interface RealReasonSectionProps {
  content: {
    label: string;
    title: string;
    question: string;
    reasons: readonly { caption: string; image: string; width: number; height: number; crop?: number; alt: string }[];
    closing: string;
  };
}

export interface RealLifeSectionProps {
  content: {
    label: string;
    title: string;
    road: string;
    adjust: string;
    payoff: string;
    closing: string;
    messages: readonly { caption: string; image: string; width: number; height: number; alt: string }[];
  };
}

export interface ProgramDelivery {
  readonly heading: string;
  readonly items: readonly string[];
}

export interface ProgramSectionProps {
  title: string;
  subtitle: string;
  phases: readonly ProgramPhase[];
  delivery: ProgramDelivery;
}

export interface AboutSectionProps {
  title: string;
  subtitle: string;
  imageSrc: string;
  imageAlt: string;
  subhead: string;
  paragraphs: readonly string[];
  transformationImage?: string;
  credentials: readonly string[];
}

export interface FinalCTASectionProps {
  content: {
    label: string;
    title: string;
    lead: string;
    text: string;
  };
}
