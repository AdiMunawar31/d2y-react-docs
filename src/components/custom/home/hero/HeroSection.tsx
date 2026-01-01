import { GlassSection } from "@/components/layout/GlassSection";
import { HeroBackground } from "../HeroBackground";
import { HeroBadge } from "./HeroBadge";
import { HeroActions } from "./HeroActions";
import HeroMockup from "./HeroMockup";

export function HeroSection() {
  return (
    <GlassSection>
      <HeroBackground />

      <div className="relative z-20 layout-content-container max-w-350 mx-auto px-16 lg:px-10 pb-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col items-start text-left space-y-8 max-w-2xl">
            <HeroBadge />

            <h1 className="text-5xl lg:text-7xl font-black leading-[1.1]">
              The Complete <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-indigo-400 to-purple-500">
                Frontend Ecosystem
              </span>
            </h1>

            <p className="text-lg text-slate-300 max-w-lg">
              More than just a component library. Liquid Glass UI provides a
              comprehensive suite of developer tools and production-ready React
              components.
            </p>
            <HeroActions />
          </div>

          <HeroMockup />
        </div>
      </div>
    </GlassSection>
  );
}
