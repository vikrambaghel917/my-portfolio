"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MailIcon, MenuIcon } from "lucide-react";
import { RiGithubLine, RiInstagramLine, RiLinkedinLine, RiTwitterLine } from "react-icons/ri";
import { NAVIGATION_ITEMS, SOCIAL_LINKS } from "@/constants/navigation";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { PROFILE } from "@/constants/portfolio";
import { ROUTES } from "@/constants/routes";
import { cn } from "@/src/lib/utils";
import { Button } from "@/src/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/src/components/ui/sheet";
import Image from "next/image";

const SOCIAL_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  GitHub: RiGithubLine,
  LinkedIn: RiLinkedinLine,
  Email: MailIcon,
  Twitter: RiTwitterLine,
  Instagram: RiInstagramLine,
};

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-border/40 bg-background/36 backdrop-blur-2xl">
      <div className="app-shell flex h-18 items-center justify-between gap-3">
        <Link href={ROUTES.home} className="min-w-0 flex items-center gap-3">
          <span className="neon-ring flex size-10 shrink-0 items-center justify-center rounded-[1.15rem] bg-primary/88 text-sm font-semibold text-primary-foreground">
              <Image
                src="/me.png"
                alt={`${PROFILE.name} profile visual`}
                width={640}
                height={640}
                unoptimized
                className="h-auto w-full rounded-full object-cover"
              />
          </span>
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-foreground sm:text-base">
              {PROFILE.name}
            </p>
            <p className="truncate text-xs text-muted-foreground sm:text-sm">
              {PROFILE.role}
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 rounded-full border border-border/40 bg-background/32 p-1 shadow-theme-subtle backdrop-blur-xl md:flex">
          {NAVIGATION_ITEMS.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  isActive
                    ? "bg-primary text-primary-foreground shadow-theme-medium"
                    : "text-muted-foreground hover:bg-secondary/80 hover:text-foreground"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <Button asChild className="rounded-full border border-primary/20 bg-primary/88 px-4 shadow-theme-medium">
            <Link href={ROUTES.contact}>Start a build</Link>
          </Button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="outline" size="icon" className="rounded-full border-primary/20 bg-background/50 backdrop-blur-xl">
              <MenuIcon />
              <span className="sr-only">Open navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[min(22rem,100vw)] border-l border-border/40 bg-background/74 px-0 backdrop-blur-2xl">
            <SheetHeader>
              <SheetTitle>{PROFILE.name}</SheetTitle>
              <SheetDescription>{PROFILE.role}</SheetDescription>
            </SheetHeader>
            <nav className="grid gap-2 px-4 pb-6 pt-2">
              {NAVIGATION_ITEMS.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "rounded-[1.25rem] border px-4 py-3 backdrop-blur-xl",
                      isActive
                        ? "border-primary/40 bg-primary/14 text-foreground shadow-theme-medium"
                        : "border-border/50 bg-card/46 text-muted-foreground"
                    )}
                  >
                    <span className="block font-medium">{item.label}</span>
                    <span className="mt-1 block text-sm">{item.description}</span>
                  </Link>
                );
              })}
              <Button asChild size="lg" className="mt-4 rounded-full">
                <Link href={ROUTES.contact}>Start a build</Link>
              </Button>
              <div className="mt-2 flex flex-wrap gap-2">
                {SOCIAL_LINKS.map((item) => {
                  const Icon = SOCIAL_ICONS[item.label];

                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      aria-label={item.label}
                      className="flex size-10 items-center justify-center rounded-full border border-border/50 bg-background/30 text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
                    >
                      {Icon ? <Icon className="size-4" /> : item.label}
                    </a>
                  );
                })}
              </div>
            </nav>
          </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
