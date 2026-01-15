import { Atom, Camera, Copy, Maximize, RefreshCcw, Share2 } from "lucide-react";

interface QRPreviewPanelProps {
  qrDataUrl: string;
  isGenerating: boolean;
  onCopy: () => Promise<boolean>;
}

export default function QRPreviewPanel({
  qrDataUrl,
  isGenerating,
  onCopy,
}: QRPreviewPanelProps) {
  const handleCopy = async () => {
    const success = await onCopy();
    if (success) {
      // Could add toast notification here
      console.log("Copied to clipboard!");
    }
  };

  return (
    <main className="flex-1 flex flex-col gap-6 relative">
      {/* Background glows */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-accent/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="flex-1 deep-glass rounded-[2.5rem] p-10 flex flex-col items-center justify-center relative overflow-hidden">
        {/* Status indicator */}
        <div className="absolute top-8 left-10 flex items-center gap-3">
          <div className="size-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-xs font-black text-slate-400 uppercase tracking-widest">
            Live Renderer Engine
          </span>
        </div>

        {/* Action buttons */}
        <div className="absolute top-8 right-10 flex gap-2">
          <button className="size-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all shadow-xl">
            <RefreshCcw size={16} />
          </button>
          <button className="size-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-all">
            <Maximize size={16} />
          </button>
        </div>

        {/* QR Code Preview */}
        <div className="relative group mt-12">
          <div className="floating-glass p-8 rounded-[2rem] transition-all duration-700 group-hover:scale-105 group-hover:rotate-1 group-hover:shadow-[0_0_100px_rgba(14,165,233,0.3)]">
            <div className="bg-white p-4 rounded-xl shadow-2xl relative overflow-hidden">
              {qrDataUrl ? (
                <img
                  src={qrDataUrl}
                  alt="Generated QR Code"
                  className="w-64 h-64 md:w-80 md:h-80 object-contain relative z-10"
                />
              ) : (
                <div className="w-64 h-64 md:w-80 md:h-80 flex items-center justify-center bg-slate-100">
                  <span className="text-slate-400 text-sm">
                    {isGenerating
                      ? "Generating..."
                      : "Enter content to generate"}
                  </span>
                </div>
              )}

              {/* Center logo placeholder */}
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <div className="size-16 bg-white rounded-2xl shadow-xl flex items-center justify-center border-4 border-white">
                  <span className="material-symbols-outlined text-primary text-3xl font-black">
                    <Atom size={40} />
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Shadow effect */}
          <div className="mt-12 w-48 h-4 bg-primary/10 mx-auto blur-xl rounded-[100%] group-hover:w-64 transition-all duration-700" />
        </div>

        {/* Action buttons */}
        <div className="mt-auto pt-10 flex gap-4">
          <button
            onClick={handleCopy}
            disabled={!qrDataUrl}
            className="px-8 py-3 rounded-full bg-primary text-white font-bold text-sm shadow-xl hover:scale-105 active:scale-95 transition-all glow-accent flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span className="material-symbols-outlined">
              <Copy size={14} />
            </span>
            Copy to Clipboard
          </button>
          <button
            disabled={!qrDataUrl}
            className="px-8 py-3 rounded-full bg-white/5 border border-white/10 text-white font-bold text-sm hover:bg-white/10 transition-all flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span className="material-symbols-outlined">
              <Share2 size={14} />
            </span>
            Share
          </button>
        </div>
      </div>

      {/* Validation banner */}
      <div className="h-20 deep-glass rounded-3xl flex items-center justify-between px-8 border border-white/5">
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-primary">
            <Camera />
          </span>
          <div>
            <p className="text-sm font-bold text-white leading-none">
              Instant Validation
            </p>
            <p className="text-[10px] text-slate-500 font-medium">
              Verify your QR logic with live camera testing
            </p>
          </div>
        </div>
        <button className="bg-white/10 hover:bg-white/20 px-6 py-2 rounded-xl text-xs font-black uppercase tracking-tighter transition-all">
          Enable Cam
        </button>
      </div>
    </main>
  );
}
