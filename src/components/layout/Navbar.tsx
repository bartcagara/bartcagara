"use client";

import { memo, useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { CTAButton } from "@/components/ui/CTAButton";
import { lockBodyScroll, unlockBodyScroll } from "@/lib/scroll-lock";

export const Navbar = memo(() => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  // Close menu on ESC key
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape" && isMenuOpen) {
      setIsMenuOpen(false);
      menuButtonRef.current?.focus();
    }
  }, [isMenuOpen]);

  // Close menu on route change. Adjusting state during render (instead of in
  // an effect) avoids the extra committed frame with the stale menu open.
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setIsMenuOpen(false);
  }

  // While the menu is open: listen for ESC and hold the body scroll lock
  useEffect(() => {
    if (!isMenuOpen) return;
    document.addEventListener("keydown", handleKeyDown);
    lockBodyScroll();

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      unlockBodyScroll();
    };
  }, [isMenuOpen, handleKeyDown]);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-gray-50 border-b-2 border-bleu-nuit z-50" aria-label="Primary">
      <div className="max-w-7xl mx-auto px-4 md:px-6 h-[72px] md:h-[88px] flex justify-between items-center relative">

        {/* MOBILE HAMBURGER - Left */}
        <div className="md:hidden z-50">
          <button
            ref={menuButtonRef}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 -ml-2 text-bleu-nuit hover:opacity-70 transition-opacity"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMenuOpen ? <X size={32} strokeWidth={2.5} /> : <Menu size={32} strokeWidth={2.5} />}
          </button>
        </div>

        {/* LOGO - Center on Mobile, Left on Desktop */}
        <div className="absolute left-1/2 -translate-x-1/2 md:translate-x-0 md:static md:left-auto flex items-center h-full z-20">
          <Link href="/" onClick={() => { setIsMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="block relative hover:opacity-70 transition-opacity">
            <span className="font-black text-4xl md:text-5xl tracking-tighter text-bleu-nuit leading-none">
              BC
            </span>
          </Link>
        </div>

        {/* DESKTOP LINKS - Center */}
        <div className="hidden md:flex gap-10 absolute left-1/2 -translate-x-1/2">
          <Link href="/#results" className="text-bleu-nuit font-black uppercase text-sm tracking-tighter hover:text-bleu-accent transition-colors duration-200">Client Wins</Link>
          <Link href="/#program" className="text-bleu-nuit font-black uppercase text-sm tracking-tighter hover:text-bleu-accent transition-colors duration-200">Coaching</Link>
          <Link href="/#about" className="text-bleu-nuit font-black uppercase text-sm tracking-tighter hover:text-bleu-accent transition-colors duration-200">About Me</Link>
          <Link href="/briefing-optin" className="text-bleu-nuit font-black uppercase text-sm tracking-tighter hover:text-bleu-accent transition-colors duration-200">The Briefing</Link>
        </div>

        {/* DESKTOP CTA - Right */}
        <div className="hidden md:block">
          <CTAButton cal size="sm">Book My Call</CTAButton>
        </div>
      </div>

      {/* MOBILE MENU OVERLAY */}
      {isMenuOpen && (
        <div
          ref={menuRef}
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
          className="fixed inset-0 top-[72px] bg-gray-50 z-40 md:hidden flex flex-col overflow-y-auto p-6 animate-in slide-in-from-top-5 duration-200 border-t-2 border-bleu-nuit"
        >
          {/* my-auto centers when there's room but keeps the top reachable
              (unlike justify-center) when a short landscape viewport makes
              the list taller than the overlay. */}
          <ul className="flex flex-col gap-8 text-center list-none my-auto py-4" aria-label="Mobile navigation">
            <li>
              <Link
                href="/#results"
                onClick={() => setIsMenuOpen(false)}
                className="text-bleu-nuit font-black uppercase text-3xl tracking-tight"
              >
                Client Wins
              </Link>
            </li>
            <li>
              <Link
                href="/#program"
                onClick={() => setIsMenuOpen(false)}
                className="text-bleu-nuit font-black uppercase text-3xl tracking-tight"
              >
                Coaching
              </Link>
            </li>
            <li>
              <Link
                href="/#about"
                onClick={() => setIsMenuOpen(false)}
                className="text-bleu-nuit font-black uppercase text-3xl tracking-tight"
              >
                About Me
              </Link>
            </li>
            <li>
              <Link
                href="/briefing-optin"
                onClick={() => setIsMenuOpen(false)}
                className="text-bleu-nuit font-black uppercase text-3xl tracking-tight"
              >
                The Briefing
              </Link>
            </li>
            <li className="mt-8">
              <CTAButton cal onClick={() => setIsMenuOpen(false)} className="w-full justify-center">
                Book My Call
              </CTAButton>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
});

Navbar.displayName = "Navbar";
