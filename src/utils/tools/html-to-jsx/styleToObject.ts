export function styleToObject(style: string): string {
  return style
    .split(";")
    .filter(Boolean)
    .map((rule) => {
      const [key, value] = rule.split(":");
      const camelKey = key
        .trim()
        .replace(/-([a-z])/g, (_, c) => c.toUpperCase());

      return `${camelKey}: "${value.trim()}"`;
    })
    .join(", ");
}
