import { type QRCornerStyle } from "@/utils/tools/qr-generator/qrGeneratorUtils";
import { ArrowLeftRight, Codesandbox, EditIcon, File } from "lucide-react";

interface QRConfigPanelProps {
  content: string;
  size: number;
  quietZone: number;
  cornerStyle: QRCornerStyle;
  gradientEnabled: boolean;
  colorStart: string;
  colorEnd: string;
  onContentChange: (content: string) => void;
  onSizeChange: (size: number) => void;
  onQuietZoneChange: (zone: number) => void;
  onCornerStyleChange: (style: QRCornerStyle) => void;
  onGradientToggle: () => void;
  onColorStartChange: (color: string) => void;
  onColorEndChange: (color: string) => void;
}

export default function QRConfigPanel({
  content,
  size,
  quietZone,
  cornerStyle,
  gradientEnabled,
  colorStart,
  colorEnd,
  onContentChange,
  onSizeChange,
  onQuietZoneChange,
  onCornerStyleChange,
  onGradientToggle,
  onColorStartChange,
  onColorEndChange,
}: QRConfigPanelProps) {
  return (
    <div className="flex flex-col gap-6">
      {/* Content Input */}
      <div className="deep-glass rounded-3xl p-6 space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-white text-sm font-black uppercase tracking-widest">
            Configuration
          </h3>
          <span className="material-symbols-outlined text-slate-500 text-lg">
            <EditIcon />
          </span>
        </div>
        <div className="space-y-2">
          <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">
            Payload Content
          </label>
          <textarea
            value={content}
            onChange={(e) => onContentChange(e.target.value)}
            className="w-full bg-slate-900/50 border border-white/5 rounded-2xl p-4 text-sm text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none resize-none h-24 placeholder:text-slate-700"
            placeholder="Enter URL, Text or Wi-Fi credentials..."
          />
        </div>
      </div>

      {/* Styling Options */}
      <div className="deep-glass rounded-3xl p-6 space-y-8">
        {/* Logo Integration */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
              Logo Integration
            </label>
            <span className="text-[10px] font-bold text-primary">
              AUTO-SCALE
            </span>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <button className="flex flex-col items-center justify-center gap-2 p-4 rounded-2xl border border-primary bg-primary/10 group transition-all">
              <span className="material-symbols-outlined text-primary">
                <File size={14} />
              </span>
              <span className="text-[10px] font-bold uppercase">Upload</span>
            </button>
            <button className="flex flex-col items-center justify-center gap-2 p-4 rounded-2xl border border-white/5 bg-white/5 hover:bg-white/10 transition-all">
              <span className="material-symbols-outlined text-slate-400">
                <Codesandbox size={14} />
              </span>
              <span className="text-[10px] font-bold uppercase">Presets</span>
            </button>
          </div>
        </div>

        {/* Corner Style */}
        <div className="space-y-4">
          <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
            Corner Style
          </label>
          <div className="grid grid-cols-3 gap-2">
            <button
              onClick={() => onCornerStyleChange("rounded")}
              className={`p-2 rounded-xl text-[10px] font-black uppercase transition-all ${
                cornerStyle === "rounded"
                  ? "bg-white/10 border border-primary"
                  : "bg-white/5 border border-white/5 hover:bg-white/10"
              }`}
            >
              Rounded
            </button>
            <button
              onClick={() => onCornerStyleChange("square")}
              className={`p-2 rounded-xl text-[10px] font-black uppercase transition-all ${
                cornerStyle === "square"
                  ? "bg-white/10 border border-primary"
                  : "bg-white/5 border border-white/5 hover:bg-white/10"
              }`}
            >
              Square
            </button>
            <button
              onClick={() => onCornerStyleChange("dot-art")}
              className={`p-2 rounded-xl text-[10px] font-black uppercase transition-all ${
                cornerStyle === "dot-art"
                  ? "bg-white/10 border border-primary"
                  : "bg-white/5 border border-white/5 hover:bg-white/10"
              }`}
            >
              Dot-Art
            </button>
          </div>
        </div>

        {/* Gradient Engine */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
              Gradient Engine
            </label>
            <div className="flex items-center gap-2">
              <span className="text-[10px] text-slate-500 font-bold">
                ENABLE
              </span>
              <button
                onClick={onGradientToggle}
                className={`w-8 h-4 rounded-full relative cursor-pointer transition-colors ${
                  gradientEnabled ? "bg-primary/30" : "bg-slate-700"
                }`}
              >
                <div
                  className={`absolute top-0.5 size-3 bg-primary rounded-full shadow-lg transition-all ${
                    gradientEnabled ? "right-0.5" : "left-0.5"
                  }`}
                />
              </button>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex-1 space-y-2">
              <div className="h-10 rounded-xl bg-linear-to-r from-black to-primary border border-white/10 flex items-center px-3 justify-between">
                <input
                  type="color"
                  value={colorStart}
                  onChange={(e) => onColorStartChange(e.target.value)}
                  className="size-6 rounded-lg cursor-pointer bg-transparent border-0"
                />
                <span className="text-[10px] font-mono text-slate-300">
                  {colorStart.toUpperCase()}
                </span>
              </div>
            </div>
            <span className="material-symbols-outlined text-slate-600">
              <ArrowLeftRight />
            </span>
            <div className="flex-1 space-y-2">
              <div className="h-10 rounded-xl bg-white/5 border border-white/10 flex items-center px-3 justify-between">
                <input
                  type="color"
                  value={colorEnd}
                  onChange={(e) => onColorEndChange(e.target.value)}
                  className="size-6 rounded-lg cursor-pointer bg-transparent border-0"
                />
                <span className="text-[10px] font-mono text-slate-300">
                  {colorEnd.toUpperCase()}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Sliders */}
        <div className="space-y-6 pt-4 border-t border-white/5">
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                Resolution (PX)
              </label>
              <span className="text-[10px] font-mono text-primary bg-primary/10 px-2 py-0.5 rounded">
                {size}
              </span>
            </div>
            <input
              type="range"
              min="256"
              max="2048"
              step="128"
              value={size}
              onChange={(e) => onSizeChange(Number(e.target.value))}
              className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer custom-range"
            />
          </div>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                Quiet Zone
              </label>
              <span className="text-[10px] font-mono text-slate-400">
                {quietZone}px
              </span>
            </div>
            <input
              type="range"
              min="0"
              max="20"
              value={quietZone}
              onChange={(e) => onQuietZoneChange(Number(e.target.value))}
              className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer custom-range"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
