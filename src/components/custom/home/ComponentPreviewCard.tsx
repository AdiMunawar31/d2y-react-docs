import { D2YCard } from "@/components/base/D2YCard";

interface ComponentPreviewCardProps {
  name: string;
  library: string;
}

export function ComponentPreviewCard({
  name,
  library,
}: ComponentPreviewCardProps) {
  return (
    <D2YCard className="h-40 flex flex-col justify-between">
      <div className="h-10 w-24 rounded-lg bg-white/10" />

      <div className="flex items-center justify-between text-sm">
        <span>{name}</span>
        <span className="text-xs text-white/50">{library}</span>
      </div>
    </D2YCard>
  );
}
