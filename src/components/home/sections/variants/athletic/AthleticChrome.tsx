const CAL = {
  "data-cal-link": "bartcagara/discovery-call",
  "data-cal-namespace": "discovery-call",
  "data-cal-config": '{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}',
} as const;

const LINKS = ["Client Wins", "Coaching", "About Me", "The Briefing"];

/** Themed top navigation — Bold & athletic (dark translucent, overlays imagery). */
export function AthleticNav() {
  return (
    <header className="sticky top-0 z-50 bg-bleu-nuit/70 backdrop-blur-md border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-6 h-[72px] flex items-center justify-between">
        <span className="text-2xl font-black tracking-tighter text-white">BC</span>
        <div className="hidden md:flex items-center gap-8">
          {LINKS.map((l) => (
            <span key={l} className="text-sm font-semibold uppercase tracking-tight text-white/70 hover:text-white transition-colors cursor-pointer">
              {l}
            </span>
          ))}
        </div>
        <button
          type="button"
          {...CAL}
          className="px-5 py-2.5 text-xs font-black uppercase tracking-tighter bg-bleu-accent text-white rounded-sm shadow-[0_10px_30px_-10px_rgba(69,109,139,0.85)] hover:bg-[#3a5d78] hover:-translate-y-0.5 transition-all"
        >
          Book My Call
        </button>
      </nav>
    </header>
  );
}

/** Themed footer — Bold & athletic. */
export function AthleticFooter() {
  return (
    <footer className="relative bg-bleu-nuit text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row md:items-end justify-between gap-10">
        <div>
          <span className="text-4xl font-black tracking-tighter">BC</span>
          <p className="mt-4 text-eyebrow text-white/60 max-w-xs">
            Become your kid&apos;s favorite athlete. 1:1 coaching for founders.
          </p>
        </div>
        <div className="flex flex-wrap gap-x-8 gap-y-3">
          {LINKS.map((l) => (
            <span key={l} className="text-sm font-semibold uppercase tracking-tight text-white/60">{l}</span>
          ))}
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="max-w-7xl mx-auto px-6 py-6 text-eyebrow text-white/40">© 2026 Bart Cagara. All rights reserved.</p>
      </div>
    </footer>
  );
}
