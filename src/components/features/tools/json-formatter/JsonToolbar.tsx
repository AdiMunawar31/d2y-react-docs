import { Code, Funnel, Logs, TextAlignStart, Trash } from "lucide-react";

interface JsonToolbarProps {
  onFormat: () => void;
  onMinify: () => void;
  onEscape: () => void;
  onSortKeys: () => void;
  onClear: () => void;
  liveUpdate: boolean;
  onToggleLiveUpdate: () => void;
  indent: number;
  onChangeIndent: (indent: number) => void;
  isValid: boolean;
}

export default function JsonToolbar({
  onFormat,
  onMinify,
  onEscape,
  onSortKeys,
  onClear,
  liveUpdate,
  onToggleLiveUpdate,
  indent,
  onChangeIndent,
  isValid,
}: JsonToolbarProps) {
  return (
    <div className="glass-panel rounded-xl p-2 md:p-3 flex flex-col md:flex-row flex-wrap items-center justify-between gap-4 sticky top-20 z-40 bg-[#111a22]/80 backdrop-blur-xl">
      <div className="flex flex-wrap items-center gap-2 w-full md:w-auto justify-center md:justify-start">
        <button
          onClick={onFormat}
          disabled={!isValid}
          className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white/5 text-slate-300 hover:text-white transition-colors group disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <span className="material-symbols-outlined text-[20px] group-hover:text-primary transition-colors">
            <TextAlignStart size={14} />
          </span>
          <span className="text-sm font-medium">Format</span>
        </button>

        <button
          onClick={onMinify}
          disabled={!isValid}
          className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white/5 text-slate-300 hover:text-white transition-colors group disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <span className="material-symbols-outlined text-[20px] group-hover:text-primary transition-colors">
            <Logs size={14} />
          </span>
          <span className="text-sm font-medium">Minify</span>
        </button>

        <button
          onClick={onSortKeys}
          disabled={!isValid}
          className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white/5 text-slate-300 hover:text-white transition-colors group disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <span className="material-symbols-outlined text-[20px] group-hover:text-primary transition-colors">
            <Funnel size={14} />
          </span>
          <span className="text-sm font-medium">Sort Keys</span>
        </button>

        <button
          onClick={onEscape}
          disabled={!isValid}
          className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white/5 text-slate-300 hover:text-white transition-colors group disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <span className="material-symbols-outlined text-[20px] group-hover:text-primary transition-colors">
            <Code size={14} />
          </span>
          <span className="text-sm font-medium">Escape</span>
        </button>

        <button
          onClick={onClear}
          className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white/5 text-slate-300 hover:text-white transition-colors group"
        >
          <span className="material-symbols-outlined text-[20px] group-hover:text-primary transition-colors">
            <Trash size={14} />
          </span>
          <span className="text-sm font-medium">Clear</span>
        </button>

        <div className="hidden md:block w-px h-6 bg-white/10 mx-2" />

        <div className="flex items-center gap-2">
          <label className="text-slate-300 text-sm font-medium">Indent:</label>
          <select
            value={indent}
            onChange={(e) => onChangeIndent(Number(e.target.value))}
            className="bg-[#192633] border border-[#324d67] rounded-lg px-3 py-1.5 text-white text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
          >
            <option value={2}>2 spaces</option>
            <option value={4}>4 spaces</option>
            <option value={8}>8 spaces</option>
          </select>
        </div>

        <div className="hidden md:block w-px h-6 bg-white/10 mx-2" />

        <label className="flex items-center gap-3 cursor-pointer px-2 select-none">
          <div className="relative inline-flex items-center cursor-pointer group">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={liveUpdate}
              onChange={onToggleLiveUpdate}
            />
            <div className="w-9 h-5 bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-0.5 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary group-hover:bg-slate-600" />
          </div>
          <span className="text-sm font-medium text-slate-300">
            Live Update
          </span>
        </label>
      </div>
    </div>
  );
}
