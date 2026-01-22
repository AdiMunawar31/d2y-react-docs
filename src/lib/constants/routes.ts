export const ROUTES = {
  HOME: "/",
  TOOLS: "/explore-tools",
  COMPONENTS: "/components",
  PRICING: "/pricing",

  // TOOLS -------------------------------------
  COLOR_PICKER: "color-picker",
  HTML_TO_JSX: "html-to-jsx",
  JSON_FORMATTER: "json-formatter",
  CONTRAST_CHECKER: "contrast-checker",
  FLEXBOX_GENERATOR: "flexbox-generator",
  QR_GENERATOR: "qr-generator",
  UNIX_TIMESTAMP: "unix-timestamp",
  REGEX_TESTER: "regex-tester",
  IMAGE_COMPRESSOR: "image-compressor",
  MARKDOWN_PREVIEW: "markdown-preview",
  CODE_FORMATTER: "code-formatter",
  CALCULATOR: "calculator",
  TEXT_COUNTER: "text-counter",
  IMAGE_CROPPER: "image-cropper",
  JSON_DIFF: "json-diff",
  URL_ENCODER: "url-encoder",
  CSS_GENERATOR: "css-generator",
  UUID_GENERATOR: "uuid-generator",
  BASE64_TOOL: "base64-tool",
  JWT_DECODER: "jwt-decoder",
  CRON_PARSER: "cron-parser",
  SPIN_WHEEL: "spin-wheel",
  PASSWORD_GENERATOR: "password-generator",
} as const;

export type AppRoute = (typeof ROUTES)[keyof typeof ROUTES];
