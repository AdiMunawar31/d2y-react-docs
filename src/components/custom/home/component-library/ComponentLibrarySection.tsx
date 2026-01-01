import { ComponentHeader } from "./ComponentHeader";
import { ComponentFilterBar } from "./ComponentFilterBar";
import { ComponentGrid } from "./ComponentGrid";
import { LoadMoreButton } from "./LoadMoreButton";
import { GlassSection } from "@/components/layout/GlassSection";

export function ComponentLibrarySection() {
  return (
    <GlassSection className="max-w-350 mx-auto px-6 lg:px-10">
      <ComponentHeader />
      <ComponentFilterBar />
      <ComponentGrid />
      <LoadMoreButton />
    </GlassSection>
  );
}
