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

/** A client message screenshot and the name line under it. */
export interface MessageShotContent {
  readonly src: string;
  readonly width: number;
  readonly height: number;
  readonly alt: string;
  readonly caption: string;
  readonly note?: string;
}
