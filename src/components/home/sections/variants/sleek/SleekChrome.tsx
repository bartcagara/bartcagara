const CAL = {
  "data-cal-link": "bartcagara/discovery-call",
  "data-cal-namespace": "discovery-call",
  "data-cal-config": '{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}',
} as const;

const LINKS = ["Client Wins", "Coaching", "About Me", "The Briefing"];

/** Themed top navigation — Modern & sleek (glass). */
export function SleekNav() {
  return (
    <header className="sticky top-0 z-50 bg-bleu-nuit/60 backdrop-blur-md border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-6 h-[72px] flex items-center justify-between">
        <span className="text-2xl font-black tracking-tighter bg-gradient-to-r from-white to-bleu-accent bg-clip-text text-transparent">BC</span>
        <div className="hidden md:flex items-center gap-8">
          {LINKS.map((l) => (
            <span key={l} className="text-sm font-medium text-white/60 hover:text-white transition-colors cursor-pointer">
              {l}
            </span>
          ))}
        </div>
        <button
          type="button"
          {...CAL}
          className="px-5 py-2.5 text-xs font-bold uppercase tracking-tight text-white rounded-xl bg-gradient-to-b from-bleu-accent to-[#34546e] ring-1 ring-white/10 shadow-[0_10px_30px_-10px_rgba(69,109,139,0.7)] hover:-translate-y-0.5 transition-all"
        >
          Book My Call
        </button>
      </nav>
    </header>
  );
}

/** Themed footer — Modern & sleek (glass + glow). */
export function SleekFooter() {
  return (
    <footer className="relative bg-bleu-nuit text-white overflow-hidden border-t border-white/10">
      <div aria-hidden className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-bleu-accent opacity-20 blur-[140px]" />
      <div className="relative max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row md:items-end justify-between gap-10">
        <div>
          <span className="text-4xl font-black tracking-tighter bg-gradient-to-r from-white to-bleu-accent bg-clip-text text-transparent">BC</span>
          <p className="mt-4 text-sm text-white/55 max-w-xs">
            Founder Athlete OS — the operating system for founders who are done restarting.
          </p>
        </div>
        <div className="flex flex-wrap gap-x-8 gap-y-3">
          {LINKS.map((l) => (
            <span key={l} className="text-sm font-medium text-white/55">{l}</span>
          ))}
        </div>
      </div>
      <div className="relative border-t border-white/10">
        <p className="max-w-7xl mx-auto px-6 py-6 text-xs text-white/40">© 2026 Bart Cagara. All rights reserved.</p>
      </div>
    </footer>
  );
}
