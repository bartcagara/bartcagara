import Link from "next/link";
import styles from "@/components/home/homepage.module.css";

export default function NotFound() {
    return (
        <section className="max-w-3xl mx-auto px-6 py-20 text-center min-h-screen flex flex-col items-center justify-center">
            <h1 className="text-6xl font-bold mb-6 text-text-main">404</h1>
            <h2 className="text-3xl font-bold mb-4 text-text-main">Page Not Found</h2>
            <p className="text-xl text-text-secondary mb-12 max-w-md">
                Sorry, we couldn't find the page you're looking for.
            </p>
            <Link href="/" className={`${styles.btnCta} px-8 py-4 uppercase font-bold inline-block`}>
                Go Back Home
            </Link>
        </section>
    );
}
