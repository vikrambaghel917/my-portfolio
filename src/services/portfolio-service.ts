import {
  DEFAULT_PROJECT_FILTERS,
  PROJECTS,
} from "@/constants/projects";
import type {
  ContactCaptchaChallenge,
  ContactSubmissionPayload,
  ContactSubmissionResponse,
  PaginatedResult,
  ProjectFilters,
  ProjectItem,
} from "@/types/portfolio";

const impactScore = (project: ProjectItem) =>
  project.metrics.reduce((score, metric) => score + metric.value.length, 0);

function matchesText(project: ProjectItem, search: string) {
  if (!search) {
    return true;
  }

  const query = search.toLowerCase();
  return [project.title, project.client, project.summary, project.tags.join(" "), project.stack.join(" ")]
    .join(" ")
    .toLowerCase()
    .includes(query);
}

export async function getProjects({
  filters = DEFAULT_PROJECT_FILTERS,
  page = 1,
  pageSize = 4,
}: {
  filters?: ProjectFilters;
  page?: number;
  pageSize?: number;
}): Promise<PaginatedResult<ProjectItem>> {
  if (filters.search.trim().toLowerCase() === "error") {
    throw new Error("The project feed could not be loaded. Retry or adjust the search query.");
  }

  let filtered = PROJECTS.filter((project) => matchesText(project, filters.search));

  if (filters.category !== "All") {
    filtered = filtered.filter((project) => project.category === filters.category);
  }

  if (filters.status !== "All") {
    filtered = filtered.filter((project) => project.status === filters.status);
  }

  if (filters.featuredOnly) {
    filtered = filtered.filter((project) => project.featured);
  }

  filtered = [...filtered].sort((left, right) => {
    if (filters.sortBy === "alphabetical") {
      return left.title.localeCompare(right.title);
    }

    if (filters.sortBy === "impact") {
      return impactScore(right) - impactScore(left);
    }

    return right.year - left.year;
  });

  const total = filtered.length;
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  const safePage = Math.min(Math.max(page, 1), totalPages);
  const startIndex = (safePage - 1) * pageSize;

  return {
    items: filtered.slice(startIndex, startIndex + pageSize),
    total,
    page: safePage,
    pageSize,
    totalPages,
  };
}

export async function getFeaturedProjects() {
  return PROJECTS.filter((project) => project.featured).slice(0, 3);
}

export async function getContactCaptchaChallenge(): Promise<ContactCaptchaChallenge> {
  const response = await fetch("/api/contact/challenge", {
    method: "GET",
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Captcha could not be loaded. Refresh and try again.");
  }

  return response.json() as Promise<ContactCaptchaChallenge>;
}

export async function submitContactForm(
  values: ContactSubmissionPayload
): Promise<ContactSubmissionResponse> {
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(values),
  });

  const payload = (await response.json().catch(() => null)) as
    | { error?: string; requestId?: string; submittedAt?: string }
    | null;

  if (!response.ok) {
    throw new Error(payload?.error ?? "Message delivery failed. Retry in a moment.");
  }

  return {
    requestId: payload?.requestId ?? `req_${Date.now()}`,
    submittedAt: payload?.submittedAt ?? new Date().toISOString(),
  };
}
