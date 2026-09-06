import { CTAButton } from "@/components/ui/CTAButton";

export default function NotFound() {
    return (
        <main className="max-w-3xl mx-auto px-6 py-20 text-center min-h-screen flex flex-col items-center justify-center">
            <p className="text-eyebrow text-bleu-accent mb-4">Error 404</p>
            <h1 className="text-h2 mb-6 text-bleu-nuit">Page Not Found</h1>
            <p className="text-lead text-grey-light mb-12 max-w-md">
                Sorry, we couldn&apos;t find the page you&apos;re looking for.
            </p>
            <CTAButton href="/">Go Back Home</CTAButton>
        </main>
    );
}
