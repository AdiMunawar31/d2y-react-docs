export const ROUTES = {
  HOME: "/",
  TOOLS: "/explore-tools",
  COMPONENTS: "/components",
  PRICING: "/pricing",
} as const;

export type AppRoute = (typeof ROUTES)[keyof typeof ROUTES];
