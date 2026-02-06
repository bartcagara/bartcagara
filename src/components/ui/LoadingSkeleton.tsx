/**
 * LoadingSkeleton - Animated placeholder for loading content
 * Improves perceived performance with shimmer effect
 */

interface LoadingSkeletonProps {
  className?: string;
  variant?: "section" | "card" | "text" | "image";
}

export function LoadingSkeleton({
  className = "",
  variant = "section"
}: LoadingSkeletonProps) {
  const baseClasses = "animate-pulse bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 bg-[length:200%_100%]";

  const variants = {
    section: "min-h-[600px]",
    card: "min-h-[300px] rounded-lg",
    text: "h-4 rounded",
    image: "aspect-video rounded-lg",
  };

  return (
    <div
      className={`${baseClasses} ${variants[variant]} ${className}`}
      role="status"
      aria-label="Loading..."
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
}

/**
 * SectionSkeleton - Full section loading placeholder with content hints
 */
export function SectionSkeleton({
  minHeight = "min-h-[600px]",
  bgColor = "bg-white"
}: {
  minHeight?: string;
  bgColor?: string;
}) {
  return (
    <div
      className={`${bgColor} ${minHeight} py-16 px-4`}
      role="status"
      aria-label="Loading section..."
    >
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Title skeleton */}
        <div className="space-y-4 text-center">
          <div className="h-3 w-24 mx-auto bg-gray-200 rounded animate-pulse" />
          <div className="h-10 w-3/4 mx-auto bg-gray-200 rounded animate-pulse" />
          <div className="h-6 w-1/2 mx-auto bg-gray-200 rounded animate-pulse" />
        </div>

        {/* Content skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {[1, 2, 3].map((i) => (
            <div key={i} className="space-y-4 p-6 bg-gray-50 rounded-lg">
              <div className="h-12 w-12 bg-gray-200 rounded-full animate-pulse" />
              <div className="h-6 w-3/4 bg-gray-200 rounded animate-pulse" />
              <div className="space-y-2">
                <div className="h-4 w-full bg-gray-200 rounded animate-pulse" />
                <div className="h-4 w-5/6 bg-gray-200 rounded animate-pulse" />
              </div>
            </div>
          ))}
        </div>
      </div>
      <span className="sr-only">Loading...</span>
    </div>
  );
}
