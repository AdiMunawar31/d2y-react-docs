import { D2YToast } from "@/components/base/D2YToast";
import { ArrowDown, CalendarDaysIcon, ChevronDown, Copy } from "lucide-react";

interface DateToTimestampPanelProps {
  dateInput: string;
  resultTimestamp: number;
  onDateChange: (value: string) => void;
  onCopy: (text: string) => Promise<boolean>;
}

export default function DateToTimestampPanel({
  dateInput,
  resultTimestamp,
  onDateChange,
  onCopy,
}: DateToTimestampPanelProps) {
  const handleCopy = async () => {
    const success = await onCopy(resultTimestamp.toString());
    if (success) {
      D2YToast.copy("Copied to clipboard!");
    }
  };

  return (
    <div className="liquid-glass rounded-3xl p-8 neon-border group hover:bg-slate-800/40 transition-all duration-500">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shadow-[0_0_15px_rgba(14,165,233,0.2)]">
            <span className="material-symbols-outlined text-[28px] drop-shadow-[0_0_8px_rgba(14,165,233,0.5)]">
              <CalendarDaysIcon />
            </span>
          </div>
          <div>
            <h3 className="text-xl font-extrabold text-white tracking-tight">
              Date to Timestamp
            </h3>
            <p className="text-xs text-slate-500 font-medium">
              ISO 8601 Standard Input
            </p>
          </div>
        </div>
        <div className="relative">
          <button className="flex items-center gap-2 text-[10px] font-bold text-slate-400 hover:text-white transition-colors bg-white/5 px-3 py-1.5 rounded-lg border border-white/5 uppercase tracking-tighter">
            Copy as...
            <span className="material-symbols-outlined text-[14px]">
              <ChevronDown size={16} />
            </span>
          </button>
        </div>
      </div>

      <div className="space-y-6">
        {/* Date Input */}
        <div>
          <label className="block text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-3">
            Input Date Time
          </label>
          <input
            type="datetime-local"
            value={dateInput}
            onChange={(e) => onDateChange(e.target.value)}
            className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white font-mono focus:border-primary/50 focus:ring-4 focus:ring-primary/10 transition-all outline-none"
          />
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
            Resulting Timestamp
          </label>
          <div className="flex gap-3">
            <div className="grow bg-primary/5 border border-primary/20 rounded-xl px-5 py-4 flex items-center justify-between">
              <span className="text-primary font-mono font-extrabold text-xl tracking-tight">
                {resultTimestamp}
              </span>
              <span className="text-[10px] font-bold text-primary/40 bg-primary/10 px-2 py-1 rounded">
                SEC
              </span>
            </div>
            <button
              onClick={handleCopy}
              className="w-14 h-14 bg-primary cursor-pointer text-white rounded-xl flex items-center justify-center hover:brightness-110 transition-all shadow-lg shadow-primary/20"
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
