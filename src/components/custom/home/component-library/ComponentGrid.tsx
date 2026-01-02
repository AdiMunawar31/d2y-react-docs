import { COMPONENT_LIBRARY } from "@/data/component-library";
import { ComponentCard } from "./ComponentCard";

export function ComponentGrid() {
  const limitedComponents = COMPONENT_LIBRARY.slice(0, 4);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {limitedComponents.map((item) => (
        <ComponentCard key={item.id} item={item} />
      ))}
    </div>
  );
}
