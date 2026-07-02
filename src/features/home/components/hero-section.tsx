import Link from "next/link";
import { ArrowRightIcon, MapPinIcon } from "lucide-react";
import type { IconType } from "react-icons";
import {
  SiExpo,
  SiFirebase,
  SiJavascript,
  SiMui,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";
import { RiBracesLine, RiCodeBoxLine, RiSupabaseLine } from "react-icons/ri";
import { AiOutlineApi } from "react-icons/ai";
import { StatCard } from "@/components/common/stat-card";
import { HERO_METRICS, HERO_STACK_MARQUEE, PROFILE } from "@/constants/portfolio";
import { ROUTES } from "@/constants/routes";
import { Button } from "@/src/components/ui/button";
import { Badge } from "@/src/components/ui/badge";

const STACK_ICONS: Record<string, IconType> = {
  react: SiReact,
  nextjs: SiNextdotjs,
  typescript: SiTypescript,
  expo: SiExpo,
  firebase: SiFirebase,
  tailwind: SiTailwindcss,
  mui: SiMui,
  code: AiOutlineApi,
  api: RiBracesLine,
  node: SiNodedotjs,
  javascript: SiJavascript,
  vercel: SiVercel,
  supabase: RiSupabaseLine,
};

export function HeroSection() {
  return (
    <section className="app-shell section-block pt-6 sm:pt-10">
      <div className="surface-strong neon-ring relative grid gap-8 overflow-hidden p-5 sm:p-8 lg:grid-cols-[1.2fr_0.8fr] lg:p-12">
        <div
          aria-hidden
          className="bg-grid pointer-events-none absolute inset-0 hidden opacity-70 sm:block [mask-image:radial-gradient(ellipse_70%_68%_at_18%_0%,black,transparent)]"
        />
        <div
          aria-hidden
          className="hero-orb -top-24 -right-24 hidden size-72 bg-primary/24 sm:block"
        />
        <div
          aria-hidden
          className="hero-orb top-1/3 -left-16 hidden size-56 bg-accent/34 sm:block"
        />
        <div className="relative space-y-8">
          <div className="space-y-6">
            <Badge
              variant="outline"
              className="h-auto max-w-full shrink whitespace-normal rounded-full border-primary/30 bg-background/40 px-4 py-1 text-[0.7rem] font-semibold tracking-[0.2em] text-foreground shadow-theme-subtle sm:text-xs"
            >
              <span className="relative flex size-1.5">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary/60" />
                <span className="relative inline-flex size-1.5 rounded-full bg-primary" />
              </span>
              {PROFILE.availability}
            </Badge>
            <div className="space-y-4">
              <h1 className="text-display max-w-4xl text-balance text-foreground">
                <span className="text-gradient">Modern web and mobile products.</span>{" "}
                <span className="text-foreground">Built clean. Built to scale.</span>
              </h1>
              <p className="text-body-lg max-w-2xl text-muted-foreground">
                {PROFILE.summary}
              </p>
            </div>
            <div className="grid gap-3 text-sm text-muted-foreground sm:flex sm:flex-wrap sm:items-center">
              <span className="flex max-w-full items-start gap-2 rounded-full border border-border/50 bg-background/34 px-4 py-2 backdrop-blur-xl">
                <MapPinIcon className="size-4 text-primary" />
                <span className="min-w-0">{PROFILE.location}</span>
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="rounded-full border border-primary/20 px-5 shadow-theme-medium">
              <Link href={ROUTES.projects}>
                Explore projects
                <ArrowRightIcon />
              </Link>
            </Button>
            <Button asChild type="button" size="lg" variant="outline" className="rounded-full border-border/40 bg-background/40 px-5 backdrop-blur-xl">
              <Link href={ROUTES.contact}>Start a project</Link>
            </Button>
          </div>
        </div>

        <div className="relative grid gap-4 content-start">
          {HERO_METRICS.map((metric) => (
            <StatCard
              key={metric.label}
              {...metric}
              className="surface-interactive border-primary/20"
              labelClassName="font-bold text-primary"
              valueClassName="font-extrabold text-primary"
              detailClassName="text-foreground/72"
            />
          ))}
        </div>
      </div>

      <div className="pause-on-hover surface-subtle mt-4 w-full overflow-hidden border-primary/15 bg-background/34 py-4 backdrop-blur-xl">
        <div className="animate-marquee flex w-max min-w-full gap-4 whitespace-nowrap px-4 sm:gap-5">
          {[...HERO_STACK_MARQUEE, ...HERO_STACK_MARQUEE].map((item, index) => {
            const Icon = STACK_ICONS[item.icon] ?? RiCodeBoxLine;

            return (
              <span
                key={`${item.name}-${index}`}
                className="flex flex-col items-center gap-3 rounded-xl border border-primary/15 bg-background/40 px-4 py-2 text-sm font-semibold tracking-wide text-foreground"
              >
                <span className="inline-flex size-10 items-center justify-center rounded-full bg-primary/14 text-primary">
                  <Icon className="size-6" />
                </span>
                <span>{item.name}</span>
              </span>
            );
          })}
        </div>
      </div>
    </section>
  );
}
