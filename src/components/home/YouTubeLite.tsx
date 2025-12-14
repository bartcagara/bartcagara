"use client";

import { useState } from "react";
import styles from "./homepage.module.css";

interface YouTubeLiteProps {
    videoId: string;
    title?: string;
    className?: string; // Add className prop support
}

/**
 * YouTubeLite - Lazy-loading YouTube embed component
 * Displays thumbnail initially, loads full iframe only on user click
 * Saves ~300KB per video on initial page load
 */
export function YouTubeLite({ videoId, title = "YouTube video", className = "" }: YouTubeLiteProps) {
    const [isLoaded, setIsLoaded] = useState(false);

    const handleClick = () => {
        setIsLoaded(true);
    };

    if (isLoaded) {
        return (
            <iframe
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                title={title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className={`w-full h-full object-cover ${className}`}
            />
        );
    }

    return (
        <button
            onClick={handleClick}
            className={`relative w-full h-full block p-0 bg-transparent cursor-pointer group ${className}`}
            aria-label={`Play ${title}`}
        >
            {/* YouTube thumbnail */}
            <img
                src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
                alt={title}
                className="w-full h-full object-cover"
                loading="lazy"
            />

            {/* Play button overlay */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[68px] h-[48px] bg-red-600/90 rounded-xl transition-colors group-hover:bg-red-600">
                {/* YouTube play icon */}
                <svg
                    viewBox="0 0 68 48"
                    className="w-full h-full text-white"
                >
                    <path
                        d="M 27,18 36,24 27,30 Z"
                        fill="currentColor"
                    />
                </svg>
            </div>
        </button>
    );
}
