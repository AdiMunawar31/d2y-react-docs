interface FooterActionsProps {
  runConvert(): void;
  status: "idle" | "success" | "error";
}

export function FooterActions({ runConvert, status }: FooterActionsProps) {
  return (
    <div className="p-4 border-t border-white/5 bg-linear-to-b from-[#161f32]/80 to-[#0b1121]/90 backdrop-blur flex justify-between items-center">
      <div className="text-xs text-slate-500 font-medium">
        <span className="text-slate-400">Status:</span>{" "}
        {status === "success"
          ? "Conversion success"
          : status === "error"
          ? "Invalid HTML"
          : "Ready to convert"}
      </div>
    </div>
  );
}
