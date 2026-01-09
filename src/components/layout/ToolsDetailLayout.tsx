import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { D2YBreadcrumb } from "@/components/base/D2YBreadcrumb";

export default function ToolDetailRouteLayout() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  return (
    <div className="px-6 md:px-8 py-6 mt-12 flex flex-col gap-6">
      <div className="ml-6 w-fit">
        <D2YBreadcrumb />
      </div>

      <Outlet />
    </div>
  );
}
