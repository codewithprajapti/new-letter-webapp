export default function NewsDetailSkeleton() {
  return (
    <div className="flex flex-col gap-5 animate-pulse">
      {/* Hero Image Skeleton */}
      <div className="relative w-full aspect-21/9 overflow-hidden rounded-2xl bg-gray-300" />

      {/* Title Skeleton */}
      <div className="space-y-2">
        <div className="h-6 md:h-8 bg-gray-300 rounded w-11/12" />
        <div className="h-6 md:h-8 bg-gray-300 rounded w-8/12" />
      </div>

      {/* Meta Info Skeleton */}
      <div className="flex flex-wrap gap-5">
        <div className="h-4 bg-gray-300 rounded w-32" />
        <div className="h-4 bg-gray-300 rounded w-40" />
        <div className="h-4 bg-gray-300 rounded w-36" />
      </div>

      {/* Description Skeleton */}
      <div className="space-y-3">
        <div className="h-4 bg-gray-300 rounded w-full" />
        <div className="h-4 bg-gray-300 rounded w-11/12" />
        <div className="h-4 bg-gray-300 rounded w-10/12" />
        <div className="h-4 bg-gray-300 rounded w-8/12" />
      </div>
    </div>
  );
}
