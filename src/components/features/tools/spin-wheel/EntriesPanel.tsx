import { ArrowUpAZ, FileEdit, Shuffle } from "lucide-react";

interface EntriesPanelProps {
  entries: string;
  entryCount: number;
  onEntriesChange: (value: string) => void;
  onShuffle: () => void;
  onSort: () => void;
}

export default function EntriesPanel({
  entries,
  entryCount,
  onEntriesChange,
  onShuffle,
  onSort,
}: EntriesPanelProps) {
  return (
    <div className="glass-panel rounded-2xl p-6 flex flex-col h-full gap-4 transition-transform hover:scale-[1.01] duration-300">
      <div className="flex items-center justify-between pb-2 border-b border-white/10">
        <div className="flex items-center gap-2 text-white">
          <span className="material-symbols-outlined text-primary">
            <FileEdit />
          </span>
          <span className="font-bold text-lg">Entries</span>
        </div>
        <span className="text-xs font-medium px-2 py-1 rounded-full bg-primary/20 text-primary border border-primary/20">
          {entryCount} Items
        </span>
      </div>
      <div className="flex-1 relative group">
        <textarea
          value={entries}
          onChange={(e) => onEntriesChange(e.target.value)}
          className="w-full h-full bg-slate-950/30 text-white placeholder:text-white/30 border border-white/5 rounded-xl resize-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 p-4 text-base leading-relaxed font-body shadow-inner transition-all"
          placeholder="Enter names here (one per line)..."
        />
        <div className="absolute bottom-3 right-3 flex gap-2 opacity-50 group-hover:opacity-100 transition-opacity">
          <button
            onClick={onShuffle}
            className="size-8 rounded-full bg-white/10 hover:bg-primary/20 hover:text-primary flex items-center justify-center text-white/70 transition-all border border-transparent hover:border-primary/30"
            title="Shuffle List"
          >
            <span className="material-symbols-outlined text-sm">
              <Shuffle size={14} />
            </span>
          </button>
          <button
            onClick={onSort}
            className="size-8 rounded-full bg-white/10 hover:bg-primary/20 hover:text-primary flex items-center justify-center text-white/70 transition-all border border-transparent hover:border-primary/30"
            title="Sort A-Z"
          >
            <span className="material-symbols-outlined text-sm">
              <ArrowUpAZ size={14} />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
