interface LivePreviewProps {
  foreground: string;
  background: string;
}

export default function LivePreview({
  foreground,
  background,
}: LivePreviewProps) {
  const fgColor = `#${foreground}`;
  const bgColor = `#${background}`;

  return (
    <div className="glass-panel p-1 rounded-xl">
      <div
        className="rounded-lg overflow-hidden transition-colors duration-300 min-h-80 flex flex-col items-center justify-center p-8 md:p-12 text-center"
        style={{ backgroundColor: bgColor, color: fgColor }}
      >
        <p className="text-lg opacity-70 mb-2 font-medium">Text Preview</p>
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight leading-tight">
          D2Y React Docs
        </h2>
        <p className="text-lg md:text-xl max-w-xl leading-relaxed">
          Experience the clarity of modern design. Ensure your color
          combinations provide enough contrast for readability across all
          devices.
        </p>
        <div className="mt-10 flex flex-wrap gap-4 justify-center">
          <button
            className="px-6 py-3 rounded-lg font-bold text-sm border-2 transition-transform active:scale-95 hover:opacity-80"
            style={{ borderColor: fgColor }}
          >
            Outlined Button
          </button>
          <button
            className="px-6 py-3 rounded-lg font-bold text-sm shadow-lg transition-transform active:scale-95 hover:opacity-90"
            style={{ backgroundColor: fgColor, color: bgColor }}
          >
            Solid Button
          </button>
        </div>
      </div>
    </div>
  );
}
