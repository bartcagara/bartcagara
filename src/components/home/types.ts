/**
 * Homepage Component Types
 * Type definitions for homepage components
 */

export interface ScrollSectionProps {
  title: string;
  children: React.ReactNode;
}

export interface NavbarProps {
  pathname?: string;
}

/**
 * Hero Section
 */
export interface HeroContent {
  headline: string;
  subheadline: string;
  ctaText: string;
  ctaLink: string;
}

/**
 * Program/System Phase
 */
export interface ProgramPhase {
  number: string;
  title: string;
  weeks: string;
  focus: string;
  items: string[];
  win: string;
}

/**
 * Diagnosis/Solution Item
 */
export interface DiagnosisSolutionItem {
  title: string;
  description: string;
}

/**
 * Pillar (Diet/Training)
 */
export interface Pillar {
  title: string;
  items: DiagnosisSolutionItem[];
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
}

export interface HeroSectionProps {
  content: {
    headline: string;
    highlightedText: string;
    subheadline: string;
    ctaText: string;
    ctaLink: string;
  };
}

export interface DiagnosisSectionProps {
  title: string;
  subtitle: string;
  pillars: {
    title: string;
    items: string[];
  }[];
  outcome: string;
}

export interface SolutionSectionProps {
  title: string;
  subtitle: string;
  pillars: {
    title: string;
    items: string[];
  }[];
  outcome: string;
}

export interface ProgramSectionProps {
  title: string;
  subtitle: string;
  phases: ProgramPhase[];
}

export interface AboutSectionProps {
  title: string;
  subtitle: string;
  imageSrc: string;
  imageAlt: string;
  paragraphs: string[];
  credentials: string[];
}

export interface FinalCTASectionProps {
  headline: string;
  highlightedText: string;
  subheadline: string;
  ctaText: string;
  ctaLink: string;
}
