import { render } from '@testing-library/react';
import { RESULTS, RESULT_TYPES } from '@/data/quiz';
import { Para, plainText, splitEmphasis } from '@/components/quiz/ResultParts';
import before from './quiz-copy-before.json';

/**
 * The result copy was approved word for word on 20 Nov 2026. The layout pass
 * only added **bold** marks, so with the marks taken out every line must read
 * exactly as approved (quiz-copy-before.json). When Bart changes a line,
 * change it in that file too.
 */
type Saved = { body: string[]; thisWeek: string[]; secondLine: string; headline: string; name: string };
const approved = before as Record<string, Saved>;

describe('result copy', () => {
  it.each(RESULT_TYPES)('result %s reads exactly as approved once the bold marks are out', (t) => {
    const r = RESULTS[t];
    const saved = approved[t];
    expect(r.body.map(plainText)).toEqual(saved.body);
    expect(r.thisWeek.map(plainText)).toEqual(saved.thisWeek);
    expect(r.secondLine).toBe(saved.secondLine);
    expect(r.headline).toBe(saved.headline);
    expect(r.name).toBe(saved.name);
  });

  it.each(RESULT_TYPES)('result %s bolds one or two lines in its body and in "This week"', (t) => {
    const count = (lines: string[]) => lines.flatMap(splitEmphasis).filter((p) => p.bold).length;
    expect(count(RESULTS[t].body)).toBeGreaterThanOrEqual(1);
    expect(count(RESULTS[t].body)).toBeLessThanOrEqual(2);
    expect(count(RESULTS[t].thisWeek)).toBeGreaterThanOrEqual(1);
    expect(count(RESULTS[t].thisWeek)).toBeLessThanOrEqual(2);
  });

  it('shows bold words without the stars', () => {
    const { container } = render(<Para text="Plain, **the key line**, plain." />);
    expect(container.textContent).toBe('Plain, the key line, plain.');
    expect(container.querySelector('strong')?.textContent).toBe('the key line');
  });

  it('never leaves a star on the page', () => {
    for (const t of RESULT_TYPES) {
      for (const line of [...RESULTS[t].body, ...RESULTS[t].thisWeek]) {
        const { container, unmount } = render(<Para text={line} />);
        expect(container.textContent).not.toContain('*');
        unmount();
      }
    }
  });
});
