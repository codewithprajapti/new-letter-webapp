import NewsCardSkeleton from "@/components/skeletons/NewsCardSkeleton";

export default function Loading() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 px-2 md:px-20 gap-2 md:gap-5">
      {Array.from({ length: 6 }).map((_, index) => (
        <NewsCardSkeleton key={index} />
      ))}
    </div>
  );
}
