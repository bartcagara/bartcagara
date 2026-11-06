import { CalScript } from "@/components/home/CalScript";
import { CalBookingTracker } from "@/components/analytics/CalBookingTracker";

export default function LandingLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            {/* Makes data-cal-* buttons (e.g. the opt-in success CTA) open the
                booking popup, loading Cal.com on that press. */}
            <CalScript />
            <CalBookingTracker />
            <main>
                {children}
            </main>
        </>
    );
}
