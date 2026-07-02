import { Skeleton } from "@/src/components/ui/skeleton";

type LoadingSkeletonProps = {
  variant?: "cards" | "table" | "stats";
};

export function LoadingSkeleton({
  variant = "cards",
}: LoadingSkeletonProps) {
  if (variant === "table") {
    return (
      <div className="surface overflow-hidden p-4">
        <div className="space-y-3">
          <Skeleton className="h-10 w-full rounded-2xl" />
          {Array.from({ length: 5 }).map((_, index) => (
            <Skeleton key={index} className="h-16 w-full rounded-2xl" />
          ))}
        </div>
      </div>
    );
  }

  if (variant === "stats") {
    return (
      <div className="grid gap-4 md:grid-cols-3">
        {Array.from({ length: 3 }).map((_, index) => (
          <Skeleton key={index} className="h-36 rounded-3xl" />
        ))}
      </div>
    );
  }

  return (
    <div className="grid gap-4 md:grid-cols-2">
      {Array.from({ length: 4 }).map((_, index) => (
        <Skeleton key={index} className="h-72 rounded-3xl" />
      ))}
    </div>
  );
}
