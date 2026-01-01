import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export interface D2YCheckboxProps
  extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> {
  label?: string;
}

export const D2YCheckbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  D2YCheckboxProps
>(({ className, label, ...props }, ref) => {
  return (
    <label className="flex items-center gap-3 cursor-pointer">
      <CheckboxPrimitive.Root
        ref={ref}
        className={cn(
          "h-5 w-5 rounded-md backdrop-blur-md bg-white/10 border border-white/30",
          "data-[state=checked]:bg-blue-500/30 data-[state=checked]:border-blue-400/40",
          "flex items-center justify-center transition",
          className
        )}
        {...props}
      >
        <CheckboxPrimitive.Indicator>
          <Check className="h-3.5 w-3.5 text-white" />
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>

      {label && <span className="text-sm text-white/80">{label}</span>}
    </label>
  );
});

D2YCheckbox.displayName = "D2YCheckbox";
