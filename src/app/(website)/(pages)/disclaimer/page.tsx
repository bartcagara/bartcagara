import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Disclaimer | Bart Cagara",
    description: "Website and professional disclaimer for Dad with Style OÜ fitness and nutrition services.",
};

export default function DisclaimerPage() {
    return (
        <article className="prose prose-slate text-gray-800">
            <h1 className="text-4xl font-bold mb-6 text-gray-900">Disclaimer</h1>
            <p className="text-sm text-gray-500 mb-8 italic">Last updated: {new Date().toLocaleDateString()}</p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">1. Website Disclaimer</h2>
            <p className="mb-4 leading-relaxed">
                The information provided by Dad with Style OÜ ("we", "us", or "our") on this website (the "Site") is for general informational purposes only. All information on the Site is provided in good faith, however we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the Site.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">2. Professional Disclaimer</h2>
            <p className="mb-4 leading-relaxed">
                The Site cannot and does not contain medical or health advice. The fitness and nutrition information is provided for general informational and educational purposes only and is not a substitute for professional advice. Accordingly, before taking any actions based upon such information, we encourage you to consult with the appropriate professionals. We do not provide any kind of medical or health advice. THE USE OR RELIANCE OF ANY INFORMATION CONTAINED ON THE SITE IS SOLELY AT YOUR OWN RISK.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">3. Testimonials Disclaimer</h2>
            <p className="mb-4 leading-relaxed">
                The Site may contain testimonials by users of our products and/or services. These testimonials reflect the real-life experiences and opinions of such users. However, the experiences are personal to those particular users, and may not necessarily be representative of all users of our products and/or services. We do not claim, and you should not assume, that all users will have the same experiences. YOUR INDIVIDUAL RESULTS MAY VARY.
            </p>
        </article>
    );
}
