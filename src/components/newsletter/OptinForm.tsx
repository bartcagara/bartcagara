"use client";

import { useEffect, useRef } from "react";
import "./optin-form.css";

const KIT_FORM_UID = "c2655decfb";
const KIT_FORM_SRC = `https://bartcagara.kit.com/${KIT_FORM_UID}/index.js`;

export function OptinForm() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    if (container.querySelector(`script[data-uid="${KIT_FORM_UID}"]`)) return;

    const script = document.createElement("script");
    script.async = true;
    script.src = KIT_FORM_SRC;
    script.setAttribute("data-uid", KIT_FORM_UID);
    container.appendChild(script);
  }, []);

  return <div ref={containerRef} className="w-full" />;
}
