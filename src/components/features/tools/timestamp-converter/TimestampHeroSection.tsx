interface TimestampHeroSectionProps {
  currentTimestamp: number;
  utcOffset: string;
}

export default function TimestampHeroSection({
  currentTimestamp,
  utcOffset,
}: TimestampHeroSectionProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
      <div className="lg:col-span-7 flex flex-col justify-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-[11px] font-bold uppercase tracking-widest text-primary mb-6 w-fit">
          <span className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_#0ea5e9]" />
          System Core Active
        </div>
        <h2 className="text-5xl lg:text-6xl font-black tracking-tighter text-white mb-6 leading-[1.1]">
          Precision
          <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-cyan-300">
            {" "}
            Temporal
          </span>
          <br />
          Engine
        </h2>
        <p className="text-slate-400 text-lg max-w-xl leading-relaxed">
          Advanced timestamp conversion utility with microsecond precision and
          multi-language export capabilities.
        </p>
      </div>

      <div className="lg:col-span-5">
        <div className="liquid-glass pulsing-glow rounded-[2rem] p-8 relative overflow-hidden group">
          <div className="absolute -right-4 -top-4 w-32 h-32 bg-primary/10 blur-[50px] rounded-full" />

          <div className="relative z-10 flex flex-col items-center">
            <span className="text-xs uppercase tracking-[0.3em] font-black text-slate-500 mb-4">
              Current Unix Epoch
            </span>
            <div className="text-5xl lg:text-6xl font-mono font-extrabold text-white tracking-tighter tabular-nums drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
              {currentTimestamp}
            </div>
            <div className="mt-6 flex items-center gap-4">
              <div className="flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-bold text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                REAL-TIME
              </div>
              <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                UTC Offset: {utcOffset}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
