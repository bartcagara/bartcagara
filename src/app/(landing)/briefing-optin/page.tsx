import { OptinForm } from "@/components/newsletter/OptinForm";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Founder Athlete Briefing | Weekly Newsletter",
    description: "Real client breakthroughs and personal insights on fitness, guilt, and workaholism. For former-athlete founders. One email every Sunday.",
    keywords: [
        "Founder Newsletter",
        "Business Travel Fitness",
        "Founder Health",
        "Former Athletes",
        "Founder Performance",
        "Bart Cagara Newsletter"
    ],
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
        title: "Founder Athlete Briefing | Weekly Newsletter",
        description: "Real client breakthroughs and personal insights. For former-athlete founders. One email every Sunday.",
        images: [
            {
                url: "/images/briefing-og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Founder Athlete Briefing - Weekly newsletter for former-athlete founders"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "Founder Athlete Briefing | Weekly Newsletter",
        description: "Real client breakthroughs and personal insights. For former-athlete founders. One email every Sunday.",
        images: ["/images/briefing-og-image.jpg"],
        creator: "@bartcagara"
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

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsletterService",
    "name": "Founder Athlete Briefing",
    "description": "Weekly newsletter with client breakthroughs and personal insights for former-athlete founders",
    "provider": {
        "@type": "Person",
        "name": "Bart Cagara"
    },
    "audience": "Former-athlete founders and entrepreneurs"
};

export default function BriefingOptinPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div className="min-h-screen bg-white flex flex-col">
                <div className="flex flex-col md:flex-row min-h-screen">
                    {/* Left Column: Heading Only */}
                    <div className="w-full md:w-1/2 bg-bleu-nuit flex flex-col justify-center px-6 py-12 md:p-16 lg:p-24">
                        <div className="max-w-xl">
                            {/* BADGE */}
                            <span className="inline-block bg-bleu-accent text-white font-mono text-xs uppercase tracking-tighter px-3 py-1 mb-8 shadow-[4px_4px_0px_0px_white]">
                                The Newsletter
                            </span>
                            {/* HEADLINE - Optical alignment tweaks */}
                            <h1 className="text-[2.75rem] md:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.9] text-white mb-6 md:mb-8">
                                Founder <br />
                                Athlete <br />
                                <span className="text-bleu-accent">Briefing</span>
                            </h1>
                            {/* SUBHEAD - Lighter weight, cleaner size */}
                            <p className="text-lg md:text-2xl text-bleu-fumee/90 font-medium leading-relaxed max-w-sm md:max-w-md">
                                For the former-athlete founder building a business he loves in a body he hates.
                            </p>
                        </div>
                    </div>

                    {/* Right Column: Content & Form */}
                    <div className="w-full md:w-1/2 bg-gray-50 flex flex-col justify-center px-6 py-12 md:p-16 lg:p-24">
                        <div className="max-w-md w-full">
                            {/* WARNING */}
                            <p className="text-lg md:text-xl text-bleu-nuit/40 font-bold leading-tight mb-10">
                                <span className="uppercase tracking-tighter">Warning:</span> You aren&apos;t getting protein recipes, office workouts, or cheap lectures about consistency.
                            </p>

                            {/* INTRO COPY */}
                            <div className="mb-10">
                                <p className="text-lg md:text-xl text-bleu-nuit font-bold leading-tight">
                                    What you get:
                                </p>
                            </div>

                            {/* BULLETS */}
                            <div className="space-y-6 mb-12">
                                <div className="pl-6 border-l-4 border-bleu-nuit">
                                    <p className="text-lg md:text-xl text-bleu-nuit font-semibold leading-tight">
                                        Documented stories of founders &amp; execs who finally lost 30+ lbs &mdash; after every program failed them.
                                    </p>
                                </div>

                                <div className="pl-6 border-l-4 border-bleu-nuit">
                                    <p className="text-lg md:text-xl text-bleu-nuit font-semibold leading-tight">
                                        The identity shifts &mdash; not habit hacks &mdash; that resurrect you after years of neglect and outlast any schedule crisis.
                                    </p>
                                </div>

                                <div className="pl-6 border-l-4 border-bleu-nuit">
                                    <p className="text-lg md:text-xl text-bleu-nuit font-semibold leading-tight">
                                        Me &mdash; still fighting the battles every high performer faces privately: obsession with work, lack of presence, fear of failing the people who depend on you.
                                    </p>
                                </div>
                            </div>

                            <OptinForm />
                        </div>
                    </div>
                </div>

                {/* Newsletter Subscriber Testimonial */}
                <section className="px-6 py-16 md:py-20 bg-white border-t-2 border-bleu-nuit" aria-labelledby="testimonial-title">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-16 md:mb-20">
                            <h2 id="testimonial-title" className="text-2xl md:text-5xl font-black uppercase tracking-tighter text-bleu-nuit leading-tight mb-4">
                                &ldquo;Your shit really speaks to me.&rdquo;
                            </h2>
                            <p className="text-lg md:text-2xl font-medium text-bleu-nuit/60">
                                DM from a founder who reads the Briefing every Sunday.
                            </p>
                        </div>
                        <div className="flex justify-center">
                            <Image
                                src="/images/newsletter-subscriber-dm.jpg"
                                alt="Unsolicited DM from newsletter subscriber - founder-athlete testimonial"
                                width={800}
                                height={1000}
                                quality={90}
                                className="w-full max-w-[800px] h-auto shadow-[4px_4px_0px_0px_var(--bleu-nuit)] md:shadow-[8px_8px_0px_0px_var(--bleu-nuit)] border-2 border-bleu-nuit"
                                sizes="(max-width: 768px) 100vw, 800px"
                            />
                        </div>
                    </div>
                </section>

                {/* About Section */}
                <section className="py-24 md:py-32 border-t-2 border-bleu-nuit bg-white text-bleu-nuit" aria-labelledby="about-title">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="mb-24">
                            <span className="inline-block bg-bleu-accent text-white font-mono text-xs uppercase tracking-tighter px-3 py-1 mb-8 shadow-[4px_4px_0px_0px_var(--bleu-nuit)]">
                                The Coach
                            </span>
                            <h2 id="about-title" className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] text-bleu-nuit">
                                WHO THE FUCK<br />IS BART?
                            </h2>
                            <p className="text-2xl md:text-3xl font-medium text-bleu-nuit/70 mt-8 max-w-2xl">
                                Fair question.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-12 md:gap-32 items-start">
                            {/* Image */}
                            <div className="p-4 border-2 border-bleu-nuit bg-white shadow-[8px_8px_0px_0px_var(--bleu-nuit)]">
                                <div className="aspect-[4/5] relative border-2 border-bleu-nuit">
                                    <Image
                                        src="/images/home/bart-and-son-briefing.jpg"
                                        alt="Bart Cagara with his son"
                                        fill
                                        loading="lazy"
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />
                                </div>
                            </div>

                            {/* Content */}
                            <div className="space-y-8 text-xl md:text-2xl font-medium leading-relaxed text-bleu-nuit/80">
                                <p>I was an athletic kid. Sports was identity.</p>
                                <p>College changed that. Training fell off. By the time I graduated, the body was different.</p>
                                <p>Then came years of trying to build businesses. No mission. No purpose. Everything I touched failed. The body was just the part that showed it on the outside.</p>
                                <p>Tail between my legs, I took a job at a fitness startup.</p>
                                <p>It rebuilt me. Surrounded by coaches and nutritionists who knew things I didn&apos;t, I went after it - the body, the mind, the sense of purpose I&apos;d lost. For the first time in years, I recognized myself again.</p>
                                <p>That&apos;s when I built this.</p>
                                <p className="text-2xl md:text-3xl text-bleu-nuit font-black leading-tight">I&apos;ve been coaching founders and former athletes since 2019. The guys I always hit it off with were like me - athletic kids who built a business, body paid the price, not quite themselves in their own skin. Privately fighting demons that slowly kill their presence and their confidence.</p>
                                <p className="text-2xl md:text-3xl text-bleu-nuit font-black leading-tight">My son is watching. I built this so he grows up with a dad who&apos;s actually himself.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Back to Main Site */}
                <nav className="py-6 text-center border-t border-bleu-nuit/10" aria-label="Back to main site">
                    <Link href="/" className="text-sm text-bleu-nuit/50 hover:text-bleu-accent transition-colors font-medium">
                        &larr; Founder Athlete OS
                    </Link>
                </nav>
            </div>
        </>
    );
}
