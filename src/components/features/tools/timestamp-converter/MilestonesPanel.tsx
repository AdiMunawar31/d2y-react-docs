import { type Milestone } from "@/utils/tools/timestamp-converter/timestampConverterUtils";
import { formatMilestoneCountdown } from "@/utils/tools/timestamp-converter/timestampConverterUtils";
import { ClockFading } from "lucide-react";

interface MilestonesPanelProps {
  milestones: Milestone[];
}

export default function MilestonesPanel({ milestones }: MilestonesPanelProps) {
  return (
    <div className="lg:col-span-2 liquid-glass rounded-[2rem] p-8">
      <h4 className="text-xs font-black text-white uppercase tracking-[0.3em] mb-8 flex items-center gap-2">
        <span className="material-symbols-outlined text-primary text-[18px]">
          <ClockFading />
        </span>
        Milestone Countdowns
      </h4>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {milestones.map((milestone) => (
          <div
            key={milestone.id}
            className={`bg-black/40 rounded-2xl p-5 border transition-all ${
              milestone.isWarning
                ? "border-red-500/20 bg-red-500/5"
                : "border-white/5 hover:border-primary/30"
            }`}
          >
            <div
              className={`text-[10px] font-bold uppercase mb-2 ${
                milestone.isWarning ? "text-red-400" : "text-slate-500"
              }`}
            >
              {milestone.label}
            </div>
            <div
              className={`font-mono text-xl font-bold mb-1 ${
                milestone.isWarning ? "text-red-500" : "text-white"
              }`}
            >
              {formatMilestoneCountdown(
                milestone.timestamp,
                milestone.isWarning
              )}
            </div>
            <div
              className={`text-[10px] font-mono tracking-tighter ${
                milestone.isWarning ? "text-red-400/40" : "text-primary/60"
              }`}
            >
              {milestone.timestamp}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
