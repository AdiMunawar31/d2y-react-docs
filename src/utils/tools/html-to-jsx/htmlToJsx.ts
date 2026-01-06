import type {
  HtmlToJsxResult,
  ToolbarOptions,
} from "@/lib/interfaces/html-to-jsx";
import { parseHtml } from "./parseHtml";
import { transformNode } from "./transformNode";
import { validateAst } from "./validateAst";
import { prettyPrintJsx } from "./prettyPrintJsx";

export function htmlToJsx(
  html: string,
  options: ToolbarOptions
): HtmlToJsxResult {
  if (!html.trim()) return { jsx: "", errors: [] };

  const ast = parseHtml(html);
  const errors = validateAst(ast);

  let jsx = ast.childNodes.map(transformNode).join("\n");

  if (options.pretty) {
    jsx = prettyPrintJsx(jsx);
  }

  return { jsx, errors };
}
