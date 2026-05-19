"use client";

import { useEffect, useRef, useState } from "react";
import "./optin-form.css";

const UID = "c2655decfb";
const SRC = `https://bartcagara.kit.com/${UID}/index.js`;

export function OptinForm() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [debug, setDebug] = useState<string[]>(["mount"]);
  const log = (msg: string) => setDebug((d) => [...d, msg]);

  useEffect(() => {
    log("effect-fired");
    const container = containerRef.current;
    if (!container) {
      log("no-container");
      return;
    }
    if (container.dataset.kitLoaded === "true") {
      log("already-loaded");
      return;
    }
    container.dataset.kitLoaded = "true";

    const script = document.createElement("script");
    script.async = true;
    script.src = SRC;
    script.setAttribute("data-uid", UID);
    script.onload = () => {
      log("script-onload");
      setTimeout(() => {
        const inContainer = container.querySelector(
          `.formkit-form[data-uid="${UID}"]`,
        );
        const anywhere = document.querySelector(
          `.formkit-form[data-uid="${UID}"]`,
        );
        if (inContainer) {
          log("form-in-container");
        } else if (anywhere) {
          const parent =
            anywhere.parentElement?.tagName.toLowerCase() ?? "unknown";
          const parentId = anywhere.parentElement?.id ?? "";
          log(`form-elsewhere-in-${parent}${parentId ? `#${parentId}` : ""}`);
        } else {
          log("form-not-found");
        }
      }, 1500);
    };
    script.onerror = () => log("script-error");

    container.appendChild(script);
    log("script-appended");
  }, []);

  return (
    <div ref={containerRef} className="w-full">
      <div
        style={{
          padding: "10px 12px",
          marginBottom: "16px",
          background: "#fef3c7",
          border: "2px solid #92400e",
          color: "#92400e",
          fontFamily: "monospace",
          fontSize: "11px",
          lineHeight: 1.5,
          wordBreak: "break-word",
        }}
      >
        DEBUG (remove after diagnosis): {debug.join(" → ")}
      </div>
    </div>
  );
}
