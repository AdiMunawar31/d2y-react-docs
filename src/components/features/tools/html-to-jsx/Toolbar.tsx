import { Trash2, Play, ScrollText } from "lucide-react";

interface ToolbarProps {
  runConvert(): void;
  clear(): void;
}

export function Toolbar({ runConvert, clear }: ToolbarProps) {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-b border-white/5 p-3 bg-black/20">
      {/* LEFT OPTIONS */}
      <div className="flex items-center gap-1 bg-black/20 p-1 rounded-lg border border-white/5">
        <button className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/10 text-white text-xs font-medium shadow-sm transition-all border border-white/5">
          <ScrollText size={14} className="text-primary" />
          Pretty Print
        </button>

        <div className="w-px h-4 bg-white/10 mx-1" />
      </div>

      {/* ACTIONS */}
      <div className="flex items-center gap-3">
        <button
          onClick={clear}
          className="text-xs font-medium text-slate-400 hover:text-white hover:bg-white/5 px-3 py-1.5 rounded-md transition-all flex items-center gap-1.5"
        >
          <Trash2 size={14} />
          Clear
        </button>

        <button
          onClick={runConvert}
          className="bg-primary hover:bg-blue-600 text-white text-xs font-bold px-4 py-1.5 rounded-md shadow-lg shadow-primary/25 transition-all flex items-center gap-1.5 border border-primary/50"
        >
          <Play size={14} />
          Run
        </button>
      </div>
    </div>
  );
}
