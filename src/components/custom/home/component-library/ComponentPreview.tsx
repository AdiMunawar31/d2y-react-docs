import { type PreviewType } from "@/lib/interfaces/component";
import { ButtonPreview } from "../../component-preview/ButtonPreview";
import { ProgressPreview } from "../../component-preview/ProgressPreview";
import { ModalPreview } from "../../component-preview/ModalPreview";
import { TablePreview } from "../../component-preview/TablePreview";
import { TogglePreview } from "../../component-preview/TogglePreview";
import { GlassCardPreview } from "../../component-preview/GlassCardPreview";
import { InputPreview } from "../../component-preview/InputPreview";
import { SidebarPreview } from "../../component-preview/SidebarPreview";
import { TabsPreview } from "../../component-preview/TabsPreview";
import { BadgePreview } from "../../component-preview/BadgePreview";
import { SkeletonPreview } from "../../component-preview/SkeletonPreview";
import { AccordionPreview } from "../../component-preview/AccordionPreview";
import { TooltipPreview } from "../../component-preview/TooltipPreview";
import { DropdownPreview } from "../../component-preview/DropdownPreview";
import { AlertPreview } from "../../component-preview/AlertPreview";
import { AvatarPreview } from "../../component-preview/AvatarPreview";
import { PaginationPreview } from "../../component-preview/PaginationPreview";
import { BreadcrumbPreview } from "../../component-preview/BreadcrumbPreview";
import { ToastPreview } from "../../component-preview/ToastPreview";
import { CheckboxPreview } from "../../component-preview/CheckboxPreview";

export function ComponentPreview({ type }: { type: PreviewType }) {
  switch (type) {
    case "button":
      return <ButtonPreview />;

    case "progress":
      return <ProgressPreview />;

    case "modal":
      return <ModalPreview />;

    case "table":
      return <TablePreview />;

    case "toggle":
      return <TogglePreview />;

    case "input":
      return <InputPreview />;

    case "sidebar":
      return <SidebarPreview />;

    case "tabs":
      return <TabsPreview />;

    case "badge":
      return <BadgePreview />;

    case "skeleton":
      return <SkeletonPreview />;

    case "accordion":
      return <AccordionPreview />;

    case "tooltip":
      return <TooltipPreview />;

    case "dropdown":
      return <DropdownPreview />;

    case "alert":
      return <AlertPreview />;

    case "avatar":
      return <AvatarPreview />;

    case "pagination":
      return <PaginationPreview />;

    case "breadcrumb":
      return <BreadcrumbPreview />;

    case "toast":
      return <ToastPreview />;

    case "checkbox":
      return <CheckboxPreview />;

    case "card":
    default:
      return <GlassCardPreview />;
  }
}
