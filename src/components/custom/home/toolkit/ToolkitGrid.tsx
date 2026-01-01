import {
  Paintbrush,
  Shapes,
  Accessibility,
  Terminal,
  LayoutGrid,
} from "lucide-react";
import { ToolkitCard } from "./ToolkitCard";

type ToolkitColor = "pink" | "indigo" | "green" | "orange" | "cyan";

interface ToolkitItem {
  title: string;
  description: string;
  icon: React.ElementType;
  color: ToolkitColor;
}

const TOOLS: ToolkitItem[] = [
  {
    title: "Theme Builder",
    description: "Customize colors, typography, and radius tokens visually.",
    icon: Paintbrush,
    color: "pink",
  },
  {
    title: "Icon Manager",
    description: "Search, optimize and bundle icons for production.",
    icon: Shapes,
    color: "indigo",
  },
  {
    title: "A11y Checker",
    description: "Analyze contrast ratios and ARIA label compliance instantly.",
    icon: Accessibility,
    color: "green",
  },
  {
    title: "Playground",
    description: "Sandboxed environment to test component props in isolation.",
    icon: Terminal,
    color: "orange",
  },
  {
    title: "Grid Builder",
    description: "Visual CSS grid generator with Tailwind export.",
    icon: LayoutGrid,
    color: "cyan",
  },
];

export function ToolkitGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
      {TOOLS.map((tool) => (
        <ToolkitCard key={tool.title} {...tool} />
      ))}
    </div>
  );
}
