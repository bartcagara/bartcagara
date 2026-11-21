"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { lockBodyScroll, unlockBodyScroll } from "@/lib/scroll-lock";
import { CLIENT_INTERVIEWS } from "./assets";

type Interview = (typeof CLIENT_INTERVIEWS)[number];

/**
 * The wall of client interviews: every face visible at once, his name under
 * it. A tap plays that interview in a player over the page. Nothing reaches
 * YouTube until a tap (the faces are self-hosted).
 */
export function InterviewWall() {
  const [open, setOpen] = useState<Interview | null>(null);
  const close = useCallback(() => setOpen(null), []);

  return (
    <>
      <ul className="grid grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-7 md:gap-x-6 md:gap-y-8 list-none" aria-label="Client interviews">
        {CLIENT_INTERVIEWS.map((item) => (
          <li key={item.id}>
            <button
              type="button"
              onClick={() => setOpen(item)}
              className="group block w-full text-left cursor-pointer"
              aria-label={`Play the interview with ${item.name}`}
            >
              <span className="relative block aspect-square border-2 border-bleu-nuit shadow-brutal-md overflow-hidden bg-bleu-nuit transition-brutal group-hover:shadow-none group-hover:translate-x-0.5 group-hover:translate-y-0.5">
                <Image
                  src={`/images/client-interviews/faces/${item.id}.webp`}
                  alt=""
                  fill
                  loading="lazy"
                  sizes="(max-width: 768px) 50vw, 300px"
                  className="object-cover"
                />
                <span className="absolute right-2 bottom-2 flex items-center justify-center w-9 h-9 md:w-10 md:h-10 bg-bleu-nuit text-white" aria-hidden="true">
                  <svg viewBox="0 0 24 24" className="w-4 h-4 md:w-5 md:h-5 ml-0.5" fill="currentColor">
                    <polygon points="6 3 20 12 6 21 6 3" />
                  </svg>
                </span>
              </span>
              <span className="block mt-3 text-sm md:text-base font-bold uppercase tracking-[-0.02em] text-bleu-nuit leading-none">
                {item.name}
              </span>
            </button>
          </li>
        ))}
      </ul>
      {open && <InterviewPlayer interview={open} onClose={close} />}
    </>
  );
}

function InterviewPlayer({ interview, onClose }: { interview: Interview; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    lockBodyScroll();
    const opener = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      unlockBodyScroll();
      window.removeEventListener("keydown", onKey);
      opener?.focus();
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/85 p-3 sm:p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Interview with ${interview.name}`}
    >
      <div className="w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between mb-3">
          <span className="text-eyebrow text-white">{interview.name}</span>
          <button ref={closeRef} type="button" onClick={onClose} className="p-1 text-white hover:text-white/70 transition-colors" aria-label="Close">
            <X className="w-7 h-7 sm:w-8 sm:h-8" strokeWidth={2.5} />
          </button>
        </div>
        <div className="relative aspect-video bg-black border-2 border-gray-50">
          <iframe
            src={`https://www.youtube.com/embed/${interview.id}?autoplay=1&rel=0`}
            title={`Client interview: ${interview.name}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full border-0"
          />
        </div>
      </div>
    </div>
  );
}
