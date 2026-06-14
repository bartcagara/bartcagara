"use client";

import { useState, useRef, FormEvent } from "react";
import { ArrowRight } from "lucide-react";
import { usePostHog } from "posthog-js/react";

export function ContactForm() {
    const [honeypot, setHoneypot] = useState("");
    const formStartTime = useRef(Date.now());
    const posthog = usePostHog();

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        // Check honeypot - if filled, it's a bot
        if (honeypot) {
            e.preventDefault();
            posthog?.capture('spam_detected', {
                method: 'honeypot',
            });
            return;
        }

        // Check if form was filled too quickly (less than 3 seconds = likely bot)
        const timeElapsed = Date.now() - formStartTime.current;
        if (timeElapsed < 3000) {
            e.preventDefault();
            posthog?.capture('spam_detected', {
                method: 'timing',
                time_elapsed_ms: timeElapsed
            });
            return;
        }

        // Track successful form submission
        posthog?.capture('contact_form_submitted');
    };

    return (
        <form
            action={`https://formsubmit.co/${['bart', 'bartcagara.com'].join('@')}`}
            method="POST"
            onSubmit={handleSubmit}
            className="space-y-6"
        >
            <input type="hidden" name="_subject" value="New Website Lead!" />
            <input type="hidden" name="_captcha" value="true" />
            <input type="hidden" name="_next" value="https://bartcagara.com/contact" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_autoresponse" value="Thanks for reaching out! I'll get back to you within 24 hours. - Bart" />
            <input type="hidden" name="_blacklist" value="crypto,bitcoin,forex,casino,viagra,cialis,lottery,prize,winner,congratulations,click here,buy now,limited offer,act now,SEO services,backlinks,web traffic,make money,work from home" />

            {/* FormSubmit's native honeypot */}
            <input type="text" name="_honey" className="hidden" />

            {/* Custom honeypot */}
            <div className="absolute -left-[5000px]" aria-hidden="true">
                <input
                    type="text"
                    name="honeypot"
                    tabIndex={-1}
                    autoComplete="off"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                />
            </div>

            <div>
                <label htmlFor="name" className="block text-sm font-bold uppercase tracking-tight text-bleu-nuit mb-2">
                    Name
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    autoComplete="name"
                    className="w-full px-4 py-3 border-2 border-bleu-nuit/15 rounded-md focus:ring-2 focus:ring-bleu-accent focus:border-bleu-accent outline-none transition-colors"
                    placeholder="Your name"
                />
            </div>

            <div>
                <label htmlFor="email" className="block text-sm font-bold uppercase tracking-tight text-bleu-nuit mb-2">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    autoComplete="email"
                    className="w-full px-4 py-3 border-2 border-bleu-nuit/15 rounded-md focus:ring-2 focus:ring-bleu-accent focus:border-bleu-accent outline-none transition-colors"
                    placeholder="your@email.com"
                />
            </div>

            <div>
                <label htmlFor="message" className="block text-sm font-bold uppercase tracking-tight text-bleu-nuit mb-2">
                    Message
                </label>
                <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full px-4 py-3 border-2 border-bleu-nuit/15 rounded-md focus:ring-2 focus:ring-bleu-accent focus:border-bleu-accent outline-none transition-colors"
                    placeholder="How can we help you?"
                ></textarea>
            </div>

            <div className="text-center">
                <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-3 px-8 py-4 md:px-10 md:py-5 text-base md:text-lg font-black uppercase tracking-tighter bg-bleu-nuit text-white border-2 border-bleu-nuit shadow-brutal-sm md:shadow-brutal-md transition-brutal hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-bleu-accent focus-visible:ring-offset-2"
                >
                    Send Message
                    <ArrowRight className="w-5 h-5" />
                </button>
            </div>
        </form>
    );
}
