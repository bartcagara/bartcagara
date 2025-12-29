import { render, screen, fireEvent } from '@testing-library/react';
import { Navbar } from '@/components/layout/Navbar';

// Mock next/link
jest.mock('next/link', () => {
  return ({ children, href, onClick, ...props }: { children: React.ReactNode; href: string; onClick?: () => void; [key: string]: unknown }) => {
    return (
      <a href={href} onClick={onClick} {...props}>
        {children}
      </a>
    );
  };
});

describe('Navbar', () => {
  it('renders the logo', () => {
    render(<Navbar />);
    expect(screen.getByText('BC')).toBeInTheDocument();
  });

  it('renders desktop navigation links', () => {
    render(<Navbar />);
    expect(screen.getByText('Client Wins')).toBeInTheDocument();
    expect(screen.getByText('Coaching')).toBeInTheDocument();
    expect(screen.getByText('About Me')).toBeInTheDocument();
    expect(screen.getByText('The Briefing')).toBeInTheDocument();
  });

  it('renders the Book Call CTA button', () => {
    render(<Navbar />);
    // Get all Book Call buttons (desktop and mobile)
    const bookCallButtons = screen.getAllByText('Book Call');
    expect(bookCallButtons.length).toBeGreaterThan(0);
  });

  it('toggles mobile menu when hamburger is clicked', () => {
    render(<Navbar />);

    // Find the hamburger button
    const menuButton = screen.getByLabelText('Open navigation menu');
    expect(menuButton).toBeInTheDocument();

    // Click to open
    fireEvent.click(menuButton);

    // Menu should be open - button label changes
    expect(screen.getByLabelText('Close navigation menu')).toBeInTheDocument();

    // Mobile menu should have role="dialog"
    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });

  it('closes mobile menu on ESC key', () => {
    render(<Navbar />);

    // Open the menu
    const menuButton = screen.getByLabelText('Open navigation menu');
    fireEvent.click(menuButton);

    // Verify menu is open
    expect(screen.getByRole('dialog')).toBeInTheDocument();

    // Press ESC
    fireEvent.keyDown(document, { key: 'Escape' });

    // Menu should be closed
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('has proper aria attributes for accessibility', () => {
    render(<Navbar />);

    const menuButton = screen.getByLabelText('Open navigation menu');

    // Check aria-expanded
    expect(menuButton).toHaveAttribute('aria-expanded', 'false');

    // Open menu
    fireEvent.click(menuButton);

    // Check aria-expanded changed
    expect(screen.getByLabelText('Close navigation menu')).toHaveAttribute('aria-expanded', 'true');
  });
});
