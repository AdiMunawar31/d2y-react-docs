import { type PasswordConfig } from "@/utils/tools/password-generator/passwordGeneratorUtils";
import { ALargeSmall, EyeOff, Repeat, Settings2 } from "lucide-react";

interface PasswordAdvancedPanelProps {
  config: PasswordConfig;
  onToggleExcludeSimilar: () => void;
  onToggleBeginWithLetter: () => void;
  onToggleNoRepeat: () => void;
}

export default function PasswordAdvancedPanel({
  config,
  onToggleExcludeSimilar,
  onToggleBeginWithLetter,
  onToggleNoRepeat,
}: PasswordAdvancedPanelProps) {
  return (
    <section className="liquid-glass rounded-2xl p-8 flex flex-col gap-8">
      <div className="flex items-center gap-3 border-b border-white/10 pb-4">
        <span className="material-symbols-outlined text-primary">
          <Settings2 />
        </span>
        <h3 className="font-bold text-white uppercase tracking-wider text-sm">
          Advanced Filter Logic
        </h3>
      </div>

      <div className="space-y-4">
        {/* Exclude Similar Characters */}
        <label
          className={`flex items-center gap-4 p-4 border rounded-xl transition-all cursor-pointer group ${
            config.excludeSimilar
              ? "bg-white/10 border-primary/30"
              : "bg-white/5 border-white/5 hover:border-primary/40"
          }`}
        >
          <div className="size-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
            <span className="material-symbols-outlined text-sm">
              <EyeOff />
            </span>
          </div>
          <div className="flex-1">
            <p className="text-sm font-semibold text-white">
              Exclude Similar Characters
            </p>
            <p className="text-[10px] text-white/40">
              Avoid i, l, 1, L, o, 0, O
            </p>
          </div>
          <input
            type="checkbox"
            checked={config.excludeSimilar}
            onChange={onToggleExcludeSimilar}
            className="form-checkbox size-5 rounded-md bg-black border-white/20 text-primary focus:ring-offset-0 focus:ring-primary"
          />
        </label>

        {/* Begin with a Letter */}
        <label
          className={`flex items-center gap-4 p-4 border rounded-xl transition-all cursor-pointer group ${
            config.beginWithLetter
              ? "bg-white/10 border-primary/30"
              : "bg-white/5 border-white/5 hover:border-primary/40"
          }`}
        >
          <div className="size-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
            <span className="material-symbols-outlined text-sm">
              <ALargeSmall />
            </span>
          </div>
          <div className="flex-1">
            <p className="text-sm font-semibold text-white">
              Begin with a letter
            </p>
            <p className="text-[10px] text-white/40">
              Force the first char to be A-Z/a-z
            </p>
          </div>
          <input
            type="checkbox"
            checked={config.beginWithLetter}
            onChange={onToggleBeginWithLetter}
            className="form-checkbox size-5 rounded-md bg-black border-white/20 text-primary focus:ring-offset-0 focus:ring-primary"
          />
        </label>

        {/* No Overlapping Characters */}
        <label
          className={`flex items-center gap-4 p-4 border rounded-xl transition-all cursor-pointer group ${
            config.noRepeat
              ? "bg-white/10 border-primary/30"
              : "bg-white/5 border-white/5 hover:border-primary/40"
          }`}
        >
          <div className="size-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
            <span className="material-symbols-outlined text-sm">
              <Repeat />
            </span>
          </div>
          <div className="flex-1">
            <p className="text-sm font-semibold text-white">
              No Overlapping Characters
            </p>
            <p className="text-[10px] text-white/40">
              Each character appears only once
            </p>
          </div>
          <input
            type="checkbox"
            checked={config.noRepeat}
            onChange={onToggleNoRepeat}
            className="form-checkbox size-5 rounded-md bg-black border-white/20 text-primary focus:ring-offset-0 focus:ring-primary"
          />
        </label>
      </div>
    </section>
  );
}
