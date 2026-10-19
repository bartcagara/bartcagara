import { CalScript } from "@/components/home/CalScript";
import { CalBookingTracker } from "@/components/analytics/CalBookingTracker";

export default function LandingLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            {/* Initialize the Cal.com embed so data-cal-* buttons (e.g. the
                opt-in success CTA) open the booking popup, matching the rest
                of the site. */}
            <CalScript />
            <CalBookingTracker />
            <main>
                {children}
            </main>
        </>
    );
}
