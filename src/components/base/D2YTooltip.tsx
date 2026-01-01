import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { cn } from "@/lib/utils";

export const D2YTooltipProvider = TooltipPrimitive.Provider;
export const D2YTooltip = TooltipPrimitive.Root;
export const D2YTooltipTrigger = TooltipPrimitive.Trigger;

export const D2YTooltipContent = ({
  className,
  ...props
}: TooltipPrimitive.TooltipContentProps) => (
  <TooltipPrimitive.Content
    className={cn(
      "z-50 px-3 py-1.5 text-xs text-white",
      "backdrop-blur-xl bg-black/40 border border-white/20 rounded-lg",
      className
    )}
    sideOffset={6}
    {...props}
  />
);
