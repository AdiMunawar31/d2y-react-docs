import * as DialogPrimitive from "@radix-ui/react-dialog";
import { cn } from "@/lib/utils";

export const D2YModal = DialogPrimitive.Root;
export const D2YModalTrigger = DialogPrimitive.Trigger;

export const D2YModalOverlay = () => (
  <DialogPrimitive.Overlay className="fixed inset-0 bg-black/40 backdrop-blur-xl" />
);

export const D2YModalContent = ({
  className,
  ...props
}: DialogPrimitive.DialogContentProps) => (
  <DialogPrimitive.Content
    className={cn(
      "fixed left-1/2 top-1/2 z-50 w-full max-w-lg -translate-x-1/2 -translate-y-1/2",
      "backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-6",
      "animate-in fade-in zoom-in-95",
      className
    )}
    {...props}
  />
);
