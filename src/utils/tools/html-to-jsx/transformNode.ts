const VOID_TAGS = new Set(["img", "br", "input"]);

export function transformNode(node: any): string {
  if (node.nodeName === "#text") return node.value;

  const tag = node.tagName;
  const attrs = node.attrs
    ?.map((a: any) =>
      a.name === "class" ? `className="${a.value}"` : `${a.name}="${a.value}"`
    )
    .join(" ");

  const open = `<${tag}${attrs ? " " + attrs : ""}`;
  if (VOID_TAGS.has(tag)) return `${open} />`;

  const children = node.childNodes?.map(transformNode).join("") ?? "";
  return `${open}>${children}</${tag}>`;
}
