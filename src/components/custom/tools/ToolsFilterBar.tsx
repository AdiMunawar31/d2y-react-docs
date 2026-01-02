import { ArrowDownUp } from "lucide-react";

const filters = ["All", "Color", "Text", "Media", "Date", "Calculator"];

export function ToolsFilterBar() {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
      <div className="flex flex-wrap gap-2">
        {filters.map((item, i) => (
          <button
            key={item}
            className={
              i === 0
                ? "px-4 py-2 rounded-lg bg-primary text-white text-sm font-medium shadow-md"
                : "px-4 py-2 rounded-lg bg-white dark:bg-[#1e293b] text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 text-sm"
            }
          >
            {item}
          </button>
        ))}
      </div>

      <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white dark:bg-[#1e293b] border border-slate-200 dark:border-slate-700">
        <ArrowDownUp size={18} className="text-slate-400" />
        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
          Sort by: Featured
        </span>
      </div>
    </div>
  );
}
