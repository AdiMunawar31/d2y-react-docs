import { ArrowRight } from "lucide-react";

export function LoadMoreButton() {
  return (
    <div className="mt-16 flex justify-center">
      <button className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white border border-glass-border transition-all">
        Load more components
        <ArrowRight size={14} />
      </button>
    </div>
  );
}
