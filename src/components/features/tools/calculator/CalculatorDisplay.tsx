interface CalculatorDisplayProps {
  display: string;
  expression: string;
  previousExpression: string;
}

export default function CalculatorDisplay({
  display,
  expression,
  previousExpression,
}: CalculatorDisplayProps) {
  const mainValue = expression || display || "0";

  return (
    <div className="screen-container px-8 py-6 flex flex-col justify-end gap-8 min-h-48 border-b border-white/5">
      {previousExpression && (
        <div className="w-full text-right text-xl font-mono text-gray-400 opacity-60 truncate">
          {previousExpression}
        </div>
      )}

      <div className="w-full text-right text-4xl md:text-5xl lg:text-6xl font-bold font-mono text-white tracking-tight break-all">
        {mainValue}
        <span className="ml-1 animate-pulse text-primary">|</span>
      </div>
    </div>
  );
}
