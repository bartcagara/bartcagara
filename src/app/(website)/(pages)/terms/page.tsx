import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms of Service | Bart Cagara",
    description: "Terms of Service for Dad with Style OÜ. Read our terms and conditions for using our website and services.",
};

export default function TermsPage() {
    return (
        <div className="prose prose-slate text-gray-800 pt-24 md:pt-32">
            <h1 className="text-4xl font-bold mb-6 text-gray-900">Terms of Service</h1>
            <p className="text-sm text-gray-500 mb-8 italic">Last updated: {new Date().toLocaleDateString()}</p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">1. Agreement to Terms</h2>
            <p className="mb-4 leading-relaxed">
                These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and Dad with Style OÜ ("we", "us", or "our"), concerning your access to and use of the website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the "Site").
            </p>
            <p className="mb-4 leading-relaxed">
                <strong>Company Details:</strong><br />
                Dad with Style OÜ<br />
                Sepapaja 6, 15551 Tallinn, Estonia
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">2. Intellectual Property Rights</h2>
            <p className="mb-4 leading-relaxed">
                Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws and various other intellectual property rights and unfair competition laws of Estonia, foreign jurisdictions, and international conventions.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">3. User Representations</h2>
            <p className="mb-4 leading-relaxed">
                By using the Site, you represent and warrant that: (1) all registration information you submit will be true, accurate, current, and complete; (2) you will maintain the accuracy of such information and promptly update such registration information as necessary; (3) you have the legal capacity and you agree to comply with these Terms of Service; (4) you are not a minor in the jurisdiction in which you reside; (5) you will not access the Site through automated or non-human means, whether through a bot, script or otherwise; (6) you will not use the Site for any illegal or unauthorized purpose; and (7) your use of the Site will not violate any applicable law or regulation.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">4. Governing Law</h2>
            <p className="mb-4 leading-relaxed">
                These Terms shall be governed by and defined following the laws of Estonia. Dad with Style OÜ and yourself irrevocably consent that the courts of Estonia shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these terms.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">5. Contact Us</h2>
            <p className="mb-4 leading-relaxed">
                In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us via the form on our <Link href="/contact" className="text-blue-600 underline">contact page</Link>.
            </p>
        </div>
    );
}
