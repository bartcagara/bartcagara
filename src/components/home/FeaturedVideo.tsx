"use client";

import { useRef, useState } from "react";
import type { HomepageContent } from "./types";
import { FRAME, H3, MICRO } from "./ui";

/**
 * The lead client video: large, plays in place with captions on. Nothing is
 * fetched until he taps play (preload="none").
 */
export function FeaturedVideo({ video }: { video: HomepageContent["results"]["featuredVideo"] }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);

  const play = () => {
    const el = ref.current;
    if (!el) return;
    // Captions on; Safari leaves a default track off.
    if (el.textTracks[0]) el.textTracks[0].mode = "showing";
    setStarted(true);
    void el.play();
  };

  return (
    <figure>
      <div className={`relative aspect-video bg-black ${FRAME}`}>
        <video
          ref={ref}
          className="absolute inset-0 w-full h-full object-cover"
          poster={video.poster}
          preload="none"
          playsInline
          controls={started}
          aria-label={video.title}
        >
          <source src={video.src} type="video/mp4" />
          <track kind="captions" src={video.captions} srcLang="en" label="English" default />
        </video>
        {!started && (
          <button
            type="button"
            onClick={play}
            className="group absolute inset-0 flex items-center justify-center cursor-pointer"
            aria-label={`Play ${video.title}`}
          >
            <span className="flex items-center justify-center w-16 h-16 md:w-24 md:h-24 bg-bleu-nuit text-white border-2 border-bleu-nuit shadow-brutal-md transition-brutal group-hover:shadow-none group-hover:translate-x-0.5 group-hover:translate-y-0.5">
              <svg viewBox="0 0 24 24" className="w-7 h-7 md:w-10 md:h-10 ml-1" fill="currentColor" aria-hidden="true">
                <polygon points="6 3 20 12 6 21 6 3" />
              </svg>
            </span>
          </button>
        )}
      </div>
      <figcaption className="mt-8 md:mt-10 max-w-3xl">
        <p className={`${H3} text-bleu-nuit`}>&ldquo;{video.quote}&rdquo;</p>
        <p className={`mt-4 ${MICRO}`}>{video.name}</p>
      </figcaption>
    </figure>
  );
}
