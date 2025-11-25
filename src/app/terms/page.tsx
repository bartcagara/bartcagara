import React from "react";
import { Navbar, Footer } from "@/components/layout";

import Link from "next/link";

export default function TermsPage() {
    return (
        <>
            <Navbar />
            <main className="max-w-4xl mx-auto px-6 py-12 prose prose-slate">
                <h1 className="text-3xl font-bold mb-8">Terms of Service</h1>
                <p>Last updated: {new Date().toLocaleDateString()}</p>

                <h2>1. Agreement to Terms</h2>
                <p>
                    These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and Dad with Style OÜ ("we", "us", or "our"), concerning your access to and use of the website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the "Site").
                </p>
                <p>
                    <strong>Company Details:</strong><br />
                    Dad with Style OÜ<br />
                    Sepapaja 6, 15551 Tallinn, Estonia
                </p>

                <h2>2. Intellectual Property Rights</h2>
                <p>
                    Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws and various other intellectual property rights and unfair competition laws of Estonia, foreign jurisdictions, and international conventions.
                </p>

                <h2>3. User Representations</h2>
                <p>
                    By using the Site, you represent and warrant that: (1) all registration information you submit will be true, accurate, current, and complete; (2) you will maintain the accuracy of such information and promptly update such registration information as necessary; (3) you have the legal capacity and you agree to comply with these Terms of Service; (4) you are not a minor in the jurisdiction in which you reside; (5) you will not access the Site through automated or non-human means, whether through a bot, script or otherwise; (6) you will not use the Site for any illegal or unauthorized purpose; and (7) your use of the Site will not violate any applicable law or regulation.
                </p>

                <h2>4. Governing Law</h2>
                <p>
                    These Terms shall be governed by and defined following the laws of Estonia. Dad with Style OÜ and yourself irrevocably consent that the courts of Estonia shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these terms.
                </p>

                <h2>5. Contact Us</h2>
                <p>
                    In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us via the form on our <Link href="/contact" className="text-accent-primary hover:underline">contact page</Link>.
                </p>
            </main>
            <Footer />
        </>
    );
}
