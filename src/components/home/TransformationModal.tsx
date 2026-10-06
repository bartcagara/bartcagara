"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { lockBodyScroll, unlockBodyScroll } from "@/lib/scroll-lock";

interface TransformationModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  imageAlt: string;
}

export function TransformationModal({ isOpen, onClose, imageSrc, imageAlt }: TransformationModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    lockBodyScroll();

    // Move focus into the dialog; restore it to the opener on close.
    const opener = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    closeButtonRef.current?.focus();

    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      // The close button is the dialog's only focusable element, so trapping
      // focus means keeping Tab from leaving it.
      if (e.key === "Tab") {
        e.preventDefault();
        closeButtonRef.current?.focus();
      }
    }
    window.addEventListener("keydown", handleKey);

    return () => {
      unlockBodyScroll();
      window.removeEventListener("keydown", handleKey);
      opener?.focus();
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-2 sm:p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Transformation photo"
    >
      <div
        className="relative flex flex-col items-end max-w-3xl w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          ref={closeButtonRef}
          onClick={onClose}
          className="mb-2 p-1 text-white hover:text-white/70 transition-colors"
          aria-label="Close"
        >
          <X className="w-7 h-7 sm:w-8 sm:h-8" strokeWidth={2.5} />
        </button>
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={1080}
          height={1080}
          className="w-full h-auto max-h-[calc(100dvh-4rem)] sm:max-h-[85dvh] object-contain rounded"
          priority
        />
      </div>
    </div>
  );
}
