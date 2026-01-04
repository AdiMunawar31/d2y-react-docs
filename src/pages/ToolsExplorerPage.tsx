"use client";

import { useEffect, useMemo, useState } from "react";
import { TOOLS } from "@/data/tools-data";
import { ToolsHero } from "@/components/custom/tools/ToolsHero";
import { ToolsFilterBar } from "@/components/custom/tools/ToolsFilterBar";
import { ToolsGrid } from "@/components/custom/tools/ToolsGrid";
import { D2YPagination } from "@/components/base/D2YPagination";
import { EmptyState } from "@/components/feedback/EmptyState";

const DEFAULT_PAGE_SIZE = 8;

export default function ToolsExplorerPage() {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(DEFAULT_PAGE_SIZE);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredTools = useMemo(() => {
    return TOOLS.filter((tool) => {
      const matchSearch = tool.title
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchCategory = category === "All" || tool.category === category;

      return matchSearch && matchCategory;
    });
  }, [search, category]);

  const totalItems = filteredTools.length;
  const startIndex = (page - 1) * pageSize;
  const paginatedTools = filteredTools.slice(startIndex, startIndex + pageSize);

  useEffect(() => {
    setPage(1);
  }, [search, category, pageSize]);

  return (
    <div className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 flex flex-col gap-8">
      <ToolsHero search={search} onSearch={setSearch} />

      <ToolsFilterBar category={category} onCategoryChange={setCategory} />

      {paginatedTools.length === 0 ? (
        <EmptyState
          title="No tools found"
          description="Try changing your search or filter."
        />
      ) : (
        <>
          <ToolsGrid tools={paginatedTools} />

          <D2YPagination
            totalItems={totalItems}
            pageSize={pageSize}
            currentPage={page}
            onPageChange={setPage}
            onPageSizeChange={setPageSize}
          />
        </>
      )}
    </div>
  );
}
