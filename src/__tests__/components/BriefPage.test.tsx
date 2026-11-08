import { render, screen, within } from '@testing-library/react';
import BriefPage from '@/app/(landing)/brief/page';

describe('/brief', () => {
  it('links the privacy notice from a quiet footer at the foot of the page, not from the signup', () => {
    render(<BriefPage />);
    const legal = screen.getByRole('navigation', { name: 'Legal' });
    expect(legal.closest('footer')).not.toBeNull();
    expect(within(legal).getByRole('link', { name: 'Privacy' })).toHaveAttribute('href', '/privacy');
    expect(within(legal).getByRole('link', { name: 'Terms' })).toHaveAttribute('href', '/terms');
    expect(screen.getAllByRole('link', { name: /privacy/i })).toHaveLength(1);
  });
});
