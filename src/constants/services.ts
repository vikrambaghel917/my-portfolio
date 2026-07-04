import type { ServiceCategory, ServicePackage } from "@/types/portfolio";

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    title: "Business Websites",
    summary:
      "Marketing sites, company websites, and portfolios built to look polished, load fast, and clearly explain what your business does.",
    idealFor: "Founders, consultants, agencies, and businesses needing a strong online presence.",
    includes: [
      "Responsive UI",
      "Landing and service pages",
      "Contact and inquiry forms",
      "SEO-ready structure",
      "Deployment setup",
    ],
  },
  {
    title: "Web Applications",
    summary:
      "Custom web apps for dashboards, SaaS MVPs, internal tools, portals, and business workflows with scalable frontend and backend structure.",
    idealFor: "Teams that need a real product or business system, not just a website.",
    includes: [
      "Authentication",
      "Dashboard and CRUD flows",
      "API and database integration",
      "Admin and user panels",
      "Production deployment",
    ],
  },
  {
    title: "E-Commerce Systems",
    summary:
      "Custom e-commerce builds with product catalogs, checkout, payment integration, and operational dashboards for orders and inventory.",
    idealFor: "Brands or sellers launching or improving an online store.",
    includes: [
      "Catalog and product pages",
      "Cart and checkout",
      "Payment gateway integration",
      "Order management workflows",
      "Admin panel",
    ],
  },
  {
    title: "Mobile Applications",
    summary:
      "React Native and Expo apps for Android and iOS with production-ready UI, authentication, API integration, and shared business logic.",
    idealFor: "Businesses launching an MVP or extending an existing product to mobile.",
    includes: [
      "Cross-platform mobile app",
      "Authentication flows",
      "Backend and API integration",
      "Android/iOS build support",
      "Deployment guidance",
    ],
  },
  {
    title: "Backend and API Development",
    summary:
      "Node.js backend systems, REST APIs, authentication, database design, and third-party integrations that support reliable product delivery.",
    idealFor: "Products that need a clean backend foundation or stronger system integration.",
    includes: [
      "Node.js and Express APIs",
      "Database schema design",
      "Auth and access control",
      "Payment and third-party integrations",
      "Security and validation",
    ],
  },
  {
    title: "Maintenance and Optimization",
    summary:
      "Ongoing engineering support for bug fixing, UI cleanup, performance improvement, refactoring, and product stability after launch.",
    idealFor: "Teams with an existing product that needs improvement, cleanup, or reliable support.",
    includes: [
      "Bug fixing",
      "Performance optimization",
      "UI and UX refinements",
      "Codebase cleanup",
      "Release support",
    ],
  },
];

export const SERVICE_PACKAGES: ServicePackage[] = [
  {
    name: "Landing Page",
    price: "Starting at ₹10,000",
    timeline: "1-2 weeks",
    bestFor: "Single-page launches, campaigns, and lead generation.",
    includes: [
      "Responsive landing page",
      "CTA-focused sections",
      "Contact form",
      "Basic SEO setup",
      "Deployment",
    ],
    deliverables: [
      "1 production-ready page",
      "Mobile and desktop optimization",
      "Live deployed URL",
    ],
  },
  {
    name: "Business Website",
    price: "Starting at ₹45,000",
    timeline: "2-3 weeks",
    bestFor: "Companies needing a multi-page site with clear service positioning.",
    includes: [
      "5-10 pages",
      "Reusable page sections",
      "Inquiry/contact flows",
      "SEO-ready page setup",
      "Deployment and handoff",
    ],
    deliverables: [
      "Complete company website",
      "Editable content structure",
      "Launch-ready deployment",
    ],
  },
  {
    name: "Web App MVP",
    price: "Starting at ₹85,000",
    timeline: "4-6 weeks",
    bestFor: "Dashboards, internal tools, SaaS MVPs, and operational products.",
    includes: [
      "Authentication",
      "Dashboard UI",
      "Core workflows",
      "API and database integration",
      "Deployment",
    ],
    deliverables: [
      "Working MVP with core features",
      "Admin or user dashboard",
      "Production deployment support",
    ],
  },
  {
    name: "E-Commerce Build",
    price: "Starting at ₹95,000",
    timeline: "4-6 weeks",
    bestFor: "Online stores needing custom product, checkout, and admin flows.",
    includes: [
      "Product catalog",
      "Cart and checkout",
      "Payment integration",
      "Order management",
      "Admin dashboard",
    ],
    deliverables: [
      "Storefront and backend flows",
      "Operational admin panel",
      "Deployment-ready setup",
    ],
  },
  {
    name: "Mobile App MVP",
    price: "Starting at ₹1,10,000",
    timeline: "5-8 weeks",
    bestFor: "Businesses launching a first mobile app for Android and iOS.",
    includes: [
      "React Native app",
      "Authentication",
      "API integration",
      "Core app screens",
      "Build support",
    ],
    deliverables: [
      "Cross-platform mobile app",
      "Android/iOS build pipeline",
      "Launch-ready app package",
    ],
  },
  {
    name: "Monthly Support",
    price: "Starting at ₹20,000 / month",
    timeline: "Ongoing",
    bestFor: "Existing products that need fixes, updates, and steady technical support.",
    includes: [
      "Bug fixing",
      "Small feature updates",
      "Performance improvements",
      "Release support",
      "Technical maintenance",
    ],
    deliverables: [
      "Ongoing issue resolution",
      "Weekly or monthly engineering support",
      "Stability and improvement work",
    ],
  },
];

export const SERVICE_POSITIONING =
  "I help businesses build websites, web apps, mobile apps, e-commerce systems, and backend platforms with a clear scope, practical delivery process, and production-ready implementation.";
