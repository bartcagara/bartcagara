"use client";

import { useEffect, useRef } from "react";
import "./optin-form.css";

const UID = "c2655decfb";
const SRC = `https://bartcagara.kit.com/${UID}/index.js`;

export function OptinForm() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    if (container.dataset.kitLoaded === "true") return;
    container.dataset.kitLoaded = "true";

    const script = document.createElement("script");
    script.async = true;
    script.src = SRC;
    script.setAttribute("data-uid", UID);
    container.appendChild(script);
  }, []);

  return <div ref={containerRef} className="w-full" />;
}
