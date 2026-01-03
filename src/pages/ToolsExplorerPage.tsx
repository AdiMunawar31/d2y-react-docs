"use client";

import { D2YPagination } from "@/components/base/D2YPagination";
import { ToolsFilterBar } from "@/components/custom/tools/ToolsFilterBar";
import { ToolsGrid } from "@/components/custom/tools/ToolsGrid";
import { ToolsHero } from "@/components/custom/tools/ToolsHero";
import { TOOLS } from "@/data/tools-data";
import { useState } from "react";

const PAGE_SIZE = 8;

export default function ToolsExplorerPage() {
  const [page, setPage] = useState(1);

  const startIndex = (page - 1) * PAGE_SIZE;
  const endIndex = startIndex + PAGE_SIZE;

  const paginatedTools = TOOLS.slice(startIndex, endIndex);

  return (
    <div className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 flex flex-col gap-8">
      <ToolsHero />
      <ToolsFilterBar />

      <ToolsGrid tools={paginatedTools} />

      <D2YPagination
        totalItems={TOOLS.length}
        pageSize={PAGE_SIZE}
        currentPage={page}
        onPageChange={setPage}
      />
    </div>
  );
}
