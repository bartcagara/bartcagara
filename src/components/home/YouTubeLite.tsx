"use client";

import { useState } from "react";
import styles from "./homepage.module.css";

interface YouTubeLiteProps {
    videoId: string;
    title?: string;
}

/**
 * YouTubeLite - Lazy-loading YouTube embed component
 * Displays thumbnail initially, loads full iframe only on user click
 * Saves ~300KB per video on initial page load
 */
export function YouTubeLite({ videoId, title = "YouTube video" }: YouTubeLiteProps) {
    const [isLoaded, setIsLoaded] = useState(false);

    if (isLoaded) {
        return (
            <div className={styles.youtubeLite}>
                <iframe
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                    title={title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full border-0"
                />
            </div>
        );
    }

    return (
        <button
            onClick={() => setIsLoaded(true)}
            className={`${styles.youtubeLite} relative block p-0 bg-black cursor-pointer group overflow-hidden`}
            aria-label={`Play ${title}`}
        >
            <img
                src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
                alt=""
                className="w-full h-full object-cover"
                loading="lazy"
                aria-hidden="true"
            />

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[68px] h-[48px] bg-red-600/90 rounded-xl transition-colors group-hover:bg-red-600" aria-hidden="true">
                <svg viewBox="0 0 68 48" className="w-full h-full text-white">
                    <path d="M 27,18 36,24 27,30 Z" fill="currentColor" />
                </svg>
            </div>
        </button>
    );
}
