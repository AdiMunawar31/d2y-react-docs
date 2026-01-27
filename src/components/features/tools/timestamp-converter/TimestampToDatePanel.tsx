import { D2YToast } from "@/components/base/D2YToast";
import { ArrowDown, Clock8, Copy } from "lucide-react";

interface TimestampToDatePanelProps {
  timestampInput: string;
  humanReadable: string;
  timezone: string;
  relativeTime: string;
  onTimestampChange: (value: string) => void;
  onCopy: (text: string) => Promise<boolean>;
}

export default function TimestampToDatePanel({
  timestampInput,
  humanReadable,
  timezone,
  relativeTime,
  onTimestampChange,
  onCopy,
}: TimestampToDatePanelProps) {
  const handleCopy = async () => {
    const success = await onCopy(humanReadable);
    if (success) {
      D2YToast.copy("Copied to clipboard!");
    }
  };

  return (
    <div className="liquid-glass rounded-3xl p-8 neon-border group hover:bg-slate-800/40 transition-all duration-500">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-cyan-400/10 flex items-center justify-center text-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.2)]">
            <span className="material-symbols-outlined text-[28px] drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]">
              <Clock8 />
            </span>
          </div>
          <div>
            <h3 className="text-xl font-extrabold text-white tracking-tight">
              Timestamp to Date
            </h3>
            <p className="text-xs text-slate-500 font-medium">
              Epoch Decoder Engine
            </p>
          </div>
        </div>
        {relativeTime && (
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
              Relative
            </span>
            <div className="px-2 py-1 rounded bg-cyan-500/10 text-cyan-400 text-[10px] font-black uppercase">
              {relativeTime}
            </div>
          </div>
        )}
      </div>

      <div className="space-y-6">
        {/* Timestamp Input */}
        <div>
          <label className="block text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-3">
            Enter Unix Epoch
          </label>
          <div className="relative">
            <input
              type="number"
              value={timestampInput}
              onChange={(e) => onTimestampChange(e.target.value)}
              placeholder="1715423400"
              className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white font-mono focus:border-cyan-400/50 focus:ring-4 focus:ring-cyan-400/10 transition-all outline-none"
            />
            <div className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] font-bold text-slate-500 bg-white/5 px-2 py-1 rounded uppercase">
              Input: Sec
            </div>
          </div>
        </div>

        {/* Separator */}
        <div className="flex justify-center relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-white/5" />
          </div>
          <div className="relative w-10 h-10 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center text-slate-500">
            <span className="material-symbols-outlined text-[20px]">
              <ArrowDown />
            </span>
          </div>
        </div>

        {/* Result */}
        <div>
          <label className="block text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-3">
            Human-Readable Format
          </label>
          <div className="flex gap-3">
            <div className="grow bg-white/5 border border-white/10 rounded-xl px-5 py-4 flex flex-col justify-center">
              <span className="text-white font-mono font-bold text-sm truncate">
                {humanReadable || "Enter a timestamp"}
              </span>
              <span className="text-[10px] font-medium text-slate-500 mt-1 uppercase tracking-tighter">
                {timezone}
              </span>
            </div>
            <button
              onClick={handleCopy}
              disabled={!timestampInput}
              className="w-14 h-14 bg-white/5 border border-white/10 text-white cursor-pointer rounded-xl flex items-center justify-center hover:bg-white/10 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span className="material-symbols-outlined">
                <Copy size={20} />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
