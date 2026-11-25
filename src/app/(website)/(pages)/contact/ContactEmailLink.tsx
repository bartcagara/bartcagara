"use client";

import { Mail } from "lucide-react";
import { BUTTON_BASE, BUTTON_SIZE, BUTTON_VARIANT, BUTTON_ICON, ICON_STROKE } from "@/components/ui/buttonStyle";
import { usePostHogClient } from "@/lib/posthog-context";

const CONTACT_EMAIL = "support@getstack.to";

export function ContactEmailLink() {
    const posthog = usePostHogClient();

    return (
        <div className="text-center">
            <a
                href={`mailto:${CONTACT_EMAIL}`}
                onClick={() => posthog?.capture("contact_email_clicked")}
                className={`${BUTTON_BASE} ${BUTTON_SIZE.md} ${BUTTON_VARIANT.dark} normal-case!`}
            >
                <Mail className={BUTTON_ICON.md} strokeWidth={ICON_STROKE} aria-hidden="true" />
                {CONTACT_EMAIL}
            </a>
        </div>
    );
}
