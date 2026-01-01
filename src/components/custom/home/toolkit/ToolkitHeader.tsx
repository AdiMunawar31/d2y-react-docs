import { ArrowRight } from "lucide-react";

export function ToolkitHeader() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
      <div className="max-w-xl">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Developer Toolkit
        </h2>
        <p className="text-slate-400">
          Streamline your development process with our suite of dedicated tools
          designed to help you build, test, and deploy faster.
        </p>
      </div>

      <a
        href="#"
        className="text-primary hover:text-primary-dark font-medium flex items-center gap-1 transition-colors"
      >
        View all tools
        <ArrowRight size={18} />
      </a>
    </div>
  );
}
