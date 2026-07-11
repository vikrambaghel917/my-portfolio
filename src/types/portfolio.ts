export type NavItem = {
  href: string;
  label: string;
  description?: string;
};

export type SocialLink = {
  href: string;
  label: string;
};

export type StatItem = {
  label: string;
  value: string;
  detail: string;
};

export type StackMarqueeItem = {
  name: string;
  icon: string;
};

export type Capability = {
  title: string;
  description: string;
  bullets: string[];
};

export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  summary: string;
  highlights: string[];
};

export type ServiceCategory = {
  title: string;
  summary: string;
  idealFor: string;
  includes: string[];
};

export type ServicePackage = {
  name: string;
  price: string;
  timeline: string;
  bestFor: string;
  includes: string[];
  deliverables: string[];
};

export type ProjectCategory =
  | "Web Application"
  | "Mobile Application"
  | "Enterprise Platform"
  | "Public Sector";

export type ProjectStatus = "Live" | "Delivered" | "Case Study";

export type ProjectSort = "recent" | "impact" | "alphabetical";

export type OptionItem<T extends string = string> = {
  label: string;
  value: T;
  helper?: string;
};

export type ProjectMetric = {
  label: string;
  value: string;
};

export type ProjectItem = {
  id: string;
  slug: string;
  title: string;
  image: string;
  liveUrl: string;
  client: string;
  summary: string;
  description: string;
  challenge: string;
  solution: string;
  outcome: string;
  category: ProjectCategory;
  status: ProjectStatus;
  year: number;
  duration: string;
  role: string;
  featured: boolean;
  stack: string[];
  tags: string[];
  metrics: ProjectMetric[];
};

export type ProjectFilters = {
  search: string;
  category: "All" | ProjectCategory;
  status: "All" | ProjectStatus;
  featuredOnly: boolean;
  sortBy: ProjectSort;
};

export type PaginatedResult<T> = {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
};

export type ContactFormValues = {
  name: string;
  email: string;
  company: string;
  phone: string;
  description: string;
  captchaAnswer: string;
};

export type ContactCaptchaChallenge = {
  prompt: string;
  token: string;
  issuedAt: number;
  expiresAt: string;
};

export type ContactSubmissionPayload = ContactFormValues & {
  captchaToken: string;
  website: string;
  startedAt: number;
};

export type ContactSubmissionResponse = {
  requestId: string;
  submittedAt: string;
};
