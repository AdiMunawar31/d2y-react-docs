import { type PreviewType } from "@/lib/interfaces/component";
import { ButtonPreview } from "./preview/ButtonPreview";
import { ProgressPreview } from "./preview/ProgressPreview";
import { ModalPreview } from "./preview/ModalPreview";
import { TablePreview } from "./preview/TablePreview";
import { TogglePreview } from "./preview/TogglePreview";
import { GlassCardPreview } from "./preview/GlassCardPreview";

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

    case "card":
    default:
      return <GlassCardPreview />;
  }
}
