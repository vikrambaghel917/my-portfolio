import { AlertCircleIcon } from "lucide-react";
import { Button } from "@/src/components/ui/button";
import { Card, CardContent } from "@/src/components/ui/card";

type ErrorStateProps = {
  title: string;
  description: string;
  onRetry?: () => void;
};

export function ErrorState({
  title,
  description,
  onRetry,
}: ErrorStateProps) {
  return (
    <Card className="surface-subtle border-destructive/30">
      <CardContent className="flex flex-col items-center gap-4 px-6 py-14 text-center">
        <span className="flex size-12 items-center justify-center rounded-full bg-destructive/10 text-destructive">
          <AlertCircleIcon className="size-5" />
        </span>
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-foreground">{title}</h3>
          <p className="max-w-xl text-sm leading-6 text-muted-foreground">{description}</p>
        </div>
        {onRetry ? (
          <Button type="button" onClick={onRetry}>
            Retry
          </Button>
        ) : null}
      </CardContent>
    </Card>
  );
}
