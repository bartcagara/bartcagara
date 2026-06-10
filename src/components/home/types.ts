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
  href: string;
  children: React.ReactNode;
  variant?: 'dark' | 'light';
  icon?: boolean;
  className?: string;
  /**
   * When true, render as a button that opens the Cal.com "discovery-call"
   * popup on click (via data-cal-* attributes) instead of a link.
   */
  cal?: boolean;
}

export interface HeroSectionProps {
  content: {
    headline: string;
    highlightedText: string;
    subheadline: string;
    ctaText: string;
    ctaLink: string;
    socialProof: string;
  };
}

export interface ObjectionItem {
  readonly question: string;
  readonly answer: string;
}

export interface DiagnosisSectionProps {
  title: string;
  subtitle: string;
  items: readonly string[];
}

export interface SolutionSectionProps {
  title: string;
  subtitle: string;
  items: readonly string[];
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
  headline: string;
  highlightedText: string;
  body: readonly string[];
  ctaText: string;
  ctaLink: string;
}
