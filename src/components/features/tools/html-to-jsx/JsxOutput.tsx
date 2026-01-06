import { LineNumbersCode } from "@/components/custom/LineNumbersCode";
import { useSyncScroll } from "@/hooks/tools/useSyncScroll";
import { highlightJsx } from "@/utils/highlightJsx";

export function JsxOutput({ value }: { value: string }) {
  const { preRef } = useSyncScroll();

  return (
    <div className="relative h-full text-[13px] leading-[1.6] font-mono overflow-hidden">
      <LineNumbersCode value={value || " "} />

      <pre
        ref={preRef}
        className="absolute inset-0 pl-14 pr-4 py-4 text-blue-300 whitespace-pre-wrap wrap-break-word overflow-auto"
        dangerouslySetInnerHTML={{
          __html: highlightJsx(
            value.replace(/</g, "&lt;").replace(/>/g, "&gt;")
          ),
        }}
      />
    </div>
  );
}
