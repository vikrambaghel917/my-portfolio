import { cn } from "@/src/lib/utils";

type PageHeaderProps = {
  eyebrow?: string;
  title: React.ReactNode;
  description: React.ReactNode;
  actions?: React.ReactNode;
  className?: string;
};

export function PageHeader({
  eyebrow,
  title,
  description,
  actions,
  className,
}: PageHeaderProps) {
  return (
    <header
      className={cn(
        "surface-strong relative overflow-hidden grid gap-6 border-primary/16 p-5 lg:grid-cols-[1fr_auto] lg:items-end sm:p-8",
        className
      )}
    >
      <div
        aria-hidden
        className="hero-orb -top-20 right-[-4rem] size-52 bg-primary/10 sm:size-72"
      />
      <div className="relative z-10 space-y-3">
        {eyebrow ? (
          <p className="text-label text-primary">
            {eyebrow}
          </p>
        ) : null}
        <div className="space-y-3">
          <h1 className="text-title max-w-4xl text-foreground lg:text-[clamp(2.75rem,5vw,4.5rem)]">
            {title}
          </h1>
          <p className="text-body-lg max-w-3xl text-muted-foreground">
            {description}
          </p>
        </div>
      </div>
      {actions ? <div className="relative z-10 flex flex-wrap gap-3">{actions}</div> : null}
    </header>
  );
}
