export function AvatarPreview() {
  return (
    <div className="flex items-center gap-3">
      <div className="size-10 rounded-full bg-linear-to-br from-primary to-purple-500" />
      <div className="flex flex-col gap-1">
        <div className="h-2 w-16 bg-white/30 rounded-full" />
        <div className="h-2 w-10 bg-white/20 rounded-full" />
      </div>
    </div>
  );
}
