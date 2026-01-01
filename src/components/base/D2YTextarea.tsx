import * as React from "react";
import { cn } from "@/lib/utils";
import { glassBase, glassInnerGlow } from "@/lib/glass";

export interface D2YTextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  hint?: string;
}

export const D2YTextarea = React.forwardRef<
  HTMLTextAreaElement,
  D2YTextareaProps
>(({ className, label, error, hint, ...props }, ref) => {
  return (
    <div className="flex flex-col gap-1.5">
      {label && <label className="text-sm text-white/70">{label}</label>}

      <textarea
        ref={ref}
        className={cn(
          glassBase,
          glassInnerGlow,
          "rounded-2xl px-4 py-3 text-white bg-transparent",
          "placeholder:text-white/50 focus:outline-none focus:ring-2 ring-blue-400/40",
          "resize-none min-h-30",
          className
        )}
        {...props}
      />

      {hint && !error && <span className="text-xs text-white/50">{hint}</span>}

      {error && <span className="text-xs text-red-400">{error}</span>}
    </div>
  );
});

D2YTextarea.displayName = "D2YTextarea";
