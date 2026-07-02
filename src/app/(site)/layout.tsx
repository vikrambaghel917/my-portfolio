import { SiteShell } from "@/components/layout/site-shell";

type SiteRoutesLayoutProps = {
  children: React.ReactNode;
};

export default function SiteRoutesLayout({
  children,
}: SiteRoutesLayoutProps) {
  return <SiteShell>{children}</SiteShell>;
}
