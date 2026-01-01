import * as React from "react";
import { cn } from "@/lib/utils";
import { glassBase, glassInnerGlow } from "@/lib/glass";

export interface D2YCardProps extends React.HTMLAttributes<HTMLDivElement> {
  interactive?: boolean;
}

export function D2YCard({ className, interactive, ...props }: D2YCardProps) {
  return (
    <div
      className={cn(
        glassBase,
        glassInnerGlow,
        "rounded-3xl p-6 relative overflow-hidden",
        interactive && "hover:scale-[1.02] transition-transform",
        className
      )}
      {...props}
    />
  );
}
