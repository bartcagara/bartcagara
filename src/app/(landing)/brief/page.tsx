import { OptinForm } from "@/components/newsletter/OptinForm";
import type { Metadata } from "next";
import Image from "next/image";

const TITLE = "Get in shape one last time | Founder's Fitness Brief";
const DESCRIPTION =
    "For the founder whose life eats every fitness plan. One email every Sunday to cut through the noise, get your mind right and know what to do next.";


export const metadata: Metadata = {
    title: TITLE,
    description: DESCRIPTION,
    authors: [{ name: "Bart Cagara", url: "https://bartcagara.com" }],
    creator: "Bart Cagara",
    publisher: "Bart Cagara",
    alternates: {
        canonical: "/brief"
    },
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://bartcagara.com/brief",
        siteName: "Founder Athlete OS",
        title: TITLE,
        description: DESCRIPTION,
        images: [
            {
                url: "/images/og-brief.jpg",
                width: 1200,
                height: 630,
                alt: "Founder's Fitness Brief: Get in shape one last time. For the founder whose life eats every fitness plan."
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: TITLE,
        description: DESCRIPTION,
        images: ["/images/og-brief.jpg"],
        creator: "@bartcagara",
        site: "@bartcagara"
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1
        }
    }
};

// "Periodical" is the schema.org type for serial publications like newsletters
// ("NewsletterService" is not part of the schema.org vocabulary)
const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Periodical",
    "name": "Founder's Fitness Brief",
    "description": DESCRIPTION,
    "url": "https://bartcagara.com/brief",
    "inLanguage": "en",
    "publisher": {
        "@type": "Person",
        "name": "Bart Cagara",
        "url": "https://bartcagara.com"
    },
    "audience": {
        "@type": "Audience",
        "audienceType": "Former-athlete founders and entrepreneurs"
    }
};

const READER_DM_ALT =
    "A LinkedIn message from a reader: \"I know I'm not a client. But your shit really speaks to me. Not sure you wanna hear that but it's true!! And one of my fav things is being a shredded dad on my summer hols.\" Below it, his mirror selfie.";

/**
 * Kyle-coached iteration of /briefing-optin. The signup page picks up where the LinkedIn post that sent the reader here
 * left off: same promise, same warning, same reader DM. The copy is Bart's,
 * except the sentence saying what the Brief is.
 */
export default function BriefPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div className="min-h-screen flex flex-col bg-gray-50 text-bleu-nuit">
                <header className="px-6 md:px-12">
                    <div className="max-w-6xl mx-auto h-[72px] md:h-24 [@media(max-height:500px)]:h-16 flex items-center justify-between border-b-2 border-bleu-nuit">
                        {/* SectionBadge's label with a 2px shadow instead of 4px */}
                        <span className="inline-block whitespace-nowrap bg-bleu-accent text-white font-mono text-xs uppercase tracking-tighter px-3 py-1 shadow-[2px_2px_0_0_var(--bleu-nuit)]">Founder&apos;s Fitness Brief</span>
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

                <main className="flex-1 flex items-center px-6 md:px-12 pt-10 pb-20 md:py-16 [@media(max-height:500px)]:py-6">
                    <div className="w-full max-w-6xl mx-auto grid lg:grid-cols-[minmax(0,1fr)_400px] gap-16 xl:gap-24 items-center">
                        <div className="max-w-[600px]">
                            <h1 className="text-[clamp(1.75rem,9.4vw,2.375rem)] md:text-[3.5rem] lg:text-[3rem] xl:text-[4rem] [@media(max-height:500px)]:text-[2.25rem] font-black tracking-[-0.04em] leading-[0.98] text-balance">
                                Get in shape{" "}
                                <span className="block text-bleu-accent">one last time.</span>
                            </h1>

                            <p className="mt-4 md:mt-6 text-lg md:text-2xl [@media(max-height:500px)]:mt-3 [@media(max-height:500px)]:text-lg leading-[1.45] text-pretty font-medium text-bleu-nuit/75 max-w-[30em]">
                                <strong className="block mb-1 font-bold text-bleu-nuit">For the founder whose life eats every fitness plan.</strong>
                                One email every Sunday to cut through the noise, get your mind right and know what to do next.
                            </p>

                            <div className="mt-10 md:mt-12 [@media(max-height:500px)]:mt-6">
                                <OptinForm
                                    submitLabel="Send me Sunday’s Brief"
                                    layout="joined"
                                    note={
                                        <p className="mt-6 text-sm leading-normal text-pretty text-bleu-nuit/60 max-w-[34em]">
                                            <span className="font-bold uppercase tracking-[-0.02em] text-bleu-nuit">Warning:</span>{" "}
                                            if you&apos;re after basic fitness tips, this ain&apos;t it. This is for men who fall off every time there&apos;s a trip, a merger or a sick kid.
                                        </p>
                                    }
                                />
                            </div>
                        </div>

                        <figure className="w-full max-w-[400px]">
                            <figcaption className="mb-3 text-sm font-bold uppercase tracking-[-0.02em] text-bleu-nuit/70">
                                DM from one of my readers
                            </figcaption>
                            <Image
                                src="/images/testimonials/reader-dm.webp"
                                alt={READER_DM_ALT}
                                width={900}
                                height={1038}
                                className="block w-full h-auto border-2 border-bleu-nuit shadow-brutal-md"
                            />
                        </figure>
                    </div>
                </main>
            </div>
        </>
    );
}
