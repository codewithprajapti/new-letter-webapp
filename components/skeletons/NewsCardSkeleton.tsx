export default function NewsCardSkeleton() {
  return (
    <div className="flex flex-col bg-white gap-3 animate-pulse">
      {/* Image Skeleton */}
      <div className="relative w-full aspect-video bg-gray-300" />

      {/* Content */}
      <div className="px-2 flex flex-col gap-3 pb-4">
        {/* Title Skeleton */}
        <div className="h-5 bg-gray-300 rounded w-11/12" />
        <div className="h-5 bg-gray-300 rounded w-8/12" />

        {/* Date & Time Row */}
        <div className="flex gap-5 items-center">
          <div className="flex items-center gap-2">
            <div className="h-4 w-4 bg-gray-300 rounded" />
            <div className="h-4 bg-gray-300 rounded w-20" />
          </div>

          <div className="flex items-center gap-2">
            <div className="h-4 w-4 bg-gray-300 rounded" />
            <div className="h-4 bg-gray-300 rounded w-16" />
          </div>
        </div>
      </div>
    </div>
  );
}
