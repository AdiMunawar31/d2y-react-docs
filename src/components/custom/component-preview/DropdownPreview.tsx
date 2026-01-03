export function DropdownPreview() {
  return (
    <div className="w-40 flex flex-col gap-2">
      <div className="h-9 rounded-md border border-white/10 bg-white/5 px-3 flex items-center justify-between">
        <div className="h-2 w-16 bg-white/20 rounded-full" />
        <div className="size-3 bg-white/20 rounded" />
      </div>

      <div className="rounded-md border border-white/10 bg-[#1e2a36] p-2 space-y-2">
        <div className="h-2 w-full bg-white/15 rounded" />
        <div className="h-2 w-3/4 bg-white/15 rounded" />
      </div>
    </div>
  );
}
