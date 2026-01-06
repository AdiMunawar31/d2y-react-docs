interface LineNumbersProps {
  value: string;
}

export function LineNumbersCode({ value }: LineNumbersProps) {
  const lines = value.split("\n").length;

  return (
    <div
      className="
      absolute left-0 top-0 bottom-0 w-10
      bg-white/5 border-r border-white/10
      flex flex-col items-center pt-4
      text-[10px] text-slate-500 font-mono select-none
    "
    >
      {Array.from({ length: lines }).map((_, i) => (
        <span key={i}>{i + 1}</span>
      ))}
    </div>
  );
}
