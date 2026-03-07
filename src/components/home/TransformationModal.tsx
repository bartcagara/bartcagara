"use client";

import { useEffect } from "react";
import Image from "next/image";
import { X } from "lucide-react";

interface TransformationModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  imageAlt: string;
}

export function TransformationModal({ isOpen, onClose, imageSrc, imageAlt }: TransformationModalProps) {
  useEffect(() => {
    if (!isOpen) return;

    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", handleKey);

    return () => {
      document.body.style.overflow = original;
      window.removeEventListener("keydown", handleKey);
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
      <button
        onClick={onClose}
        className="absolute top-3 right-3 sm:top-6 sm:right-6 z-10 p-2 text-white hover:text-white/70 transition-colors"
        aria-label="Close"
      >
        <X className="w-7 h-7 sm:w-8 sm:h-8" strokeWidth={2.5} />
      </button>
      <div
        className="relative w-full h-full flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={1080}
          height={1080}
          className="max-w-full max-h-[calc(100vh-2rem)] sm:max-h-[90vh] object-contain rounded"
          priority
        />
      </div>
    </div>
  );
}
