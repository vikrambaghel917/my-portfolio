"use client";

import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { getProjects } from "@/services/portfolio-service";
import type { ProjectFilters } from "@/types/portfolio";

export function useProjectsQuery({
  filters,
  page,
  pageSize,
}: {
  filters: ProjectFilters;
  page: number;
  pageSize: number;
}) {
  return useQuery({
    queryKey: ["projects", filters, page, pageSize],
    queryFn: () => getProjects({ filters, page, pageSize }),
    placeholderData: keepPreviousData,
  });
}
