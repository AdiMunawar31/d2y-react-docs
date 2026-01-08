import {
  type CalculatorMode,
  type AngleUnit,
} from "@/utils/tools/calculator/calculatorUtils";
import { Settings } from "lucide-react";

interface CalculatorHeaderProps {
  mode: CalculatorMode;
  angleUnit: AngleUnit;
  onModeChange: (mode: CalculatorMode) => void;
}

export default function CalculatorHeader({
  mode,
  angleUnit,
  onModeChange,
}: CalculatorHeaderProps) {
  return (
    <div className="px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4 border-b border-white/5 relative z-10 bg-black/10 backdrop-blur-md">
      <div className="flex bg-[#0f172a]/60 p-1 rounded-lg border border-white/5 shadow-inner">
        <button
          onClick={() => onModeChange("standard")}
          className={`px-4 py-1.5 rounded-md text-xs font-semibold transition-all ${
            mode === "standard"
              ? "text-white bg-primary shadow-sm shadow-primary/30"
              : "text-gray-400 hover:text-white hover:bg-white/5"
          }`}
        >
          Calculator
        </button>
        <button
          onClick={() => onModeChange("scientific")}
          className={`px-4 py-1.5 rounded-md text-xs font-semibold transition-all ${
            mode === "scientific"
              ? "text-white bg-primary shadow-sm shadow-primary/30"
              : "text-gray-400 hover:text-white hover:bg-white/5"
          }`}
        >
          Scientific
        </button>
      </div>
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1 text-[10px] font-mono text-gray-400 bg-black/20 px-2 py-1 rounded border border-white/5">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
          <span>{angleUnit}</span>
        </div>
        <div className="h-4 w-px bg-white/10" />
        <button
          className="text-gray-400 hover:text-white transition-colors"
          title="Settings"
        >
          <span className="material-symbols-outlined text-[20px]">
            <Settings />
          </span>
        </button>
      </div>
    </div>
  );
}
