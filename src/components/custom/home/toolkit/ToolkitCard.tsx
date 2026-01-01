import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ToolkitColor = "pink" | "indigo" | "green" | "orange" | "cyan";

interface ToolkitCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
  color: ToolkitColor;
}

export function ToolkitCard({
  title,
  description,
  icon: Icon,
  color,
}: ToolkitCardProps) {
  return (
    <div
      className={cn(
        "group glass-card p-6 rounded-2xl cursor-pointer",
        "transition-all duration-300 hover:-translate-y-1 hover:bg-white/5"
      )}
    >
      <div
        className={cn(
          "h-12 w-12 rounded-lg flex items-center justify-center mb-4 transition-colors",
          colorMap[color]
        )}
      >
        <Icon size={22} />
      </div>

      <h3 className="text-white font-semibold text-lg mb-2">{title}</h3>

      <p className="text-sm text-slate-400 mb-4">{description}</p>

      <span
        className={cn(
          "text-xs font-bold flex items-center gap-1 transition-colors",
          "text-white/50 group-hover:text-current"
        )}
      >
        Launch
        <ArrowUpRight size={14} />
      </span>
    </div>
  );
}

const colorMap: Record<ToolkitColor, string> = {
  pink: "bg-pink-500/20 text-pink-400 group-hover:bg-pink-500/30",
  indigo: "bg-indigo-500/20 text-indigo-400 group-hover:bg-indigo-500/30",
  green: "bg-green-500/20 text-green-400 group-hover:bg-green-500/30",
  orange: "bg-orange-500/20 text-orange-400 group-hover:bg-orange-500/30",
  cyan: "bg-cyan-500/20 text-cyan-400 group-hover:bg-cyan-500/30",
};
