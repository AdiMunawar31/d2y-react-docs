import { GlassSection } from "@/components/layout/GlassSection";
import { ToolkitHeader } from "./ToolkitHeader";
import { ToolkitGrid } from "./ToolkitGrid";

export function DeveloperToolkitSection() {
  return (
    <GlassSection
      id="tools"
      className="relative z-30 bg-background-dark border-t border-glass-border"
    >
      <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />

      <div className="max-w-350 mx-auto px-6 lg:px-10 py-24 relative z-10">
        <ToolkitHeader />
        <ToolkitGrid />
      </div>
    </GlassSection>
  );
}
