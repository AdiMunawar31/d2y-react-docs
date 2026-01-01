import { Outlet } from "react-router-dom";
import { meshBackgroundMap, type MeshVariant } from "@/utils/mesh";
import { GlassNavbar } from "./GlassNavbar";
import { GlassFooter } from "./GlassFooter";
import { cn } from "@/lib/utils";

interface MainLayoutProps {
  mesh?: MeshVariant;
}

export function MainLayout({ mesh = "homepage" }: MainLayoutProps) {
  return (
    <div
      className={cn(
        "min-h-screen text-white relative overflow-hidden",
        meshBackgroundMap[mesh]
      )}
    >
      <GlassNavbar />

      <main className="relative z-10 px-8 pt-8 pb-24">
        <Outlet />
      </main>

      <GlassFooter />
    </div>
  );
}
