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
    socialProof: string;
    stats: readonly { value: string; label: string }[];
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
}
