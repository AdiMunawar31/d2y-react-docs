export const ROUTES = {
  HOME: "/",
  TOOLS: "/explore-tools",
  COMPONENTS: "/components",
  PRICING: "/pricing",

  // TOOLS -------------------------------------
  COLOR_PICKER: "color-picker",
  HTML_TO_JSX: "html-to-jsx",
} as const;

export type AppRoute = (typeof ROUTES)[keyof typeof ROUTES];
