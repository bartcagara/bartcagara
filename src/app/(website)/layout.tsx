import { CalScript } from "@/components/home/CalScript";
import { CalBookingTracker } from "@/components/analytics/CalBookingTracker";

/**
 * The homepage brings its own header and footer (the /brief and /quiz family);
 * the standard pages add the site navbar and footer in (pages)/layout.tsx.
 */
export default function WebsiteLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <CalScript />
            <CalBookingTracker />
            <main className="flex-1">
                {children}
            </main>
        </>
    );
}
