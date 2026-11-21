import type { HOMEPAGE_CONTENT } from "@/data/homepage-content";

/**
 * Homepage Component Types
 * Type definitions for homepage components
 */

export interface ScrollSectionProps {
  title: string;
  children: React.ReactNode;
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

/** Section content comes straight from src/data/homepage-content.ts. */
export type HomepageContent = typeof HOMEPAGE_CONTENT;

export interface ObjectionItem {
  readonly question: string;
  readonly answer: string;
}

/** A client message screenshot. */
export interface ShotContent {
  readonly src: string;
  readonly width: number;
  readonly height: number;
  readonly alt: string;
}

/** The repeating device: place label, one client sentence, the screenshot, the name line. */
export interface MomentContent {
  readonly label: string;
  readonly quote: string;
  /** Words before the big sentence, set small (Ben F.'s "Ate poorly..."). */
  readonly lead?: string;
  readonly name?: string;
  readonly note?: string;
  readonly shots?: readonly ShotContent[];
  /** Screenshot above the sentence instead of under it. */
  readonly shotsFirst?: boolean;
}
