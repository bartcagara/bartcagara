import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy | Bart Cagara",
    description: "Privacy Policy for Dad with Style OÜ. Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPage() {
    return (
        <div className="prose prose-slate text-gray-800 pt-24 md:pt-32">
            <h1 className="text-4xl font-bold mb-6 text-gray-900">Privacy Policy</h1>
            <p className="text-sm text-gray-500 mb-8 italic">Last updated: {new Date().toLocaleDateString()}</p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">1. Introduction</h2>
            <p className="mb-4 leading-relaxed">
                Dad with Style OÜ ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
            </p>
            <p className="mb-4 leading-relaxed">
                We are the Data Controller of your personal data.
            </p>
            <p className="mb-4 leading-relaxed">
                <strong>Company Details:</strong><br />
                Dad with Style OÜ<br />
                Sepapaja 6, 15551 Tallinn, Estonia
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">2. Collection of Your Information</h2>
            <p className="mb-4 leading-relaxed">
                We may collect information about you in a variety of ways. The information we may collect on the Site includes:
            </p>
            <ul>
                <li><strong>Personal Data:</strong> Personally identifiable information, such as your name, shipping address, email address, and telephone number, and demographic information, such as your age, gender, hometown, and interests, that you voluntarily give to us when you register with the Site or when you choose to participate in various activities related to the Site.</li>
                <li><strong>Derivative Data:</strong> Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">3. Use of Your Information</h2>
            <p className="mb-4 leading-relaxed">
                Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:
            </p>
            <ul>
                <li>Create and manage your account.</li>
                <li>Email you regarding your account or order.</li>
                <li>Fulfill and manage purchases, orders, payments, and other transactions related to the Site.</li>
                <li>Respond to product and customer service requests.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">4. Disclosure of Your Information</h2>
            <p className="mb-4 leading-relaxed">
                We may share information we have collected about you in certain situations. Your information may be disclosed as follows:
            </p>
            <ul>
                <li><strong>By Law or to Protect Rights:</strong> If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others, we may share your information as permitted or required by any applicable law, rule, or regulation.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">5. GDPR Rights</h2>
            <p className="mb-4 leading-relaxed">
                If you are located in the European Economic Area (EEA), you have certain rights regarding your personal data, including:
            </p>
            <ul>
                <li>The right to access, update, or delete the information we have on you.</li>
                <li>The right of rectification.</li>
                <li>The right to object.</li>
                <li>The right of restriction.</li>
                <li>The right to data portability.</li>
                <li>The right to withdraw consent.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">6. Contact Us</h2>
            <p className="mb-4 leading-relaxed">
                If you have questions or comments about this Privacy Policy, please contact us by filling out the form on our <Link href="/contact" className="text-blue-600 underline">contact page</Link>.
            </p>
        </div>
    );
}
