import {
  Palette,
  Database,
  Contrast,
  LayoutGrid,
  QrCode,
  Clock,
  Regex,
  Image as ImageIcon,
  FileText,
  Code2,
  Calculator,
  Type,
  Crop,
  Braces,
  Globe,
  Wand2,
} from "lucide-react";

export type ToolCategory =
  | "Color"
  | "Text"
  | "Media"
  | "Data"
  | "Dev"
  | "Date"
  | "Encode"
  | "Layout";

export interface ToolItem {
  id: string;
  title: string;
  description: string;
  category: ToolCategory;
  icon: React.ElementType;
  gradient: string;
  iconColor: string;
}

export const TOOLS: ToolItem[] = [
  {
    id: "color-converter",
    title: "Color Converter",
    description:
      "Convert HEX to RGB, HSL, and CMYK instantly with live preview.",
    category: "Color",
    icon: Palette,
    gradient: "from-pink-500/20 to-rose-500/20",
    iconColor: "text-pink-400 border-pink-500/30",
  },
  {
    id: "json-formatter",
    title: "JSON Formatter",
    description: "Prettify, minify, and validate complex JSON data structures.",
    category: "Data",
    icon: Database,
    gradient: "from-blue-500/20 to-cyan-500/20",
    iconColor: "text-blue-400 border-blue-500/30",
  },
  {
    id: "contrast-checker",
    title: "Contrast Checker",
    description: "Ensure WCAG compliance for your text pairs and UI elements.",
    category: "Layout",
    icon: Contrast,
    gradient: "from-emerald-500/20 to-green-500/20",
    iconColor: "text-emerald-400 border-emerald-500/30",
  },
  {
    id: "flexbox-generator",
    title: "Flexbox Generator",
    description: "Visually build CSS flexbox layouts and export the code.",
    category: "Layout",
    icon: LayoutGrid,
    gradient: "from-purple-500/20 to-indigo-500/20",
    iconColor: "text-purple-400 border-purple-500/30",
  },
  {
    id: "qr-generator",
    title: "QR Generator",
    description: "Create QR codes for URLs, text, wifi, and contact cards.",
    category: "Dev",
    icon: QrCode,
    gradient: "from-amber-500/20 to-orange-500/20",
    iconColor: "text-amber-400 border-amber-500/30",
  },
  {
    id: "unix-timestamp",
    title: "Unix Timestamp",
    description: "Convert dates to timestamp and timestamp to readable dates.",
    category: "Date",
    icon: Clock,
    gradient: "from-sky-500/20 to-blue-500/20",
    iconColor: "text-sky-400 border-sky-500/30",
  },
  {
    id: "regex-tester",
    title: "RegEx Tester",
    description: "Validate, test and debug your regular expressions.",
    category: "Dev",
    icon: Regex,
    gradient: "from-red-500/20 to-orange-500/20",
    iconColor: "text-red-400 border-red-500/30",
  },
  {
    id: "image-compressor",
    title: "Image Compressor",
    description: "Optimize PNG, JPG, and WebP images for the web.",
    category: "Media",
    icon: ImageIcon,
    gradient: "from-teal-500/20 to-cyan-500/20",
    iconColor: "text-teal-400 border-teal-500/30",
  },
  {
    id: "markdown-preview",
    title: "Markdown Previewer",
    description: "Live preview markdown content with GitHub-style rendering.",
    category: "Dev",
    icon: FileText,
    gradient: "from-slate-500/20 to-gray-500/20",
    iconColor: "text-slate-400 border-slate-500/30",
  },
  {
    id: "code-formatter",
    title: "Code Formatter",
    description: "Format JS, TS, HTML, and CSS instantly.",
    category: "Dev",
    icon: Code2,
    gradient: "from-indigo-500/20 to-blue-500/20",
    iconColor: "text-indigo-400 border-indigo-500/30",
  },
  {
    id: "calculator",
    title: "Smart Calculator",
    description: "Advanced calculator with history and expressions.",
    category: "Dev",
    icon: Calculator,
    gradient: "from-lime-500/20 to-green-500/20",
    iconColor: "text-lime-400 border-lime-500/30",
  },
  {
    id: "text-counter",
    title: "Text Counter",
    description: "Count characters, words, sentences, and paragraphs.",
    category: "Text",
    icon: Type,
    gradient: "from-fuchsia-500/20 to-pink-500/20",
    iconColor: "text-fuchsia-400 border-fuchsia-500/30",
  },
  {
    id: "image-cropper",
    title: "Image Cropper",
    description: "Crop images with aspect ratio presets.",
    category: "Media",
    icon: Crop,
    gradient: "from-yellow-500/20 to-amber-500/20",
    iconColor: "text-yellow-400 border-yellow-500/30",
  },
  {
    id: "json-diff",
    title: "JSON Diff",
    description: "Compare two JSON objects visually.",
    category: "Data",
    icon: Braces,
    gradient: "from-rose-500/20 to-red-500/20",
    iconColor: "text-rose-400 border-rose-500/30",
  },
  {
    id: "url-encoder",
    title: "URL Encoder",
    description: "Encode & decode URLs safely.",
    category: "Dev",
    icon: Globe,
    gradient: "from-cyan-500/20 to-sky-500/20",
    iconColor: "text-cyan-400 border-cyan-500/30",
  },
  {
    id: "css-generator",
    title: "CSS Generator",
    description: "Generate shadows, gradients, and animations.",
    category: "Layout",
    icon: Wand2,
    gradient: "from-violet-500/20 to-purple-500/20",
    iconColor: "text-violet-400 border-violet-500/30",
  },
  {
    id: "uuid-generator",
    title: "UUID Generator",
    description: "Generate v4 UUIDs instantly for development needs.",
    category: "Encode",
    icon: Braces,
    gradient: "from-neutral-500/20 to-slate-500/20",
    iconColor: "text-neutral-400 border-neutral-500/30",
  },
  {
    id: "base64-tool",
    title: "Base64 Encoder",
    description: "Encode & decode Base64 strings easily.",
    category: "Encode",
    icon: Code2,
    gradient: "from-orange-500/20 to-amber-500/20",
    iconColor: "text-orange-400 border-orange-500/30",
  },
  {
    id: "jwt-decoder",
    title: "JWT Decoder",
    description: "Decode JWT payloads and inspect claims.",
    category: "Encode",
    icon: FileText,
    gradient: "from-indigo-500/20 to-violet-500/20",
    iconColor: "text-indigo-400 border-indigo-500/30",
  },
  {
    id: "cron-parser",
    title: "Cron Parser",
    description: "Understand and visualize cron expressions.",
    category: "Encode",
    icon: Clock,
    gradient: "from-sky-500/20 to-cyan-500/20",
    iconColor: "text-sky-400 border-sky-500/30",
  },
];
