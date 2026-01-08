"use client";

import { useCalculator } from "@/hooks/tools/useCalculator";
import CalculatorHeader from "@/components/features/tools/calculator/CalculatorHeader";
import CalculatorDisplay from "@/components/features/tools/calculator/CalculatorDisplay";
import CalculatorControls from "@/components/features/tools/calculator/CalculatorControls";
import CalculatorKeypad from "@/components/features/tools/calculator/CalculatorKeypad";
import CalculatorHistory from "@/components/features/tools/calculator/CalculatorHistory";

export default function CalculatorPage() {
  const {
    display,
    expression,
    previousExpression,
    history,
    angleUnit,
    mode,
    isSecondFunction,
    setMode,
    handleNumber,
    handleOperator,
    handleFunction,
    calculate,
    clear,
    backspace,
    toggleAngleUnit,
    toggleSecondFunction,
    memoryAdd,
    memorySubtract,
    memoryRecall,
    copyToClipboard,
    pasteFromClipboard,
    loadFromHistory,
    clearHistory,
    deleteHistoryItem,
    appendToExpression,
  } = useCalculator();

  return (
    <main className="grow flex items-center justify-center p-4 md:p-6 lg:p-8 mt-16">
      <div className="flex flex-col xl:flex-row gap-6 max-w-350 w-full">
        <div className="flex flex-col flex-1 glass-panel rounded-2xl shadow-2xl relative border border-white/10">
          <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-[-10%] left-[-10%] w-96 h-96 bg-secondary/10 rounded-full blur-[100px] pointer-events-none" />

          <CalculatorHeader
            mode={mode}
            angleUnit={angleUnit}
            onModeChange={setMode}
          />

          <CalculatorDisplay
            display={display}
            expression={expression}
            previousExpression={previousExpression}
          />

          <CalculatorControls
            angleUnit={angleUnit}
            onToggleAngleUnit={toggleAngleUnit}
            onCopy={copyToClipboard}
            onPaste={pasteFromClipboard}
            onClearHistory={clearHistory}
          />

          <div className="flex-1 overflow-auto">
            <CalculatorKeypad
              mode={mode}
              isSecondFunction={isSecondFunction}
              onNumber={handleNumber}
              onOperator={handleOperator}
              onFunction={handleFunction}
              onCalculate={calculate}
              onClear={clear}
              onBackspace={backspace}
              onToggleSecondFunction={toggleSecondFunction}
              onMemoryAdd={memoryAdd}
              onMemorySubtract={memorySubtract}
              onMemoryRecall={memoryRecall}
              onAppend={appendToExpression}
            />
          </div>
        </div>

        <CalculatorHistory
          history={history}
          onLoadHistory={loadFromHistory}
          onDeleteItem={deleteHistoryItem}
        />
      </div>
    </main>
  );
}
