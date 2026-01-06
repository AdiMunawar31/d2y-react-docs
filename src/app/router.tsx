import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "@/components/layout/MainLayout";
import { NotFoundState } from "@/components/feedback/NotFoundState";

import { homeRoutes } from "./home.routes";
import { toolsRoutes } from "./tools.routes";
import { componentRoutes } from "./components.routes";

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    errorElement: <NotFoundState />,
    children: [homeRoutes, toolsRoutes, componentRoutes],
  },
]);
