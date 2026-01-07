import { Verified } from "lucide-react";

export default function WcagHeader() {
  return (
    <div className="w-full max-w-300 mb-8">
      <div className="flex flex-wrap justify-between items-end gap-4 pb-4 border-b border-white/10">
        <div className="flex min-w-72 flex-col gap-2">
          <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em]">
            WCAG Contrast Checker
          </h1>
          <p className="text-[#92adc9] text-base font-normal leading-normal">
            Ensure your design is accessible with real-time compliance checks.
          </p>
        </div>
        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
          <span className="material-symbols-outlined text-lg">
            <Verified />
          </span>
          <span>WCAG 2.1 Compliant</span>
        </div>
      </div>
    </div>
  );
}
