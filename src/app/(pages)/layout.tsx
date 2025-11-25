export default function StandardPageLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="max-w-3xl mx-auto px-6 pt-12 pb-24">
            {children}
        </div>
    );
}
