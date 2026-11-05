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
                This website, the Founder&rsquo;s Fitness Brief newsletter and Founder Athlete OS coaching are run by Dad with Style OÜ, Sepapaja tn 6, Tallinn 15551, Estonia (registry code 14696867). We are the controller of the personal data described here under the EU General Data Protection Regulation (GDPR). Write to <a href="mailto:support@getstack.to" className="underline">support@getstack.to</a> or to that address. We answer within one month.
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
                <li><strong>What you give us:</strong> your name, email address and your answers on the booking form, including how you are doing physically and mentally, which can be health data. Cal.com holds the booking. We handle health data in your answers, and what you say about your health on the call, on the explicit consent you give when you book (Article 9(2)(a)); the rest is to take steps you asked for before a possible contract (Article 6(1)(b)).</li>
                <li><strong>What happens next:</strong> Google Calendar and Google Meet hold the event, Zapier receives your booking details, without your answers about your health, and passes your email address to Kit, which sends you reminders about the call. Booking also adds you to our newsletter, which you can leave at any time with the unsubscribe link in every email.</li>
                <li><strong>How we prepare:</strong> an AI assistant (Claude, by Anthropic) writes a short brief for the call from your booking answers, your LinkedIn profile as our own signed-in account sees it, earlier emails, bookings and LinkedIn messages with us, and whether you read our newsletter. A copy of the profile is kept with the brief. It works under our Claude subscription on Anthropic&rsquo;s consumer terms, not a data processing agreement, with the setting that lets Anthropic train on it switched off. The brief is kept in our Google Drive. This is our legitimate interest in preparing for a useful call (Article 6(1)(f)), and you can object. No decision about you is made by software.</li>
                <li><strong>The call:</strong> calls are recorded and transcribed, and you can ask us not to record yours. Google records and transcribes it and writes notes in our Google Workspace account (older calls were recorded by Fathom), and we keep them to prepare for later calls and improve how we work.</li>
                <li><strong>A do-not-contact list:</strong> we keep a short list of people we won&rsquo;t contact or work with, with the reason and date.</li>
                <li><strong>Our content:</strong> what you tell us by email, on a call or in a message may shape what we write, always without your name and never using what you say about your health. This is our legitimate interest, and you can object.</li>
            </UL>

            <H2>If you are a coaching client</H2>
            <UL>
                <li><strong>Your contract and payment:</strong> your name and email address, and your payment through Stripe. Stripe passes your name and email address to Zapier, which asks Stack to make your account and send your invite. Our contract with you (Article 6(1)(b)) and our accounting duties (Article 6(1)(c)).</li>
                <li><strong>Your coach sees your data.</strong> In the coaching console your coach sees everything you enter in Stack, photos included, and keeps notes about you that the app doesn&rsquo;t show you.</li>
                <li><strong>Calls:</strong> recorded and transcribed by Google in our Google Workspace account. If you switch on call notes in Stack, Stack also sends the transcript to Anthropic under a data processing agreement, and keeps only the coaching points. To switch them off, tell your coach or write to us.</li>
                <li><strong>Messages:</strong> your WhatsApp messages with your coach are saved to your coaching record. WhatsApp handles them under its own terms.</li>
                <li><strong>Call preparation and coaching work:</strong> before each call, your coach reads a brief written by an AI assistant (Claude, by Anthropic). It reads your records in Stack, your call notes, your coach&rsquo;s notes, your WhatsApp messages and your call transcripts. Your daily steps from Apple Health are included only if you said yes in the iPhone app. The same assistant helps with other coaching work, such as a summary of your week or a letter to you. Working files are kept on our computer and in Apple iCloud; notes and messages are also kept in Stack&rsquo;s database in Ireland, locked so that no login can open them and only the assistant reads them. This runs on Anthropic&rsquo;s consumer terms, not a data processing agreement: training is switched off, and conversations stay until we delete them and are removed within 30 days after that. It rests on the explicit consent you give when you start coaching (Article 9(2)(a)). You can withdraw it at any time; your coach then prepares without it and nothing else changes.</li>
                <li><strong>Quality checks on the app:</strong> an AI assistant on the same terms checks what Stack showed you, to find mistakes in the app. It reads what Stack showed over the past week and the figures behind it, your last two call summaries, your goal and target history, any diary row you flagged, and your problem reports, with initials in place of your name. It also sees which buttons were tapped and whether they responded, and whether entries reached our servers. Its notes use initials or an internal number and are kept in GitHub. Apple Health figures reach it only if you said yes in the iPhone app. It rests on the same consent.</li>
                <li><strong>Our content:</strong> we write our posts and newsletter from what we learn in coaching. With your consent, an AI assistant on the same terms may read your calls, messages and records to find themes. Anything we publish never names you, except a testimonial you approved, and we use your photo, a screenshot or your words only with your separate written consent. Apple Health data is never used for this. You can say no or withdraw at any time, with no effect on your coaching. We also draw on clients&rsquo; situations, without names, to prepare for sales calls.</li>
            </UL>
            <P>
                Your health data, including what you say on calls and in messages, is handled on the basis of your explicit consent (Article 9(2)(a)), which you can withdraw at any time. Withdrawing it ends the parts of coaching that depend on it.
            </P>

            <H2>Who receives your data</H2>
            <P>
                Only the companies named above, our accountants (Xolo), who receive accounting records, and those who run Stack, listed in <a href="https://getstack.to/subprocessors.html" className="underline">its list of service providers</a>, and authorities where the law requires it. We never sell your data.
            </P>
            <P>
                Several of these companies are based in the United States. Those transfers rest on the European Commission&rsquo;s standard contractual clauses or the EU&ndash;US Data Privacy Framework, except where a company works under consumer terms as this notice says. There, no such contract exists, and the transfer rests only on your explicit consent, given after being told of that risk (Article 49(1)(a)).
            </P>

            <H2>How long we keep it</H2>
            <UL>
                <li><strong>Website visits:</strong> available to us for one year.</li>
                <li><strong>Emails to us:</strong> 24 months.</li>
                <li><strong>Newsletter:</strong> until you unsubscribe, and a record of that so we don&rsquo;t email you again.</li>
                <li><strong>Sales calls, if you don&rsquo;t become a client:</strong> 24 months after our last contact.</li>
                <li><strong>Coaching records:</strong> 24 months after coaching ends, unless you come back or ask us to delete them sooner. A dated note that a call took place, and with whom, stays as our business record unless you ask us to delete it too.</li>
                <li><strong>The do-not-contact list:</strong> at most five years, and you can ask us to review it.</li>
                <li><strong>Notes from the quality checks:</strong> 12 months.</li>
                <li><strong>Accounting records:</strong> as long as Estonian accounting law requires, currently seven years.</li>
            </UL>

            <H2>Your rights</H2>
            <P>
                You can ask for a copy of your data, in a file other apps can read; ask us to correct or delete it; restrict how we use it; object to anything we do on our legitimate interest; and withdraw consent at any time, without affecting what was done before. Write to <a href="mailto:support@getstack.to" className="underline">support@getstack.to</a>. You can complain to the Estonian Data Protection Inspectorate (Andmekaitse Inspektsioon, Tatari 39, 10134 Tallinn, aki.ee) or the data protection authority where you live.
            </P>

            <H2>Changes to this notice</H2>
            <P>
                When this notice changes, the date at the top changes. If a change affects clients, we tell them before it applies.
            </P>
        </article>
    );
}
