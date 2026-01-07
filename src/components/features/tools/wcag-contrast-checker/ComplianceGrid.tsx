import { type WcagLevel } from "@/utils/tools/wcag-contrast-checker/contrastUtils";
import { CheckCircle2Icon, CircleX } from "lucide-react";

interface ComplianceGridProps {
  compliance: WcagLevel | null;
}

interface ComplianceItemProps {
  label: string;
  description: string;
  passed: boolean;
}

function ComplianceItem({ label, description, passed }: ComplianceItemProps) {
  return (
    <div className="bg-[#192633] border border-[#324d67] p-4 rounded-xl flex items-center justify-between">
      <div>
        <p className="text-[#92adc9] text-xs font-medium uppercase">{label}</p>
        <p className="text-white font-bold">{description}</p>
      </div>
      <div
        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg ${
          passed
            ? "bg-green-500/20 text-green-400 border border-green-500/20"
            : "bg-red-500/20 text-red-400 border border-red-500/20"
        }`}
      >
        <span className="material-symbols-outlined text-lg">
          {passed ? <CheckCircle2Icon size={16} /> : <CircleX size={16} />}
        </span>
        <span className="text-xs font-bold uppercase">
          {passed ? "Pass" : "Fail"}
        </span>
      </div>
    </div>
  );
}

export default function ComplianceGrid({ compliance }: ComplianceGridProps) {
  const items = [
    {
      label: "AA Normal",
      description: "Small Text",
      passed: compliance?.aa.normal ?? false,
    },
    {
      label: "AA Large",
      description: "Large Text",
      passed: compliance?.aa.large ?? false,
    },
    {
      label: "AAA Normal",
      description: "Small Text",
      passed: compliance?.aaa.normal ?? false,
    },
    {
      label: "AAA Large",
      description: "Large Text",
      passed: compliance?.aaa.large ?? false,
    },
  ];

  return (
    <div className="md:col-span-2 grid grid-cols-2 gap-4">
      {items.map((item) => (
        <ComplianceItem key={item.label} {...item} />
      ))}
    </div>
  );
}
