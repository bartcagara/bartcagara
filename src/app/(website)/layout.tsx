import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CalScript } from "@/components/home/CalScript";
import { CalFloatingButton } from "@/components/home/CalFloatingButton";

export default function WebsiteLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <CalScript />
            <Navbar />
            <main className="flex-1">
                {children}
            </main>
            <Footer />
            <CalFloatingButton />
        </>
    );
}
