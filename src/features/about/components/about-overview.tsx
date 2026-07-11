"use client";

import Image from "next/image";
import {
  BriefcaseBusinessIcon,
  Code2Icon,
  DatabaseZapIcon,
  MapPinIcon,
} from "lucide-react";
import { PROFILE } from "@/constants/portfolio";
import { Badge } from "@/src/components/ui/badge";
import { Card, CardContent } from "@/src/components/ui/card";

export function AboutOverview() {
  return (
    <Card className="surface surface-interactive overflow-hidden border-primary/14 bg-background/34 backdrop-blur-2xl">
      <CardContent className="grid gap-6 p-5 lg:grid-cols-[20rem_1fr] lg:items-center lg:p-8">
        <div className="relative">
          <div
            aria-hidden
            className="hero-orb -top-10 -left-8 size-28 bg-primary/14"
          />
          <div className="surface-subtle relative overflow-hidden border-primary/18 p-3">
            <Image
              src="/me.png"
              alt={`${PROFILE.name} profile visual`}
              width={640}
              height={760}
              unoptimized
              className="h-auto w-full rounded-[1.2rem] object-cover"
            />
          </div>
        </div>

        <div className="space-y-5">
          <div className="space-y-3">
            <Badge variant="outline" className="rounded-full border-primary/20 bg-background/36 px-3 py-1 font-medium text-primary">
              About Vikram Baghel
            </Badge>
            <div className="space-y-2">
              <h2 className="text-title text-foreground">
                {PROFILE.name}
              </h2>
              <p className="text-lg font-semibold text-primary">
                full stack developer
              </p>
            </div>
          </div>

          <p className="max-w-3xl text-sm font-medium leading-7 text-foreground/82">
            I build production-focused web and mobile applications with strong frontend execution,
            dependable backend integration, and code structures that remain maintainable as products grow.
            My work leans toward React, Next.js, React Native, Firebase, and practical architecture decisions
            that help teams ship faster without losing clarity in the codebase.
          </p>

          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-[1.2rem] border border-border/50 bg-background/46 p-4 backdrop-blur-xl">
              <div className="flex items-center gap-2 text-primary">
                <Code2Icon className="size-4.5" />
                <p className="text-sm font-semibold">Frontend focus</p>
              </div>
              <p className="mt-2 text-sm font-medium leading-6 text-foreground/78">
                Design systems, responsive interfaces, component architecture, and polished product UI.
              </p>
            </div>
            <div className="rounded-[1.2rem] border border-border/50 bg-background/46 p-4 backdrop-blur-xl">
              <div className="flex items-center gap-2 text-primary">
                <DatabaseZapIcon className="size-4.5" />
                <p className="text-sm font-semibold">Backend lean</p>
              </div>
              <p className="mt-2 text-sm font-medium leading-6 text-foreground/78">
                API integration, auth flows, realtime data, and scalable structure across services and apps.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 text-sm font-medium text-foreground/74">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/14 bg-background/40 px-4 py-2">
              <BriefcaseBusinessIcon className="size-4 text-primary" />
              {PROFILE.role}
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/14 bg-background/40 px-4 py-2">
              <MapPinIcon className="size-4 text-primary" />
              {PROFILE.location}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
