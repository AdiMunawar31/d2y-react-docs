"use client";

import { useQRGenerator } from "@/hooks/tools/useQRGenerator";
import QRSidebar from "@/components/features/tools/qr-generator/QRSidebar";
import QRPreviewPanel from "@/components/features/tools/qr-generator/QRPreviewPanel";
import QRConfigPanel from "@/components/features/tools/qr-generator/QRConfigPanel";
import QRExportPanel from "@/components/features/tools/qr-generator/QRExportPanel";

export default function QRGeneratorPage() {
  const {
    config,
    qrDataUrl,
    sessions,
    isGenerating,
    updateContent,
    updateSize,
    updateQuietZone,
    updateCornerStyle,
    toggleGradient,
    updateColorStart,
    updateColorEnd,
    download,
    copyToClipboard,
    copyCurl,
    loadSession,
  } = useQRGenerator();

  return (
    <div className="flex-1 flex flex-col md:flex-row max-w-450 mx-auto w-full p-6 lg:p-10 gap-10 min-h-screen">
      <QRSidebar sessions={sessions} onLoadSession={loadSession} />

      <QRPreviewPanel
        qrDataUrl={qrDataUrl}
        isGenerating={isGenerating}
        onCopy={copyToClipboard}
      />

      <aside className="w-full md:w-80 lg:w-100 shrink-0 flex flex-col gap-6 overflow-y-auto max-h-[calc(100vh-140px)] pr-2">
        <QRConfigPanel
          content={config.content}
          size={config.size}
          quietZone={config.quietZone}
          cornerStyle={config.cornerStyle}
          gradientEnabled={config.gradientEnabled}
          colorStart={config.colorStart}
          colorEnd={config.colorEnd}
          onContentChange={updateContent}
          onSizeChange={updateSize}
          onQuietZoneChange={updateQuietZone}
          onCornerStyleChange={updateCornerStyle}
          onGradientToggle={toggleGradient}
          onColorStartChange={updateColorStart}
          onColorEndChange={updateColorEnd}
        />

        <QRExportPanel onDownload={download} onCopyCurl={copyCurl} />
      </aside>

      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 md:hidden z-50">
        <button className="deep-glass px-6 py-3 rounded-full flex items-center gap-3 border border-primary shadow-2xl">
          <span className="material-symbols-outlined text-primary">
            auto_awesome_motion
          </span>
          <span className="text-xs font-black uppercase tracking-widest text-white">
            Batch Studio
          </span>
        </button>
      </div>
    </div>
  );
}
