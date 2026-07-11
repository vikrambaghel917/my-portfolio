import Link from "next/link";
import { ArrowUpIcon, MailIcon } from "lucide-react";
import { NAVIGATION_ITEMS, SOCIAL_LINKS } from "@/constants/navigation";
import { PROFILE } from "@/constants/portfolio";
import { Button } from "@/src/components/ui/button";
import {
  RiGithubLine,
  RiInstagramLine,
  RiLinkedinBoxLine,
  RiTwitterLine,
} from "react-icons/ri";
import Image from "next/image";

const SOCIAL_ICONS: Record<
  string,
  React.ComponentType<{ className?: string }>
> = {
  GitHub: RiGithubLine,
  LinkedIn: RiLinkedinBoxLine,
  Email: MailIcon,
  Twitter: RiTwitterLine,
  Instagram: RiInstagramLine,
};

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-border/60 bg-background/88 backdrop-blur-xl">
      <div className="app-shell grid gap-10 py-12 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div className="space-y-5">
          <Link href="/" className="flex items-center gap-3">
          <span className="neon-ring flex size-40 items-center justify-center text-sm font-semibold text-primary-foreground">
              <Image
                src="/BnetInnovation.png"
                alt={`${PROFILE.name} profile visual`}
                width={680}
                height={700}
                unoptimized
                className="object-cover"
              />
          </span>
          </Link>
          <p className="max-w-xl text-sm leading-7 text-muted-foreground">
            Frontend and mobile engineering with a focus on scalable React
            systems, production-ready Firebase integration, and sharper
            user-facing execution.
          </p>
          <div className="surface-subtle grid gap-3 border-primary/15 bg-background/32 p-4 sm:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Based in
              </p>
              <p className="mt-2 text-sm text-foreground">{PROFILE.location}</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Availability
              </p>
              <p className="mt-2 text-sm text-foreground">
                {PROFILE.availability}
              </p>
            </div>
          </div>
        </div>
        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            Navigate
          </h3>
          <div className="flex flex-row justify-evenly gap-2">
            {NAVIGATION_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex w-fit p-2 items-center justify-center rounded-sm border border-border/50 bg-background/30 text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            Connect
          </h3>
          <div className="flex flex-row justify-evenly">
            {SOCIAL_LINKS.map((item) => {
              const Icon = SOCIAL_ICONS[item.label];

              return (
                <a
                  key={item.label}
                  href={item.href}
                  aria-label={item.label}
                  className="flex size-10 items-center justify-center rounded-full border border-border/50 bg-background/30 text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
                >
                  {Icon ? <Icon className="size-6" /> : item.label}
                </a>
              );
            })}
          </div>
        </div>
      </div>
      <div className="app-shell flex flex-col items-center justify-between gap-3 border-t border-border/60 py-5 text-xs text-muted-foreground sm:flex-row">
        <p>
          &copy; {year} {PROFILE.name}. All rights reserved.
        </p>
        <Button asChild variant="ghost" size="sm" className="gap-1.5 text-xs">
          <a href="#top">
            Back to top
            <ArrowUpIcon className="size-3.5" />
          </a>
        </Button>
      </div>
    </footer>
  );
}
