"use client";

import { ChevronRight } from "lucide-react";
import { Fragment, useMemo } from "react";
import { Link, useLocation } from "react-router-dom";

interface BreadcrumbItem {
  label: string;
  href?: string;
  active?: boolean;
}

function formatLabel(segment: string) {
  return segment.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());
}

export function D2YBreadcrumb() {
  const { pathname } = useLocation();

  const items = useMemo<BreadcrumbItem[]>(() => {
    const segments = pathname.split("/").filter(Boolean);

    return segments.map((seg, idx) => {
      const isLast = idx === segments.length - 1;

      return {
        label: formatLabel(seg),
        href: isLast ? undefined : "/" + segments.slice(0, idx + 1).join("/"),
        active: isLast,
      };
    });
  }, [pathname]);

  if (!items.length) return null;

  return (
    <nav
      aria-label="Breadcrumb"
      className="
        inline-flex items-center gap-4
        rounded-2xl
        border border-white/10
        bg-white/5 backdrop-blur-md
        px-6 py-2
        text-sm
        shadow-lg
      "
    >
      {/* HOME */}
      <Link
        to="/"
        className="
          flex items-center gap-1
          text-muted-foreground
          hover:text-primary
          transition
        "
      >
        <span>Home</span>
      </Link>

      {items.map((item, i) => (
        <Fragment key={i}>
          <ChevronRight className="size-4 opacity-50" />

          {item.href ? (
            <Link
              to={item.href}
              className="
                text-muted-foreground
                hover:text-primary
                transition-colors
              "
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-primary font-semibold tracking-wide">
              {item.label}
            </span>
          )}
        </Fragment>
      ))}
    </nav>
  );
}
