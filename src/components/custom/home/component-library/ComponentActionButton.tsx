import { type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ActionButtonProps {
  icon: LucideIcon;
  primary?: boolean;
}

export function ComponentActionButton({
  icon: Icon,
  primary,
}: ActionButtonProps) {
  return (
    <button
      className={cn(
        "h-10 w-10 rounded-full flex items-center justify-center",
        "transition-transform hover:scale-110",
        primary ? "bg-primary text-white" : "bg-white text-black"
      )}
    >
      <Icon size={18} />
    </button>
  );
}
