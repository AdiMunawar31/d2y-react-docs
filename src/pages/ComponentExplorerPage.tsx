import { useEffect, useState } from "react";
import { COMPONENT_LIBRARY } from "@/data/component-library";
import { D2YPagination } from "@/components/base/D2YPagination";
import { ComponentExplorerHero } from "@/components/custom/component-explorer/ComponentExplorerHero";
import { ComponentExplorerSearch } from "@/components/custom/component-explorer/ComponentExplorerSearch";
import { ComponentExplorerFilters } from "@/components/custom/component-explorer/ComponentExplorerFilters";
import { ComponentExplorerGrid } from "@/components/custom/component-explorer/ComponentExplorerGrid";
import { EmptyState } from "@/components/feedback/EmptyState";

const PAGE_SIZE = 8;

export default function ComponentExplorerPage() {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [pageSize, setPageSize] = useState(PAGE_SIZE);
  const [library, setLibrary] = useState<"All" | string>("All");

  const filteredComponents = COMPONENT_LIBRARY.filter((item) => {
    const matchSearch = item.title.toLowerCase().includes(search.toLowerCase());

    const matchLibrary = library === "All" ? true : item.source === library;

    return matchSearch && matchLibrary;
  });

  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const paginatedComponents = filteredComponents.slice(startIndex, endIndex);

  useEffect(() => {
    setPage(1);
  }, [search, library, pageSize]);

  return (
    <main className="flex-1 w-full max-w-7xl mx-auto px-4 md:px-10 py-24 flex flex-col gap-8">
      <ComponentExplorerHero />

      <ComponentExplorerSearch value={search} onChange={setSearch} />

      <ComponentExplorerFilters
        library={library}
        onLibraryChange={setLibrary}
      />

      {filteredComponents.length === 0 ? (
        <EmptyState
          title="No components found"
          description="Try adjusting your search or filters."
        />
      ) : (
        <>
          <ComponentExplorerGrid tools={paginatedComponents} />

          <D2YPagination
            totalItems={filteredComponents.length}
            pageSize={pageSize}
            currentPage={page}
            onPageChange={setPage}
            onPageSizeChange={setPageSize}
          />
        </>
      )}
    </main>
  );
}
