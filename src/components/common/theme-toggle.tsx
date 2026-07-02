"use client";

import { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";
import { MoonStarIcon, SunIcon } from "lucide-react";
import { Button } from "@/src/components/ui/button";

export function ThemeToggle() {
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );
  const { resolvedTheme, setTheme } = useTheme();

  if (!mounted) {
    return <Button variant="outline" size="icon" aria-hidden className="rounded-full opacity-0" />;
  }

  const isDark = resolvedTheme === "dark";

  return (
    <Button
      type="button"
      variant="outline"
      size="icon"
      className="rounded-full"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      {isDark ? <SunIcon /> : <MoonStarIcon />}
    </Button>
  );
}