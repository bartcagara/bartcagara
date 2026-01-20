"use client";

import { memo, useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export const Navbar = memo(() => {
  const pathname = usePathname();
  const isBookPage = pathname === "/book";
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

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Add/remove ESC key listener
  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener("keydown", handleKeyDown);
      // Prevent body scroll when menu is open
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isMenuOpen, handleKeyDown]);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white border-b-2 border-bleu-nuit z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6 h-[72px] md:h-[88px] flex justify-between items-center relative">

        {/* MOBILE HAMBURGER - Left */}
        {/* Hidden on desktop */}
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
            <div className="font-black text-4xl md:text-5xl tracking-tighter text-bleu-nuit leading-none">
              BC
            </div>
          </Link>
        </div>

        {/* DESKTOP LINKS - Center */}
        {/* Hidden on mobile */}
        {!isBookPage && (
          <div className="hidden md:flex gap-10 absolute left-1/2 -translate-x-1/2">
            <Link href="/#results" className="text-bleu-nuit font-black uppercase text-[15px] tracking-tighter hover:text-bleu-accent transition-colors duration-200">Client Wins</Link>
            <Link href="/#program" className="text-bleu-nuit font-black uppercase text-[15px] tracking-tighter hover:text-bleu-accent transition-colors duration-200">Coaching</Link>
            <Link href="/#about" className="text-bleu-nuit font-black uppercase text-[15px] tracking-tighter hover:text-bleu-accent transition-colors duration-200">About Me</Link>
            <Link href="/briefing-optin" className="text-bleu-nuit font-black uppercase text-[15px] tracking-tighter hover:text-bleu-accent transition-colors duration-200">The Briefing</Link>
          </div>
        )}

        {/* DESKTOP CTA - Right */}
        {/* Hidden on mobile */}
        <div className="hidden md:block">
          {isBookPage ? (
            <Link href="/" className="text-bleu-nuit font-bold uppercase hover:text-bleu-accent">← Back to Home</Link>
          ) : (
            <Link
              href="https://cal.com/bartcagara/discovery-call"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-bleu-nuit text-white font-black uppercase text-xs md:text-sm px-4 py-3 md:px-6 md:py-3 border-2 border-bleu-nuit shadow-[3px_3px_0px_0px_var(--bleu-accent)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] tracking-tighter transition-all"
            >
              Book Call
            </Link>
          )}
        </div>
      </div>

      {/* MOBILE MENU OVERLAY */}
      {isMenuOpen && !isBookPage && (
        <div
          ref={menuRef}
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
          className="fixed inset-0 top-[72px] bg-white z-40 md:hidden flex flex-col justify-center p-6 animate-in slide-in-from-top-5 duration-200 border-t-2 border-bleu-nuit"
        >
          <nav className="flex flex-col gap-8 text-center -mt-20" aria-label="Mobile navigation">
            <Link
              href="/#results"
              onClick={() => setIsMenuOpen(false)}
              className="text-bleu-nuit font-black uppercase text-3xl tracking-tight focus:outline-none focus:ring-2 focus:ring-bleu-accent focus:ring-offset-2 rounded"
            >
              Client Wins
            </Link>
            <Link
              href="/#program"
              onClick={() => setIsMenuOpen(false)}
              className="text-bleu-nuit font-black uppercase text-3xl tracking-tight focus:outline-none focus:ring-2 focus:ring-bleu-accent focus:ring-offset-2 rounded"
            >
              Coaching
            </Link>
            <Link
              href="/#about"
              onClick={() => setIsMenuOpen(false)}
              className="text-bleu-nuit font-black uppercase text-3xl tracking-tight focus:outline-none focus:ring-2 focus:ring-bleu-accent focus:ring-offset-2 rounded"
            >
              About Me
            </Link>
            <Link
              href="/briefing-optin"
              onClick={() => setIsMenuOpen(false)}
              className="text-bleu-nuit font-black uppercase text-3xl tracking-tight focus:outline-none focus:ring-2 focus:ring-bleu-accent focus:ring-offset-2 rounded"
            >
              The Briefing
            </Link>

            <div className="mt-8">
              <Link
                href="https://cal.com/bartcagara/discovery-call"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-bleu-nuit text-white font-bold uppercase text-xl py-4 border-2 border-bleu-nuit shadow-[4px_4px_0px_0px_var(--bleu-accent)] focus:outline-none focus:ring-2 focus:ring-bleu-accent focus:ring-offset-2"
              >
                Book Call
              </Link>
            </div>
          </nav>
        </div>
      )}
    </nav>
  );
});

Navbar.displayName = "Navbar";