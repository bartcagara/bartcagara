import type { Metadata } from "next";
import { COPY } from "@/data/quiz";
import { QuizFrame } from "@/components/quiz/QuizFrame";
import { RestartQuiz } from "@/components/quiz/RestartQuiz";

const TITLE = "The Restart Quiz | Bart Cagara";
const DESCRIPTION = COPY.startLine;

/**
 * The restart quiz (design: HQ 03_content/ideas/2026-11-20_design_restart-quiz.md).
 * Hidden until launch: noindex, not in the sitemap, linked from nowhere.
 * Before launch: add it to public/sitemap.xml, switch robots to index, and
 * swap QUIZ_KIT_FORM in src/data/quiz.ts for the quiz's own Kit form.
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
                alt: "The Restart Quiz: find out why you keep starting over. It takes two minutes, and at the end I'll tell you what's most likely behind it."
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
        index: false,
        follow: false
    }
};

export default function QuizPage() {
    return (
        <QuizFrame>
            <RestartQuiz />
        </QuizFrame>
    );
}
