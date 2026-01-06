const HtmlToJsxHeader = () => {
  return (
    <div>
      <div className="w-full max-w-7xl mb-10 text-center flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wide mb-6 shadow-[0_0_10px_rgba(59,130,246,0.2)]">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></span>
          Version 2.0 Live
        </div>
        <h2 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-linear-to-r from-white via-slate-200 to-slate-400 tracking-tight leading-tight mb-4 drop-shadow-sm">
          HTML to JSX
          <span className="bg-clip-text text-transparent bg-linear-to-r from-primary to-cyan-400">
            Converter
          </span>
        </h2>
        <p className="text-slate-400 text-lg max-w-2xl font-light leading-relaxed">
          Transform raw HTML into React-ready components instantly.
          <br className="hidden sm:block" />
          Handles style objects, camelCase attributes, and self-closing tags.
        </p>
      </div>
    </div>
  );
};

export default HtmlToJsxHeader;
