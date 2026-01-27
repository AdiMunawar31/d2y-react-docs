"use client";

import { useTimestampConverter } from "@/hooks/tools/useTimestampConverter";
import TimestampHeroSection from "@/components/features/tools/timestamp-converter/TimestampHeroSection";
import DateToTimestampPanel from "@/components/features/tools/timestamp-converter/DateToTimestampPanel";
import TimestampToDatePanel from "@/components/features/tools/timestamp-converter/TimestampToDatePanel";
import MilestonesPanel from "@/components/features/tools/timestamp-converter/MilestonesPanel";
import CodeSnippetsPanel from "@/components/features/tools/timestamp-converter/CodeSnippetsPanel";

export default function TimestampConverterPage() {
  const {
    currentTimestamp,
    dateInput,
    timestampInput,
    resultTimestamp,
    milestones,
    codeSnippets,
    utcOffset,
    updateDateInput,
    updateTimestampInput,
    copyToClipboard,
    getHumanReadableDate,
    getTimezone,
    getRelativeTimeForInput,
  } = useTimestampConverter();

  return (
    <main className="relative z-10 grow pt-8 pb-20 px-6 max-w-7xl mx-auto w-full bg-glass-bg rounded-lg min-h-screen">
      <TimestampHeroSection
        currentTimestamp={currentTimestamp}
        utcOffset={utcOffset}
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <DateToTimestampPanel
          dateInput={dateInput}
          resultTimestamp={resultTimestamp}
          onDateChange={updateDateInput}
          onCopy={copyToClipboard}
        />

        <TimestampToDatePanel
          timestampInput={timestampInput}
          humanReadable={getHumanReadableDate()}
          timezone={getTimezone()}
          relativeTime={getRelativeTimeForInput()}
          onTimestampChange={updateTimestampInput}
          onCopy={copyToClipboard}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <MilestonesPanel milestones={milestones} />
        <CodeSnippetsPanel snippets={codeSnippets} onCopy={copyToClipboard} />
      </div>
    </main>
  );
}
