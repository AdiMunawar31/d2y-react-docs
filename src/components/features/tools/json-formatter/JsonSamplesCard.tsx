import { JSON_SAMPLES } from "@/utils/tools/json-formatter/jsonFormatterUtils";
import { ChevronRight, List } from "lucide-react";

interface JsonSamplesCardProps {
  onLoadSample: (sample: string) => void;
}

export default function JsonSamplesCard({
  onLoadSample,
}: JsonSamplesCardProps) {
  return (
    <div className="glass-panel rounded-xl p-6 flex flex-col h-full">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-primary/10 rounded-lg text-primary">
          <span className="material-symbols-outlined text-[24px]">
            <List />
          </span>
        </div>
        <h3 className="text-white font-bold text-lg">Sample Templates</h3>
      </div>
      <p className="text-slate-400 text-sm mb-4 leading-relaxed">
        Load sample JSON to test the formatter quickly.
      </p>
      <div className="space-y-3">
        <button
          onClick={() => onLoadSample(JSON_SAMPLES.basic)}
          className="w-full text-left p-4 bg-[#0b1219] border border-glass-border rounded-lg hover:border-primary/30 transition-all group"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-white font-bold text-sm">Basic Object</span>
            <span className="material-symbols-outlined text-slate-500 group-hover:text-primary transition-colors text-[18px]">
              <ChevronRight />
            </span>
          </div>
          <p className="text-xs text-slate-400 leading-snug">
            Simple JSON with basic types
          </p>
        </button>

        <button
          onClick={() => onLoadSample(JSON_SAMPLES.nested)}
          className="w-full text-left p-4 bg-[#0b1219] border border-glass-border rounded-lg hover:border-primary/30 transition-all group"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-white font-bold text-sm">Nested Object</span>
            <span className="material-symbols-outlined text-slate-500 group-hover:text-primary transition-colors text-[18px]">
              <ChevronRight />
            </span>
          </div>
          <p className="text-xs text-slate-400 leading-snug">
            Deeply nested object structure
          </p>
        </button>

        <button
          onClick={() => onLoadSample(JSON_SAMPLES.array)}
          className="w-full text-left p-4 bg-[#0b1219] border border-glass-border rounded-lg hover:border-primary/30 transition-all group"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-white font-bold text-sm">Array Data</span>
            <span className="material-symbols-outlined text-slate-500 group-hover:text-primary transition-colors text-[18px]">
              <ChevronRight />
            </span>
          </div>
          <p className="text-xs text-slate-400 leading-snug">
            JSON with array of objects
          </p>
        </button>
      </div>
    </div>
  );
}
