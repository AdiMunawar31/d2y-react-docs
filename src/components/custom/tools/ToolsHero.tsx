import { Search } from "lucide-react";

export function ToolsHero() {
  return (
    <section className="flex flex-col gap-6 pt-4 pb-8">
      <div>
        <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
          Tools Explorer
        </h2>
        <p className="text-lg text-slate-400 max-w-2xl">
          Discover utilities, converters, and advanced developer tools to
          streamline your workflow.
        </p>
      </div>

      <div className="relative hidden sm:block group w-full max-w-xl">
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
    </section>
  );
}
