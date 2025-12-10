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

    const handleClick = () => {
        setIsLoaded(true);
    };

    if (isLoaded) {
        return (
            <iframe
                width="445"
                height="250"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                title={title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className={styles.videoEmbed}
            />
        );
    }

    return (
        <button
            onClick={handleClick}
            className={styles.youtubeLite}
            aria-label={`Play ${title}`}
            style={{
                position: "relative",
                width: "445px",
                height: "250px",
                cursor: "pointer",
                padding: 0,
                background: "none",
            }}
        >
            {/* YouTube thumbnail */}
            <img
                src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
                alt={title}
                width={445}
                height={250}
                loading="lazy"
                style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                }}
            />

            {/* Play button overlay */}
            <div
                style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "68px",
                    height: "48px",
                    background: "rgba(255, 0, 0, 0.9)",
                    borderRadius: "12px",
                    transition: "background 0.2s",
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(255, 0, 0, 1)";
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(255, 0, 0, 0.9)";
                }}
            >
                {/* YouTube play icon */}
                <svg
                    viewBox="0 0 68 48"
                    style={{
                        width: "100%",
                        height: "100%",
                    }}
                >
                    <path
                        d="M 27,18 36,24 27,30 Z"
                        fill="#fff"
                    />
                </svg>
            </div>
        </button>
    );
}
