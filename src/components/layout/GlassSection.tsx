import { cn } from "@/lib/utils";

interface GlassSectionProps extends React.HTMLAttributes<HTMLElement> {
  muted?: boolean;
}

export function GlassSection({
  className,
  muted,
  ...props
}: GlassSectionProps) {
  return (
    <section
      className={cn("relative py-28", muted && "bg-background-dark", className)}
      {...props}
    />
  );
}
