import Link from "next/link";
import { EmptyState } from "@/components/common/empty-state";
import { SiteShell } from "@/components/layout/site-shell";
import { ROUTES } from "@/constants/routes";
import { Button } from "@/src/components/ui/button";

export default function NotFound() {
  return (
    <SiteShell>
      <div className="app-shell py-20">
        <EmptyState
          title="The page you requested does not exist"
          description="The route may have changed, or the link may be outdated."
        />
        <div className="mt-6 flex justify-center">
          <Button asChild>
            <Link href={ROUTES.home}>Return home</Link>
          </Button>
        </div>
      </div>
    </SiteShell>
  );
}
