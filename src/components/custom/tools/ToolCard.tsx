import { Link } from "react-router-dom";
import type { ToolItem } from "@/data/tools-data";
import { cn } from "@/lib/utils";
import { ROUTES } from "@/lib/constants/routes";

export function ToolCard({ item }: { item: ToolItem }) {
  const Icon = item.icon;

  return (
    <Link
      to={`${ROUTES.TOOLS}/${item.path}`}
      className="group block focus:outline-none"
    >
      <article className="tool-glass-panel p-5 rounded-xl flex flex-col gap-4 transition-all duration-300 cursor-pointer hover:-translate-y-1 focus:ring-2 focus:ring-primary/40">
        <div className="flex justify-between items-start">
          <div
            className={cn(
              "size-12 rounded-lg flex items-center justify-center border",
              `bg-linear-to-br ${item.gradient}`,
              item.iconColor
            )}
          >
            <Icon size={22} />
          </div>

          <span className="px-2 py-1 rounded bg-slate-800 border border-slate-700 text-[10px] font-bold uppercase tracking-wider text-slate-400">
            {item.category}
          </span>
        </div>

        <div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">
            {item.title}
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
            {item.description}
          </p>
        </div>
      </article>
    </Link>
  );
}
