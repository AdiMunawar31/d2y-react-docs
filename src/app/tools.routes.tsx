import { lazy, Suspense, type JSX } from "react";
import type { RouteObject } from "react-router-dom";
import { LoadingState } from "@/components/feedback/LoadingState";
import { ROUTES } from "@/lib/constants/routes";

const ToolsExplorerPage = lazy(() => import("@/pages/ToolsExplorerPage"));

const ColorPickerPage = lazy(
  () => import("@/pages/tools-explorer/ColorPickerPage")
);
const HtmlToJsxPage = lazy(
  () => import("@/pages/tools-explorer/HtmlToJsxPage")
);
const WcagContrastPage = lazy(
  () => import("@/pages/tools-explorer/WcagContrastPage")
);
const JsonFormatterPage = lazy(
  () => import("@/pages/tools-explorer/JsonFormatterPage")
);
const CalculatorPage = lazy(
  () => import("@/pages/tools-explorer/CalculatorPage")
);

const withSuspense = (element: JSX.Element) => (
  <Suspense fallback={<LoadingState />}>{element}</Suspense>
);

export const toolsRoutes: RouteObject = {
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
    {
      path: ROUTES.CONTRAST_CHECKER,
      element: withSuspense(<WcagContrastPage />),
    },
    {
      path: ROUTES.JSON_FORMATTER,
      element: withSuspense(<JsonFormatterPage />),
    },
    {
      path: ROUTES.CALCULATOR,
      element: withSuspense(<CalculatorPage />),
    },
  ],
};
