import { EmptyState } from "@/components/feedback/EmptyState";
import { ToolCard } from "./ToolCard";
import type { ToolItem } from "@/data/tools-data";

export function ToolsGrid({ tools }: { tools: ToolItem[] }) {
  if (!tools.length) return <EmptyState />;

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {tools.map((tool) => (
        <ToolCard key={tool.id} item={tool} />
      ))}
    </section>
  );
}
