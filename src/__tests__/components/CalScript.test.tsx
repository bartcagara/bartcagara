import { render, fireEvent, act } from '@testing-library/react';
import { CalScript } from '@/components/home/CalScript';
import { CAL_POPUP_ATTRIBUTES } from '@/lib/cal';

const calScripts = () =>
  Array.from(document.head.querySelectorAll('script')).filter((s) => s.src.includes('cal.com'));

describe('CalScript', () => {
  it('requests nothing from Cal.com until a booking button is pressed, then boots it', () => {
    const { getByText } = render(
      <>
        <CalScript />
        <button {...CAL_POPUP_ATTRIBUTES}>Book</button>
        <button>Other</button>
      </>
    );

    expect(calScripts()).toHaveLength(0);
    expect(document.getElementById('cal-init-script')).toBeNull();

    fireEvent.click(getByText('Other'));
    expect(document.getElementById('cal-init-script')).toBeNull();

    act(() => {
      fireEvent.click(getByText('Book'));
    });
    expect(document.getElementById('cal-init-script')).not.toBeNull();
  });
});
