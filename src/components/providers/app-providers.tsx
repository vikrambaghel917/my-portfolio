"use client";

import { ThemeProvider } from "next-themes";
import { Toaster } from "@/src/components/ui/sonner";

type AppProvidersProps = {
  children: React.ReactNode;
};

export function AppProviders({ children }: AppProvidersProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={true}
      disableTransitionOnChange
    >
      {children}
      <Toaster position="top-right" richColors closeButton />
    </ThemeProvider>
  );
}
