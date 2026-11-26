import Link from "next/link";
import { memo } from "react";
import { Linkedin, Youtube } from "lucide-react";

export const Footer = memo(() => (
  <footer className="bg-white border-t-2 border-accent-primary pt-16 pb-8">
    <div className="max-w-7xl mx-auto px-6 lg:px-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12 lg:flex lg:justify-between lg:gap-16">
        {/* Column 1: Brand */}
        <div className="space-y-4">
          <Link href="/" className="block group">
            <p className="text-xl font-bold text-bleu-nuit group-hover:opacity-80 transition-opacity">Bart Cagara</p>
            <p className="text-bleu-nuit/70 text-sm group-hover:opacity-80 transition-opacity">Founder Athlete OS</p>
          </Link>
          <p className="text-bleu-nuit/70 text-xs">Helping founders get in shape one last time.</p>
          <p className="text-bleu-nuit/70 text-xs mt-4">
            &copy; {new Date().getFullYear()} Dad with Style OÜ
          </p>
        </div>

        {/* Column 2: the free things around the coaching (Bart, 25 Nov) */}
        <nav aria-label="More from Bart">
          <h2 className="text-base font-semibold text-bleu-nuit mb-4">More from Bart</h2>
          <ul className="space-y-2 text-sm text-bleu-nuit/70">
            <li><Link href="/brief" className="hover:text-bleu-accent transition-colors">Founder&apos;s Fitness Brief</Link></li>
            <li><Link href="/quiz" className="hover:text-bleu-accent transition-colors">The 4 Restart Types</Link></li>
            <li><a href="https://getstack.to/?utm_source=bartcagara&amp;utm_medium=website&amp;utm_campaign=stack_beta&amp;utm_content=footer" className="hover:text-bleu-accent transition-colors">Stack App</a></li>
          </ul>
        </nav>

        {/* Column 3: Legal */}
        <nav aria-label="Legal links">
          <h2 className="text-base font-semibold text-bleu-nuit mb-4">Legal</h2>
          <ul className="space-y-2 text-sm text-bleu-nuit/70">
            <li><Link href="/privacy" className="hover:text-bleu-accent transition-colors">Privacy Notice</Link></li>
            <li><Link href="/terms" className="hover:text-bleu-accent transition-colors">Terms of Service</Link></li>
            {/* Washington's My Health My Data Act: Stack's consumer health data policy lives on getstack.to. */}
            <li><a href="https://getstack.to/health-data.html" className="hover:text-bleu-accent transition-colors">Consumer Health Data Privacy Policy</a></li>
            <li><Link href="/disclaimer" className="hover:text-bleu-accent transition-colors">Disclaimer</Link></li>
          </ul>
        </nav>

        {/* Column 4: Connect */}
        <div>
          <h2 className="text-base font-semibold text-bleu-nuit mb-4">Connect</h2>
          <ul className="space-y-2 text-sm text-bleu-nuit/70 mb-6">
            <li>
              <Link
                href="/contact"
                className="hover:text-bleu-accent transition-colors"
              >
                Contact Us
              </Link>
            </li>
          </ul>
          <div className="flex space-x-4">
            <a
              href="https://www.linkedin.com/in/bartcagara/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-bleu-nuit/70 hover:text-[#0077b5] transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://www.youtube.com/@bartcagara"
              target="_blank"
              rel="noopener noreferrer"
              className="text-bleu-nuit/70 hover:text-[#FF0000] transition-colors"
              aria-label="YouTube"
            >
              <Youtube className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
));

Footer.displayName = "Footer";
