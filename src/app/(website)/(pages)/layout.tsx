import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function StandardPageLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Navbar />
            <div className="max-w-3xl mx-auto px-6 pt-32 md:pt-40 pb-16 md:pb-24">
                {children}
            </div>
            <Footer />
        </>
    );
}
