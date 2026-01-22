import { type PasswordConfig } from "@/utils/tools/password-generator/passwordGeneratorUtils";
import { Settings2 } from "lucide-react";

interface PasswordConfigPanelProps {
  config: PasswordConfig;
  onLengthChange: (length: number) => void;
  onToggleUppercase: () => void;
  onToggleLowercase: () => void;
  onToggleNumbers: () => void;
  onToggleSymbols: () => void;
}

export default function PasswordConfigPanel({
  config,
  onLengthChange,
  onToggleUppercase,
  onToggleLowercase,
  onToggleNumbers,
  onToggleSymbols,
}: PasswordConfigPanelProps) {
  return (
    <section className="liquid-glass rounded-2xl p-8 flex flex-col gap-8">
      <div className="flex items-center gap-3 border-b border-white/10 pb-4">
        <span className="material-symbols-outlined text-primary">
          <Settings2 />
        </span>
        <h3 className="font-bold text-white uppercase tracking-wider text-sm">
          Core Parameters
        </h3>
      </div>

      <div className="space-y-6">
        {/* Length Slider */}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium text-white/80">Length</span>
            <span className="px-3 py-1 bg-primary/20 text-primary font-mono font-bold rounded-lg border border-primary/20">
              {config.length}
            </span>
          </div>
          <input
            type="range"
            min="8"
            max="128"
            value={config.length}
            onChange={(e) => onLengthChange(Number(e.target.value))}
            className="w-full h-1.5 cursor-pointer bg-white/10 rounded-lg appearance-none"
            style={{
              background: `linear-gradient(to right, #0ea5e9 0%, #0ea5e9 ${
                ((config.length - 8) / (128 - 8)) * 100
              }%, rgba(255,255,255,0.1) ${
                ((config.length - 8) / (128 - 8)) * 100
              }%, rgba(255,255,255,0.1) 100%)`,
            }}
          />
        </div>

        {/* Character Type Toggles */}
        <div className="grid grid-cols-2 gap-3">
          <label
            className={`flex items-center justify-between p-4 border rounded-xl transition-colors cursor-pointer group ${
              config.uppercase
                ? "bg-white/10 border-primary/30"
                : "bg-white/5 border-white/5 hover:bg-white/10"
            }`}
          >
            <div className="flex flex-col">
              <span className="text-xs font-bold text-white">UPPERCASE</span>
              <span className="text-[10px] text-white/40 font-mono">A-Z</span>
            </div>
            <input
              type="checkbox"
              checked={config.uppercase}
              onChange={onToggleUppercase}
              className="form-checkbox size-5 rounded-md bg-black border-white/20 text-primary focus:ring-offset-0 focus:ring-primary"
            />
          </label>

          <label
            className={`flex items-center justify-between p-4 border rounded-xl transition-colors cursor-pointer ${
              config.lowercase
                ? "bg-white/10 border-primary/30"
                : "bg-white/5 border-white/5 hover:bg-white/10"
            }`}
          >
            <div className="flex flex-col">
              <span className="text-xs font-bold text-white">LOWERCASE</span>
              <span className="text-[10px] text-white/40 font-mono">a-z</span>
            </div>
            <input
              type="checkbox"
              checked={config.lowercase}
              onChange={onToggleLowercase}
              className="form-checkbox size-5 rounded-md bg-black border-white/20 text-primary focus:ring-offset-0 focus:ring-primary"
            />
          </label>

          <label
            className={`flex items-center justify-between p-4 border rounded-xl transition-colors cursor-pointer ${
              config.numbers
                ? "bg-white/10 border-primary/30"
                : "bg-white/5 border-white/5 hover:bg-white/10"
            }`}
          >
            <div className="flex flex-col">
              <span className="text-xs font-bold text-white">NUMBERS</span>
              <span className="text-[10px] text-white/40 font-mono">0-9</span>
            </div>
            <input
              type="checkbox"
              checked={config.numbers}
              onChange={onToggleNumbers}
              className="form-checkbox size-5 rounded-md bg-black border-white/20 text-primary focus:ring-offset-0 focus:ring-primary"
            />
          </label>

          <label
            className={`flex items-center justify-between p-4 border rounded-xl transition-colors cursor-pointer ${
              config.symbols
                ? "bg-white/10 border-primary/30"
                : "bg-white/5 border-white/5 hover:bg-white/10"
            }`}
          >
            <div className="flex flex-col">
              <span className="text-xs font-bold text-white">SYMBOLS</span>
              <span className="text-[10px] text-white/40 font-mono">!@#$%</span>
            </div>
            <input
              type="checkbox"
              checked={config.symbols}
              onChange={onToggleSymbols}
              className="form-checkbox size-5 rounded-md bg-black border-white/20 text-primary focus:ring-offset-0 focus:ring-primary"
            />
          </label>
        </div>
      </div>
    </section>
  );
}
