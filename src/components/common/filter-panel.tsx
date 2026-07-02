"use client";

import { Checkbox } from "@/src/components/ui/checkbox";
import { Label } from "@/src/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/src/components/ui/select";
import type { OptionItem, ProjectFilters } from "@/types/portfolio";

type FilterPanelProps = {
  filters: ProjectFilters;
  categoryOptions: OptionItem<ProjectFilters["category"]>[];
  statusOptions: OptionItem<ProjectFilters["status"]>[];
  sortOptions: OptionItem<ProjectFilters["sortBy"]>[];
  onChange: (value: Partial<ProjectFilters>) => void;
};

export function FilterPanel({
  filters,
  categoryOptions,
  statusOptions,
  sortOptions,
  onChange,
}: FilterPanelProps) {
  return (
    <div className="grid gap-5">
      <div className="grid gap-2">
        <Label htmlFor="category-select">Category</Label>
        <Select
          value={filters.category}
          onValueChange={(value) =>
            onChange({ category: value as ProjectFilters["category"] })
          }
        >
          <SelectTrigger id="category-select" className="h-11 w-full rounded-2xl">
            <SelectValue placeholder="Select category" />
          </SelectTrigger>
          <SelectContent>
            {categoryOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-2">
        <Label htmlFor="status-select">Delivery status</Label>
        <Select
          value={filters.status}
          onValueChange={(value) =>
            onChange({ status: value as ProjectFilters["status"] })
          }
        >
          <SelectTrigger id="status-select" className="h-11 w-full rounded-2xl">
            <SelectValue placeholder="Select status" />
          </SelectTrigger>
          <SelectContent>
            {statusOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-2">
        <Label htmlFor="sort-select">Sort by</Label>
        <Select
          value={filters.sortBy}
          onValueChange={(value) =>
            onChange({ sortBy: value as ProjectFilters["sortBy"] })
          }
        >
          <SelectTrigger id="sort-select" className="h-11 w-full rounded-2xl">
            <SelectValue placeholder="Select sort order" />
          </SelectTrigger>
          <SelectContent>
            {sortOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <label className="flex items-center gap-3 rounded-2xl border border-border/70 p-4">
        <Checkbox
          checked={filters.featuredOnly}
          onCheckedChange={(checked) =>
            onChange({ featuredOnly: checked === true })
          }
        />
        <span className="text-sm font-medium text-foreground">Featured projects only</span>
      </label>
    </div>
  );
}
