import Link from "next/link";
import { CONTAINER, GUTTER } from "./ui";

/** /brief's quiet footer line, with the homepage's few extra links. */
export function HomeFooter() {
  return (
    <footer className={GUTTER}>
      <div className={`${CONTAINER} py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-6 border-t border-bleu-nuit/10 text-xs text-bleu-nuit/50`}>
        <span>&copy; {new Date().getFullYear()} Dad with Style OÜ</span>
        <nav aria-label="Legal" className="flex flex-wrap items-center gap-x-5 gap-y-2">
          <Link href="/contact" className="hover:text-bleu-nuit transition-colors">Contact</Link>
          <Link href="/privacy" className="hover:text-bleu-nuit transition-colors">Privacy</Link>
          <Link href="/terms" className="hover:text-bleu-nuit transition-colors">Terms</Link>
          <Link href="/disclaimer" className="hover:text-bleu-nuit transition-colors">Disclaimer</Link>
          {/* Washington's My Health My Data Act: Stack's consumer health data policy lives on getstack.to. */}
          <a href="https://getstack.to/health-data.html" className="hover:text-bleu-nuit transition-colors">Health Data</a>
        </nav>
      </div>
    </footer>
  );
}
