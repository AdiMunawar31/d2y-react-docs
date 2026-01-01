export function HeroBadge() {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 backdrop-blur-md">
      <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
      <span className="text-xs font-medium text-primary-300 text-white">
        New: Theme Builder v2.0
      </span>
    </div>
  );
}
