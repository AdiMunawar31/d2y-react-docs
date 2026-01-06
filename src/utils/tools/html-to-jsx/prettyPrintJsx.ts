export function prettyPrintJsx(code: string) {
  return code.replace(/></g, ">\n<").replace(/\n{2,}/g, "\n");
}
