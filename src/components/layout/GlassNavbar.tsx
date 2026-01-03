import { Atom, Code, Menu, Search } from "lucide-react";
import { NavLink } from "react-router-dom";
import NavItem from "./NavItem";
import { ROUTES } from "@/lib/constants/routes";

export function GlassNavbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-glass-border glass-panel">
      <div className="flex h-16 items-center justify-between px-6 lg:px-10 max-w-350 mx-auto w-full">
        {/* Left */}
        <div className="flex items-center gap-8">
          <NavLink
            to={ROUTES.HOME}
            className="flex items-center gap-3 text-white transition-opacity hover:opacity-80"
          >
            <div className="flex items-center justify-center size-8 rounded-lg bg-primary/20 text-primary ring-1 ring-primary/30 shadow-[0_0_15px_rgba(43,140,238,0.3)]">
              <Atom size={18} />
            </div>
            <h2 className="text-lg font-bold tracking-tight">
              Liquid Glass UI
            </h2>
          </NavLink>

          <nav className="hidden md:flex items-center gap-6">
            <NavItem to={ROUTES.TOOLS}>Tools</NavItem>
            <NavItem to={ROUTES.COMPONENTS}>Components</NavItem>
            <NavItem to={ROUTES.PRICING}>Pricing</NavItem>
          </nav>
        </div>

        {/* Right */}
        <div className="flex items-center gap-4">
          <div className="relative hidden sm:block group">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-slate-400 group-focus-within:text-primary transition-colors">
              <Search size={16} />
            </div>
            <input
              type="text"
              placeholder="Search..."
              className="block w-full rounded-xl border border-glass-border bg-white/5 py-2 pl-10 pr-4 text-sm text-white placeholder-slate-400 focus:border-primary focus:bg-white/10 focus:ring-1 focus:ring-primary outline-none transition-all"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <kbd className="hidden lg:inline-flex h-5 items-center gap-1 rounded border border-glass-border bg-white/5 px-1.5 font-mono text-[10px] font-medium text-slate-400">
                ⌘ K
              </kbd>
            </div>
          </div>

          <a
            href="https://github.com/AdiMunawar31"
            target="_blank"
            aria-label="View on GitHub"
            className="flex items-center justify-center size-10 rounded-xl bg-white/5 hover:bg-white/10 text-white border border-glass-border transition-colors"
          >
            <Code size={18} />
          </a>

          {/* Mobile Menu */}
          <button className="md:hidden flex items-center justify-center size-10 text-white">
            <Menu size={20} />
          </button>
        </div>
      </div>
    </header>
  );
}
