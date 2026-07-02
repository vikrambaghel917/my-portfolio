import { ROUTES } from "@/constants/routes";
import type { NavItem, SocialLink } from "@/types/portfolio";

export const NAVIGATION_ITEMS: NavItem[] = [
  { href: ROUTES.home, label: "Home", description: "" },
  { href: ROUTES.services, label: "Services", description: "" },
  { href: ROUTES.projects, label: "Projects", description: "" },
  { href: ROUTES.about, label: "About", description: "" },
  { href: ROUTES.contact, label: "Contact", description: "" },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/vikrambaghel917" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/vikrambaghel/" },
  { label: "Email", href: "mailto:baghelvikram917@gmail.com" },
  { label: "Twitter", href: "https://x.com/Vikramb28256747" },
  { label: "Instagram", href: "https://www.instagram.com/vikram_baghel068/" },
];
