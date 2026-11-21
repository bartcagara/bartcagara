import { render, screen, fireEvent } from '@testing-library/react';
import type { PostHog } from 'posthog-js';
import { PostHogClientContext } from '@/lib/posthog-context';
import { HomeBookButton, BOOK_CLICK_EVENT } from '@/components/home/HomeBookButton';
import { BOOK_LABEL } from '@/data/homepage-content';

describe('HomeBookButton', () => {
  it('sends book_click with its location', () => {
    const capture = jest.fn();
    render(
      <PostHogClientContext.Provider value={{ capture } as unknown as PostHog}>
        <HomeBookButton location="offer">{BOOK_LABEL}</HomeBookButton>
      </PostHogClientContext.Provider>
    );
    fireEvent.click(screen.getByRole('button', { name: 'Book Restart Audit' }));
    expect(capture).toHaveBeenCalledWith(BOOK_CLICK_EVENT, { location: 'offer' });
    expect(BOOK_CLICK_EVENT).toBe('book_click');
  });

  it('still works before PostHog has loaded', () => {
    render(<HomeBookButton location="hero">{BOOK_LABEL}</HomeBookButton>);
    expect(() => fireEvent.click(screen.getByRole('button'))).not.toThrow();
  });
});
