interface D2YFormFieldProps {
  label?: string;
  error?: string;
  hint?: string;
  children: React.ReactNode;
}

export function D2YFormField({
  label,
  error,
  hint,
  children,
}: D2YFormFieldProps) {
  return (
    <div className="flex flex-col gap-1.5">
      {label && <label className="text-sm text-white/70">{label}</label>}
      {children}
      {hint && !error && <span className="text-xs text-white/50">{hint}</span>}
      {error && <span className="text-xs text-red-400">{error}</span>}
    </div>
  );
}
