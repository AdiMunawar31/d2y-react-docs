import { useEffect, useRef } from "react";

export function useSyncScroll() {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const preRef = useRef<HTMLPreElement>(null);

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

  return { textareaRef, preRef };
}
