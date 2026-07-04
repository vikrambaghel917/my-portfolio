import {
  BoxesIcon,
  BriefcaseBusinessIcon,
  Code2Icon,
  GlobeIcon,
  LayoutDashboardIcon,
  SmartphoneIcon,
} from "lucide-react";
import {
  RiFirebaseFill,
  RiJavascriptFill,
  RiNextjsFill,
  RiNodejsFill,
  RiReactjsFill,
  RiSupabaseFill,
  RiTailwindCssFill,
} from "react-icons/ri";
import { PageHeader } from "@/components/common/page-header";
import { CONTACT_BACKEND_STACK, CONTACT_FRONTEND_STACK } from "@/constants/contact";
import { SERVICE_CATEGORIES } from "@/constants/services";
import { ContactForm } from "@/features/contact/components/contact-form";
import { createCaptchaChallenge } from "@/server/contact-captcha";
import { Badge } from "@/src/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/src/components/ui/card";

const FRONTEND_STACK_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  React: RiReactjsFill,
  "Next.js": RiNextjsFill,
  TypeScript: Code2Icon,
  JavaScript: RiJavascriptFill,
  "Tailwind CSS": RiTailwindCssFill,
  "Material UI": BoxesIcon,
  "React Native": SmartphoneIcon,
  Expo: SmartphoneIcon,
};

const BACKEND_STACK_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  "Node.js": RiNodejsFill,
  Express: RiNodejsFill,
  PostgreSQL: BoxesIcon,
  Firebase: RiFirebaseFill,
  Supabase: RiSupabaseFill,
  "REST APIs": GlobeIcon,
  Authentication: BriefcaseBusinessIcon,
  "Third-party Integrations": LayoutDashboardIcon,
};

const CONTACT_SERVICE_GROUPS = [
  "Business Websites",
  "Web Applications",
  "E-Commerce Systems",
  "Mobile Applications",
  "Backend and API Development",
];

export default function ContactPage() {
  const featuredServices = SERVICE_CATEGORIES.filter((category) =>
    CONTACT_SERVICE_GROUPS.includes(category.title)
  );
  const slidingServices = [...featuredServices, ...featuredServices];
  const initialCaptcha = createCaptchaChallenge();

  return (
    <div className="app-shell space-y-8 py-8 sm:py-12 lg:py-16">
      <PageHeader
        eyebrow="Contact"
        title="Let's talk"
        description="Share the role or project details and I'll reply with the next step."
      />
      <div className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
        <ContactForm initialCaptcha={initialCaptcha} />
        <div className="grid gap-4">
          <Card className="surface-subtle surface-interactive border-primary/12 bg-background/34">
            <CardHeader>
              <CardTitle className="text-lg">Frontend stack</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {CONTACT_FRONTEND_STACK.map((item) => {
                  const Icon = FRONTEND_STACK_ICONS[item] ?? Code2Icon;

                  return (
                    <div
                      key={item}
                      className="rounded-[1.2rem] border border-border/50 bg-background/46 p-4 text-center"
                    >
                      <span className="mx-auto inline-flex size-12 items-center justify-center rounded-full bg-primary/12 text-primary">
                        <Icon className="size-7" />
                      </span>
                      <p className="mt-3 text-sm font-medium text-foreground/82">{item}</p>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          <Card className="surface-subtle surface-interactive border-primary/12 bg-background/34">
            <CardHeader>
              <CardTitle className="text-lg">Backend stack</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {CONTACT_BACKEND_STACK.map((item) => {
                  const Icon = BACKEND_STACK_ICONS[item] ?? BoxesIcon;

                  return (
                    <div
                      key={item}
                      className="rounded-[1.2rem] border border-border/50 bg-background/46 p-4 text-center"
                    >
                      <span className="mx-auto inline-flex size-12 items-center justify-center rounded-full bg-primary/12 text-primary">
                        <Icon className="size-7" />
                      </span>
                      <p className="mt-3 text-sm font-medium text-foreground/82">{item}</p>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          <Card className="surface-subtle surface-interactive border-primary/12 bg-background/34">
            <CardHeader>
              <CardTitle className="text-lg">Services</CardTitle>
            </CardHeader>
            <CardContent className="overflow-hidden">
              <div className="pause-on-hover -mx-1 overflow-hidden">
                <div className="animate-marquee flex w-max gap-4 py-1 pr-4">
                  {slidingServices.map((service, index) => (
                    <div
                      key={`${service.title}-${index}`}
                      className="w-[calc(100vw-2rem)] max-w-[20rem] shrink-0 rounded-[1.35rem] border border-border/50 bg-background/46 p-4 shadow-[0_18px_50px_-30px_rgba(14,165,233,0.5)] sm:w-[20rem] sm:max-w-none"
                    >
                      <p className="text-sm font-semibold text-primary">{service.title}</p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {service.includes.map((item) => (
                          <Badge key={item} variant="secondary" className="font-medium">
                            {item}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
