export default function GuidelinesCard() {
  return (
    <div className="glass-panel rounded-xl p-6">
      <h3 className="text-white font-bold text-lg mb-4">Guidelines</h3>
      <div className="space-y-4">
        <div className="flex items-start gap-3">
          <div className="mt-0.5 size-5 rounded-full bg-white/10 flex items-center justify-center text-xs font-bold text-white">
            A
          </div>
          <div>
            <p className="text-white text-sm font-bold">AA Level (Normal)</p>
            <p className="text-[#92adc9] text-xs">
              Requires 4.5:1 ratio for normal text.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <div className="mt-0.5 size-5 rounded-full bg-white/10 flex items-center justify-center text-xs font-bold text-white">
            A
          </div>
          <div>
            <p className="text-white text-sm font-bold">AA Level (Large)</p>
            <p className="text-[#92adc9] text-xs">
              Requires 3:1 ratio for large text (18pt+ or 14pt bold).
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <div className="mt-0.5 size-6 rounded-full bg-white/10 flex items-center justify-center text-[10px] font-bold text-white">
            AAA
          </div>
          <div>
            <p className="text-white text-sm font-bold">AAA Level (Enhanced)</p>
            <p className="text-[#92adc9] text-xs">
              Higher standard: 7:1 for normal, 4.5:1 for large text.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
