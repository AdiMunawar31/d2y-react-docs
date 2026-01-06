import { ROUTES } from "@/lib/constants/routes";
import { ArrowRight, Wrench } from "lucide-react";
import { Link } from "react-router-dom";

export function HeroActions() {
  return (
    <div className="flex flex-wrap items-center gap-4 w-full">
      <Link
        to={ROUTES.COMPONENTS}
        className="group relative inline-flex h-12 items-center justify-center gap-2 overflow-hidden rounded-xl bg-primary px-8 text-base font-bold text-white shadow-[0_0_20px_rgba(43,140,238,0.4)] transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(43,140,238,0.6)] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background-dark"
      >
        <span>Browse Components</span>
        <ArrowRight size={16} />
      </Link>
      <Link
        to={ROUTES.TOOLS}
        className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-glass-border bg-white/5 px-8 text-base font-bold text-white backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/20 focus:outline-none focus:ring-2 focus:ring-white/20"
      >
        <Wrench size={16} />
        <span>Explore Tools</span>
      </Link>
    </div>
  );
}
