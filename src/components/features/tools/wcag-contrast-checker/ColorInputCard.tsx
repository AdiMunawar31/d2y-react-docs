import { ArrowUpDown, RotateCcw } from "lucide-react";

interface ColorInputCardProps {
  foreground: string;
  background: string;
  onForegroundChange: (value: string) => void;
  onBackgroundChange: (value: string) => void;
  onSwap: () => void;
  onReset: () => void;
}

export default function ColorInputCard({
  foreground,
  background,
  onForegroundChange,
  onBackgroundChange,
  onSwap,
  onReset,
}: ColorInputCardProps) {
  return (
    <div className="glass-panel rounded-xl p-6 flex flex-col gap-6">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-white font-bold text-lg">Colors</h3>
        <button
          onClick={onReset}
          className="text-[#92adc9] hover:text-white transition-colors text-xs flex items-center gap-1"
        >
          <span className="material-symbols-outlined text-base">
            <RotateCcw size={12} />
          </span>
          Reset
        </button>
      </div>

      {/* Foreground Input */}
      <div className="flex flex-col gap-3">
        <label className="text-white text-sm font-medium leading-normal flex justify-between">
          <span>Text Color</span>
          <span className="text-[#92adc9] text-xs">Hex</span>
        </label>
        <div className="flex gap-3">
          <div
            className="size-12 rounded-lg border border-white/10 shadow-inner shrink-0 transition-colors"
            style={{ backgroundColor: `#${foreground}` }}
          />
          <div className="relative flex-1">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#92adc9]">
              #
            </span>
            <input
              className="w-full h-12 bg-[#192633] border border-[#324d67] rounded-lg pl-7 pr-3 text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none font-mono tracking-wide uppercase"
              type="text"
              value={foreground}
              onChange={(e) => onForegroundChange(e.target.value)}
              maxLength={6}
              placeholder="FFFFFF"
            />
          </div>
        </div>
      </div>

      {/* Swap Button */}
      <div className="relative h-6 flex justify-center items-center">
        <div className="absolute w-full h-px bg-white/10" />
        <button
          onClick={onSwap}
          className="relative z-10 size-10 rounded-full bg-[#233648] hover:bg-primary border border-[#324d67] flex items-center justify-center transition-all group shadow-lg"
        >
          <span className="material-symbols-outlined text-white group-hover:rotate-180 transition-transform duration-300">
            <ArrowUpDown size={16} />
          </span>
        </button>
      </div>

      {/* Background Input */}
      <div className="flex flex-col gap-3">
        <label className="text-white text-sm font-medium leading-normal flex justify-between">
          <span>Background Color</span>
          <span className="text-[#92adc9] text-xs">Hex</span>
        </label>
        <div className="flex gap-3">
          <div
            className="size-12 rounded-lg border border-white/10 shadow-inner shrink-0 transition-colors"
            style={{ backgroundColor: `#${background}` }}
          />
          <div className="relative flex-1">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#92adc9]">
              #
            </span>
            <input
              className="w-full h-12 bg-[#192633] border border-[#324d67] rounded-lg pl-7 pr-3 text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none font-mono tracking-wide uppercase"
              type="text"
              value={background}
              onChange={(e) => onBackgroundChange(e.target.value)}
              maxLength={6}
              placeholder="2B8CEE"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
