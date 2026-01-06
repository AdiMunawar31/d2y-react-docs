import { lazy, Suspense, type JSX } from "react";
import { createBrowserRouter } from "react-router-dom";

import { MainLayout } from "@/components/layout/MainLayout";
import { ROUTES } from "@/lib/constants/routes";
import { NotFoundState } from "@/components/feedback/NotFoundState";
import { LoadingState } from "@/components/feedback/LoadingState";

const HomePage = lazy(() => import("@/pages/HomePage"));
const ToolsExplorerPage = lazy(() => import("@/pages/ToolsExplorerPage"));
const ComponentExplorerPage = lazy(
  () => import("@/pages/ComponentExplorerPage")
);

// TOOLS
const ColorPickerPage = lazy(
  () => import("@/pages/tools-explorer/ColorPickerPage")
);
const HtmlToJsxPage = lazy(
  () => import("@/pages/tools-explorer/HtmlToJsxPage")
);

const withSuspense = (element: JSX.Element) => (
  <Suspense fallback={<LoadingState />}>{element}</Suspense>
);

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    errorElement: <NotFoundState />,
    children: [
      {
        path: ROUTES.HOME,
        element: withSuspense(<HomePage />),
      },
      {
        path: ROUTES.COMPONENTS,
        element: withSuspense(<ComponentExplorerPage />),
      },

      // TOOLS PARENT
      {
        path: ROUTES.TOOLS,
        children: [
          {
            index: true,
            element: withSuspense(<ToolsExplorerPage />),
          },
          {
            path: ROUTES.COLOR_PICKER,
            element: withSuspense(<ColorPickerPage />),
          },
          {
            path: ROUTES.HTML_TO_JSX,
            element: withSuspense(<HtmlToJsxPage />),
          },
        ],
      },
    ],
  },
]);
