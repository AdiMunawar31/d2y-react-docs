import { cn } from "@/lib/utils";

const sourceStyles = {
  shadcn: "text-blue-400 ring-blue-400/20",
  MUI: "text-purple-400 ring-purple-400/20",
  Mantine: "text-cyan-400 ring-cyan-400/20",
};

export function ComponentTag({
  source,
}: {
  source: keyof typeof sourceStyles;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md bg-[#0f172a] px-2 py-1 text-xs font-medium ring-1 ring-inset",
        sourceStyles[source]
      )}
    >
      {source}
    </span>
  );
}
