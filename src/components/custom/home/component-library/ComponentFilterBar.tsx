import { cn } from "@/lib/utils";
import { COMPONENT_FILTERS } from "@/data/component-filters";
import { useState } from "react";

export function ComponentFilterBar() {
  const [active, setActive] = useState("all");

  return (
    <div className="glass-panel rounded-2xl p-2 mb-10 sticky top-24 z-40 shadow-2xl mx-auto max-w-4xl border border-white/10">
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar px-2">
        {COMPONENT_FILTERS.map((item) => {
          const Icon = item.icon;
          const isActive = active === item.key;

          return (
            <button
              key={item.key}
              onClick={() => setActive(item.key)}
              className={cn(
                "shrink-0 flex items-center gap-2 rounded-lg px-4 py-2 text-sm transition-all",
                isActive
                  ? "bg-primary text-white font-semibold shadow-lg"
                  : "text-slate-300 hover:text-white hover:bg-white/10"
              )}
            >
              <Icon className="h-4 w-4" />
              {item.label}
            </button>
          );
        })}

        {/* Divider */}
        <div className="w-px h-6 bg-white/10 mx-2" />

        <SecondaryFilter label="Layouts" />
        <SecondaryFilter label="Forms" />
      </div>
    </div>
  );
}

function SecondaryFilter({ label }: { label: string }) {
  return (
    <button className="shrink-0 px-4 py-2 rounded-lg text-sm text-slate-300 hover:text-white hover:bg-white/10 transition-colors">
      {label}
    </button>
  );
}
