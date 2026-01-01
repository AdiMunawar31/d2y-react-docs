import { Atom, Code, Search } from "lucide-react";

export function GlassNavbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-glass-border glass-panel">
      <div className="flex h-16 items-center justify-between px-6 lg:px-10 max-w-350 mx-auto w-full">
        <div className="flex items-center gap-8">
          <a
            className="flex items-center gap-3 text-white transition-opacity hover:opacity-80"
            href="#"
          >
            <div className="flex items-center justify-center size-8 rounded-lg bg-primary/20 text-primary ring-1 ring-primary/30 shadow-[0_0_15px_rgba(43,140,238,0.3)]">
              <Atom />
            </div>
            <h2 className="text-white text-lg font-bold tracking-tight">
              Liquid Glass UI
            </h2>
          </a>
          <nav className="hidden md:flex items-center gap-6">
            <a
              className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
              href="#tools"
            >
              Tools
            </a>
            <a
              className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
              href="#components"
            >
              Components
            </a>
            <a
              className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
              href="#"
            >
              Pricing
            </a>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative hidden sm:block group">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-slate-400 group-focus-within:text-primary transition-colors">
              <Search />
            </div>
            <input
              className="block w-full rounded-xl border border-glass-border bg-white/5 py-2 pl-10 pr-4 text-sm text-white placeholder-slate-400 focus:border-primary focus:bg-white/10 focus:ring-1 focus:ring-primary outline-none transition-all"
              placeholder="Search..."
              type="text"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <kbd className="hidden lg:inline-flex h-5 items-center gap-1 rounded border border-glass-border bg-white/5 px-1.5 font-mono text-[10px] font-medium text-slate-400">
                <span className="text-xs">⌘</span>K
              </kbd>
            </div>
          </div>
          <a
            aria-label="View on GitHub"
            className="flex items-center justify-center size-10 rounded-xl bg-white/5 hover:bg-white/10 text-white border border-glass-border transition-colors"
            href="#"
          >
            <Code />
          </a>
          <button className="md:hidden flex items-center justify-center size-10 text-white">
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </div>
    </header>
  );
}
