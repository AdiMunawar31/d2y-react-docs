export function BreadcrumbPreview() {
  return (
    <div className="flex items-center gap-2 text-xs">
      <div className="h-2 w-10 bg-white/20 rounded-full" />
      <span className="text-white/30">/</span>
      <div className="h-2 w-12 bg-white/30 rounded-full" />
    </div>
  );
}
