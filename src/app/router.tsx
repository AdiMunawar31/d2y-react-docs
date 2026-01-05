import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

import { MainLayout } from "@/components/layout/MainLayout";
import { ROUTES } from "@/lib/constants/routes";
import { NotFoundState } from "@/components/feedback/NotFoundState";
import { LoadingState } from "@/components/feedback/LoadingState";
import ComponentExplorerPage from "@/pages/ComponentExplorerPage";

const HomePage = lazy(() => import("@/pages/HomePage"));
const ToolsExplorerPage = lazy(() => import("@/pages/ToolsExplorerPage"));

const ColorPickerPage = lazy(
  () => import("@/pages/tools-explorer/ColorPickerPage")
);

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    errorElement: <NotFoundState />,
    children: [
      {
        path: ROUTES.HOME,
        element: (
          <Suspense fallback={<LoadingState />}>
            <HomePage />
          </Suspense>
        ),
      },
      {
        path: ROUTES.TOOLS,
        element: (
          <Suspense fallback={<LoadingState />}>
            <ToolsExplorerPage />
          </Suspense>
        ),
      },
      {
        path: ROUTES.COMPONENTS,
        element: (
          <Suspense fallback={<LoadingState />}>
            <ComponentExplorerPage />
          </Suspense>
        ),
      },
      // TOOLS -------------------------------------------
      {
        path: ROUTES.COLOR_PICKER,
        element: (
          <Suspense fallback={<LoadingState />}>
            <ColorPickerPage />
          </Suspense>
        ),
      },
    ],
  },
]);
