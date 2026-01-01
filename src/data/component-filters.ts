import { LayoutGrid, Package, Boxes, Layers } from "lucide-react";

export type ComponentFilterKey = "all" | "shadcn" | "mui" | "mantine";

export interface ComponentFilter {
  key: ComponentFilterKey;
  label: string;
  icon: React.ElementType;
}

export const COMPONENT_FILTERS: ComponentFilter[] = [
  {
    key: "all",
    label: "All",
    icon: LayoutGrid,
  },
  {
    key: "shadcn",
    label: "shadcn",
    icon: Package,
  },
  {
    key: "mui",
    label: "MUI",
    icon: Boxes,
  },
  {
    key: "mantine",
    label: "Mantine",
    icon: Layers,
  },
];
