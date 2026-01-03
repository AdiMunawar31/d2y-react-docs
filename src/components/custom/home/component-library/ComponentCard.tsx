import { type LibraryComponent } from "@/data/component-library";
import { ComponentPreview } from "./ComponentPreview";
import { ComponentTag } from "./ComponentTag";

export function ComponentCard({ item }: { item: LibraryComponent }) {
  return (
    <div className="group cursor-pointer relative flex flex-col overflow-hidden rounded-2xl border border-glass-border bg-card-bg hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/10">
      <div
        className="aspect-4/3 w-full relative flex items-center justify-center p-6"
        style={{
          backgroundImage:
            "radial-gradient(circle at center, #1e293b 0%, #0d1218 100%)",
        }}
      >
        <ComponentPreview type={item.previewType} />
      </div>

      <div className="p-4 bg-card-bg border-t border-white/5">
        <div className="flex justify-between items-start gap-4">
          <div>
            <h3 className="font-bold text-white group-hover:text-primary transition-colors">
              {item.title}
            </h3>
            <p className="text-xs text-slate-400 mt-1">{item.description}</p>
          </div>

          <ComponentTag source={item.source} />
        </div>
      </div>
    </div>
  );
}
