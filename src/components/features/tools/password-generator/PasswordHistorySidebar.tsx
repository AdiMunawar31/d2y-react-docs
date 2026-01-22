import { type PasswordHistory } from "@/utils/tools/password-generator/passwordGeneratorUtils";
import { formatRelativeTime } from "@/utils/tools/password-generator/passwordGeneratorUtils";
import { Copy, Trash2 } from "lucide-react";

interface PasswordHistorySidebarProps {
  history: PasswordHistory[];
  onClear: () => void;
  onCopy: (password: string) => Promise<boolean>;
  onLoad: (item: PasswordHistory) => void;
}

export default function PasswordHistorySidebar({
  history,
  onClear,
  onCopy,
  onLoad,
}: PasswordHistorySidebarProps) {
  const handleCopy = async (password: string, e: React.MouseEvent) => {
    e.stopPropagation();
    await onCopy(password);
  };

  const recentHistory = history.slice(0, 10);

  return (
    <aside className="hidden xl:flex flex-col w-80 gap-6 shrink-0">
      <div className="liquid-glass rounded-2xl p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-sm font-bold uppercase tracking-widest text-white/50">
            History
          </h3>
          <button
            onClick={onClear}
            className="material-symbols-outlined text-sm cursor-pointer hover:text-primary transition-colors"
            title="Clear History"
          >
            <Trash2 />
          </button>
        </div>

        {recentHistory.length > 0 ? (
          <div className="space-y-4">
            {recentHistory.map((item) => (
              <div
                key={item.id}
                onClick={() => onLoad(item)}
                className="p-3 bg-white/5 border border-white/5 rounded-xl hover:border-primary/30 transition-all group cursor-pointer"
              >
                <div className="flex justify-between items-center mb-1">
                  <span className="text-[10px] font-mono text-primary">
                    {formatRelativeTime(item.timestamp)}
                  </span>
                  <button
                    onClick={(e) => handleCopy(item.password, e)}
                    className="material-symbols-outlined text-xs opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <Copy size={14} />
                  </button>
                </div>
                <p className="font-mono text-sm truncate text-white/80">
                  {item.password}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8">
            <p className="text-xs text-white/40">No history yet</p>
          </div>
        )}
      </div>

      <div className="liquid-glass rounded-2xl p-6 bg-primary/5">
        <h3 className="text-sm font-bold uppercase tracking-widest text-primary mb-4">
          Pro Security Tip
        </h3>
        <p className="text-xs text-white/70 leading-relaxed">
          Use at least 16 characters and a mix of symbols for banking and
          critical infrastructure passwords.
          <a className="text-primary hover:underline block mt-2" href="#">
            Learn more about entropy →
          </a>
        </p>
      </div>
    </aside>
  );
}
