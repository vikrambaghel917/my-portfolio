import type { OptionItem, ProjectFilters, ProjectItem } from "@/types/portfolio";

export const DEFAULT_PROJECT_FILTERS: ProjectFilters = {
  search: "",
  category: "All",
  status: "All",
  featuredOnly: false,
  sortBy: "recent",
};

export const PROJECT_CATEGORY_OPTIONS: OptionItem<ProjectFilters["category"]>[] = [
  { label: "All categories", value: "All" },
  { label: "Web application", value: "Web Application" },
  { label: "Enterprise platform", value: "Enterprise Platform" },
];

export const PROJECT_STATUS_OPTIONS: OptionItem<ProjectFilters["status"]>[] = [
  { label: "All statuses", value: "All" },
  { label: "Live", value: "Live" },
];

export const PROJECT_SORT_OPTIONS: OptionItem<ProjectFilters["sortBy"]>[] = [
  { label: "Most recent", value: "recent" },
  { label: "Highest impact", value: "impact" },
  { label: "Alphabetical", value: "alphabetical" },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "inventory-management-system",
    slug: "inventory-management-system",
    title: "Inventory Management System",
    image: "/projects/inventory-management-system.png",
    liveUrl: "https://inventory-management-system-lac-five.vercel.app/dashboard",
    client: "Enterprise Distribution Platform",
    summary: "Live deployed enterprise inventory platform for stock visibility, procurement tracking, and warehouse operations.",
    description:
      "Built as an enterprise platform for managing inventory lifecycles, stock movement, order planning, vendor activity, and operational reporting from a single dashboard.",
    challenge:
      "The business needed one source of truth across procurement, stock movement, reorder alerts, and warehouse execution instead of fragmented spreadsheets.",
    solution:
      "Created a modular interface with inventory summaries, stock tables, warehouse actions, procurement views, and reporting components tailored for operations teams.",
    outcome:
      "Improved stock traceability, reduced manual reconciliation overhead, and gave teams faster access to inventory decisions.",
    category: "Enterprise Platform",
    status: "Live",
    year: 2026,
    duration: "Live deployment",
    role: "Frontend Engineer",
    featured: true,
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "TanStack Query", "REST APIs"],
    tags: ["Inventory", "Warehouse", "Procurement", "Reporting"],
    metrics: [
      { label: "Stock visibility", value: "Real-time" },
      { label: "Operational modules", value: "8+" },
      { label: "Deployment status", value: "Live" },
    ],
  },
  {
    id: "business-crm-dashboard",
    slug: "business-crm-dashboard",
    title: "Business CRM Dashboard",
    image: "/projects/business-crm-dashboard.png",
    liveUrl: "https://business-crm-dashboard.vercel.app/dashboard",
    client: "Sales and Operations Platform",
    summary: "Live deployed CRM dashboard for pipeline tracking, lead management, customer follow-ups, and executive reporting.",
    description:
      "Built for business teams that needed a clear enterprise workspace for lead flow, customer records, performance tracking, tasks, and conversion reporting.",
    challenge:
      "Sales and operations teams were working across disconnected tools, which slowed response time and made pipeline reporting inconsistent.",
    solution:
      "Designed a dashboard with reusable KPI cards, pipeline tables, filters, stage summaries, and customer activity panels for daily business execution.",
    outcome:
      "Improved sales visibility, streamlined lead handling workflows, and supported faster reporting for managers and teams.",
    category: "Enterprise Platform",
    status: "Live",
    year: 2026,
    duration: "Live deployment",
    role: "Frontend Engineer",
    featured: true,
    stack: ["Next.js", "TypeScript", "Shadcn/UI", "TanStack Query", "Node.js APIs"],
    tags: ["CRM", "Sales", "Dashboard", "Analytics"],
    metrics: [
      { label: "Pipeline stages", value: "Custom" },
      { label: "Dashboard views", value: "Role-based" },
      { label: "Deployment status", value: "Live" },
    ],
  },
  {
    id: "coaching-institute-erp",
    slug: "coaching-institute-erp",
    title: "Coaching Institute ERP",
    image: "/projects/coaching-institute-erp.png",
    liveUrl: "https://coaching-institute-erp.vercel.app/dashboard",
    client: "Education Operations Platform",
    summary: "Live deployed ERP for coaching institutes covering admissions, attendance, fees, scheduling, and student operations.",
    description:
      "Built as an enterprise platform to centralize institute workflows including admissions, batch management, class schedules, fee tracking, and staff coordination.",
    challenge:
      "Academic and administrative processes were spread across multiple tools, which made daily institute operations difficult to track and scale.",
    solution:
      "Implemented a modular ERP interface with academic summaries, student records, fee management, batch controls, and operational reporting modules.",
    outcome:
      "Simplified institute administration, improved process visibility, and reduced daily friction for academic and operations teams.",
    category: "Enterprise Platform",
    status: "Live",
    year: 2026,
    duration: "Live deployment",
    role: "Frontend Engineer",
    featured: true,
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "React Hook Form", "REST APIs"],
    tags: ["ERP", "Education", "Admissions", "Administration"],
    metrics: [
      { label: "Core modules", value: "Admissions+" },
      { label: "Operations coverage", value: "End-to-end" },
      { label: "Deployment status", value: "Live" },
    ],
  },
  {
    id: "restaurant-landing-page",
    slug: "restaurant-landing-page",
    title: "Restaurant Landing Page",
    image: "/projects/restaurant-landing-page.png",
    liveUrl: "https://restaurant-landing-five-blond.vercel.app/",
    client: "Restaurant Brand Website",
    summary: "Live marketing website for a restaurant business with polished hero sections, menu storytelling, and reservation-focused conversion flow.",
    description:
      "Built as a clean web application for showcasing cuisine, signature dishes, ambience, and reservation prompts in a modern, conversion-oriented layout.",
    challenge:
      "The business needed a visually appealing public-facing site that could present the brand clearly while guiding visitors toward table bookings.",
    solution:
      "Created a modern landing experience with visual sections, menu highlights, structured content blocks, and prominent call-to-action placement.",
    outcome:
      "Delivered a stronger digital first impression with a streamlined customer journey from discovery to booking intent.",
    category: "Web Application",
    status: "Live",
    year: 2026,
    duration: "Live deployment",
    role: "Frontend Engineer",
    featured: false,
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Responsive UI"],
    tags: ["Restaurant", "Landing page", "Branding", "Marketing"],
    metrics: [
      { label: "Experience type", value: "Marketing" },
      { label: "Primary goal", value: "Reservations" },
      { label: "Deployment status", value: "Live" },
    ],
  },
  {
    id: "bakery-shop",
    slug: "bakery-shop",
    title: "Bakery Shop",
    image: "/projects/bakery-shop.png",
    liveUrl: "https://bakery-shop-peach.vercel.app/",
    client: "Bakery Storefront Website",
    summary: "Live bakery web application for product showcase, featured collections, and modern storefront-style brand presentation.",
    description:
      "Built as a warm and visually rich website to highlight bakery offerings, featured items, seasonal promotions, and customer-facing product discovery.",
    challenge:
      "The bakery needed a digital storefront that felt premium, inviting, and easy to browse across mobile and desktop devices.",
    solution:
      "Designed a product-led landing experience with hero imagery, featured sections, curated highlights, and a clean responsive layout system.",
    outcome:
      "Strengthened online presentation for the bakery brand and created a more polished browsing experience for potential customers.",
    category: "Web Application",
    status: "Live",
    year: 2026,
    duration: "Live deployment",
    role: "Frontend Engineer",
    featured: false,
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "UI Components"],
    tags: ["Bakery", "Storefront", "Landing page", "Branding"],
    metrics: [
      { label: "Experience type", value: "Storefront" },
      { label: "Primary goal", value: "Product discovery" },
      { label: "Deployment status", value: "Live" },
    ],
  },
  {
    id: "clean-and-healthy",
    slug: "clean-and-healthy",
    title: "Clean and Healthy",
    image: "/projects/clean-and-healthy.png",
    liveUrl: "https://cleanandhealthy.in",
    client: "Dental Care Platform",
    summary: "Delivered web application combining a marketing landing page with a dental clinic management system.",
    description:
      "Built as a complete digital platform for a dental clinic, including a polished public-facing landing experience and an operational clinic management system.",
    challenge:
      "The project needed to serve two different goals at once: present the clinic professionally to patients and support internal workflows for clinic operations.",
    solution:
      "Structured the build around a conversion-focused landing page and a dedicated management system for appointments, patient records, and clinic administration.",
    outcome:
      "Delivered a unified web platform that improved the clinic's online presentation while supporting day-to-day operational management in one system.",
    category: "Web Application",
    status: "Live",
    year: 2026,
    duration: "Delivered project",
    role: "Frontend Engineer",
    featured: false,
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Dashboard UI"],
    tags: ["Dental clinic", "Landing page", "Management system", "Healthcare"],
    metrics: [
      { label: "Experience type", value: "Hybrid" },
      { label: "Core modules", value: "Landing + Admin" },
      { label: "Deployment status", value: "Delivered" },
    ],
  },
];
