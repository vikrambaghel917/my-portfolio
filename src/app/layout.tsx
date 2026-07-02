import type { Metadata } from "next";
import { appHeading, appMono, appSans } from "@/app/fonts";
import { AppProviders } from "@/components/providers/app-providers";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Vikram Baghel | Frontend Developer",
    template: "%s | Vikram Baghel",
  },
  description:
    "Portfolio website for Vikram Baghel, a frontend developer building scalable React, Next.js, React Native, and Firebase-powered web and mobile applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${appSans.variable} ${appHeading.variable} ${appMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background text-foreground">
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
