import { Braces, CodeXml, Copy } from "lucide-react";
import { HtmlInput } from "./HtmlInput";
import { JsxOutput } from "./JsxOutput";
import { StatusBadge } from "./StatusBadge";
import { D2YToast } from "@/components/base/D2YToast";

interface EditorPanelProps {
  html: string;
  jsx: string;
  status: "idle" | "success" | "error";
  setHtml(value: string): void;
}

export function EditorPanel({ html, jsx, status, setHtml }: EditorPanelProps) {
  return (
    <div className="flex flex-col lg:flex-row h-137.5 relative">
      {/* INPUT HTML */}
      <div className="flex-1 flex flex-col min-h-62.5 border-b lg:border-b-0 lg:border-r border-white/5">
        <div className="flex items-center gap-2 px-4 py-2 bg-white/2 border-b border-white/5">
          <span className="material-symbols-outlined text-[18px] text-orange-500">
            <CodeXml />
          </span>
          <span className="text-xs font-bold text-slate-300 tracking-wide">
            INPUT HTML
          </span>
        </div>

        <div className="relative flex-1 bg-[#0f1521]">
          <HtmlInput value={html} onChange={setHtml} />
        </div>
      </div>

      {/* JSX OUTPUT */}
      <div className="flex-1 flex flex-col min-h-62.5 bg-[#0b0f19]">
        <div className="flex items-center justify-between px-4 py-2 bg-white/2 border-b border-white/5">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[18px] text-cyan-400">
              <Braces />
            </span>
            <span className="text-xs font-bold text-slate-300 tracking-wide">
              JSX OUTPUT
            </span>
          </div>

          <button
            onClick={() => {
              navigator.clipboard.writeText(jsx);
              D2YToast.copy("JSX copied");
            }}
            className="group flex items-center gap-1.5 px-2 py-1 rounded hover:bg-white/10 transition-colors"
          >
            <Copy size={14} />
            <span className="text-[12px] font-medium text-slate-400 group-hover:text-white uppercase">
              Copy
            </span>
          </button>
        </div>

        <div className="relative flex-1">
          <JsxOutput value={jsx} />
          <div className="absolute bottom-4 right-4 pointer-events-none">
            <StatusBadge status={status} />
          </div>
        </div>
      </div>
    </div>
  );
}
