import { LoadingSkeleton } from "@/components/common/loading-skeleton";

export default function ProjectsLoading() {
  return (
    <div className="app-shell space-y-6 py-10 sm:py-14">
      <LoadingSkeleton variant="stats" />
      <LoadingSkeleton variant="cards" />
    </div>
  );
}
