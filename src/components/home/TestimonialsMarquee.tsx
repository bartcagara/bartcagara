"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { TESTIMONIALS, type Testimonial } from "@/data/testimonials";
import styles from "./testimonials.module.css";

/* The widget's speed, measured: 20.5px a second. */
const SPEED_PX_PER_SECOND = 20.5;
const DRAG_THRESHOLD_PX = 5;
/* Before the browser can measure: long enough to overflow 12 lines at 284px. */
const LIKELY_CLAMPED_CHARS = 400;

function isKeyboardFocusIn(root: HTMLElement): boolean {
    const active = document.activeElement;
    return active !== null && root.contains(active) && active.matches(":focus-visible");
}

function Stars({ size, className }: { size: number; className: string }) {
    return (
        <div className={className} role="img" aria-label="Rated 5 out of 5">
            {[0, 1, 2, 3, 4].map((i) => (
                <svg key={i} width={size} height={size} viewBox="0 -10 187.673 179.503" aria-hidden="true">
                    <path
                        fill="currentColor"
                        d="M187.183 57.47a9.955 9.955 0 00-8.587-6.86l-54.167-4.918-21.42-50.134a9.978 9.978 0 00-9.172-6.052 9.972 9.972 0 00-9.172 6.061l-21.42 50.125L9.07 50.611a9.973 9.973 0 00-8.578 6.858 9.964 9.964 0 002.917 10.596l40.944 35.908-12.073 53.184a9.97 9.97 0 003.878 10.298A9.953 9.953 0 0042 169.357a9.937 9.937 0 005.114-1.424l46.724-27.925 46.707 27.925a9.936 9.936 0 0010.964-.478 9.979 9.979 0 003.88-10.298l-12.074-53.184 40.944-35.9a9.98 9.98 0 002.925-10.604zm0 0"
                    />
                </svg>
            ))}
        </div>
    );
}

function Highlighted({ text }: { text: string }) {
    return (
        <>
            {text.split(/<mark>([\s\S]*?)<\/mark>/).map((part, i) =>
                i % 2 === 1 ? <mark key={i}>{part}</mark> : part
            )}
        </>
    );
}

function TextCard({
    item,
    expanded,
    onExpand,
    tabbable,
}: {
    item: Extract<Testimonial, { kind: "text" }>;
    expanded: boolean;
    onExpand: () => void;
    tabbable: boolean;
}) {
    const textRef = useRef<HTMLDivElement>(null);
    const [overflowing, setOverflowing] = useState(item.text.length > LIKELY_CLAMPED_CHARS);

    useEffect(() => {
        const el = textRef.current;
        if (el && !expanded) setOverflowing(el.scrollHeight > el.clientHeight + 1);
    }, [expanded]);

    const icon = (
        <Image
            src="/images/testimonials/linkedin-icon.png"
            alt="linkedin"
            width={20}
            height={20}
            className={styles.networkIcon}
            draggable={false}
        />
    );

    return (
        <div className={styles.card}>
            <div className={styles.endorser}>
                <Image
                    src={item.avatar}
                    alt={`${item.name} avatar`}
                    width={42}
                    height={42}
                    loading="lazy"
                    className={styles.avatar}
                    draggable={false}
                />
                <div className={styles.who}>
                    <div className={styles.name}>{item.name}</div>
                    <div className={styles.tagline} title={item.tagline}>{item.tagline}</div>
                </div>
                {item.linkedin ? (
                    <a href={item.linkedin} target="_blank" rel="nofollow noopener noreferrer" tabIndex={tabbable ? undefined : -1} draggable={false}>
                        {icon}
                    </a>
                ) : (
                    icon
                )}
            </div>
            <Stars size={20} className={styles.stars} />
            <div ref={textRef} className={`${styles.text} ${expanded ? "" : styles.clamped}`}>
                <Highlighted text={item.text} />
            </div>
            {overflowing && !expanded && (
                <button type="button" onClick={onExpand} className={styles.readMore} tabIndex={tabbable ? undefined : -1}>
                    Read more
                </button>
            )}
        </div>
    );
}

