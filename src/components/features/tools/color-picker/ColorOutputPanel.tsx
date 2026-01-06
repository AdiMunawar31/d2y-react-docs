import { rgbToHsl } from "@/utils/tools/colors/color";
import type { RGB } from "@/lib/interfaces/color";
import { Copy } from "lucide-react";
import { D2YToast } from "@/components/base/D2YToast";

interface ColorOutputPanelProps {
  rgb: RGB;
  hex: string;
  alpha: number;
}

export function ColorOutputPanel({ rgb, hex, alpha }: ColorOutputPanelProps) {
  const hsl = rgbToHsl(rgb);

  const rgbaString = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${alpha})`;
  const rgbString = `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
  const hslString = `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`;

  const copy = (value: string) => {
    navigator.clipboard.writeText(value);
    D2YToast.copy(value);
  };

  return (
    <aside className="w-full h-full glass-panel border-l border-surface-border flex flex-col rounded-xl">
      <div className="p-6 border-b border-surface-border">
        <h3 className="text-sm font-bold text-white mb-4">Selected Color</h3>

        <div
          className="w-full aspect-video rounded-xl shadow-2xl mb-6 relative overflow-hidden"
          style={{ backgroundColor: rgbaString }}
        />

        <div className="flex flex-col gap-4">
          <ColorField label="HEX" value={hex} onCopy={copy} />
          <ColorField label="RGB" value={rgbString} onCopy={copy} />
          <ColorField label="HSL" value={hslString} onCopy={copy} />
        </div>
      </div>

      <div className="p-6 flex-1 flex flex-col">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-bold text-white">CSS Output</h3>
          <span className="text-[10px] bg-primary/20 text-primary px-2 py-0.5 rounded border border-primary/20">
            CSS
          </span>
        </div>

        <div className="bg-[#0f1216] rounded-xl p-4 border border-surface-border flex-1 relative font-mono text-xs overflow-auto">
          <button
            onClick={() =>
              copy(`.custom-element {\n  background-color: ${hex};\n}`)
            }
            className="absolute top-2 right-2 text-slate-400 hover:text-white bg-white/5 rounded p-1"
          >
            <Copy className="size-4" />
          </button>

          <pre className="text-slate-400 whitespace-pre-wrap break-all select-all">
            {`.custom-element {
  background-color: ${hex};
  color: #ffffff;
  box-shadow: 0 4px 6px -1px rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.3);
}`}
          </pre>
        </div>

        <button
          onClick={() =>
            copy(`.custom-element {\n  background-color: ${hex};\n}`)
          }
          className="mt-4 w-full bg-white text-black py-3 rounded-xl font-bold text-sm hover:bg-slate-200 transition flex items-center justify-center gap-2"
        >
          <Copy className="size-4" />
          Copy CSS Snippet
        </button>
      </div>
    </aside>
  );
}

/* =========================
 * Sub Component
 * ========================= */
function ColorField({
  label,
  value,
  onCopy,
}: {
  label: string;
  value: string;
  onCopy: (v: string) => void;
}) {
  return (
    <div>
      <label className="text-[10px] font-bold text-slate-500 uppercase mb-1 block">
        {label}
      </label>
      <div className="relative">
        <input
          readOnly
          value={value}
          className="w-full bg-surface-dark border border-surface-border rounded-lg px-3 py-2.5 text-sm font-mono text-white"
        />
        <button
          onClick={() => onCopy(value)}
          className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-500 hover:text-primary"
        >
          <Copy className="size-4" />
        </button>
      </div>
    </div>
  );
}
