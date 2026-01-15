import { useState } from "react";
import { type QRExportFormat } from "@/utils/tools/qr-generator/qrGeneratorUtils";
import { Download, Terminal } from "lucide-react";

interface QRExportPanelProps {
  onDownload: (format: QRExportFormat) => void;
  onCopyCurl: () => Promise<boolean>;
}

export default function QRExportPanel({
  onDownload,
  onCopyCurl,
}: QRExportPanelProps) {
  const [selectedFormat, setSelectedFormat] = useState<QRExportFormat>("png");

  const handleDownload = () => {
    onDownload(selectedFormat);
  };

  const handleCopyCurl = async () => {
    const success = await onCopyCurl();
    if (success) {
      console.log("cURL copied to clipboard!");
    }
  };

  return (
    <div className="mt-auto deep-glass rounded-3xl p-6 border-t-2 border-primary">
      <div className="flex items-center gap-2 mb-6">
        <div className="size-8 rounded-lg bg-primary/20 flex items-center justify-center">
          <span className="material-symbols-outlined text-primary text-lg">
            <Download />
          </span>
        </div>
        <h3 className="text-white text-sm font-black uppercase tracking-widest">
          Export Hub
        </h3>
      </div>

      <div className="flex flex-col gap-3">
        <div className="grid grid-cols-2 gap-2">
          <button
            onClick={() => setSelectedFormat("svg")}
            className={`border rounded-xl p-2 flex items-center justify-center gap-2 cursor-pointer transition-all ${
              selectedFormat === "svg"
                ? "bg-primary/20 border-primary"
                : "bg-white/5 border-white/10 hover:bg-white/10"
            }`}
          >
            <span className="text-[10px] font-black">SVG</span>
            <span className="text-[8px] text-slate-500 font-bold">VECTOR</span>
          </button>
          <button
            onClick={() => setSelectedFormat("png")}
            className={`border rounded-xl p-2 flex items-center justify-center gap-2 cursor-pointer transition-all ${
              selectedFormat === "png"
                ? "bg-primary/20 border-primary"
                : "bg-white/5 border-white/10 hover:bg-white/10"
            }`}
          >
            <span className="text-[10px] font-black">PNG</span>
            <span className="text-[8px] text-slate-500 font-bold">HD</span>
          </button>
        </div>

        <button
          onClick={handleDownload}
          className="w-full py-4 rounded-2xl bg-linear-to-r from-primary to-accent text-white font-black text-sm uppercase tracking-widest shadow-2xl glow-accent transition-all hover:scale-[1.02] active:scale-95"
        >
          Generate & Download
        </button>

        <div className="flex items-center justify-center gap-2 mt-2">
          <span className="material-symbols-outlined text-sm text-slate-600">
            <Terminal />
          </span>
          <button
            onClick={handleCopyCurl}
            className="text-[10px] font-bold text-slate-600 cursor-pointer hover:text-primary transition-all uppercase tracking-tighter"
          >
            Copy cURL Request
          </button>
        </div>
      </div>
    </div>
  );
}
