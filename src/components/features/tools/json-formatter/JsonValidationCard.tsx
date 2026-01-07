import { type JsonValidationResult } from "@/utils/tools/json-formatter/jsonFormatterUtils";
import { CheckCircle2, CircleAlert, CircleX, Verified } from "lucide-react";

interface JsonValidationCardProps {
  validation: JsonValidationResult;
}

export default function JsonValidationCard({
  validation,
}: JsonValidationCardProps) {
  return (
    <div className="glass-panel rounded-xl p-6 flex flex-col h-full">
      <div className="flex items-center gap-3 mb-4">
        <div
          className={`p-2 rounded-lg ${
            validation.isValid
              ? "bg-green-500/10 text-green-400"
              : "bg-red-500/10 text-red-400"
          }`}
        >
          <span className="material-symbols-outlined text-[24px]">
            {validation.isValid ? <CheckCircle2 /> : <CircleX />}
          </span>
        </div>
        <h3 className="text-white font-bold text-lg">Validation</h3>
      </div>

      {validation.isValid ? (
        <div className="flex flex-col gap-3">
          <div className="flex items-start gap-3 p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
            <span className="material-symbols-outlined text-green-400 text-[20px] mt-0.5 shrink-0">
              <Verified />
            </span>
            <div className="flex flex-col gap-1">
              <strong className="text-green-400 text-sm font-bold">
                Valid JSON
              </strong>
              <p className="text-sm text-slate-300 leading-snug">
                Your JSON is properly formatted and ready to use.
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          <div className="flex items-start gap-3 p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
            <span className="material-symbols-outlined text-red-400 text-[20px] mt-0.5 shrink-0">
              <CircleAlert />
            </span>
            <div className="flex flex-col gap-2">
              <strong className="text-red-400 text-sm font-bold">
                Invalid JSON
              </strong>
              {validation.error && (
                <div className="flex flex-col gap-1">
                  <p className="text-sm text-slate-300 leading-snug font-mono">
                    {validation.error}
                  </p>
                  {validation.errorLine && validation.errorColumn && (
                    <p className="text-xs text-slate-400">
                      Line {validation.errorLine}, Column{" "}
                      {validation.errorColumn}
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>

          <div className="p-4 bg-slate-800/30 border border-slate-700/30 rounded-lg">
            <p className="text-xs text-slate-400 leading-relaxed">
              <strong className="text-slate-300">Common issues:</strong>
              <br />• Missing or extra commas
              <br />• Unquoted keys or values
              <br />• Trailing commas in arrays/objects
              <br />• Single quotes instead of double quotes
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
