import { cn } from "@/lib/utils";

export function D2YBadge({
  className,
  variant = "default",
  ...props
}: {
  variant?: "default" | "success" | "warning" | "danger";
} & React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "px-2 py-0.5 text-xs rounded-full backdrop-blur-md border",
        variant === "default" && "bg-white/10 border-white/20",
        variant === "success" && "bg-green-500/20 border-green-400/30",
        variant === "warning" && "bg-yellow-500/20 border-yellow-400/30",
        variant === "danger" && "bg-red-500/20 border-red-400/30",
        className
      )}
      {...props}
    />
  );
}
