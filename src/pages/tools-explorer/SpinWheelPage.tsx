"use client";

import { useSpinWheel } from "@/hooks/tools/useSpinWheel";
import SpinWheelHeader from "@/components/features/tools/spin-wheel/SpinWheelHeader";
import EntriesPanel from "@/components/features/tools/spin-wheel/EntriesPanel";
import SpinWheelCanvas from "@/components/features/tools/spin-wheel/SpinWheelCanvas";
import SpinControls from "@/components/features/tools/spin-wheel/SpinControls";
import ResultsPanel from "@/components/features/tools/spin-wheel/ResultsPanel";
import WinnerModal from "@/components/features/tools/spin-wheel/SpinWinnerModal";

export default function SpinWheelPage() {
  const {
    entries,
    setEntries,
    entryList,
    segments,
    results,
    isSpinning,
    rotation,
    soundEnabled,
    removeWinner,
    latestWinner,
    spin,
    reset,
    shuffle,
    sort,
    clearHistory,
    deleteResult,
    toggleSound,
    toggleRemoveWinner,

    showWinnerModal,
    setShowWinnerModal,
  } = useSpinWheel();

  return (
    <main className="grow flex flex-col items-center justify-center w-full max-w-360 mx-auto px-4 py-8 lg:px-8">
      <SpinWheelHeader />

      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6 h-full min-h-150">
        <div className="lg:col-span-3 flex flex-col h-full order-2 lg:order-1">
          <EntriesPanel
            entries={entries}
            entryCount={entryList.length}
            onEntriesChange={setEntries}
            onShuffle={sort}
            onSort={shuffle}
          />
        </div>

        <div className="lg:col-span-6 flex flex-col gap-8 order-1 lg:order-2">
          <SpinWheelCanvas
            segments={segments}
            rotation={rotation}
            isSpinning={isSpinning}
          />
          <SpinControls
            isSpinning={isSpinning}
            soundEnabled={soundEnabled}
            removeWinner={removeWinner}
            onSpin={spin}
            onReset={reset}
            onShuffle={shuffle}
            onToggleSound={toggleSound}
            onToggleRemoveWinner={toggleRemoveWinner}
          />
        </div>

        <div className="lg:col-span-3 flex flex-col h-full order-3">
          <ResultsPanel
            latestWinner={latestWinner}
            results={results}
            onClearHistory={clearHistory}
            onDeleteResult={deleteResult}
          />
        </div>
      </div>

      <div className="fixed bottom-0 left-0 w-full pointer-events-none z-[-1]">
        <div className="absolute bottom-0 left-0 w-125 h-125 bg-primary/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/4" />
        <div className="absolute bottom-0 right-0 w-100 h-100 bg-purple-500/10 rounded-full blur-[100px] translate-y-1/2 translate-x-1/4" />
      </div>

      <WinnerModal
        open={showWinnerModal}
        winnerName={latestWinner?.name ?? ""}
        onClose={() => setShowWinnerModal(false)}
      />
    </main>
  );
}
