export function AccordionPreview() {
  return (
    <div className="w-2/3 flex flex-col gap-2">
      {[1, 2].map((i) => (
        <div
          key={i}
          className="h-8 rounded-md border border-white/10 bg-white/5 px-3 flex items-center justify-between"
        >
          <div className="h-2 w-20 bg-white/20 rounded-full" />
          <div className="size-4 bg-white/20 rounded" />
        </div>
      ))}
    </div>
  );
}
