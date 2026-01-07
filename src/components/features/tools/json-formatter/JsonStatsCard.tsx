import type { JsonStats } from "@/utils/tools/json-formatter/jsonFormatterUtils";
import {
  ChartNoAxesCombined,
  ListOrdered,
  Text,
  Database,
  GitBranch,
  KeyRound,
} from "lucide-react";

interface JsonStatsCardProps {
  stats: JsonStats | null;
}

export default function JsonStatsCard({ stats }: JsonStatsCardProps) {
  if (!stats) {
    return (
      <div className="glass-panel rounded-xl p-6 flex flex-col h-full">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-primary/10 rounded-lg text-primary">
            <ChartNoAxesCombined size={22} />
          </div>
          <h3 className="text-white font-bold text-lg">Statistics</h3>
        </div>

        <p className="text-slate-400 text-sm">
          Enter valid JSON to see statistics
        </p>
      </div>
    );
  }

  return (
    <div className="glass-panel rounded-xl p-6 flex flex-col h-full">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-primary/10 rounded-lg text-primary">
          <ChartNoAxesCombined size={22} />
        </div>
        <h3 className="text-white font-bold text-lg">Statistics</h3>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <StatBox icon={ListOrdered} label="Lines" value={stats.lines} />

        <StatBox icon={Text} label="Characters" value={stats.characters} />

        <StatBox icon={Database} label="Size" value={stats.size} />

        <StatBox icon={GitBranch} label="Depth" value={stats.depth} />

        <StatBox
          icon={KeyRound}
          label="Total Keys"
          value={stats.keys}
          className="col-span-2"
        />
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Small internal component (optional but clean)                       */
/* ------------------------------------------------------------------ */

interface StatBoxProps {
  icon: React.ElementType;
  label: string;
  value: number | string;
  className?: string;
}

function StatBox({ icon: Icon, label, value, className }: StatBoxProps) {
  return (
    <div
      className={`bg-[#0b1219] border border-glass-border rounded-lg p-4 ${
        className ?? ""
      }`}
    >
      <div className="flex items-center gap-2 mb-1">
        <Icon size={16} className="text-slate-500" />
        <p className="text-slate-400 text-xs uppercase tracking-wider">
          {label}
        </p>
      </div>
      <p className="text-white text-2xl font-bold">{value}</p>
    </div>
  );
}
