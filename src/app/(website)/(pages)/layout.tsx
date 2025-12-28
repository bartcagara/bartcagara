export default function StandardPageLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="max-w-3xl mx-auto px-6 pt-24 md:pt-32 pb-24 md:pb-32">
            {children}
        </div>
    );
}
