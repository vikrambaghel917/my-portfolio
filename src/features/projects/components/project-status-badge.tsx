import { RadioTowerIcon } from "lucide-react";
import { Badge } from "@/src/components/ui/badge";
import type { ProjectStatus } from "@/types/portfolio";

type ProjectStatusBadgeProps = {
  status: ProjectStatus;
};

const statusStyles: Record<ProjectStatus, string> = {
  Live: "border-red-500/30 bg-red-500/12 text-red-300",
  Delivered: "border-emerald-500/25 bg-emerald-500/12 text-emerald-300",
  "Case Study": "border-sky-500/25 bg-sky-500/12 text-sky-300",
};

export function ProjectStatusBadge({ status }: ProjectStatusBadgeProps) {
  if (status === "Live") {
    return (
      <Badge
        variant="outline"
        className={`gap-2 rounded-full ${statusStyles[status]}`}
      >
        <span className="relative flex size-2.5">
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-red-400/80" />
          <span className="relative inline-flex size-2.5 rounded-full bg-red-400" />
        </span>
        <RadioTowerIcon className="size-3.5" />
        {status}
      </Badge>
    );
  }

  return (
    <Badge variant="outline" className={`rounded-full ${statusStyles[status]}`}>
      {status}
    </Badge>
  );
}
