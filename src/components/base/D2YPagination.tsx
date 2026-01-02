import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { GlassSection } from "../layout/GlassSection";

type D2YPaginationProps = {
  totalItems: number;
  pageSize?: number;
  currentPage?: number;
  siblingCount?: number;
  onPageChange?: (page: number) => void;
  className?: string;
};

export function D2YPagination({
  totalItems,
  pageSize = 8,
  currentPage = 1,
  siblingCount = 1,
  onPageChange,
  className,
}: D2YPaginationProps) {
  const totalPages = Math.ceil(totalItems / pageSize);

  if (totalPages <= 1) return null;

  const createPageRange = () => {
    const range: (number | "...")[] = [];

    const start = Math.max(2, currentPage - siblingCount);
    const end = Math.min(totalPages - 1, currentPage + siblingCount);

    range.push(1);

    if (start > 2) range.push("...");

    for (let i = start; i <= end; i++) {
      range.push(i);
    }

    if (end < totalPages - 1) range.push("...");

    range.push(totalPages);

    return range;
  };

  const pages = createPageRange();

  const goToPage = (page: number) => {
    if (page < 1 || page > totalPages) return;
    onPageChange?.(page);
  };

  return (
    <GlassSection
      className={cn(
        "flex flex-col sm:flex-row items-center justify-between border-t border-[#233648] pt-8 pb-12 gap-4 mt-16",
        className
      )}
    >
      <span className="text-text-secondary text-sm font-medium">
        Showing {(currentPage - 1) * pageSize + 1}–
        {Math.min(currentPage * pageSize, totalItems)} of {totalItems} items
      </span>

      <div className="flex items-center gap-2">
        {/* Prev */}
        <button
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 1}
          className="flex cursor-pointer items-center justify-center h-10 px-4 rounded-lg border border-[#233648] bg-[#1a2632] text-text-secondary hover:text-white hover:border-primary hover:bg-[#233648] transition-all disabled:opacity-50"
        >
          <ChevronLeft size={18} className="mr-1" />
          Prev
        </button>

        {/* Page Numbers */}
        <div className="flex items-center gap-1">
          {pages.map((page, index) =>
            page === "..." ? (
              <span key={index} className="text-text-secondary px-2">
                …
              </span>
            ) : (
              <button
                key={page}
                onClick={() => goToPage(page)}
                className={cn(
                  "size-10 flex cursor-pointer items-center justify-center rounded-lg font-medium transition-colors",
                  page === currentPage
                    ? "bg-primary text-white font-bold"
                    : "text-text-secondary hover:bg-[#233648]"
                )}
              >
                {page}
              </button>
            )
          )}
        </div>

        <button
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="flex cursor-pointer items-center justify-center h-10 px-4 rounded-lg border border-[#233648] bg-[#1a2632] text-white hover:border-primary hover:bg-[#233648] transition-all disabled:opacity-50"
        >
          Next
          <ChevronRight size={18} className="ml-1" />
        </button>
      </div>
    </GlassSection>
  );
}
