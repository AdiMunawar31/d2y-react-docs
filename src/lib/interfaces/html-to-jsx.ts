export interface AstError {
  message: string;
  line: number;
  column: number;
}

export interface HtmlToJsxResult {
  jsx: string;
  errors: AstError[];
}

export interface ToolbarOptions {
  pretty: boolean;
}
