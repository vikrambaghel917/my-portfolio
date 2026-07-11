import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";

type SiteShellProps = {
  children: React.ReactNode;
};

export function SiteShell({ children }: SiteShellProps) {
  return (
    <div className="relative min-h-screen overflow-x-clip">
      <div
        aria-hidden
        className="hero-orb top-16 left-[-8rem] hidden  bg-primary/20 sm:block sm:size-96"
      />
      <div
        aria-hidden
        className="hero-orb top-[24rem] right-[-10rem] hidden size-80 bg-accent/18 sm:block sm:size-[32rem]"
      />
      <div
        aria-hidden
        className="hero-orb bottom-[-8rem] left-1/3 hidden size-80 bg-chart-4/14 sm:block sm:size-[28rem]"
      />
      <span id="top" className="sr-only" />
      <SiteHeader />
      <main className="relative z-10 pb-4 sm:pb-12">{children}</main>
      <SiteFooter />
    </div>
  );
}
