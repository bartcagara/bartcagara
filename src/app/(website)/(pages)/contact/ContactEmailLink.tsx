"use client";

import { Mail } from "lucide-react";
import { BUTTON_BASE, BUTTON_SIZE, BUTTON_VARIANT, BUTTON_ICON, ICON_STROKE } from "@/components/ui/buttonStyle";
import { useSyncExternalStore } from "react";
import { usePostHogClient } from "@/lib/posthog-context";

/* Spam (Bart, 25 Nov): the address is never in the page or the code as one
   string. It is put together in the visitor's browser after the page has
   loaded, so bots that read the page's code, or the site's scripts, find no
   address. Until then the button reads "Email us". */
const PARTS = ["support", "getstack", "to"] as const;
const buildAddress = () => `${PARTS[0]}${String.fromCharCode(64)}${PARTS[1]}.${PARTS[2]}`;
const noSubscribe = () => () => {};

export function ContactEmailLink() {
    const posthog = usePostHogClient();
    // The server's copy of the page has no address; the browser's has it.
    const email = useSyncExternalStore(noSubscribe, buildAddress, () => null);

    return (
        <div className="text-center">
            <a
                href={email ? `mailto:${email}` : undefined}
                onClick={() => posthog?.capture("contact_email_clicked")}
                className={`${BUTTON_BASE} ${BUTTON_SIZE.md} ${BUTTON_VARIANT.dark} normal-case!`}
            >
                <Mail className={BUTTON_ICON.md} strokeWidth={ICON_STROKE} aria-hidden="true" />
                {email ?? "Email us"}
            </a>
        </div>
    );
}
