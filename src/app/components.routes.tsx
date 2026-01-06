import { lazy, Suspense } from "react";
import type { RouteObject } from "react-router-dom";
import { LoadingState } from "@/components/feedback/LoadingState";
import { ROUTES } from "@/lib/constants/routes";

const ComponentExplorerPage = lazy(
  () => import("@/pages/ComponentExplorerPage")
);

export const componentRoutes: RouteObject = {
  path: ROUTES.COMPONENTS,
  element: (
    <Suspense fallback={<LoadingState />}>
      <ComponentExplorerPage />
    </Suspense>
  ),
};