function VideoCard({
    item,
    onPlayingChange,
    tabbable,
}: {
    item: Extract<Testimonial, { kind: "video" }>;
    onPlayingChange: (playing: boolean) => void;
    tabbable: boolean;
}) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [playing, setPlaying] = useState(false);

    const toggle = () => {
        const video = videoRef.current;
        if (!video) return;
        if (video.paused) {
            // Captions on, as the widget had them; Safari leaves a default track off.
            if (video.textTracks[0]) video.textTracks[0].mode = "showing";
            void video.play();
        } else {
            video.pause();
        }
    };

    const report = (next: boolean) => {
        setPlaying(next);
        onPlayingChange(next);
    };

    return (
        <div className={styles.videoCard}>
            <video
                ref={videoRef}
                className={styles.video}
                poster={item.poster}
                preload="none"
                playsInline
                disablePictureInPicture
                onClick={toggle}
                onPlay={() => report(true)}
                onPause={() => report(false)}
                onEnded={() => report(false)}
            >
                <source src={item.video} type="video/mp4" />
                <track kind="captions" src={item.captions} srcLang="en" label="English" default />
            </video>
            <div className={styles.videoOverlay} style={playing ? { background: "none" } : undefined}>
                {!playing && (
                    <div>
                        <Stars size={16} className={styles.videoStars} />
                        <div className={styles.videoName}>{item.name}</div>
                        <div className={styles.videoTagline}>{item.tagline}</div>
                    </div>
                )}
                <button
                    type="button"
                    onClick={toggle}
                    aria-label={playing ? "Pause" : "Play"}
                    className={styles.playButton}
                    tabIndex={tabbable ? undefined : -1}
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" fill="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        {playing ? (
                            <>
                                <rect x="6" y="4" width="4" height="16" />
                                <rect x="14" y="4" width="4" height="16" />
                            </>
                        ) : (
                            <polygon points="5 3 19 12 5 21 5 3" />
                        )}
                    </svg>
                </button>
            </div>
        </div>
    );
}

/**
 * The client testimonials: a slowly moving row that loops, stops under the
 * mouse and can be dragged. Self-hosted, in place of the Senja widget it looks
 * like (src/data/testimonials.ts). The row is drawn twice so the loop has no
 * seam; the second copy is for the eye only.
 */
export function TestimonialsMarquee() {
    const rootRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);
    const offset = useRef(0);
    const hovering = useRef(false);
    const playingCount = useRef(0);
    const drag = useRef<{ x: number; moved: boolean } | null>(null);
    const justDragged = useRef(false);
    const [expanded, setExpanded] = useState<ReadonlySet<string>>(new Set());

    useEffect(() => {
        const root = rootRef.current;
        const track = trackRef.current;
        if (!root || !track) return;

        const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        let visible = true;
        const observer = new IntersectionObserver(([entry]) => {
            visible = entry.isIntersecting;
        });
        observer.observe(root);

        let frame = 0;
        let last = performance.now();
        const tick = (now: number) => {
            const elapsed = Math.min(now - last, 100);
            last = now;
            const moving =
                visible && !reducedMotion && !hovering.current && !drag.current?.moved &&
                playingCount.current === 0 && !isKeyboardFocusIn(root);
            if (moving) offset.current += (SPEED_PX_PER_SECOND * elapsed) / 1000;
            const loop = track.scrollWidth / 2;
            if (loop > 0) offset.current = ((offset.current % loop) + loop) % loop;
            track.style.transform = `translate3d(${-offset.current}px, 0, 0)`;
            frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);

        return () => {
            cancelAnimationFrame(frame);
            observer.disconnect();
        };
    }, []);

    const onPlayingChange = useCallback((playing: boolean) => {
        playingCount.current = Math.max(0, playingCount.current + (playing ? 1 : -1));
    }, []);

    const row = (copy: number) =>
        TESTIMONIALS.map((item) => (
            <div key={`${copy}-${item.id}`} className={styles.slot} aria-hidden={copy > 0 || undefined}>
                {item.kind === "text" ? (
                    <TextCard
                        item={item}
                        expanded={expanded.has(item.id)}
                        onExpand={() => setExpanded((prev) => new Set(prev).add(item.id))}
                        tabbable={copy === 0}
                    />
                ) : (
                    <VideoCard item={item} onPlayingChange={onPlayingChange} tabbable={copy === 0} />
                )}
            </div>
        ));

    return (
        <div
            ref={rootRef}
            className={styles.marquee}
            role="region"
            aria-label="Client testimonials"
            onPointerEnter={(e) => {
                if (e.pointerType === "mouse") hovering.current = true;
            }}
            onPointerLeave={() => {
                hovering.current = false;
            }}
            onPointerDown={(e) => {
                justDragged.current = false;
                drag.current = { x: e.clientX, moved: false };
            }}
            onPointerMove={(e) => {
                // Again here: letting go of a drag can read as the mouse having left.
                if (e.pointerType === "mouse") hovering.current = true;
                const current = drag.current;
                if (!current) return;
                const dx = e.clientX - current.x;
                if (!current.moved && Math.abs(dx) < DRAG_THRESHOLD_PX) return;
                if (!current.moved) e.currentTarget.setPointerCapture(e.pointerId);
                current.moved = true;
                current.x = e.clientX;
                offset.current -= dx;
            }}
            onPointerUp={() => {
                justDragged.current = drag.current?.moved ?? false;
                drag.current = null;
            }}
            onPointerCancel={() => {
                drag.current = null;
            }}
            onClickCapture={(e) => {
                // The end of a drag is not a press on what it ended over.
                if (justDragged.current) {
                    justDragged.current = false;
                    e.preventDefault();
                    e.stopPropagation();
                }
            }}
        >
            <div ref={trackRef} className={styles.track}>
                {row(0)}
                {row(1)}
            </div>
        </div>
    );
}
