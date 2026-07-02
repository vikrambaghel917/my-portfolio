import { cn } from "@/src/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/src/components/ui/card";

type StatCardProps = {
  label: string;
  value: string;
  detail: string;
  className?: string;
  labelClassName?: string;
  valueClassName?: string;
  detailClassName?: string;
};

export function StatCard({
  label,
  value,
  detail,
  className,
  labelClassName,
  valueClassName,
  detailClassName,
}: StatCardProps) {
  return (
    <Card className={cn("surface-subtle h-full", className)}>
      <CardHeader className="space-y-5">
        <p className={cn("text-label text-muted-foreground", labelClassName)}>
          {label}
        </p>
        <CardTitle
          className={cn(
            "font-mono text-3xl font-semibold tracking-tight text-foreground sm:text-[2.2rem]",
            valueClassName
          )}
        >
          {value}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className={cn("text-sm leading-7 text-muted-foreground", detailClassName)}>
          {detail}
        </p>
      </CardContent>
    </Card>
  );
}
