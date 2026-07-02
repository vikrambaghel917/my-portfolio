import {
  BriefcaseBusinessIcon,
  CalendarRangeIcon,
  Layers3Icon,
  MoreHorizontalIcon,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/src/components/ui/dropdown-menu";
import { Button } from "@/src/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/src/components/ui/table";
import type { ProjectItem } from "@/types/portfolio";
import { ProjectStatusBadge } from "@/features/projects/components/project-status-badge";

type ProjectTableProps = {
  projects: ProjectItem[];
  onOpen: (project: ProjectItem) => void;
  onCopyStack: (project: ProjectItem) => void;
};

export function ProjectTable({
  projects,
  onOpen,
  onCopyStack,
}: ProjectTableProps) {
  return (
    <div className="surface hidden overflow-hidden border-primary/14 bg-background/34 p-4 backdrop-blur-2xl lg:block">
      <Table>
        <TableHeader>
          <TableRow className="border-border/50">
            <TableHead className="font-semibold text-primary">Project</TableHead>
            <TableHead className="font-semibold text-primary">Status</TableHead>
            <TableHead className="font-semibold text-primary">Category</TableHead>
            <TableHead className="font-semibold text-primary">Duration</TableHead>
            <TableHead className="font-semibold text-primary">Stack</TableHead>
            <TableHead className="text-right font-semibold text-primary">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {projects.map((project) => (
            <TableRow
              key={project.id}
              className="border-border/45 transition-colors hover:bg-primary/6"
            >
              <TableCell className="align-top py-4">
                <div className="space-y-2">
                  <p className="font-semibold text-foreground">{project.title}</p>
                  <p className="inline-flex items-center gap-2 text-sm font-medium text-foreground/72">
                    <BriefcaseBusinessIcon className="size-4 text-primary" />
                    {project.client}
                  </p>
                </div>
              </TableCell>
              <TableCell className="py-4">
                <ProjectStatusBadge status={project.status} />
              </TableCell>
              <TableCell className="py-4">
                <span className="inline-flex items-center gap-2 text-sm font-medium text-foreground/82">
                  <Layers3Icon className="size-4 text-primary" />
                  {project.category}
                </span>
              </TableCell>
              <TableCell className="py-4">
                <span className="inline-flex items-center gap-2 text-sm font-medium text-foreground/82">
                  <CalendarRangeIcon className="size-4 text-primary" />
                  {project.duration}
                </span>
              </TableCell>
              <TableCell className="max-w-xs py-4 whitespace-normal text-sm font-medium text-foreground/78">
                <span className="rounded-2xl border border-border/45 bg-background/44 px-3 py-2 leading-6">
                  {project.stack.join(", ")}
                </span>
              </TableCell>
              <TableCell className="py-4 text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon-sm"
                      className="rounded-full border border-primary/14 bg-background/34"
                    >
                      <MoreHorizontalIcon />
                      <span className="sr-only">Project actions</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => onOpen(project)}>
                      View details
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => onCopyStack(project)}>
                      Copy stack
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
