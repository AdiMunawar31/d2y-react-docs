import { type AngleUnit } from "@/utils/tools/calculator/calculatorUtils";
import { Clipboard, Copy, Trash2 } from "lucide-react";

interface CalculatorControlsProps {
  angleUnit: AngleUnit;
  onToggleAngleUnit: () => void;
  onCopy: () => void;
  onPaste: () => void;
  onClearHistory: () => void;
}

export default function CalculatorControls({
  angleUnit,
  onToggleAngleUnit,
  onCopy,
  onPaste,
  onClearHistory,
}: CalculatorControlsProps) {
  return (
    <div className="flex items-center justify-between px-6 py-2 bg-[#1e293b]/40 border-b border-white/5 text-xs text-gray-400">
      <div className="flex gap-4">
        <button
          onClick={onToggleAngleUnit}
          className="hover:text-white flex items-center gap-1 transition-colors"
        >
          <span className={angleUnit === "DEG" ? "font-bold text-primary" : ""}>
            DEG
          </span>
          <span className="opacity-30">|</span>
          <span className={angleUnit === "RAD" ? "font-bold text-primary" : ""}>
            RAD
          </span>
        </button>
      </div>
      <div className="flex gap-1">
        <button
          onClick={onCopy}
          className="hover:text-white p-1 rounded hover:bg-white/5 transition-colors"
          title="Copy"
        >
          <span className="material-symbols-outlined text-[16px]">
            <Copy size={14} />
          </span>
        </button>
        <button
          onClick={onPaste}
          className="hover:text-white p-1 rounded hover:bg-white/5 transition-colors"
          title="Paste"
        >
          <span className="material-symbols-outlined text-[16px]">
            <Clipboard size={14} />
          </span>
        </button>
        <button
          onClick={onClearHistory}
          className="hover:text-red-400 p-1 rounded hover:bg-white/5 transition-colors ml-2"
          title="Clear History"
        >
          <span className="material-symbols-outlined text-[16px]">
            <Trash2 size={14} />
          </span>
        </button>
      </div>
    </div>
  );
}
