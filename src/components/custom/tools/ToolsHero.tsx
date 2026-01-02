import { Search } from "lucide-react";

export function ToolsHero() {
  return (
    <section className="flex flex-col gap-6 pt-4 pb-8">
      <div>
        <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
          Tools Explorer
        </h2>
        <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl">
          Discover utilities, converters, and advanced developer tools to
          streamline your workflow.
        </p>
      </div>

      <div className="w-full max-w-2xl">
        <div className="relative group">
          <Search
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary"
            size={20}
          />
          <input
            className="w-full pl-12 pr-16 py-4 rounded-xl bg-white dark:bg-[#1e293b] ring-1 ring-slate-200 dark:ring-slate-700 focus:ring-2 focus:ring-primary text-slate-900 dark:text-white placeholder:text-slate-400 transition-all"
            placeholder="Search tools, utilities, converters..."
          />
          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded border border-slate-200 dark:border-slate-600">
            ⌘ K
          </span>
        </div>
      </div>
    </section>
  );
}
