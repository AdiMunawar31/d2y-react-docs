const LIBRARIES = ["All", "shadcn", "MUI", "Mantine"];

interface FiltersProps {
  library: string;
  onLibraryChange: (v: string) => void;
}

export function ComponentExplorerFilters({
  library,
  onLibraryChange,
}: FiltersProps) {
  return (
    <section className="flex flex-col gap-4">
      {/* Library Tabs */}
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-text-secondary text-sm font-semibold mr-2">
          Library:
        </span>

        {LIBRARIES.map((lib) => {
          const active = lib === library;

          return (
            <button
              key={lib}
              onClick={() => onLibraryChange(lib)}
              className={`h-9 px-4 rounded-lg text-sm font-medium transition-all
                ${
                  active
                    ? "bg-primary text-white shadow-[0_0_15px_rgba(43,140,238,0.3)]"
                    : "bg-[#233648] text-text-secondary hover:bg-[#2f455a]"
                }`}
            >
              {lib}
            </button>
          );
        })}
      </div>
    </section>
  );
}
