import { render, screen } from '@testing-library/react';
import { LoadingSkeleton, SectionSkeleton } from '@/components/ui/LoadingSkeleton';

describe('LoadingSkeleton', () => {
  it('renders with default section variant', () => {
    render(<LoadingSkeleton />);

    const skeleton = screen.getByRole('status');
    expect(skeleton).toBeInTheDocument();
    expect(skeleton).toHaveAttribute('aria-label', 'Loading...');
  });

  it('renders with card variant', () => {
    render(<LoadingSkeleton variant="card" />);

    const skeleton = screen.getByRole('status');
    expect(skeleton).toHaveClass('min-h-[300px]', 'rounded-lg');
  });

  it('renders with text variant', () => {
    render(<LoadingSkeleton variant="text" />);

    const skeleton = screen.getByRole('status');
    expect(skeleton).toHaveClass('h-4', 'rounded');
  });

  it('renders with image variant', () => {
    render(<LoadingSkeleton variant="image" />);

    const skeleton = screen.getByRole('status');
    expect(skeleton).toHaveClass('aspect-video', 'rounded-lg');
  });

  it('applies custom className', () => {
    render(<LoadingSkeleton className="custom-class" />);

    const skeleton = screen.getByRole('status');
    expect(skeleton).toHaveClass('custom-class');
  });

  it('has accessible sr-only text', () => {
    render(<LoadingSkeleton />);

    expect(screen.getByText('Loading...')).toHaveClass('sr-only');
  });
});

describe('SectionSkeleton', () => {
  it('renders with default props', () => {
    render(<SectionSkeleton />);

    const skeleton = screen.getByRole('status');
    expect(skeleton).toBeInTheDocument();
    expect(skeleton).toHaveAttribute('aria-label', 'Loading section...');
  });

  it('renders with custom minHeight', () => {
    render(<SectionSkeleton minHeight="400px" />);

    const skeleton = screen.getByRole('status');
    expect(skeleton).toHaveStyle({ minHeight: '400px' });
  });

  it('renders with custom bgColor', () => {
    render(<SectionSkeleton bgColor="bg-gray-100" />);

    const skeleton = screen.getByRole('status');
    expect(skeleton).toHaveClass('bg-gray-100');
  });

  it('renders skeleton placeholders for content', () => {
    render(<SectionSkeleton />);

    // Should have multiple skeleton placeholders (3 cards)
    const placeholders = document.querySelectorAll('.animate-pulse');
    expect(placeholders.length).toBeGreaterThan(0);
  });

  it('has accessible sr-only text', () => {
    render(<SectionSkeleton />);

    expect(screen.getByText('Loading...')).toHaveClass('sr-only');
  });
});
