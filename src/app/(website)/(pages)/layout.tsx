export default function StandardPageLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="max-w-3xl mx-auto px-6 pt-24 md:pt-32 pb-8 md:pb-16">
            {children}
        </div>
    );
}
