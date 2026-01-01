const HeroMockup = () => {
  return (
    <div className="relative hidden lg:block w-full h-100">
      <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full" />
      <div className="relative z-10 w-full h-full border border-glass-border bg-glass-bg rounded-2xl shadow-2xl overflow-hidden backdrop-blur-xl flex flex-col">
        <div className="h-10 border-b border-glass-border flex items-center px-4 gap-2 bg-white/5">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/50" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
            <div className="w-3 h-3 rounded-full bg-green-500/50" />
          </div>
          <div className="ml-4 h-5 w-32 bg-white/10 rounded-full" />
        </div>
        <div className="p-6 grid grid-cols-2 gap-4 h-full">
          <div className="space-y-4">
            <div className="h-24 rounded-xl bg-white/5 border border-white/10 p-4">
              <div className="h-2 w-16 bg-primary/40 rounded mb-2" />
              <div className="h-8 w-24 bg-white/10 rounded" />
            </div>
            <div className="h-32 rounded-xl bg-linear-to-br from-primary/10 to-purple-500/10 border border-white/10" />
          </div>
          <div className="h-full rounded-xl bg-background-dark/50 border border-white/5 p-4 space-y-3">
            <div className="flex justify-between">
              <div className="h-4 w-20 bg-white/10 rounded" />
              <div className="h-4 w-4 bg-white/10 rounded" />
            </div>
            <div className="space-y-2">
              <div className="h-2 w-full bg-white/5 rounded" />
              <div className="h-2 w-3/4 bg-white/5 rounded" />
              <div className="h-2 w-5/6 bg-white/5 rounded" />
            </div>
            <div className="mt-auto pt-4">
              <div className="h-8 w-full bg-primary/20 rounded border border-primary/30" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroMockup;
