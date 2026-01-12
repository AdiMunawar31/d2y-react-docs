import { type SpinResult } from "@/utils/tools/spin-wheel/spinWheelUtils";
import {
  formatTimestamp,
  exportResults,
} from "@/utils/tools/spin-wheel/spinWheelUtils";
import { CircleX, Download, Trophy } from "lucide-react";

interface ResultsPanelProps {
  latestWinner: SpinResult | null;
  results: SpinResult[];
  onClearHistory: () => void;
  onDeleteResult: (id: string) => void;
}

export default function ResultsPanel({
  latestWinner,
  results,
  onClearHistory,
  onDeleteResult,
}: ResultsPanelProps) {
  const handleExport = () => {
    exportResults(results);
  };

  const pastResults = results.slice(1); // Exclude latest winner

  return (
    <div className="glass-panel rounded-2xl p-6 flex flex-col h-full gap-4 relative overflow-hidden">
      {/* Background trophy */}
      <div className="absolute top-0 right-0 p-10 opacity-5 pointer-events-none">
        <span className="material-symbols-outlined text-9xl">
          <Trophy />
        </span>
      </div>

      {/* Header */}
      <div className="flex items-center justify-between pb-2 border-b border-white/10 relative z-10">
        <div className="flex items-center gap-2 text-white">
          <span className="material-symbols-outlined text-primary">
            <Trophy size={20} />
          </span>
          <span className="font-bold text-lg">Results</span>
        </div>
        {results.length > 0 && (
          <button
            onClick={onClearHistory}
            className="text-xs font-medium text-primary hover:text-white transition-colors hover:underline"
          >
            Clear History
          </button>
        )}
      </div>

      {/* Latest Winner */}
      {latestWinner ? (
        <div className="flex flex-col items-center justify-center py-8 px-4 rounded-xl bg-linear-to-b from-primary/20 via-primary/5 to-transparent border border-primary/30 text-center relative z-10 shadow-[inset_0_0_20px_rgba(14,165,233,0.1)]">
          <div className="absolute top-2 right-2 flex gap-0.5">
            <div className="size-1 rounded-full bg-primary animate-pulse" />
            <div className="size-1 rounded-full bg-primary animate-pulse delay-75" />
            <div className="size-1 rounded-full bg-primary animate-pulse delay-150" />
          </div>
          <span className="text-[10px] uppercase tracking-[0.2em] text-primary font-bold mb-3 bg-primary/10 px-2 py-1 rounded">
            Latest Winner
          </span>
          <div className="text-2xl md:text-3xl font-black text-white mb-1 drop-shadow-sm">
            {latestWinner.name}
          </div>
          <span className="text-white/40 text-xs font-mono">
            {formatTimestamp(latestWinner.timestamp)}
          </span>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-8 px-4 rounded-xl border border-dashed border-white/10 text-center relative z-10">
          <span className="material-symbols-outlined text-5xl text-white/20 mb-2">
            <Trophy size={60} />
          </span>
          <p className="text-white/40 text-sm">No winner yet</p>
          <p className="text-white/20 text-xs mt-1">Spin the wheel to start!</p>
        </div>
      )}

      {/* Past Results */}
      <div className="flex-1 overflow-y-auto pr-2 relative z-10">
        {pastResults.length > 0 && (
          <>
            <h4 className="text-white/40 text-xs font-bold uppercase tracking-wider mb-3 pl-1 mt-2">
              Past Spins
            </h4>
            <div className="space-y-2">
              {pastResults.map((result, index) => (
                <div
                  key={result.id}
                  className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 hover:border-primary/20 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`size-6 rounded-full flex items-center justify-center text-xs font-bold ${
                        index === 0
                          ? "bg-primary/20 text-primary"
                          : "bg-white/10 text-white/70"
                      }`}
                    >
                      {index + 2}
                    </div>
                    <span className="text-white font-medium text-sm">
                      {result.name}
                    </span>
                  </div>
                  <button
                    onClick={() => onDeleteResult(result.id)}
                    className="opacity-0 group-hover:opacity-100 text-white/40 hover:text-red-400 transition-all"
                  >
                    <span className="material-symbols-outlined text-sm">
                      <CircleX size={16} />
                    </span>
                  </button>
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      {/* Export Button */}
      {results.length > 0 && (
        <button
          onClick={handleExport}
          className="mt-2 w-full py-3 rounded-xl border border-white/10 bg-white/5 hover:bg-primary hover:border-primary hover:text-white text-white/70 text-sm font-medium transition-all flex items-center justify-center gap-2 group"
        >
          <span className="material-symbols-outlined text-lg group-hover:animate-bounce">
            <Download size={16} />
          </span>
          Export Results
        </button>
      )}
    </div>
  );
}
