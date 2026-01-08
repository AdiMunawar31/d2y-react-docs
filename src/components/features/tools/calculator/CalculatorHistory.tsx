import {
  exportHistory,
  groupHistoryByDate,
  type HistoryItem,
} from "@/utils/tools/calculator/calculatorUtils";
import { Copy, HardDriveDownload, History, Trash2 } from "lucide-react";

interface CalculatorHistoryProps {
  history: HistoryItem[];
  onLoadHistory: (item: HistoryItem) => void;
  onDeleteItem: (id: string) => void;
}

export default function CalculatorHistory({
  history,
  onLoadHistory,
  onDeleteItem,
}: CalculatorHistoryProps) {
  const groupedHistory = groupHistoryByDate(history);

  const handleCopy = (text: string, e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(text);
  };

  const handleDelete = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    onDeleteItem(id);
  };

  const handleExport = () => {
    exportHistory(history);
  };

  return (
    <div className="flex flex-col w-full xl:w-80 glass-panel rounded-2xl border border-white/10 h-150 xl:h-auto self-stretch overflow-hidden">
      <div className="flex border-b border-white/5">
        <button className="flex-1 py-4 text-sm font-medium text-white border-b-2 border-primary bg-white/5">
          History
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-3 custom-scrollbar">
        {history.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-center p-8">
            <span className="material-symbols-outlined text-5xl text-gray-600 mb-3">
              <History size={50} />
            </span>
            <p className="text-gray-500 text-sm">No history yet</p>
            <p className="text-gray-600 text-xs mt-1">
              Your calculations will appear here
            </p>
          </div>
        ) : (
          <>
            {Object.entries(groupedHistory).map(([period, items]) => (
              <div key={period}>
                <div className="text-xs text-gray-500 font-medium uppercase tracking-wider mb-2 mt-1">
                  {period}
                </div>
                {items.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => onLoadHistory(item)}
                    className="p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/10 cursor-pointer group transition-all duration-200"
                  >
                    <div className="flex justify-between items-center mb-1">
                      <span
                        className={`text-xs font-mono px-1.5 rounded ${
                          item.mode === "standard"
                            ? "text-primary bg-primary/10"
                            : "text-secondary bg-secondary/10"
                        }`}
                      >
                        {item.mode === "standard" ? "Standard" : "Sci"}
                      </span>
                      <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button
                          onClick={(e) => handleCopy(item.result, e)}
                          className="text-gray-400 hover:text-white transition-colors"
                        >
                          <span className="material-symbols-outlined text-[14px]">
                            <Copy size={14} />
                          </span>
                        </button>
                        <button
                          onClick={(e) => handleDelete(item.id, e)}
                          className="text-gray-400 hover:text-red-400 transition-colors"
                        >
                          <span className="material-symbols-outlined text-[14px]">
                            <Trash2 size={14} />
                          </span>
                        </button>
                      </div>
                    </div>
                    <div className="text-gray-400 text-sm font-mono text-right mb-1 group-hover:text-gray-200 truncate">
                      {item.expression}
                    </div>
                    <div
                      className={`text-white text-xl font-bold text-right transition-colors ${
                        item.mode === "standard"
                          ? "group-hover:text-primary"
                          : "group-hover:text-secondary"
                      }`}
                    >
                      {item.result}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </>
        )}
      </div>

      {history.length > 0 && (
        <div className="p-4 border-t border-white/5 bg-black/20">
          <button
            onClick={handleExport}
            className="w-full py-2.5 rounded-lg border border-dashed border-gray-600 text-gray-400 text-xs font-medium hover:text-white hover:border-gray-400 hover:bg-white/5 transition-all flex items-center justify-center gap-2"
          >
            <span className="material-symbols-outlined text-[16px]">
              <HardDriveDownload size={14} />
            </span>
            Export History
          </button>
        </div>
      )}
    </div>
  );
}
