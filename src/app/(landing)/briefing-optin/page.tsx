import { OptinForm } from "@/components/newsletter/OptinForm";
import { SectionBadge } from "@/components/ui/SectionBadge";
import type { Metadata } from "next";
import Image from "next/image";

const TITLE = "Founder's Fitness Brief | For the founder whose life eats every fitness plan";
const DESCRIPTION =
    "Your last decade has been one giant restart. The Brief is one email a week on making it your last.";

export const metadata: Metadata = {
    title: TITLE,
    description: DESCRIPTION,
    authors: [{ name: "Bart Cagara", url: "https://bartcagara.com" }],
    creator: "Bart Cagara",
    publisher: "Bart Cagara",
    alternates: {
        canonical: "/briefing-optin"
    },
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://bartcagara.com/briefing-optin",
        siteName: "Founder Athlete OS",
        title: TITLE,
        description: DESCRIPTION,
        images: [
            {
                url: "/images/og-briefing.jpg",
                width: 1200,
                height: 630,
                alt: "Founder's Fitness Brief"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: TITLE,
        description: DESCRIPTION,
        images: ["/images/og-briefing.jpg"],
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
    "url": "https://bartcagara.com/briefing-optin",
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
 * The signup page picks up where the LinkedIn post that sent the reader here
 * left off: same promise, same warning, same reader DM. The copy is Bart's,
 * except the sentence saying what the Brief is.
 */
export default function BriefingOptinPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div className="min-h-screen flex flex-col bg-gray-50 text-bleu-nuit">
                <header className="px-6 md:px-12">
                    <div className="max-w-6xl mx-auto h-[72px] md:h-24 flex items-center justify-between border-b-2 border-bleu-nuit">
                        {/* SectionBadge carries mb-8 for section stacks; zero it in the bar */}
                        <div className="leading-none [&>span]:mb-0">
                            <SectionBadge>Founder&apos;s Fitness Brief</SectionBadge>
                        </div>
                        <span className="flex items-center gap-3 text-sm font-bold uppercase tracking-[-0.02em]">
                            <span className="hidden sm:inline">Bart Cagara</span>
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

                <main className="flex-1 flex items-center px-6 md:px-12 pt-10 pb-20 md:py-16">
                    <div className="w-full max-w-6xl mx-auto grid lg:grid-cols-[minmax(0,1fr)_400px] gap-16 xl:gap-24 items-center">
                        <div className="max-w-[600px]">
                            <h1 className="text-[clamp(2rem,9.6vw,2.375rem)] md:text-[3.5rem] lg:text-[3rem] xl:text-[4rem] font-black tracking-[-0.04em] leading-[0.98] text-balance">
                                For the founder whose life eats{" "}
                                <span className="block text-bleu-accent">every fitness plan.</span>
                            </h1>

                            <p className="mt-4 md:mt-6 text-lg md:text-2xl leading-[1.45] text-pretty font-medium text-bleu-nuit/75 max-w-[30em]">
                                Your last decade has been one giant restart. The Brief is one email a week on making it your last.
                            </p>

                            <div className="mt-10 md:mt-12">
                                <OptinForm
                                    submitLabel="Get the Brief"
                                    layout="joined"
                                    note={
                                        <p className="mt-6 text-sm leading-normal text-pretty text-bleu-nuit/60 max-w-[34em]">
                                            <span className="font-bold uppercase tracking-[-0.02em] text-bleu-nuit">Warning:</span>{" "}
                                            if you&apos;re after basic fitness tips and high-protein recipes, this ain&apos;t it.
                                        </p>
                                    }
                                />
                            </div>
                        </div>

                        <figure className="w-full max-w-[400px] mx-auto lg:mx-0">
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
