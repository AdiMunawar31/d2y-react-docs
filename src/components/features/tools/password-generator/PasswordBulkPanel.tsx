import { ClipboardList, FileText, Notebook, WandSparkles } from "lucide-react";

interface PasswordBulkPanelProps {
  bulkPasswords: string[];
  bulkQuantity: number;
  onQuantityChange: (quantity: number) => void;
  onGenerate: () => void;
  onExportCSV: () => void;
  onExportTXT: () => void;
}

export default function PasswordBulkPanel({
  bulkPasswords,
  bulkQuantity,
  onQuantityChange,
  onGenerate,
  onExportCSV,
  onExportTXT,
}: PasswordBulkPanelProps) {
  const displayPasswords = bulkPasswords.slice(0, 4);

  return (
    <section className="liquid-glass rounded-2xl p-8 relative overflow-hidden">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined text-primary">
            <ClipboardList />
          </span>
          <h3 className="font-bold text-white uppercase tracking-wider text-sm">
            Bulk Generation Engine
          </h3>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-xs text-white/40">Quantity:</span>
          <select
            value={bulkQuantity}
            onChange={(e) => onQuantityChange(Number(e.target.value))}
            className="bg-black/40 border border-white/10 rounded-lg text-sm px-4 py-1.5 focus:ring-primary focus:border-primary text-white outline-none"
          >
            <option value={10}>10</option>
            <option value={25}>25</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
          </select>
        </div>
      </div>

      {/* Preview Area */}
      <div className="bg-black/40 border border-white/5 rounded-xl p-4 mb-8">
        <div className="max-h-32 overflow-y-auto space-y-2 font-mono text-sm text-white/60">
          {bulkPasswords.length > 0 ? (
            displayPasswords.map((pwd, index) => (
              <p key={index}>
                {pwd.substring(0, 18)}...
                <span className="text-primary/40 ml-4">[Ready]</span>
              </p>
            ))
          ) : (
            <p className="text-center text-white/30 py-4">
              Click "Bulk Generate" to create passwords
            </p>
          )}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={onGenerate}
          className="flex-1 bg-primary hover:bg-blue-600 text-white font-bold py-4 px-6 rounded-xl flex items-center justify-center gap-3 transition-all shadow-glow-primary hover:-translate-y-1"
        >
          <span className="material-symbols-outlined">
            <WandSparkles size={16} />
          </span>
          Bulk Generate
        </button>
        <div className="flex gap-2">
          <button
            onClick={onExportCSV}
            disabled={bulkPasswords.length === 0}
            className="px-6 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl flex items-center gap-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span className="material-symbols-outlined text-sm">
              <FileText size={14} />
            </span>
            .CSV
          </button>
          <button
            onClick={onExportTXT}
            disabled={bulkPasswords.length === 0}
            className="px-6 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl flex items-center gap-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span className="material-symbols-outlined text-sm">
              <Notebook size={14} />
            </span>
            .TXT
          </button>
        </div>
      </div>
    </section>
  );
}
