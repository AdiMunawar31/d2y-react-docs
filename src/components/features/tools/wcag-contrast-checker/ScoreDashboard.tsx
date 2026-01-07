import { Gauge } from "lucide-react";

interface ScoreDashboardProps {
  contrastRatio: number | null;
  quality: {
    label: string;
    color: string;
    percentage: number;
  } | null;
}

export default function ScoreDashboard({
  contrastRatio,
  quality,
}: ScoreDashboardProps) {
  const displayRatio = contrastRatio ? contrastRatio.toFixed(2) : "0.00";
  const displayQuality = quality || {
    label: "Invalid",
    color: "text-gray-500",
    percentage: 0,
  };

  return (
    <div className="glass-panel md:col-span-1 p-6 rounded-xl flex flex-col justify-between relative overflow-hidden group">
      <div className="absolute right-0 top-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
        <span className="material-symbols-outlined text-8xl text-white">
          <Gauge size={100} />
        </span>
      </div>
      <p className="text-[#92adc9] text-sm font-medium uppercase tracking-wider">
        Contrast Ratio
      </p>
      <div className="mt-4">
        <span className="text-5xl font-black text-white tracking-tighter">
          {displayRatio}
        </span>
        <span className="text-2xl font-bold text-[#92adc9]">:1</span>
      </div>
      <div className="mt-4 flex items-center gap-2">
        <div className="h-2 flex-1 bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-linear-to-r from-red-500 via-yellow-500 to-green-500 rounded-full transition-all duration-300"
            style={{ width: `${displayQuality.percentage}%` }}
          />
        </div>
        <span className={`text-xs font-bold ${displayQuality.color}`}>
          {displayQuality.label}
        </span>
      </div>
    </div>
  );
}
