import { GlassSection } from "@/components/layout/GlassSection";
import { ComponentGrid } from "./ComponentGrid";
import { ComponentHeader } from "./ComponentHeader";
import { LoadMoreButton } from "./LoadMoreButton";

export function ComponentLibrarySection() {
  return (
    <GlassSection className="max-w-350 mx-auto px-6 lg:px-10">
      <ComponentHeader />
      <ComponentGrid />
      <LoadMoreButton />
    </GlassSection>
  );
}
