import { CalendarEmbed } from "@/components/home/CalendarEmbed";
import type { Metadata } from "next";
import Image from "next/image";

const TITLE = "Book your Restart Audit | Bart Cagara";
const DESCRIPTION =
    "45 minutes, you and me. You leave knowing exactly why it never sticks, whether we work together or not. For former-athlete founders.";

export const metadata: Metadata = {
    title: TITLE,
    description: DESCRIPTION,
    authors: [{ name: "Bart Cagara", url: "https://bartcagara.com" }],
    creator: "Bart Cagara",
    publisher: "Bart Cagara",
    alternates: {
        canonical: "/book"
    },
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://bartcagara.com/book",
        siteName: "Bart Cagara",
        title: TITLE,
        description: DESCRIPTION,
        images: [
            {
                url: "/images/og-book.jpg",
                width: 1200,
                height: 630,
                alt: "Restart Audit: 45 minutes, you and me. You leave knowing exactly why it never sticks, whether we work together or not."
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: TITLE,
        description: DESCRIPTION,
        images: ["/images/og-book.jpg"],
        creator: "@bartcagara",
        site: "@bartcagara"
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1
        }
    }
};

/**
 * The Restart Audit booking page: /brief's header, then the Cal.com booker
 * inline. Bookings land in the same Cal
 * event (discovery-call), so Zapier's tagging is unchanged; CalBookingTracker
 * in the landing layout fires `call_booked`, and the page's utm_* parameters
 * go to Cal with the booking.
 */
export default function BookPage() {
    return (
        <div className="min-h-screen flex flex-col bg-gray-50 text-bleu-nuit">
            <header className="px-6 md:px-12">
                <div className="max-w-6xl mx-auto h-[72px] md:h-24 [@media(max-height:500px)]:h-16 flex items-center justify-between border-b-2 border-bleu-nuit">
                    {/* SectionBadge's label with a 2px shadow instead of 4px, as on /brief */}
                    <span className="inline-block whitespace-nowrap bg-bleu-accent text-white font-mono text-xs uppercase tracking-normal px-3 py-1 shadow-[2px_2px_0_0_var(--bleu-nuit)]">Restart Audit</span>
                    <span className="flex items-center gap-3 text-sm font-bold uppercase tracking-[-0.02em]">
                        <span className="hidden sm:flex flex-col items-end gap-1">
                            Bart Cagara
                            <span className="text-xs font-medium normal-case tracking-normal text-bleu-nuit/60">Fitness Coach to Founders</span>
                        </span>
                        <Image
                            src="/images/bart-headshot.jpg"
                            alt="Bart Cagara"
                            width={224}
                            height={224}
                            priority
                            className="w-10 h-10 rounded-full object-cover border-2 border-bleu-nuit"
                        />
                    </span>
                </div>
            </header>

            <div className="flex-1 px-6 md:px-12 pt-8 pb-20 md:pt-10 md:pb-24">
                <div className="max-w-6xl mx-auto">
                    {/* No visible copy, by Bart's choice: header, then the booker. */}
                    <h1 className="sr-only">Book a Restart Audit</h1>
                    <div id="book-call">
                        <CalendarEmbed forwardUtm />
                    </div>
                </div>
            </div>
        </div>
    );
}
