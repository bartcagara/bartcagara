import Link from "next/link";

export default function NotFound() {
    return (
        <main className="max-w-3xl mx-auto px-6 py-20 text-center min-h-screen flex flex-col items-center justify-center">
            <h1 className="text-6xl font-bold mb-6 text-bleu-nuit">404</h1>
            <p className="text-3xl font-bold mb-4 text-bleu-nuit">Page Not Found</p>
            <p className="text-xl text-grey-light mb-12 max-w-md">
                Sorry, we couldn&apos;t find the page you&apos;re looking for.
            </p>
            <Link
                href="/"
                className="inline-block bg-bleu-nuit text-white font-bold uppercase px-8 py-4 border-2 border-bleu-nuit shadow-brutal-sm hover:shadow-none hover-translate-brutal transition-brutal"
            >
                Go Back Home
            </Link>
        </main>
    );
}
