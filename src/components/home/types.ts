export interface FAQItem {
  readonly q: string;
  readonly a: string;
}

export interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

export interface ScrollSectionProps {
  title: string;
  children: React.ReactNode;
}

export interface NavbarProps {
  pathname?: string;
}

export type FAQItems = readonly FAQItem[];
