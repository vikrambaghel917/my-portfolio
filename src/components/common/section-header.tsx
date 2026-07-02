import { cn } from "@/src/lib/utils";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "space-y-4",
        align === "center" && "mx-auto max-w-2xl text-center",
        className
      )}
    >
      {eyebrow ? (
        <p className="text-label flex items-center gap-2 text-primary">
          <span className="h-px w-6 bg-primary/60" aria-hidden />
          {eyebrow}
        </p>
      ) : null}
      <div className="space-y-3">
        <h2 className="text-title max-w-4xl text-foreground">
          {title}
        </h2>
        <p className="text-body-lg max-w-3xl text-muted-foreground">
          {description}
        </p>
      </div>
    </div>
  );
}
