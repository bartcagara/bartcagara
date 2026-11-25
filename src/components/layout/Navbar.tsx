"use client";

import { memo, useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { CTAButton } from "@/components/ui/CTAButton";
import { lockBodyScroll, unlockBodyScroll } from "@/lib/scroll-lock";

/**
 * The site header: navy, the BC mark on the left.
 * Desktop (lg and up): the links in the middle and the one booking button on
 * the right, always visible. Below lg: BC on the left, a menu button on the
 * right that opens a full-screen navy menu.
 */
const LINKS = [
  { href: "/#program", label: "The Program" },
  { href: "/#proof", label: "Client Wins" },
  { href: "/#about", label: "Your Coach" },
  { href: "/quiz", label: "The 4 Restart Types" },
] as const;

export const Navbar = memo(() => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape" && isMenuOpen) {
      setIsMenuOpen(false);
      menuButtonRef.current?.focus();
    }
  }, [isMenuOpen]);

  // Close the menu on route change (adjusting state during render avoids a
  // stale frame with the menu open).
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setIsMenuOpen(false);
  }

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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bleu-nuit border-b border-white/10" aria-label="Primary">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-16 lg:h-20 flex items-center justify-between gap-8">
        <Link
          href="/"
          onClick={() => { setIsMenuOpen(false); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          className="font-black text-3xl lg:text-4xl tracking-tighter leading-none text-white hover:opacity-70 transition-opacity"
          aria-label="Home"
        >
          BC
        </Link>

        <div className="hidden lg:flex items-center gap-10">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-bold uppercase tracking-[-0.02em] text-white/75 hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:block">
          <CTAButton cal size="sm" variant="light">Book Restart Audit</CTAButton>
        </div>

        <button
          ref={menuButtonRef}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden p-2 -mr-2 text-white hover:opacity-70 transition-opacity"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
        >
          {isMenuOpen ? <X size={28} strokeWidth={2.5} /> : <Menu size={28} strokeWidth={2.5} />}
        </button>
      </div>

      {isMenuOpen && (
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
          className="fixed inset-0 top-16 z-40 lg:hidden flex flex-col overflow-y-auto bg-bleu-nuit border-t border-white/10 px-6 pt-10 pb-12"
        >
          <ul className="flex flex-col list-none" aria-label="Mobile navigation">
            {LINKS.map((link) => (
              <li key={link.href} className="border-b border-white/10">
                <Link
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-5 text-white font-black text-3xl tracking-[-0.03em]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-10">
            <CTAButton cal variant="light" onClick={() => setIsMenuOpen(false)}>
              Book Restart Audit
            </CTAButton>
          </div>
        </div>
      )}
    </nav>
  );
});

Navbar.displayName = "Navbar";
