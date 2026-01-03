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
  {
    id: "text-input",
    title: "Input",
    description: "Text input with states",
    source: "MUI",
    previewType: "input",
  },
  {
    id: "sidebar-layout",
    title: "Sidebar",
    description: "Application navigation panel",
    source: "shadcn",
    previewType: "sidebar",
  },
  {
    id: "tabs-navigation",
    title: "Tabs",
    description: "Segmented content navigation",
    source: "shadcn",
    previewType: "tabs",
  },
  {
    id: "status-badge",
    title: "Badge",
    description: "Status and label indicator",
    source: "MUI",
    previewType: "badge",
  },
  {
    id: "accordion-panel",
    title: "Accordion",
    description: "Expandable content sections",
    source: "shadcn",
    previewType: "accordion",
  },
  {
    id: "loading-skeleton",
    title: "Skeleton",
    description: "Loading placeholder",
    source: "shadcn",
    previewType: "skeleton",
  },
  {
    id: "tooltip",
    title: "Tooltip",
    description: "Contextual hint popup",
    source: "Mantine",
    previewType: "tooltip",
  },
  {
    id: "dropdown-menu",
    title: "Dropdown",
    description: "Action menu list",
    source: "shadcn",
    previewType: "dropdown",
  },
  {
    id: "alert-message",
    title: "Alert",
    description: "System feedback message",
    source: "MUI",
    previewType: "alert",
  },
  {
    id: "user-avatar",
    title: "Avatar",
    description: "User profile representation",
    source: "shadcn",
    previewType: "avatar",
  },
  {
    id: "pagination",
    title: "Pagination",
    description: "Page navigation control",
    source: "Mantine",
    previewType: "pagination",
  },
  {
    id: "breadcrumb",
    title: "Breadcrumb",
    description: "Hierarchical navigation trail",
    source: "shadcn",
    previewType: "breadcrumb",
  },
  {
    id: "toast-notification",
    title: "Toast",
    description: "Temporary notification popup",
    source: "MUI",
    previewType: "toast",
  },
  {
    id: "checkbox",
    title: "Checkbox",
    description: "Multiple option selector",
    source: "MUI",
    previewType: "checkbox",
  },
];
