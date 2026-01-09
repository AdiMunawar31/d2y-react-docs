"use client";

import { useWcagContrast } from "@/hooks/tools/useWcagContrast";
import WcagHeader from "@/components/features/tools/wcag-contrast-checker/WcagHeader";
import ColorInputCard from "@/components/features/tools/wcag-contrast-checker/ColorInputCard";
import GuidelinesCard from "@/components/features/tools/wcag-contrast-checker/GuidelinesCard";
import ScoreDashboard from "@/components/features/tools/wcag-contrast-checker/ScoreDashboard";
import ComplianceGrid from "@/components/features/tools/wcag-contrast-checker/ComplianceGrid";
import LivePreview from "@/components/features/tools/wcag-contrast-checker/LivePreview";

export default function WcagContrastPage() {
  const {
    foreground,
    background,
    contrastRatio,
    compliance,
    quality,
    handleForegroundChange,
    handleBackgroundChange,
    handleSwapColors,
    handleReset,
  } = useWcagContrast();

  return (
    <main className="flex-1 flex justify-center py-4 px-8">
      <div className="w-full flex flex-col gap-8">
        <WcagHeader />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-4 flex flex-col gap-6">
            <ColorInputCard
              foreground={foreground}
              background={background}
              onForegroundChange={handleForegroundChange}
              onBackgroundChange={handleBackgroundChange}
              onSwap={handleSwapColors}
              onReset={handleReset}
            />
            <GuidelinesCard />
          </div>

          <div className="lg:col-span-8 flex flex-col gap-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <ScoreDashboard contrastRatio={contrastRatio} quality={quality} />
              <ComplianceGrid compliance={compliance} />
            </div>

            <LivePreview foreground={foreground} background={background} />
          </div>
        </div>

        <div className="flex justify-center pt-8 pb-4">
          <p className="text-[#92adc9] text-sm">
            Design System Utilities • Built for Accessibility
          </p>
        </div>
      </div>
    </main>
  );
}
