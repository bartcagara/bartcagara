import type { Metadata } from "next";
import { COPY } from "@/data/quiz";
import { QuizFrame } from "@/components/quiz/QuizFrame";
import { RestartQuiz } from "@/components/quiz/RestartQuiz";

const TITLE = "The Restart Quiz | Bart Cagara";
const DESCRIPTION = COPY.startLine;

/**
 * The restart quiz (design: HQ 03_content/ideas/2026-11-20_design_restart-quiz.md).
 * Live since 21 Nov 2026: indexed and in public/sitemap.xml; the result
 * pages (/quiz/<slug>) stay noindex.
 */
export const metadata: Metadata = {
    title: TITLE,
    description: DESCRIPTION,
    alternates: {
        canonical: "/quiz"
    },
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://bartcagara.com/quiz",
        siteName: "Bart Cagara",
        title: TITLE,
        description: DESCRIPTION,
        images: [
            {
                url: "/images/og-quiz.jpg",
                width: 1200,
                height: 630,
                alt: "The Restart Quiz: which of the 4 restart types are you? Answer 8 quick questions, and in two minutes you'll know what knocks you off track every time and what to do about it this week."
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: TITLE,
        description: DESCRIPTION,
        images: ["/images/og-quiz.jpg"],
        creator: "@bartcagara",
        site: "@bartcagara"
    },
    robots: {
        index: true,
        follow: true
    }
};

export default function QuizPage() {
    return (
        <QuizFrame>
            <RestartQuiz />
        </QuizFrame>
    );
}
