"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Calendar } from "lucide-react";
import { BOOK_BUTTON } from "@/data/quiz";

/**
 * The booking link from the quiz: an in-site link to /book carrying the UTMs
 * (/book hands them to Cal.com, so the type shows on the booking).
 * utm_term is the post he arrived with, or "quiz".
 */
export function bookHref(slug: string, term: string): string {
    const params = new URLSearchParams({
        utm_source: "quiz",
        utm_medium: "website",
        utm_campaign: "restart_audit",
        utm_term: term,
        utm_content: slug,
    });
    return `/book?${params.toString()}`;
}

export function BookButton({ slug, onClick }: { slug: string; onClick?: () => void }) {
    const [term, setTerm] = useState("quiz");

    useEffect(() => {
        const fromPost = new URLSearchParams(window.location.search).get("utm_term");
        // eslint-disable-next-line react-hooks/set-state-in-effect -- read once from the URL after hydration
        if (fromPost) setTerm(fromPost);
    }, []);

    return (
        <Link
            href={bookHref(slug, term)}
            onClick={onClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 min-h-14 px-8 py-4 bg-bleu-nuit text-white border-2 border-bleu-nuit text-lg font-black uppercase tracking-tight shadow-brutal-sm transition-brutal hover:shadow-none hover-translate-brutal"
        >
            <Calendar className="w-5 h-5 shrink-0" strokeWidth={2.5} aria-hidden="true" />
            {BOOK_BUTTON}
        </Link>
    );
}
