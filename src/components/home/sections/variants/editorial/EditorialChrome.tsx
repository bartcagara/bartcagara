const CAL = {
  "data-cal-link": "bartcagara/discovery-call",
  "data-cal-namespace": "discovery-call",
  "data-cal-config": '{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}',
} as const;

const serif = { fontFamily: "var(--font-fraunces), Georgia, serif" } as const;
const LINKS = ["Client Wins", "Coaching", "About Me", "The Briefing"];

/** Themed top navigation — Premium editorial (light, serif wordmark, minimal). */
export function EditorialNav() {
  return (
    <header className="sticky top-0 z-50 bg-bleu-fumee/85 backdrop-blur border-b border-bleu-nuit/10">
      <nav className="max-w-7xl mx-auto px-6 h-[72px] flex items-center justify-between">
        <span style={serif} className="text-2xl text-bleu-nuit">Bart Cagara</span>
        <div className="hidden md:flex items-center gap-9">
          {LINKS.map((l) => (
            <span key={l} className="text-xs font-semibold uppercase tracking-[0.2em] text-bleu-charron hover:text-bleu-nuit transition-colors cursor-pointer">
              {l}
            </span>
          ))}
        </div>
        <button
          type="button"
          {...CAL}
          className="px-6 py-2.5 text-xs font-bold uppercase tracking-[0.14em] bg-bleu-nuit text-white rounded-full hover:bg-bleu-charron transition-colors"
        >
          Book a Call
        </button>
      </nav>
    </header>
  );
}

/** Themed footer — Premium editorial (dark close, serif). */
export function EditorialFooter() {
  return (
    <footer className="bg-bleu-nuit text-white">
      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-end">
        <div>
          <span style={serif} className="text-4xl">Bart Cagara</span>
          <p className="mt-5 font-sans text-sm leading-relaxed text-white/60 max-w-sm">
            Quietly rebuilding founders into the men their families look up to. By referral
            and application only.
          </p>
        </div>
        <div className="flex flex-wrap md:justify-end gap-x-10 gap-y-3">
          {LINKS.map((l) => (
            <span key={l} className="font-sans text-xs uppercase tracking-[0.2em] text-white/60">{l}</span>
          ))}
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="max-w-7xl mx-auto px-6 py-6 font-sans text-xs tracking-wide text-white/40">© 2026 Bart Cagara. All rights reserved.</p>
      </div>
    </footer>
  );
}
