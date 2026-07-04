import type {
  Capability,
  ExperienceItem,
  StackMarqueeItem,
  StatItem,
} from "@/types/portfolio";

export const PROFILE = {
  name: "Vikram Baghel",
  role: "Full Stack Developer",
  location: "Jagdalpur, Bastar, Chhattisgarh, India",
  availability: "Hire Me",
  summary:
    "Full stack developer building clean, scalable websites, web apps, and mobile products with React, Next.js, React Native, Node.js, and Firebase.",
};

export const HERO_METRICS: StatItem[] = [
  { label: "Production experience", value: "2+ yrs", detail: "Web and mobile delivery" },
  { label: "Codebase simplification", value: "60%", detail: "Reduced frontend and backend complexity" },
  { label: "Data performance", value: "70%", detail: "Faster Firebase and Supabase data flows" },
];

export const HERO_STACK_MARQUEE: StackMarqueeItem[] = [
  { name: "React", icon: "react" },
  { name: "Next.js", icon: "nextjs" },
  { name: "TypeScript", icon: "typescript" },
  { name: "React Native", icon: "react" },
  { name: "Expo", icon: "expo" },
  { name: "Firebase", icon: "firebase" },
  { name: "Tailwind CSS", icon: "tailwind" },
  { name: "Material UI", icon: "mui" },
  { name: "Context API", icon: "code" },
  { name: "REST APIs", icon: "api" },
  { name: "Node.js", icon: "node" },
  { name: "JavaScript", icon: "javascript" },
  { name: "Vercel", icon: "vercel" },
  { name: "Supabase", icon: "supabase" },
];

export const CAPABILITIES: Capability[] = [
  {
    title: "Scalable frontend systems",
    description: "React and Next.js products structured for scale, consistency, and faster feature delivery.",
    bullets: ["Reusable component architecture", "Responsive UI systems", "Theme and design consistency"],
  },
  {
    title: "Cross-platform app delivery",
    description: "Web and mobile delivery with React Native, Firebase, and dependable state management.",
    bullets: ["React Native CLI and Expo", "Realtime data handling", "Stable app state patterns"],
  },
  {
    title: "Backend optimization",
    description: "API and data-layer optimization focused on response time, cleaner flows, and maintainable backend integration.",
    bullets: ["API performance tuning", "Database query optimization", "Authentication and data flow cleanup"],
  },
  {
    title: "Monolith and microservices optimization",
    description: "Codebase improvements for both modular monoliths and service-based systems without unnecessary complexity.",
    bullets: ["Domain-driven folder structure", "Shared contract cleanup", "Service boundary rationalization"],
  },
  {
    title: "Delivery and team velocity",
    description: "Maintainable code, review discipline, and practical architecture choices that keep teams shipping.",
    bullets: ["Code quality improvements", "Developer productivity", "Reliable release execution"],
  },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    company: "Tetrahedron Manufacturing Services Pvt. Ltd.",
    role: "Full Stack Developer",
    period: "Jul 2024 - Present",
    summary: "Building scalable web and mobile products with React, React Native, and Firebase.",
    highlights: [
      "Reduced codebase complexity by 30% through modular and reusable component design.",
      "Improved authentication efficiency by 40% and data retrieval speed by 50% with Firebase and optimized API handling.",
      "Built pixel-perfect responsive layouts with full cross-device compatibility.",
    ],
  },
  {
    company: "National Informatics Center (NIC)",
    role: "Full Stack Developer Intern",
    period: "Jan 2023 - Jun 2023",
    summary: "Delivered full stack features with a focus on maintainability and team velocity.",
    highlights: [
      "Led a 3-developer mobile team and improved development speed by 25% through modular coding practices.",
      "Improved backend response times by 35% with optimized Firebase-based services.",
      "Contributed to 100% milestone delivery, 15% better code quality, and a 10% team productivity gain.",
    ],
  },
];

export const OPERATING_PRINCIPLES = [
  "Keep architecture modular.",
  "Build responsive UI from the start.",
  "Optimize backend flows where they affect product speed.",
  "Prefer reusable patterns over quick fixes.",
  "Keep monolith and microservice boundaries intentional.",
  "Optimize for dependable delivery.",
];
