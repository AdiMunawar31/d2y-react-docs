import { lazy, Suspense } from "react";
import type { RouteObject } from "react-router-dom";
import { LoadingState } from "@/components/feedback/LoadingState";
import { ROUTES } from "@/lib/constants/routes";

const HomePage = lazy(() => import("@/pages/HomePage"));

export const homeRoutes: RouteObject = {
  path: ROUTES.HOME,
  element: (
    <Suspense fallback={<LoadingState />}>
      <HomePage />
    </Suspense>
  ),
};
