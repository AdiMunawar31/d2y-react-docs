import { Code2, Zap, Layers } from "lucide-react";

const FEATURES = [
  {
    title: "Smart Styles",
    description:
      "Automatically transforms CSS strings into JS objects. Handles pixel values and camelCasing properties.",
    icon: Code2,
    color: "purple",
  },
  {
    title: "Tags & Attributes",
    description:
      "Corrects void tags (img, input) and maps attributes like class to className automatically.",
    icon: Layers,
    color: "cyan",
  },
  {
    title: "Instant Minify",
    description:
      "Optionally minify your JSX output to keep your component file sizes small and optimized for production.",
    icon: Zap,
    color: "orange",
  },
] as const;

export default function HtmlToJsxFeatures() {
  return (
    <section className="w-full max-w-7xl mt-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {FEATURES.map((item) => (
          <FeatureCard key={item.title} {...item} />
        ))}
      </div>
    </section>
  );
}

/* =========================
 * Sub Component
 * ========================= */

function FeatureCard({
  title,
  description,
  icon: Icon,
  color,
}: {
  title: string;
  description: string;
  icon: React.ElementType;
  color: "purple" | "cyan" | "orange";
}) {
  const colorMap = {
    purple: {
      bg: "bg-purple-500/10",
      border: "border-purple-500/20",
      text: "text-purple-400",
      glow: "group-hover:shadow-[0_0_15px_rgba(168,85,247,0.3)]",
      gradient: "from-purple-500/5",
    },
    cyan: {
      bg: "bg-cyan-500/10",
      border: "border-cyan-500/20",
      text: "text-cyan-400",
      glow: "group-hover:shadow-[0_0_15px_rgba(6,182,212,0.3)]",
      gradient: "from-cyan-500/5",
    },
    orange: {
      bg: "bg-orange-500/10",
      border: "border-orange-500/20",
      text: "text-orange-400",
      glow: "group-hover:shadow-[0_0_15px_rgba(249,115,22,0.3)]",
      gradient: "from-orange-500/5",
    },
  }[color];

  return (
    <div className="relative p-6 rounded-2xl border border-white/5 bg-white/2 hover:bg-white/4 hover:border-white/10 transition-all duration-300 group">
      <div
        className={`absolute inset-0 bg-linear-to-br ${colorMap.gradient} to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl`}
      />

      <div className="relative">
        <div
          className={`size-12 rounded-xl flex items-center justify-center mb-4 border transition-all duration-300 group-hover:scale-110 ${colorMap.bg} ${colorMap.border} ${colorMap.text} ${colorMap.glow}`}
        >
          <Icon size={22} />
        </div>

        <h3 className="text-white text-lg font-bold mb-2">{title}</h3>
        <p className="text-sm text-slate-400 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
