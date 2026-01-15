import { type QRSession } from "@/utils/tools/qr-generator/qrGeneratorUtils";
import {
  formatSessionTime,
  generatePreview,
} from "@/utils/tools/qr-generator/qrGeneratorUtils";
import {
  Sparkles,
  Layers,
  QrCode,
  ScanQrCode,
  History,
  MoreHorizontal,
  ArrowRight,
  Image,
} from "lucide-react";

interface QRSidebarProps {
  sessions: QRSession[];
  onLoadSession: (session: QRSession) => void;
}

export default function QRSidebar({ sessions, onLoadSession }: QRSidebarProps) {
  const recentSessions = sessions.slice(0, 2);

  const getIcon = (format: string) => {
    switch (format) {
      case "svg":
        return <QrCode size={18} />;
      case "png":
      case "jpeg":
        return <Image size={18} />;
      default:
        return <QrCode size={18} />;
    }
  };

  return (
    <aside className="w-full md:w-72 shrink-0 flex flex-col gap-8">
      <div className="space-y-1">
        <h1 className="text-white text-4xl font-black tracking-tighter">
          QR Engine
        </h1>
        <p className="text-slate-400 text-sm font-light">
          Vector-grade high fidelity generator.
        </p>
      </div>

      <nav className="flex flex-col gap-1.5">
        <button className="flex items-center gap-3 px-4 py-3 rounded-xl bg-primary/10 border border-primary/20 text-white">
          <Sparkles className="text-primary" size={18} />
          <span className="text-sm font-bold">Studio Generate</span>
        </button>

        <button className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 text-slate-400 group">
          <Layers className="group-hover:text-primary" size={18} />
          <span className="text-sm font-medium">Batch Processing</span>
          <span className="ml-auto bg-primary/20 text-primary text-[10px] px-1.5 py-0.5 rounded font-black">
            BETA
          </span>
        </button>

        <button className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 text-slate-400 group">
          <ScanQrCode className="group-hover:text-primary" size={18} />
          <span className="text-sm font-medium">Scan to Test</span>
        </button>

        <button className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 text-slate-400 group">
          <History className="group-hover:text-primary" size={18} />
          <span className="text-sm font-medium">Vault</span>
        </button>
      </nav>

      <div className="deep-glass rounded-3xl p-6 flex flex-col gap-5 border-l-4 border-l-primary/40">
        <div className="flex items-center justify-between">
          <h3 className="text-white text-xs font-black uppercase tracking-[0.2em]">
            Recent Sessions
          </h3>
          <span className="material-symbols-outlined text-slate-600 text-sm cursor-pointer hover:text-white">
            <MoreHorizontal
              className="text-slate-600 hover:text-white cursor-pointer"
              size={16}
            />
          </span>
        </div>

        {recentSessions.length > 0 ? (
          <div className="flex flex-col gap-4">
            {recentSessions.map((session) => (
              <div
                key={session.id}
                onClick={() => onLoadSession(session)}
                className="flex items-center gap-4 group cursor-pointer"
              >
                <div className="size-10 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20">
                  {getIcon(session.format)}
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-white truncate w-32">
                    {generatePreview(session.content)}
                  </span>
                  <span className="text-[10px] text-slate-500">
                    {formatSessionTime(session.timestamp)} •{" "}
                    {session.format.toUpperCase()}
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-4">
            <p className="text-xs text-slate-500">No sessions yet</p>
          </div>
        )}

        <button className="mt-2 text-xs font-bold text-primary hover:text-accent flex items-center gap-2">
          View all activity
          <ArrowRight size={14} />
        </button>
      </div>
    </aside>
  );
}
