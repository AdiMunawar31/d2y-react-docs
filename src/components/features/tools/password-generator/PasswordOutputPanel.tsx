import { type PasswordStrength } from "@/utils/tools/password-generator/passwordGeneratorUtils";
import { Copy, RefreshCcw } from "lucide-react";

interface PasswordOutputPanelProps {
  password: string;
  strength: PasswordStrength | null;
  onGenerate: () => void;
  onCopy: () => Promise<boolean>;
}

export default function PasswordOutputPanel({
  password,
  strength,
  onGenerate,
  onCopy,
}: PasswordOutputPanelProps) {
  const handleCopy = async () => {
    const success = await onCopy();
    if (success) {
      console.log("Copied to clipboard!");
    }
  };

  const getComplexityColor = (complexity: string) => {
    switch (complexity) {
      case "Excellent":
      case "Strong":
        return "text-emerald-400";
      case "Good":
        return "text-blue-400";
      case "Fair":
        return "text-yellow-400";
      default:
        return "text-red-400";
    }
  };

  const getBarColor = (complexity: string) => {
    switch (complexity) {
      case "Excellent":
      case "Strong":
        return "bg-emerald-500";
      case "Good":
        return "bg-blue-500";
      case "Fair":
        return "bg-yellow-500";
      default:
        return "bg-red-500";
    }
  };

  return (
    <section className="liquid-glass rounded-2xl p-8 relative overflow-hidden group">
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-[60px] rounded-full" />

      <div className="relative z-10 flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <label className="text-xs font-bold text-white/40 uppercase tracking-[0.2em]">
            Primary Secure Output
          </label>
          <div className="flex items-center gap-4">
            <div className="flex-1 h-20 bg-black/40 rounded-2xl border border-white/10 flex items-center px-8 pr-28 relative overflow-hidden">
              <input
                className="
                  w-full
                  bg-transparent
                  border-none
                  text-3xl
                  font-mono
                  text-white
                  tracking-widest
                  focus:ring-0
                  outline-none
                  truncate
                  overflow-hidden
                  text-ellipsis
                  whitespace-nowrap
                "
                readOnly
                type="text"
                value={password}
              />

              <div className="absolute right-4 flex items-center gap-2">
                <button
                  onClick={onGenerate}
                  className="p-3 bg-primary/20 hover:bg-primary text-primary hover:text-white rounded-xl transition-all"
                  title="Regenerate"
                >
                  <RefreshCcw size={20} />
                </button>

                <button
                  onClick={handleCopy}
                  className="p-3 bg-white/5 hover:bg-white/10 text-white rounded-xl transition-all"
                  title="Copy"
                >
                  <Copy size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Strength Metrics */}
        {strength && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Entropy */}
            <div className="flex flex-col gap-3">
              <div className="flex justify-between items-end">
                <span className="text-xs font-semibold text-white/50">
                  Password Entropy
                </span>
                <span className="text-sm font-mono font-bold text-emerald-400">
                  {strength.entropy} bits
                </span>
              </div>
              <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.4)] transition-all"
                  style={{ width: `${Math.min(strength.score, 100)}%` }}
                />
              </div>
            </div>

            {/* Time to Crack */}
            <div className="flex flex-col gap-3">
              <div className="flex justify-between items-end">
                <span className="text-xs font-semibold text-white/50">
                  Time to Crack
                </span>
                <span className="text-sm font-mono font-bold text-white">
                  {strength.timeToCrack}
                </span>
              </div>
              <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary shadow-[0_0_10px_rgba(43,140,238,0.4)] transition-all"
                  style={{ width: `${Math.min(strength.score - 10, 100)}%` }}
                />
              </div>
            </div>

            {/* Complexity Score */}
            <div className="flex flex-col gap-3">
              <div className="flex justify-between items-end">
                <span className="text-xs font-semibold text-white/50">
                  Complexity Score
                </span>
                <span
                  className={`text-sm font-mono font-bold ${getComplexityColor(
                    strength.complexity
                  )}`}
                >
                  {strength.complexity}
                </span>
              </div>
              <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                <div
                  className={`h-full ${getBarColor(
                    strength.complexity
                  )} shadow-[0_0_10px_rgba(16,185,129,0.4)] transition-all`}
                  style={{ width: `${strength.score}%` }}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
