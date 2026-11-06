import type { Metadata } from "next";

const TITLE = "Privacy Notice | Founder Athlete OS";
const DESCRIPTION = "How Dad with Style OÜ handles personal data for this website, the newsletter, sales calls and Founder Athlete OS coaching.";

export const metadata: Metadata = {
    title: TITLE,
    description: DESCRIPTION,
    alternates: { canonical: "/privacy" },
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://bartcagara.com/privacy",
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
const UL = ({ children }: { children: React.ReactNode }) => <ul className="list-disc pl-6 mb-4 space-y-2">{children}</ul>;

export default function PrivacyPage() {
    return (
        <article className="prose prose-slate text-bleu-nuit/80">
            <h1 className="text-title mb-6 text-bleu-nuit">Privacy Notice</h1>
            <p className="text-sm text-bleu-nuit/70 mb-8 italic">Last updated November 5, 2026.</p>

            <H2>Who we are</H2>
            <P>
                This website, the Founder&rsquo;s Fitness Brief newsletter and Founder Athlete OS coaching are run by Dad with Style OÜ, Sepapaja tn 6, Tallinn 15551, Estonia (registry code 14696867). We are the controller of the personal data described here under the EU General Data Protection Regulation (GDPR). Write to <a href="mailto:support@getstack.to" className="underline">support@getstack.to</a> or to the address above. We answer within one month.
            </P>
            <P>
                Coaching clients use the Stack app, which we also make. Its <a href="https://getstack.to/privacy" className="underline">privacy policy</a> covers the app; this notice covers the coaching around it. Our services are for adults, and we don&rsquo;t knowingly hold data about anyone under 18.
            </P>

            <H2>Visiting this website</H2>
            <P>
                We use PostHog (EU) to learn which pages and links work: the pages you open, the post or link that brought you, your browser, device and language, and your internet address. It stores nothing on your device and never reads the words on buttons or what you type, and visitors aren&rsquo;t identified by name. Cloudflare delivers the site and protects it against attacks. We rely on our legitimate interest in running and improving the site (Article 6(1)(f)), and you can object.
            </P>
            <P>
                Cal.com loads when you open a booking calendar, or scroll to one, and YouTube when you press play on a video. Each sees your internet address and works under its own terms. Cal.com sets a security cookie and runs its own error tracking and analytics.
            </P>

            <H2>Writing to us</H2>
            <P>
                If you email us, we use your message and address to answer you. Our legitimate interest in replying is the basis (Article 6(1)(f)).
            </P>

            <H2>The newsletter</H2>
            <P>
                When you sign up, Kit receives your email address and the page you signed up on. You confirm by email, and we send you the newsletter and related emails on the basis of your consent (Article 6(1)(a)). We record what you open and click, to judge what is useful. Every email has an unsubscribe link, which takes effect at once.
            </P>

            <H2>Booking a Restart Audit call</H2>
            <UL>
                <li><strong>What you give us:</strong> your name, email address and your answers on the booking form, including how you are doing physically and mentally, which can be health data. We use them only to prepare for and hold the call. Cal.com holds the booking. This is to take steps you asked for before a possible contract (Article 6(1)(b)).</li>
                <li><strong>What happens next:</strong> Google Calendar and Google Meet hold the event, and Zapier receives your booking details and passes your email address to Kit, which sends you reminders about the call. If your booking&rsquo;s time zone is outside the EU and UK, booking also adds you to our newsletter, on our legitimate interest in keeping in touch with people who asked to talk to us (Article 6(1)(f)). You can leave at any time with the unsubscribe link in every email.</li>
                <li><strong>How we prepare:</strong> an AI model (Claude, by Anthropic, under a data processing agreement, with no training on it) writes a short brief for the call from your booking answers and your LinkedIn profile as our own signed-in account sees it. A copy of the profile is kept with the brief, and the brief is emailed to us. This is our legitimate interest in preparing for a useful call (Article 6(1)(f)), and you can object. No decision about you is made by software.</li>
                <li><strong>The call:</strong> calls are recorded and transcribed, and you can ask us not to record yours. Google records and transcribes it and writes notes in our Google Workspace account (older calls were recorded by Fathom), and we keep them to prepare for later calls and improve how we work. We record on our legitimate interest in an accurate record of the call (Article 6(1)(f)). Fathom (US) still holds the older recordings until we delete them.</li>
                <li><strong>A do-not-contact list:</strong> we keep a short list of people we won&rsquo;t contact or work with, with the reason and date. This is our legitimate interest in respecting those choices (Article 6(1)(f)).</li>
                <li><strong>Our content:</strong> sales calls are never used for our posts or newsletter.</li>
            </UL>

            <H2>If you are a coaching client</H2>
            <UL>
                <li><strong>Your contract and payment:</strong> your name and email address, and your payment through Stripe. Stripe passes your name and email address to Zapier, which asks Stack to make your account and send your invite. Our contract with you (Article 6(1)(b)) and our accounting duties (Article 6(1)(c)).</li>
                <li><strong>Your coach sees your data.</strong> In the coaching console your coach sees everything you enter in Stack, photos included, and keeps notes about you that the app doesn&rsquo;t show you.</li>
                <li><strong>Calls:</strong> recorded and transcribed by Google in our Google Workspace account, and you can ask us not to record yours. If you switch on call notes in Stack, Stack also sends the transcript to Anthropic under a data processing agreement, and keeps only the coaching points. To switch them off, use Settings in Stack, or tell your coach.</li>
                <li><strong>Messages:</strong> your WhatsApp messages with your coach are saved to your coaching record. WhatsApp handles them under its own terms.</li>
                <li><strong>Call preparation and your record:</strong> before each call, your coach reads a short brief, and after each call your coaching record is updated. Stack&rsquo;s own server writes both with an AI model (Claude, by Anthropic, under a data processing agreement, with no training on it), from your records in Stack, your call notes, your coach&rsquo;s notes, your WhatsApp messages and your call transcripts. Your figures in the brief come from Stack itself, and your Apple Health steps only if you said yes in the iPhone app. If you haven&rsquo;t switched on call notes, nothing of yours is sent to the model and your brief holds only your numbers.</li>
                <li><strong>Our own working files:</strong> your coach keeps working files on our computer, in encrypted Apple iCloud storage, and may use an AI assistant (Claude, by Anthropic) for coaching work, such as a summary of your week or a letter to you. That assistant works on Anthropic&rsquo;s standard terms, with training switched off; deleted conversations are removed within 30 days. You can object at any time, and your coach then works without it.</li>
                <li><strong>Quality checks on the app:</strong> they work on test accounts and on counts with nothing about who, as Stack&rsquo;s privacy policy says. To fix a food problem, an AI tool may look at food entries without your name.</li>
                <li><strong>Our content:</strong> we write our posts and newsletter from what we learn in coaching. Only if you agree, Stack&rsquo;s server reads your calls and messages to find themes, with names, figures and health details taken out. We ask your written permission before anything about you is published, such as your words, a result or a screenshot of your progress, and it never names you or shows your face. Apple Health data is never used for this. You can say no or withdraw at any time, with no effect on your coaching.</li>
            </UL>
            <P>
                Your health data, including what you say on calls and in messages, is handled on the basis of your explicit consent (Article 9(2)(a)), which you can withdraw at any time. Withdrawing it ends the parts of coaching that depend on it.
            </P>

            <H2>Who receives your data</H2>
            <P>
                Only the companies named above, our accountants (Xolo), who receive accounting records, and those who run Stack, listed in <a href="https://getstack.to/subprocessors.html" className="underline">its list of service providers</a>, and authorities where the law requires it. We never sell your data.
            </P>
            <P>
                Several of these companies are based in the United States. Those transfers rest on the European Commission&rsquo;s standard contractual clauses or the EU&ndash;US Data Privacy Framework, except for the AI assistant used for our own working files, which works on Anthropic&rsquo;s consumer terms with no data processing agreement.
            </P>

            <H2>How long we keep it</H2>
            <UL>
                <li><strong>Website visits:</strong> available to us for one year.</li>
                <li><strong>Emails to us:</strong> 24 months.</li>
                <li><strong>Newsletter:</strong> until you unsubscribe, and a record of that so we don&rsquo;t email you again.</li>
                <li><strong>Sales calls, if you don&rsquo;t become a client:</strong> 24 months after our last contact.</li>
                <li><strong>Coaching records:</strong> 24 months after coaching ends, unless you come back or ask us to delete them sooner. A dated note that a call took place, and with whom, stays as our business record unless you ask us to delete it too.</li>
                <li><strong>The do-not-contact list:</strong> at most five years, and you can ask us to review it.</li>
                                <li><strong>Accounting records:</strong> as long as Estonian accounting law requires, currently seven years.</li>
            </UL>

            <H2>Your rights</H2>
            <P>
                You can ask for a copy of your data, in a file other apps can read; ask us to correct or delete it; restrict how we use it; object to anything we do on our legitimate interest; and withdraw consent at any time, without affecting what was done before. You don&rsquo;t have to give us any data. Without your email address we can&rsquo;t send the newsletter or book your call, and without the details in your coaching agreement we can&rsquo;t coach you. Write to <a href="mailto:support@getstack.to" className="underline">support@getstack.to</a>. You can complain to the Estonian Data Protection Inspectorate (Andmekaitse Inspektsioon, Tatari 39, 10134 Tallinn, aki.ee) or the data protection authority where you live.
            </P>

            <H2>Changes to this notice</H2>
            <P>
                When this notice changes, the date at the top changes. If a change affects clients, we tell them before it applies.
            </P>
        </article>
    );
}
