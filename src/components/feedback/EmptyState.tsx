import { Inbox, ArrowLeft, XCircle } from "lucide-react";
import { motion } from "framer-motion";

interface EmptyStateProps {
  title?: string;
  description?: string;
  onClear?: () => void;
  onBack?: () => void;
}

export const EmptyState = ({
  title = "No data found",
  description = "We couldn’t find any results matching your filters.",
  onClear,
  onBack,
}: EmptyStateProps) => {
  return (
    <div className="flex flex-1 items-center justify-center py-20 px-4 mt-16">
      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="relative w-full max-w-xl rounded-3xl border border-glass-border bg-glass-surface backdrop-blur-xl shadow-2xl px-10 py-14 text-center space-y-6"
      >
        {/* Ambient glow */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-3xl">
          <div className="absolute -top-20 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-primary/20 blur-3xl" />
        </div>

        {/* Icon */}
        <div className="relative mx-auto flex size-24 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-md shadow-inner">
          <Inbox className="size-10 text-primary/80" />
        </div>

        {/* Text */}
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-white">{title}</h2>
          <p className="text-slate-400 leading-relaxed">{description}</p>
        </div>

        {/* Actions */}
        {(onBack || onClear) && (
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            {onBack && (
              <button
                onClick={onBack}
                className="inline-flex h-11 items-center gap-2 rounded-full border border-glass-border bg-white/5 px-6 text-sm font-medium text-white transition hover:bg-white/10"
              >
                <ArrowLeft size={14} />
                Go Back
              </button>
            )}

            {onClear && (
              <button
                onClick={onClear}
                className="inline-flex h-11 items-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-[#111a22] transition hover:scale-105 glow-button"
              >
                <XCircle size={14} />
                Clear Filters
              </button>
            )}
          </div>
        )}
      </motion.div>
    </div>
  );
};
