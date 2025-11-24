"use client";

import React, { useState } from "react";
import { Navbar, Footer } from "@/components/home";
import styles from "@/components/home/homepage.module.css";

export default function ContactPage() {
    const [status, setStatus] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const formData = new FormData(form);

        try {
            const response = await fetch("/", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: new URLSearchParams(formData as any).toString(),
            });

            if (response.ok) {
                setStatus("success");
            } else {
                setStatus("error");
            }
        } catch (error) {
            setStatus("error");
        }
    };

    return (
        <>
            <Navbar />
            <main className={`${styles.sectionPadding} min-h-screen bg-white`}>
                <div className="max-w-xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold mb-6 text-[#09071D]">Contact Us</h1>
                        <p className="text-lg text-gray-600">
                            Ready to adapt fitness to your schedule? Fill out the form below.
                        </p>
                    </div>

                    {status === "success" ? (
                        <div className="p-6 bg-green-50 border border-green-200 rounded-md text-center">
                            <h3 className="text-xl font-bold text-green-800 mb-2">Message Sent!</h3>
                            <p className="text-green-700">
                                Thank you for reaching out. We'll get back to you shortly.
                            </p>
                        </div>
                    ) : (
                        <form
                            name="contact"
                            method="POST"
                            data-netlify="true"
                            className="space-y-6"
                            onSubmit={handleSubmit}
                        >
                            <input type="hidden" name="form-name" value="contact" />

                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#09071D] focus:border-[#09071D] outline-none transition-colors"
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
                                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#09071D] focus:border-[#09071D] outline-none transition-colors"
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
                                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#09071D] focus:border-[#09071D] outline-none transition-colors"
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
                    )}
                </div>
            </main>
            <Footer />
        </>
    );
}
