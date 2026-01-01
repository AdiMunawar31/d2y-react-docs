import { D2YCard } from "@/components/base/D2YCard";
import { D2YButton } from "@/components/base/D2YButton";

interface ToolkitCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export function ToolkitCard({ icon, title, description }: ToolkitCardProps) {
  return (
    <D2YCard className="group h-full">
      <div className="flex flex-col gap-4">
        <div className="h-10 w-10 rounded-xl bg-white/10 flex items-center justify-center">
          {icon}
        </div>

        <h3 className="font-semibold">{title}</h3>

        <p className="text-sm text-white/60">{description}</p>

        <D2YButton variant="ghost" size="sm" className="mt-auto self-start">
          Launch →
        </D2YButton>
      </div>
    </D2YCard>
  );
}
