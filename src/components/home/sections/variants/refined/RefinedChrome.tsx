const CAL = {
  "data-cal-link": "bartcagara/discovery-call",
  "data-cal-namespace": "discovery-call",
  "data-cal-config": '{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}',
} as const;

const LINKS = ["Client Wins", "Coaching", "About Me", "The Briefing"];

/** Themed top navigation — Refined brutalist. */
export function RefinedNav() {
  return (
    <header className="sticky top-0 z-50 bg-bleu-nuit border-b-2 border-white/10">
      <nav className="max-w-7xl mx-auto px-6 h-[72px] flex items-center justify-between">
        <span className="text-2xl font-black tracking-tighter text-white">BC</span>
        <div className="hidden md:flex items-center gap-8">
          {LINKS.map((l) => (
            <span key={l} className="text-sm font-bold uppercase tracking-tight text-white/60 hover:text-white transition-colors cursor-pointer">
              {l}
            </span>
          ))}
        </div>
        <button
          type="button"
          {...CAL}
          className="px-5 py-2.5 text-xs font-black uppercase tracking-tighter bg-bleu-fumee text-bleu-nuit border-2 border-bleu-fumee shadow-[4px_4px_0_0_var(--bleu-accent)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all"
        >
          Book My Call
        </button>
      </nav>
    </header>
  );
}

/** Themed footer — Refined brutalist. */
export function RefinedFooter() {
  return (
    <footer className="bg-bleu-nuit border-t-2 border-white/10 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row md:items-end justify-between gap-10">
        <div>
          <span className="text-4xl font-black tracking-tighter">BC</span>
          <p className="mt-4 text-eyebrow text-white/50 max-w-xs">
            Founder Athlete OS — 1:1 coaching for founders who refuse to restart again.
          </p>
        </div>
        <div className="flex flex-wrap gap-x-8 gap-y-3">
          {LINKS.map((l) => (
            <span key={l} className="text-sm font-bold uppercase tracking-tight text-white/60">{l}</span>
          ))}
        </div>
      </div>
      <div className="border-t-2 border-white/10">
        <p className="max-w-7xl mx-auto px-6 py-6 text-eyebrow text-white/40">© 2026 Bart Cagara. All rights reserved.</p>
      </div>
    </footer>
  );
}
