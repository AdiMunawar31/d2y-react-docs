import { useCallback, useState } from "react";
import { htmlToJsx } from "@/utils/tools/html-to-jsx/htmlToJsx";
import type {
  HtmlToJsxResult,
  ToolbarOptions,
} from "@/lib/interfaces/html-to-jsx";

const DEFAULT_OPTIONS: ToolbarOptions = {
  pretty: true,
};

export function useHtmlToJsx() {
  const [html, setHtml] = useState("");
  const [options, setOptions] = useState<ToolbarOptions>(DEFAULT_OPTIONS);

  const [result, setResult] = useState<HtmlToJsxResult>({
    jsx: "",
    errors: [],
  });

  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const runConvert = useCallback(() => {
    try {
      const res = htmlToJsx(html, options);
      setResult(res);
      setStatus(res.errors.length ? "error" : "success");
    } catch {
      setStatus("error");
    }
  }, [html, options]);

  const clear = () => {
    setHtml("");
    setResult({ jsx: "", errors: [] });
    setStatus("idle");
  };

  return {
    html,
    jsx: result.jsx,
    errors: result.errors,
    status,
    options,
    setOptions,
    setHtml,
    runConvert,
    clear,
  };
}
