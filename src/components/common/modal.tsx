"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/src/components/ui/dialog";

type ModalProps = {
  trigger: React.ReactNode;
  title: string;
  description?: string;
  children: React.ReactNode;
};

export function Modal({
  trigger,
  title,
  description,
  children,
}: ModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="max-w-xl rounded-3xl p-0">
        <DialogHeader className="p-6 pb-4">
          <DialogTitle>{title}</DialogTitle>
          {description ? <DialogDescription>{description}</DialogDescription> : null}
        </DialogHeader>
        <div className="px-6 pb-6">{children}</div>
      </DialogContent>
    </Dialog>
  );
}
