import Link from "next/link";
import type { Metadata } from "next";

const TITLE = "Website Terms | Founder Athlete OS";
const DESCRIPTION = "The terms for using this website, run by Dad with Style OÜ.";

export const metadata: Metadata = {
    title: TITLE,
    description: DESCRIPTION,
    alternates: { canonical: "/terms" },
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://bartcagara.com/terms",
        siteName: "Founder Athlete OS",
        title: TITLE,
        description: DESCRIPTION,
    },
    twitter: { card: "summary", title: TITLE, description: DESCRIPTION },
};

const H2 = ({ children }: { children: React.ReactNode }) => (
    <h2 className="text-2xl font-black mt-8 mb-4 text-bleu-nuit">{children}</h2>
);
const P = ({ children }: { children: React.ReactNode }) => <p className="mb-4 leading-relaxed">{children}</p>;

export default function TermsPage() {
    return (
        <article className="prose prose-slate text-bleu-nuit/80">
            <h1 className="text-title mb-6 text-bleu-nuit">Website Terms</h1>
            <p className="text-sm text-bleu-nuit/70 mb-8 italic">Last updated November 5, 2026.</p>

            <H2>Who we are</H2>
            <P>
                This website is run by Dad with Style OÜ, Sepapaja tn 6, Tallinn 15551, Estonia (registry code 14696867). These terms cover your use of the website. Coaching is governed by your coaching agreement, and the Stack app by <a href="https://getstack.to/terms" className="underline">its own terms</a>.
            </P>

            <H2>Using the website</H2>
            <P>
                You may read and share what is here for your own, non-commercial use. Don&rsquo;t misuse the site, try to break into it, or copy its content in bulk or with automated tools. The site&rsquo;s text, images, videos and marks belong to us or those who license them to us.
            </P>

            <H2>Information only</H2>
            <P>
                What you read here is general information, not medical advice or a promise of results. Our <Link href="/disclaimer" className="underline">disclaimer</Link> says more. Our <Link href="/privacy" className="underline">privacy notice</Link> says how we handle personal data.
            </P>

            <H2>Our responsibility</H2>
            <P>
                We work to keep the site accurate and available, but we can&rsquo;t promise it always is. We are fully responsible for harm we cause on purpose or through gross negligence, for death or injury we cause through our fault, and wherever the law doesn&rsquo;t let us limit it. Beyond that, as far as the law allows, we aren&rsquo;t responsible for loss arising from your use of this free website.
            </P>

            <H2>Law and disputes</H2>
            <P>
                Estonian law applies. If you use the site as a consumer, you keep the protections of the law where you live and can take a claim to the courts there. Write to us first through the <Link href="/contact" className="underline">contact page</Link> and we&rsquo;ll try to put it right.
            </P>
        </article>
    );
}
