"use client";

import { Mail } from "lucide-react";
import { usePostHogClient } from "@/lib/posthog-context";

const CONTACT_EMAIL = "support@getstack.to";

export function ContactEmailLink() {
    const posthog = usePostHogClient();

    return (
        <div className="text-center">
            <a
                href={`mailto:${CONTACT_EMAIL}`}
                onClick={() => posthog?.capture("contact_email_clicked")}
                className="inline-flex items-center justify-center gap-3 px-6 py-4 md:px-10 md:py-5 text-base md:text-lg font-black tracking-tighter bg-bleu-nuit text-white border-2 border-bleu-nuit shadow-brutal-sm md:shadow-brutal-md transition-brutal hover:shadow-none hover-translate-brutal"
            >
                <Mail className="w-5 h-5 shrink-0" />
                {CONTACT_EMAIL}
            </a>
        </div>
    );
}
