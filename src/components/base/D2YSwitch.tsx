import * as React from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";
import { cn } from "@/lib/utils";

export interface D2YSwitchProps
  extends React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root> {
  label?: string;
}

export const D2YSwitch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitive.Root>,
  D2YSwitchProps
>(({ className, label, ...props }, ref) => {
  return (
    <label className="flex items-center gap-3 cursor-pointer">
      <SwitchPrimitive.Root
        ref={ref}
        className={cn(
          "relative h-6 w-11 rounded-full backdrop-blur-md bg-white/10 border border-white/30",
          "data-[state=checked]:bg-blue-500/30",
          "transition-colors",
          className
        )}
        {...props}
      >
        <SwitchPrimitive.Thumb
          className={cn(
            "block h-5 w-5 rounded-full bg-white shadow-md transition-transform",
            "translate-x-0.5 data-[state=checked]:translate-x-[22px]"
          )}
        />
      </SwitchPrimitive.Root>

      {label && <span className="text-sm text-white/80">{label}</span>}
    </label>
  );
});

D2YSwitch.displayName = "D2YSwitch";
