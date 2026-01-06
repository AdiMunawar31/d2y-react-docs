import { LineNumbersCode } from "@/components/custom/LineNumbersCode";
import { highlightHtml } from "@/utils/highlightHtml";
import { useRef, useEffect } from "react";

interface Props {
  value: string;
  onChange(value: string): void;
}

export function HtmlInput({ value, onChange }: Props) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const preRef = useRef<HTMLPreElement>(null);

  // sync scroll
  useEffect(() => {
    const ta = textareaRef.current;
    const pre = preRef.current;
    if (!ta || !pre) return;

    const sync = () => {
      pre.scrollTop = ta.scrollTop;
      pre.scrollLeft = ta.scrollLeft;
    };

    ta.addEventListener("scroll", sync);
    return () => ta.removeEventListener("scroll", sync);
  }, []);

  return (
    <div className="relative h-full w-full bg-slate-900 rounded-md overflow-hidden text-[12px] leading-5 font-mono">
      <LineNumbersCode value={value || " "} />

      <pre
        ref={preRef}
        aria-hidden
        className="
          absolute inset-0
          pl-12 pr-3 py-2
          whitespace-pre-wrap
          wrap-break-word
          text-slate-200
          pointer-events-none
          overflow-hidden
        "
        dangerouslySetInnerHTML={{ __html: highlightHtml(value) }}
      />

      <textarea
        ref={textareaRef}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        spellCheck={false}
        className="
          absolute inset-0
          pl-12 pr-3 py-2
          bg-transparent
          text-transparent caret-white
          resize-none
          focus:outline-none
          overflow-auto
          selection:bg-blue-500/30
        "
      />
    </div>
  );
}
