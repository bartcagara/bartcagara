import Link from "next/link";
import { memo } from "react";
import { Linkedin, Youtube } from "lucide-react";

export const Footer = memo(() => (
  <footer className="bg-white border-t-2 border-accent-primary pt-16 pb-8" role="contentinfo">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        {/* Column 1: Brand */}
        <div className="space-y-4">
          <Link href="/" className="block group">
            <h3 className="text-xl font-bold text-gray-900 group-hover:opacity-80 transition-opacity">Bart Cagara</h3>
            <p className="text-gray-600 text-sm group-hover:opacity-80 transition-opacity">Executive Athlete OS</p>
          </Link>
          <p className="text-gray-500 text-xs mt-4">
            &copy; {new Date().getFullYear()} Dad with Style OÜ
          </p>
        </div>

        {/* Column 2: Navigation */}
        <div>
          <h4 className="font-semibold text-gray-900 mb-4">Navigation</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><Link href="/#results" className="hover:text-blue-600 transition-colors">Client Wins</Link></li>
            <li><Link href="/#program" className="hover:text-blue-600 transition-colors">Coaching</Link></li>
            <li>
              <Link
                href="/briefing-optin"
                className="hover:text-blue-600 transition-colors"
              >
                Executive Athlete Briefing
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Legal */}
        <div>
          <h4 className="font-semibold text-gray-900 mb-4">Legal</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><Link href="/privacy" className="hover:text-blue-600 transition-colors">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-blue-600 transition-colors">Terms of Service</Link></li>
            <li><Link href="/disclaimer" className="hover:text-blue-600 transition-colors">Disclaimer</Link></li>
          </ul>
        </div>

        {/* Column 4: Connect */}
        <div>
          <h4 className="font-semibold text-gray-900 mb-4">Connect</h4>
          <ul className="space-y-2 text-sm text-gray-600 mb-6">
            <li>
              <Link
                href="/contact"
                className="hover:text-blue-600 transition-colors"
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
              className="text-gray-400 hover:text-[#0077b5] transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://www.youtube.com/@bartcagara"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#FF0000] transition-colors"
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