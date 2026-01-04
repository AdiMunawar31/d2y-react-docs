const categories = [
  "All",
  "Color",
  "Text",
  "Media",
  "Data",
  "Dev",
  "Date",
  "Encode",
  "Layout",
];

interface ToolsFilterBarProps {
  category: string;
  onCategoryChange: (v: string) => void;
}

export function ToolsFilterBar({
  category,
  onCategoryChange,
}: ToolsFilterBarProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((c) => (
        <button
          key={c}
          onClick={() => onCategoryChange(c)}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
            c === category
              ? "bg-primary text-white shadow-md"
              : "bg-white/5 text-slate-300 hover:bg-white/10"
          }`}
        >
          {c}
        </button>
      ))}
    </div>
  );
}
