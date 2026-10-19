import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CalScript } from "@/components/home/CalScript";
import { CalBookingTracker } from "@/components/analytics/CalBookingTracker";

export default function WebsiteLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <CalScript />
            <CalBookingTracker />
            <Navbar />
            <main className="flex-1">
                {children}
            </main>
            <Footer />
        </>
    );
}
