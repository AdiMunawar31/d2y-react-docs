"use client";

import { useState } from "react";
import { D2YPagination } from "@/components/base/D2YPagination";
import { TOOLS } from "@/data/tools-data";

export function ToolsPagination() {
  const [page, setPage] = useState(1);

  return (
    <D2YPagination
      totalItems={TOOLS.length}
      pageSize={4}
      currentPage={page}
      onPageChange={setPage}
    />
  );
}
