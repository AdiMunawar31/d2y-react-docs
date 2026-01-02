import { Atom } from "lucide-react";

export function GlassFooter() {
  return (
    <footer className="relative w-full border-t border-glass-border bg-[#05090c] py-20 px-8">
      <div className="layout-content-container mx-auto px-6 lg:px-10 flex flex-col gap-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center size-8 rounded-lg bg-primary/20 text-primary">
              <Atom />
            </div>
            <span className="text-white font-bold text-xl">D2Y React Docs</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-8">
            <a
              className="text-slate-400 hover:text-primary text-sm font-medium transition-colors"
              href="#"
            >
              Documentation
            </a>
            <a
              className="text-slate-400 hover:text-primary text-sm font-medium transition-colors"
              href="#"
            >
              Changelog
            </a>
            <a
              className="text-slate-400 hover:text-primary text-sm font-medium transition-colors"
              href="#"
            >
              License
            </a>
            <a
              className="text-slate-400 hover:text-primary text-sm font-medium transition-colors"
              href="#"
            >
              GitHub
            </a>
            <a
              className="text-slate-400 hover:text-primary text-sm font-medium transition-colors"
              href="#"
            >
              Twitter
            </a>
          </div>
        </div>
        <div className="h-px w-full bg-white/5"></div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} Liquid Glass UI. All rights reserved.
          </p>
          <p>Designed by D2Y Developers.</p>
        </div>
      </div>
    </footer>
  );
}
