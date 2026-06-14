import { CalScript } from "@/components/home/CalScript";

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
            <main>
                {children}
            </main>
        </>
    );
}
