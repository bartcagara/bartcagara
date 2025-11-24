import React from "react";
import { Navbar, Footer } from "@/components/home";

export default function DisclaimerPage() {
    return (
        <>
            <Navbar />
            <main className="max-w-4xl mx-auto px-6 py-12 prose prose-slate">
                <h1 className="text-3xl font-bold mb-8">Disclaimer</h1>
                <p>Last updated: {new Date().toLocaleDateString()}</p>

                <h2>1. Website Disclaimer</h2>
                <p>
                    The information provided by Dad with Style ÖU ("we", "us", or "our") on this website (the "Site") is for general informational purposes only. All information on the Site is provided in good faith, however we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the Site.
                </p>

                <h2>2. Professional Disclaimer</h2>
                <p>
                    The Site cannot and does not contain medical or health advice. The fitness and nutrition information is provided for general informational and educational purposes only and is not a substitute for professional advice. Accordingly, before taking any actions based upon such information, we encourage you to consult with the appropriate professionals. We do not provide any kind of medical or health advice. THE USE OR RELIANCE OF ANY INFORMATION CONTAINED ON THE SITE IS SOLELY AT YOUR OWN RISK.
                </p>

                <h2>3. Testimonials Disclaimer</h2>
                <p>
                    The Site may contain testimonials by users of our products and/or services. These testimonials reflect the real-life experiences and opinions of such users. However, the experiences are personal to those particular users, and may not necessarily be representative of all users of our products and/or services. We do not claim, and you should not assume, that all users will have the same experiences. YOUR INDIVIDUAL RESULTS MAY VARY.
                </p>
            </main>
            <Footer />
        </>
    );
}
