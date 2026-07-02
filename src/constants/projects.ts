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
  { label: "Mobile application", value: "Mobile Application" },
  { label: "Enterprise platform", value: "Enterprise Platform" },
  { label: "Public sector", value: "Public Sector" },
];

export const PROJECT_STATUS_OPTIONS: OptionItem<ProjectFilters["status"]>[] = [
  { label: "All statuses", value: "All" },
  { label: "Live", value: "Live" },
  { label: "Delivered", value: "Delivered" },
  { label: "Case study", value: "Case Study" },
];

export const PROJECT_SORT_OPTIONS: OptionItem<ProjectFilters["sortBy"]>[] = [
  { label: "Most recent", value: "recent" },
  { label: "Highest impact", value: "impact" },
  { label: "Alphabetical", value: "alphabetical" },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "kavachpro-safety-system",
    slug: "kavachpro-safety-system",
    title: "KavachPro Safety Management System",
    client: "Tetrahedron Manufacturing Services Pvt. Ltd.",
    summary: "Safety management platform with real-time workflows and modular frontend architecture.",
    description:
      "Built with React, Tailwind CSS, Material UI, Firebase, and AWS for scalable day-to-day operations.",
    challenge:
      "The product needed responsive UI, realtime sync, secure auth, and a maintainable structure.",
    solution:
      "Built modular React components, Firebase auth and data flows, and a consistent theme system.",
    outcome:
      "Reduced code complexity by 30%, improved auth efficiency by 40%, and increased data retrieval speed by 50%.",
    category: "Enterprise Platform",
    status: "Live",
    year: 2026,
    duration: "Ongoing",
    role: "Full Stack Developer",
    featured: true,
    stack: ["React", "Tailwind CSS", "Material UI", "Firebase", "AWS"],
    tags: ["Safety system", "Realtime data", "Theming", "Architecture"],
    metrics: [
      { label: "Complexity reduction", value: "30%" },
      { label: "Auth efficiency", value: "40%" },
      { label: "Data retrieval", value: "50%" },
    ],
  },
  {
    id: "endurance-mobile-game",
    slug: "endurance-mobile-game",
    title: "Endurance Mobile Game",
    client: "Internal Product Team",
    summary: "Cross-platform mobile app with stable realtime state handling.",
    description:
      "Built with React Native CLI, Firebase, and Context API for scalable mobile delivery.",
    challenge:
      "The app needed fast cross-platform delivery without losing maintainability.",
    solution:
      "Used modular architecture and centralized state to keep the app scalable.",
    outcome:
      "Improved development speed by 25% and supported smoother feature delivery.",
    category: "Mobile Application",
    status: "Delivered",
    year: 2025,
    duration: "Multi-release",
    role: "Full Stack Developer",
    featured: true,
    stack: ["React Native CLI", "Firebase", "Context API"],
    tags: ["Mobile", "Realtime data", "Cross-platform"],
    metrics: [
      { label: "Development speed", value: "+25%" },
      { label: "On-time delivery", value: "100%" },
      { label: "Code quality", value: "+15%" },
    ],
  },
  {
    id: "cmr-mobile-game",
    slug: "cmr-mobile-game",
    title: "CMR Mobile Game",
    client: "Internal Product Team",
    summary: "Mobile game built with reusable React Native architecture and Firebase.",
    description:
      "Built as part of a cross-platform initiative with clean state handling and maintainable structure.",
    challenge:
      "The team needed to ship quickly while keeping the codebase organized.",
    solution:
      "Applied modular React Native patterns and consistent Firebase integration.",
    outcome:
      "Improved team productivity, delivery reliability, and maintainability.",
    category: "Mobile Application",
    status: "Delivered",
    year: 2025,
    duration: "Multi-release",
    role: "Full Stack Developer",
    featured: true,
    stack: ["React Native CLI", "Firebase", "Context API"],
    tags: ["Mobile game", "Architecture", "Team delivery"],
    metrics: [
      { label: "Team productivity", value: "+10%" },
      { label: "Code quality", value: "+15%" },
      { label: "Release discipline", value: "Strong" },
    ],
  },
  {
    id: "exicom-mobile-app",
    slug: "exicom-mobile-app",
    title: "Exicom Mobile App",
    client: "Internal Product Team",
    summary: "React Native app built for scalable delivery and realtime backend integration.",
    description:
      "Built with Firebase-backed services and modular app structure for long-term maintainability.",
    challenge:
      "The app needed reliable backend connectivity and scalable project structure.",
    solution:
      "Implemented modular mobile architecture and stable realtime data patterns.",
    outcome:
      "Supported efficient delivery and dependable frontend-backend integration.",
    category: "Mobile Application",
    status: "Live",
    year: 2026,
    duration: "Ongoing",
    role: "Full Stack Developer",
    featured: false,
    stack: ["React Native CLI", "Firebase", "Context API"],
    tags: ["Mobile app", "Realtime backend", "Maintainability"],
    metrics: [
      { label: "Response time", value: "-35%" },
      { label: "Delivery support", value: "100%" },
      { label: "Structure quality", value: "High" },
    ],
  },
  {
    id: "nic-full-stack-internship",
    slug: "nic-full-stack-internship",
    title: "NIC Digital Workflow Delivery",
    client: "National Informatics Center (NIC)",
    summary: "Public sector delivery work across frontend, backend, and Firebase services.",
    description:
      "Worked on full stack delivery with a focus on maintainable production outcomes.",
    challenge:
      "The work required balanced delivery, performance, and code quality.",
    solution:
      "Contributed to implementation, Firebase optimization, and code quality practices.",
    outcome:
      "Improved application efficiency by 20% and backend responsiveness by 35%.",
    category: "Public Sector",
    status: "Case Study",
    year: 2023,
    duration: "6 months",
    role: "Full Stack Developer Intern",
    featured: false,
    stack: ["JavaScript", "React", "Firebase", "REST APIs"],
    tags: ["Internship", "Public sector", "Full stack"],
    metrics: [
      { label: "App efficiency", value: "+20%" },
      { label: "Backend speed", value: "+35%" },
      { label: "Milestone delivery", value: "100%" },
    ],
  },
];
