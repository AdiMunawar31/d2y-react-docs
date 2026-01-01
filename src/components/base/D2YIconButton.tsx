import * as React from "react";
import { cn } from "@/lib/utils";
import { glassBase, glassHover } from "@/lib/glass";

export interface D2YIconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "sm" | "md" | "lg";
  active?: boolean;
}

export const D2YIconButton = React.forwardRef<
  HTMLButtonElement,
  D2YIconButtonProps
>(({ className, size = "md", active, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={cn(
        "inline-flex items-center justify-center",
        glassBase,
        glassHover,
        active && "bg-white/20",
        size === "sm" && "h-8 w-8 rounded-xl",
        size === "md" && "h-10 w-10 rounded-2xl",
        size === "lg" && "h-12 w-12 rounded-3xl",
        className
      )}
      {...props}
    />
  );
});

D2YIconButton.displayName = "D2YIconButton";
