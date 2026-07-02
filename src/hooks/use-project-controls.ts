"use client";

import { startTransition, useDeferredValue, useState } from "react";
import { DEFAULT_PROJECT_FILTERS } from "@/constants/projects";
import type { ProjectFilters } from "@/types/portfolio";

export function useProjectControls(pageSize = 4) {
  const [filters, setFilters] = useState<ProjectFilters>(DEFAULT_PROJECT_FILTERS);
  const [page, setPage] = useState(1);
  const deferredSearch = useDeferredValue(filters.search);

  const queryFilters: ProjectFilters = {
    ...filters,
    search: deferredSearch,
  };

  const updateFilters = (nextValue: Partial<ProjectFilters>) => {
    startTransition(() => {
      setFilters((current) => ({ ...current, ...nextValue }));
      setPage(1);
    });
  };

  const resetFilters = () => {
    startTransition(() => {
      setFilters(DEFAULT_PROJECT_FILTERS);
      setPage(1);
    });
  };

  const isDirty =
    JSON.stringify(filters) !== JSON.stringify(DEFAULT_PROJECT_FILTERS);

  return {
    filters,
    queryFilters,
    page,
    pageSize,
    isDirty,
    setPage,
    updateFilters,
    resetFilters,
  };
}
