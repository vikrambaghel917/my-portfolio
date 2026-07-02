"use client";

import { ErrorState } from "@/components/common/error-state";

export default function SiteError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="app-shell py-14">
      <ErrorState
        title="This route failed to render"
        description={error.message || "An unexpected application error occurred."}
        onRetry={reset}
      />
    </div>
  );
}
