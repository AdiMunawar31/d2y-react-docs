interface AstError {
  message: string;
  line: number;
  column: number;
}

export function validateAst(ast: any): AstError[] {
  const errors: AstError[] = [];

  function walk(node: any) {
    if (node.nodeName === "#text") return;

    if (node.tagName === "img" && node.childNodes?.length) {
      errors.push({
        message: "<img> should be self-closing",
        line: node.sourceCodeLocation.startLine,
        column: node.sourceCodeLocation.startCol,
      });
    }

    node.childNodes?.forEach(walk);
  }

  ast.childNodes.forEach(walk);
  return errors;
}
