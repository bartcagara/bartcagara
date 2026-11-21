"use client";

import type { QuizType } from "@/data/quiz";
import { usePostHogClient } from "@/lib/posthog-context";
import { BookButton } from "./BookButton";

/** The booking button on a /quiz/<type> page, with its click event. */
export function ResultPageBookButton({ type, slug }: { type: QuizType; slug: string }) {
    const posthog = usePostHogClient();
    return (
        <BookButton
            slug={slug}
            onClick={() => posthog?.capture("quiz_booking_clicked", { primary: type, from: "result_page" })}
        />
    );
}
