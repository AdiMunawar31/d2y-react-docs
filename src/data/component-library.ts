import type { ComponentSource, PreviewType } from "@/lib/interfaces/component";

export interface LibraryComponent {
  id: string;
  title: string;
  description: string;
  source: ComponentSource;
  previewType: PreviewType;
}

export const COMPONENT_LIBRARY: LibraryComponent[] = [
  {
    id: "glass-card",
    title: "Glass Card",
    description: "Frosted glass effect container",
    source: "shadcn",
    previewType: "card",
  },
  {
    id: "neon-button",
    title: "Neon Button",
    description: "High visibility action trigger",
    source: "MUI",
    previewType: "button",
  },
  {
    id: "dialog-modal",
    title: "Dialog Modal",
    description: "Accessible overlay window",
    source: "Mantine",
    previewType: "modal",
  },
  {
    id: "data-table",
    title: "Data Table",
    description: "Sortable columns and pagination",
    source: "shadcn",
    previewType: "table",
  },
  {
    id: "toggle-switch",
    title: "Toggle Switch",
    description: "Binary state selector",
    source: "MUI",
    previewType: "toggle",
  },
  {
    id: "gradient-progress",
    title: "Gradient Progress",
    description: "Animated status indicator",
    source: "Mantine",
    previewType: "progress",
  },
];
