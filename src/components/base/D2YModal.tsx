"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogOverlay,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

interface D2YModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: React.ReactNode;
  className?: string;
  overlayClassName?: string;
  hideCloseButton?: boolean;
}

export function D2YModal({
  open,
  onOpenChange,
  children,
  className,
  overlayClassName,
  hideCloseButton = false,
}: D2YModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogOverlay
        className={cn(
          "fixed inset-0 z-50 bg-black/30 backdrop-blur-sm",
          overlayClassName
        )}
      />

      <DialogContent
        className={cn(
          "z-50 rounded-3xl border border-white/10 bg-slate-900 shadow-2xl",
          "data-[state=open]:animate-scale-in",
          className
        )}
      >
        <VisuallyHidden>
          <DialogTitle>Modal</DialogTitle>
          <DialogDescription>Dialog content</DialogDescription>
        </VisuallyHidden>

        {children}
      </DialogContent>
    </Dialog>
  );
}
