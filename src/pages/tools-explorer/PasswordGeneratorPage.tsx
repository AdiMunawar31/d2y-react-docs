"use client";

import { usePasswordGenerator } from "@/hooks/tools/usePasswordGenerator";
import PasswordHistorySidebar from "@/components/features/tools/password-generator/PasswordHistorySidebar";
import PasswordOutputPanel from "@/components/features/tools/password-generator/PasswordOutputPanel";
import PasswordConfigPanel from "@/components/features/tools/password-generator/PasswordConfigPanel";
import PasswordAdvancedPanel from "@/components/features/tools/password-generator/PasswordAdvancedPanel";
import PasswordBulkPanel from "@/components/features/tools/password-generator/PasswordBulkPanel";

export default function PasswordGeneratorPage() {
  const {
    config,
    password,
    strength,
    history,
    bulkPasswords,
    bulkQuantity,
    handleGenerate,
    updateLength,
    toggleUppercase,
    toggleLowercase,
    toggleNumbers,
    toggleSymbols,
    toggleExcludeSimilar,
    toggleBeginWithLetter,
    toggleNoRepeat,
    copyToClipboard,
    clearHistory,
    loadFromHistory,
    generateBulk,
    exportCSV,
    exportTXT,
    updateBulkQuantity,
  } = usePasswordGenerator();

  return (
    <main className="relative rounded-xl z-10 max-w-360 mx-auto px-8 py-12 flex gap-8 min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-slate-950">
      <PasswordHistorySidebar
        history={history}
        onClear={clearHistory}
        onCopy={copyToClipboard}
        onLoad={loadFromHistory}
      />

      <div className="flex-1 flex flex-col gap-8">
        <PasswordOutputPanel
          password={password}
          strength={strength}
          onGenerate={handleGenerate}
          onCopy={() => copyToClipboard()}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <PasswordConfigPanel
            config={config}
            onLengthChange={updateLength}
            onToggleUppercase={toggleUppercase}
            onToggleLowercase={toggleLowercase}
            onToggleNumbers={toggleNumbers}
            onToggleSymbols={toggleSymbols}
          />

          <PasswordAdvancedPanel
            config={config}
            onToggleExcludeSimilar={toggleExcludeSimilar}
            onToggleBeginWithLetter={toggleBeginWithLetter}
            onToggleNoRepeat={toggleNoRepeat}
          />
        </div>

        <PasswordBulkPanel
          bulkPasswords={bulkPasswords}
          bulkQuantity={bulkQuantity}
          onQuantityChange={updateBulkQuantity}
          onGenerate={generateBulk}
          onExportCSV={exportCSV}
          onExportTXT={exportTXT}
        />
      </div>
    </main>
  );
}
