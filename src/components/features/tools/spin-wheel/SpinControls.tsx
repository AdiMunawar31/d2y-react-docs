import {
  RefreshCcw,
  RotateCcw,
  Shuffle,
  UserMinus,
  Volume2,
} from "lucide-react";

interface SpinControlsProps {
  isSpinning: boolean;
  soundEnabled: boolean;
  removeWinner: boolean;
  onSpin: () => void;
  onReset: () => void;
  onShuffle: () => void;
  onToggleSound: () => void;
  onToggleRemoveWinner: () => void;
}

export default function SpinControls({
  isSpinning,
  soundEnabled,
  removeWinner,
  onSpin,
  onReset,
  onShuffle,
  onToggleSound,
  onToggleRemoveWinner,
}: SpinControlsProps) {
  return (
    <div className="glass-panel p-4 rounded-3xl border-t border-white/10 flex flex-col gap-4 items-center">
      <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full">
        <button
          onClick={onReset}
          disabled={isSpinning}
          className="px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 text-white/60 hover:text-white text-sm font-bold transition-colors border border-white/5 flex items-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <span className="material-symbols-outlined group-hover:-rotate-180 transition-transform duration-500">
            <RotateCcw />
          </span>
          Reset
        </button>

        <button
          onClick={onSpin}
          disabled={isSpinning}
          className="group relative flex w-full sm:w-auto min-w-50 cursor-pointer items-center justify-center overflow-hidden rounded-full h-16 bg-primary text-white text-xl font-black leading-normal tracking-wide shadow-[0_0_20px_rgba(14,165,233,0.4)] hover:shadow-[0_0_40px_rgba(14,165,233,0.6)] hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
        >
          <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          <span className="flex items-center gap-3 drop-shadow-md">
            {isSpinning ? "SPINNING..." : "SPIN!"}
            <span
              className="material-symbols-outlined text-2xl"
              style={{
                animation: isSpinning ? "spin 1s linear infinite" : "none",
              }}
            >
              <RefreshCcw />
            </span>
          </span>
        </button>

        <button
          onClick={onShuffle}
          disabled={isSpinning}
          className="px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 text-white/60 hover:text-white text-sm font-bold transition-colors border border-white/5 flex items-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <span className="material-symbols-outlined">
            <Shuffle />
          </span>
          Shuffle
        </button>
      </div>

      <div className="flex items-center justify-center gap-4 w-full pt-2 border-t border-white/5">
        <label className="group flex items-center gap-3 cursor-pointer p-2 px-4 rounded-xl hover:bg-white/5 transition-all select-none">
          <div className="relative inline-flex h-5 w-9 items-center rounded-full bg-slate-700 transition-colors group-hover:bg-slate-600 has-checked:bg-primary">
            <input
              type="checkbox"
              className="peer sr-only"
              checked={soundEnabled}
              onChange={onToggleSound}
            />
            <span className="translate-x-1 inline-block h-3 w-3 transform rounded-full bg-white transition peer-checked:translate-x-5" />
          </div>
          <div className="flex items-center gap-2 text-sm font-medium text-white/70 group-hover:text-white transition-colors">
            <span className="material-symbols-outlined text-lg">
              <Volume2 size={16} />
            </span>
            <span>Sound</span>
          </div>
        </label>

        <div className="h-4 w-px bg-white/10" />

        <label className="group flex items-center gap-3 cursor-pointer p-2 px-4 rounded-xl hover:bg-white/5 transition-all select-none">
          <div className="relative inline-flex h-5 w-9 items-center rounded-full bg-slate-700 transition-colors group-hover:bg-slate-600 has-checked:bg-primary">
            <input
              type="checkbox"
              className="peer sr-only"
              checked={removeWinner}
              onChange={onToggleRemoveWinner}
            />
            <span className="translate-x-1 inline-block h-3 w-3 transform rounded-full bg-white transition peer-checked:translate-x-5" />
          </div>
          <div className="flex items-center gap-2 text-sm font-medium text-white/70 group-hover:text-white transition-colors">
            <span className="material-symbols-outlined text-lg">
              <UserMinus size={16} />
            </span>
            <span>Remove Winner</span>
          </div>
        </label>
      </div>
    </div>
  );
}
