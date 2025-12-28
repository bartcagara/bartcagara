"use client";

import { useState, FormEvent } from "react";
import { usePostHog } from "posthog-js/react";
import styles from "@/components/home/homepage.module.css";

export default function ContactPage() {
    const [honeypot, setHoneypot] = useState("");
    const [formStartTime] = useState(Date.now());
    const posthog = usePostHog();

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        // Check honeypot - if filled, it's a bot
        if (honeypot) {
            e.preventDefault();
            posthog?.capture('spam_detected', {
                method: 'honeypot',
                honeypot_value: honeypot
            });
            return;
        }

        // Check if form was filled too quickly (less than 3 seconds = likely bot)
        const timeElapsed = Date.now() - formStartTime;
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

        // If all checks pass, allow form submission to continue
    };

    return (
        <section className={`${styles.sectionPadding} min-h-screen bg-white`}>
            <div className="max-w-xl mx-auto px-6">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold mb-6 text-text-main">Contact Us</h1>
                    <p className="text-xl text-text-secondary mb-12">
                        Not ready to book a call yet? Ask your question below.
                    </p>
                </div>

                <form
                    action="https://formsubmit.co/bart@bartcagara.com"
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

                    {/* FormSubmit's native honeypot - server-side spam filter */}
                    <input type="text" name="_honey" style={{ display: "none" }} />

                    {/* Custom honeypot field - client-side spam filter */}
                    <div style={{ position: "absolute", left: "-5000px" }} aria-hidden="true">
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
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-accent-primary focus:border-accent-primary outline-none transition-colors"
                            placeholder="Your name"
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-accent-primary focus:border-accent-primary outline-none transition-colors"
                            placeholder="your@email.com"
                        />
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            required
                            rows={5}
                            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-accent-primary focus:border-accent-primary outline-none transition-colors"
                            placeholder="How can we help you?"
                        ></textarea>
                    </div>

                    <div className="text-center">
                        <button
                            type="submit"
                            className={`${styles.btnCta} px-8 py-4 uppercase font-bold`}
                        >
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}
