"use client";

import JsonEditorPanel from "@/components/features/tools/json-formatter/JsonEditorPanel";
import JsonFormatterHeader from "@/components/features/tools/json-formatter/JsonFormatterHeader";
import JsonSamplesCard from "@/components/features/tools/json-formatter/JsonSamplesCard";
import JsonStatsCard from "@/components/features/tools/json-formatter/JsonStatsCard";
import JsonToolbar from "@/components/features/tools/json-formatter/JsonToolbar";
import JsonValidationCard from "@/components/features/tools/json-formatter/JsonValidationCard";
import { useJsonFormatter } from "@/hooks/tools/useJsonFormatter";

export default function JsonFormatterPage() {
  const {
    input,
    output,
    validation,
    stats,
    indent,
    liveUpdate,
    setInput,
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
  } = useJsonFormatter();

  return (
    <main className="flex-1 w-full max-w-360 mx-auto px-4 md:px-6 py-8 flex flex-col gap-8 mt-12">
      <JsonFormatterHeader />

      <div className="flex flex-col gap-6">
        <JsonToolbar
          onFormat={handleFormat}
          onMinify={handleMinify}
          onEscape={handleEscape}
          onSortKeys={handleSortKeys}
          onClear={handleClear}
          liveUpdate={liveUpdate}
          onToggleLiveUpdate={handleToggleLiveUpdate}
          indent={indent}
          onChangeIndent={handleChangeIndent}
          isValid={validation.isValid}
        />

        <JsonEditorPanel
          input={input}
          output={output}
          onInputChange={setInput}
          onCopyInput={handleCopyInput}
          onCopyOutput={handleCopyOutput}
          onUploadFile={handleUploadFile}
          onDownload={handleDownload}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <JsonValidationCard validation={validation} />
          <JsonStatsCard stats={stats} />
          <JsonSamplesCard onLoadSample={handleLoadSample} />
        </div>
      </div>
    </main>
  );
}
