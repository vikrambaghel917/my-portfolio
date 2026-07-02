"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/src/components/ui/sheet";

type DrawerProps = {
  trigger: React.ReactNode;
  title: string;
  description?: string;
  side?: "left" | "right";
  children: React.ReactNode;
};

export function Drawer({
  trigger,
  title,
  description,
  side = "right",
  children,
}: DrawerProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>{trigger}</SheetTrigger>
      <SheetContent side={side} className="w-full max-w-xl">
        <SheetHeader className="pb-6">
          <SheetTitle>{title}</SheetTitle>
          {description ? <SheetDescription>{description}</SheetDescription> : null}
        </SheetHeader>
        {children}
      </SheetContent>
    </Sheet>
  );
}
