import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { OptinForm } from '@/components/newsletter/OptinForm';

describe('OptinForm', () => {
  beforeEach(() => {
    global.fetch = jest.fn().mockResolvedValue({ ok: true }) as unknown as typeof fetch;
  });

  it('loads no script from Kit and keeps legal links out of the signup (they sit in the page footer)', () => {
    const { container } = render(<OptinForm />);
    expect(container.querySelector('script')).toBeNull();
    expect(document.querySelector('script[src*="kit.com"]')).toBeNull();
    expect(screen.queryByRole('link', { name: /privacy/i })).toBeNull();
  });

  it("posts straight to Kit's form endpoint and shows the confirm-your-email message", async () => {
    render(<OptinForm />);
    fireEvent.change(screen.getByLabelText('Email Address'), { target: { value: 'a@example.com' } });
    fireEvent.click(screen.getByRole('button'));

    await waitFor(() => expect(screen.getByText('Check your email to confirm your subscription.')).toBeInTheDocument());

    const [url, init] = (global.fetch as jest.Mock).mock.calls[0];
    expect(url).toBe('https://app.kit.com/forms/10022301/subscriptions');
    expect(init.method).toBe('POST');
    expect((init.body as FormData).get('email_address')).toBe('a@example.com');
  });
});
