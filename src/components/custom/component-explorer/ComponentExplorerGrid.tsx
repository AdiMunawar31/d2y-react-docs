import { type LibraryComponent } from "@/data/component-library";
import { ComponentCard } from "../home/component-library/ComponentCard";
import { EmptyState } from "@/components/feedback/EmptyState";

export function ComponentExplorerGrid({
  tools,
}: {
  tools: LibraryComponent[];
}) {
  if (!tools.length) return <EmptyState />;

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {tools.map((item) => (
        <ComponentCard key={item.id} item={item} />
      ))}
    </section>
  );
}
