import { Copy, FileDown, FileUp } from "lucide-react";
import { useRef, type ChangeEvent } from "react";

interface JsonEditorPanelProps {
  input: string;
  output: string;
  onInputChange: (value: string) => void;
  onCopyInput: () => void;
  onCopyOutput: () => void;
  onUploadFile: (file: File) => void;
  onDownload: () => void;
}

export default function JsonEditorPanel({
  input,
  output,
  onInputChange,
  onCopyInput,
  onCopyOutput,
  onUploadFile,
  onDownload,
}: JsonEditorPanelProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      onUploadFile(file);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-auto lg:h-125">
      {/* Input Panel */}
      <div className="flex flex-col h-100 lg:h-full glass-panel rounded-xl overflow-hidden group focus-within:ring-1 focus-within:ring-primary/50 transition-all">
        <div className="px-4 py-3 border-b border-glass-border bg-white/5 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-slate-500" />
            <span className="text-xs font-bold text-slate-300 uppercase tracking-wider">
              Input JSON
            </span>
          </div>
          <div className="flex gap-1">
            <button
              onClick={onCopyInput}
              className="p-1.5 rounded hover:bg-white/10 text-slate-500 hover:text-white transition-colors"
              title="Copy"
            >
              <span className="material-symbols-outlined text-[16px]">
                <Copy size={16} />
              </span>
            </button>
            <button
              onClick={() => fileInputRef.current?.click()}
              className="p-1.5 rounded hover:bg-white/10 text-slate-500 hover:text-white transition-colors"
              title="Upload"
            >
              <span className="material-symbols-outlined text-[16px]">
                <FileUp size={16} />
              </span>
            </button>
            <input
              ref={fileInputRef}
              type="file"
              accept=".json,application/json"
              onChange={handleFileChange}
              className="hidden"
            />
          </div>
        </div>
        <textarea
          value={input}
          onChange={(e) => onInputChange(e.target.value)}
          className="code-input flex-1 w-full bg-[#0d131a]/50 border-none p-4 font-mono text-sm text-slate-300 resize-none custom-scrollbar placeholder:text-slate-600 focus:bg-[#0d131a]/80 transition-colors"
          placeholder={`// Paste your JSON here\n{\n  "name": "Liquid Glass UI",\n  "version": "1.0.0",\n  "features": [\n    "dark mode",\n    "glassmorphism"\n  ]\n}`}
          spellCheck={false}
        />
      </div>

      {/* Output Panel */}
      <div className="flex flex-col h-100 lg:h-full glass-panel rounded-xl overflow-hidden group focus-within:ring-1 focus-within:ring-primary/50 transition-all">
        <div className="px-4 py-3 border-b border-glass-border bg-white/5 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary" />
            <span className="text-xs font-bold text-slate-300 uppercase tracking-wider">
              Formatted Output
            </span>
          </div>
          <div className="flex gap-1">
            <button
              onClick={onCopyOutput}
              disabled={!output}
              className="p-1.5 rounded hover:bg-white/10 text-slate-500 hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              title="Copy"
            >
              <span className="material-symbols-outlined text-[16px]">
                <Copy size={16} />
              </span>
            </button>
            <button
              onClick={onDownload}
              disabled={!output}
              className="p-1.5 rounded hover:bg-white/10 text-slate-500 hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              title="Download"
            >
              <span className="material-symbols-outlined text-[16px]">
                <FileDown size={16} />
              </span>
            </button>
          </div>
        </div>
        <div className="code-input flex-1 w-full bg-[#0d131a]/50 border-none p-4 font-mono text-sm text-slate-300 overflow-auto custom-scrollbar">
          {output ? (
            <pre className="whitespace-pre text-[#FFFF80]">{output}</pre>
          ) : (
            <div className="text-slate-600 italic">
              {input
                ? "// Output will appear here after formatting"
                : "// No output yet"}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
