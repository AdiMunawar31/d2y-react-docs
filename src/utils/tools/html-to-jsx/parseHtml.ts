import * as parse5 from "parse5";

export function parseHtml(html: string) {
  return parse5.parseFragment(html, {
    sourceCodeLocationInfo: true,
  });
}
