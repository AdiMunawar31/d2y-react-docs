import { ComponentLibrarySection } from "@/components/custom/home/component-library/ComponentLibrarySection";
import { HeroSection } from "@/components/custom/home/hero/HeroSection";
import { DeveloperToolkitSection } from "@/components/custom/home/toolkit/DeveloperToolkitSection";

export function HomePage() {
  return (
    <>
      <HeroSection />
      <DeveloperToolkitSection />
      <ComponentLibrarySection />
    </>
  );
}
