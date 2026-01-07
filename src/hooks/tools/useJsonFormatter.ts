import { useState, useCallback, useMemo, useEffect } from "react";
import {
  validateJson,
  formatJson,
  minifyJson,
  escapeJson,
  sortJsonKeys,
  getJsonStats,
  type JsonValidationResult,
  type JsonStats,
} from "@/utils/tools/json-formatter/jsonFormatterUtils";

export interface JsonFormatterState {
  input: string;
  output: string;
  validation: JsonValidationResult;
  stats: JsonStats | null;
  indent: number;
  liveUpdate: boolean;
}

export function useJsonFormatter() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [indent, setIndent] = useState(2);
  const [liveUpdate, setLiveUpdate] = useState(true);

  const validation = useMemo(() => validateJson(input), [input]);

  const stats = useMemo(() => {
    if (!validation.isValid) return null;
    return getJsonStats(input);
  }, [input, validation.isValid]);

  useEffect(() => {
    if (liveUpdate && validation.isValid) {
      const formatted = formatJson(input, indent);
      if (formatted) {
        setOutput(formatted);
      }
    }
  }, [input, indent, liveUpdate, validation.isValid]);

  const handleFormat = useCallback(() => {
    const formatted = formatJson(input, indent);
    if (formatted) {
      setOutput(formatted);
    }
  }, [input, indent]);

  const handleMinify = useCallback(() => {
    const minified = minifyJson(input);
    if (minified) {
      setOutput(minified);
    }
  }, [input]);

  const handleEscape = useCallback(() => {
    const escaped = escapeJson(input);
    if (escaped) {
      setOutput(escaped);
    }
  }, [input]);

  const handleSortKeys = useCallback(() => {
    const sorted = sortJsonKeys(input);
    if (sorted) {
      setOutput(sorted);
    }
  }, [input]);

  const handleClear = useCallback(() => {
    setInput("");
    setOutput("");
  }, []);

  const handleCopyInput = useCallback(() => {
    navigator.clipboard.writeText(input);
  }, [input]);

  const handleCopyOutput = useCallback(() => {
    navigator.clipboard.writeText(output);
  }, [output]);

  const handleLoadSample = useCallback((sample: string) => {
    setInput(sample);
  }, []);

  const handleUploadFile = useCallback((file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const content = e.target?.result as string;
      setInput(content);
    };
    reader.readAsText(file);
  }, []);

  const handleDownload = useCallback(() => {
    const blob = new Blob([output], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "formatted.json";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }, [output]);

  const handleToggleLiveUpdate = useCallback(() => {
    setLiveUpdate((prev) => !prev);
  }, []);

  const handleChangeIndent = useCallback((newIndent: number) => {
    setIndent(newIndent);
  }, []);

  return {
    input,
    output,
    validation,
    stats,
    indent,
    liveUpdate,
    setInput,
    setOutput,
    handleFormat,
    handleMinify,
    handleEscape,
    handleSortKeys,
    handleClear,
    handleCopyInput,
    handleCopyOutput,
    handleLoadSample,
    handleUploadFile,
    handleDownload,
    handleToggleLiveUpdate,
    handleChangeIndent,
  };
}
