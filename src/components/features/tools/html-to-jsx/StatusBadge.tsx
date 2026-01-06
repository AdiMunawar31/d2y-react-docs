export function StatusBadge({ status }: { status: string }) {
  if (status !== "success") return null;

  return (
    <span className="px-2 py-1 rounded bg-green-500/10 border border-green-500/20 text-green-400 text-[10px] font-mono">
      Valid JSX
    </span>
  );
}
