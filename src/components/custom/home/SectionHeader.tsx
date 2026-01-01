import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeader({
  badge,
  title,
  description,
  align = "center",
}: SectionHeaderProps) {
  return (
    <div
      className={cn("max-w-2xl", align === "center" && "mx-auto text-center")}
    >
      {badge && (
        <span className="inline-block mb-3 rounded-full bg-white/10 border border-white/20 px-3 py-1 text-xs text-white/70">
          {badge}
        </span>
      )}

      <h2 className="text-4xl font-bold">{title}</h2>

      {description && <p className="mt-4 text-white/60">{description}</p>}
    </div>
  );
}
