import type { Metadata } from "next";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
    title: "Contact | Bart Cagara",
    description: "Have a question about Founder Athlete OS or 1:1 coaching? Send Bart a message and get a reply within 24 hours.",
    alternates: {
        canonical: "/contact"
    },
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://bartcagara.com/contact",
        siteName: "Founder Athlete OS",
        title: "Contact | Bart Cagara",
        description: "Have a question about Founder Athlete OS or 1:1 coaching? Send Bart a message and get a reply within 24 hours.",
        images: [
            {
                url: "/images/og-home.jpg",
                width: 1200,
                height: 630,
                alt: "Founder Athlete OS - The founder's last restart"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "Contact | Bart Cagara",
        description: "Have a question about Founder Athlete OS or 1:1 coaching? Send Bart a message and get a reply within 24 hours.",
        images: ["/images/og-home.jpg"],
        creator: "@bartcagara",
        site: "@bartcagara"
    }
};

export default function ContactPage() {
    return (
        <div className="max-w-xl mx-auto">
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-6 text-bleu-nuit">Contact Us</h1>
                <p className="text-lead text-bleu-nuit/70">
                    Not ready to book a call yet? Ask your question below.
                </p>
            </div>

            <ContactForm />
        </div>
    );
}
