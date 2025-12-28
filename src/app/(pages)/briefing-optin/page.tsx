"use client";

import { useState, FormEvent } from "react";
import { usePostHog } from "posthog-js/react";
import styles from "@/components/home/homepage.module.css";

export default function BriefingOptinPage() {
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");
    const posthog = usePostHog();

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus("idle");
        setErrorMessage("");

        try {
            const response = await fetch("/api/newsletter/subscribe", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email,
                    firstName,
                }),
            });

            const data = await response.json();

            if (response.ok) {
                setSubmitStatus("success");
                setEmail("");
                setFirstName("");

                // Track successful subscription
                posthog?.capture('newsletter_subscribed', {
                    email,
                    firstName,
                    source: 'briefing_optin_page'
                });
            } else {
                setSubmitStatus("error");
                setErrorMessage(data.error || "Something went wrong. Please try again.");

                // Track subscription error
                posthog?.capture('newsletter_subscription_failed', {
                    error: data.error,
                    source: 'briefing_optin_page'
                });
            }
        } catch (error) {
            setSubmitStatus("error");
            setErrorMessage("Network error. Please check your connection and try again.");

            // Track network error
            posthog?.capture('newsletter_subscription_network_error', {
                error: String(error),
                source: 'briefing_optin_page'
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className={`${styles.sectionPadding} min-h-screen bg-bleu-fumee border-t-2 border-b-2 border-bleu-nuit`}>
            <div className="max-w-2xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-12">
                    <span className={styles.sectionLabel}>
                        Weekly Newsletter
                    </span>
                    <h1 className={`${styles.h1} text-bleu-nuit`}>
                        The Executive Briefing
                    </h1>
                    <p className="text-xl text-grey-light mb-8">
                        Weekly insights on high-performance health, mindset, and systems for busy executives who refuse to slow down.
                    </p>
                </div>

                {/* Benefits Section */}
                <div className="bg-white border-2 border-bleu-nuit p-8 mb-8 shadow-brutal-lg">
                    <h2 className="font-bold text-2xl mb-6 text-bleu-nuit uppercase">
                        What You'll Get:
                    </h2>
                    <ul className={styles.checkList}>
                        <li>Science-backed strategies for sustainable fat loss</li>
                        <li>Time-efficient training protocols for busy schedules</li>
                        <li>Mindset frameworks from high performers</li>
                        <li>Real-world case studies and client results</li>
                        <li>Weekly actionable insights you can implement immediately</li>
                    </ul>
                </div>

                {/* Form */}
                <div className="bg-white border-2 border-bleu-nuit p-8 shadow-brutal-lg">
                    {submitStatus === "success" ? (
                        <div className="text-center py-8">
                            <div className="inline-block bg-bleu-accent text-white px-6 py-3 mb-4 shadow-brutal-nuit-sm">
                                <span className="text-2xl mr-2">✓</span>
                                <span className="font-bold uppercase">Success!</span>
                            </div>
                            <h3 className="text-2xl font-bold text-bleu-nuit mb-4">
                                You're subscribed!
                            </h3>
                            <p className="text-grey-light text-lg">
                                Check your inbox for a confirmation email.
                                The first briefing will arrive next week.
                            </p>
                        </div>
                    ) : (
                        <>
                            <h2 className="font-bold text-xl mb-6 text-bleu-nuit uppercase text-center">
                                Join 1,000+ Executives
                            </h2>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label
                                        htmlFor="firstName"
                                        className="block text-sm font-bold text-bleu-nuit mb-2 uppercase tracking-wide"
                                    >
                                        First Name
                                    </label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        name="firstName"
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                        required
                                        className="w-full px-4 py-4 border-2 border-bleu-nuit focus:outline-none focus:shadow-brutal-sm transition-all text-lg"
                                        placeholder="John"
                                        disabled={isSubmitting}
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-bold text-bleu-nuit mb-2 uppercase tracking-wide"
                                    >
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                        className="w-full px-4 py-4 border-2 border-bleu-nuit focus:outline-none focus:shadow-brutal-sm transition-all text-lg"
                                        placeholder="john@company.com"
                                        disabled={isSubmitting}
                                    />
                                </div>

                                {submitStatus === "error" && (
                                    <div className="bg-red-50 border-2 border-red-500 p-4 text-red-700">
                                        <p className="font-bold">Error:</p>
                                        <p>{errorMessage}</p>
                                    </div>
                                )}

                                <div className="text-center">
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className={`${styles.btnCta} ${styles.pageSize} w-full disabled:opacity-50 disabled:cursor-not-allowed`}
                                    >
                                        {isSubmitting ? "Subscribing..." : "Get The Briefing"}
                                    </button>
                                </div>

                                <p className="text-sm text-grey-light text-center mt-4">
                                    No spam. Unsubscribe anytime. By subscribing, you agree to receive emails from Bart Cagara.
                                </p>
                            </form>
                        </>
                    )}
                </div>

                {/* Social Proof */}
                <div className="mt-8 text-center">
                    <p className="text-grey-light italic">
                        "The best weekly email I get. Bart cuts through the BS and gives you what actually works."
                        <span className="block mt-2 font-bold text-bleu-nuit">— Executive Reader</span>
                    </p>
                </div>
            </div>
        </section>
    );
}
