export function PaginationPreview() {
  return (
    <div className="flex items-center gap-2">
      {[1, 2, 3].map((i) => (
        <div
          key={i}
          className={`size-8 rounded-md flex items-center justify-center text-xs font-bold ${
            i === 1 ? "bg-primary text-white" : "bg-white/10 text-white/60"
          }`}
        >
          {i}
        </div>
      ))}
    </div>
  );
}
