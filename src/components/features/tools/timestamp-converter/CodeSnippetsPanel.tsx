import { D2YToast } from "@/components/base/D2YToast";
import { type CodeSnippet } from "@/utils/tools/timestamp-converter/timestampConverterUtils";
import { getLanguageColor } from "@/utils/tools/timestamp-converter/timestampConverterUtils";
import { Code, Copy } from "lucide-react";

interface CodeSnippetsPanelProps {
  snippets: CodeSnippet[];
  onCopy: (code: string) => Promise<boolean>;
}

export default function CodeSnippetsPanel({
  snippets,
  onCopy,
}: CodeSnippetsPanelProps) {
  const handleCopy = async (code: string) => {
    const success = await onCopy(code);
    if (success) {
      D2YToast.copy("Copied to clipboard!");
    }
  };

  const displaySnippets = snippets.slice(0, 3);

  return (
    <div className="liquid-glass rounded-[2rem] p-8">
      <h4 className="text-xs font-black text-white uppercase tracking-[0.3em] mb-8 flex items-center gap-2">
        <span className="material-symbols-outlined text-primary text-[18px]">
          <Code size={16} />
        </span>
        Export Snippets
      </h4>

      <div className="space-y-3">
        {displaySnippets.map((snippet) => (
          <div
            key={snippet.language}
            onClick={() => handleCopy(snippet.code)}
            className="group flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 cursor-pointer transition-all"
          >
            <div className="flex items-center gap-3">
              <div
                className={`w-8 h-8 rounded-lg flex items-center justify-center text-[10px] font-black ${getLanguageColor(
                  snippet.color
                )}`}
              >
                {snippet.badge}
              </div>
              <code className="text-[11px] font-mono text-slate-400">
                {snippet.code.split("\n")[0]}
              </code>
            </div>
            <span className="material-symbols-outlined text-[16px] text-slate-600 group-hover:text-primary transition-colors">
              <Copy size={16} />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
