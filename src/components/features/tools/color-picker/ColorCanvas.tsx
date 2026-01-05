import { useRef } from "react";

interface Props {
  hue: number;
  s: number;
  v: number;
  onChange: (s: number, v: number) => void;
}

export function ColorCanvas({ hue, s, v, onChange }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  const handlePointer = (e: React.MouseEvent) => {
    const rect = ref.current!.getBoundingClientRect();
    const x = Math.min(Math.max(0, e.clientX - rect.left), rect.width);
    const y = Math.min(Math.max(0, e.clientY - rect.top), rect.height);

    const newS = x / rect.width;
    const newV = 1 - y / rect.height;

    onChange(newS, newV);
  };

  return (
    <div
      ref={ref}
      onMouseDown={handlePointer}
      onMouseMove={(e) => e.buttons === 1 && handlePointer(e)}
      className="relative w-full aspect-2/1 rounded-lg overflow-hidden cursor-crosshair shadow-inner"
      style={{
        background: `
          linear-gradient(to bottom, transparent, #000),
          linear-gradient(to right, #fff, transparent),
          hsl(${hue},100%,50%)
        `,
      }}
    >
      {/* grid */}
      <div className="absolute inset-0 opacity-10 pointer-events-none grid-pattern" />

      {/* handle */}
      <div
        className="absolute size-6 border-2 border-white rounded-full
          shadow-[0_0_0_2px_rgba(0,0,0,0.3)]
          -translate-x-1/2 -translate-y-1/2 transition-transform"
        style={{
          left: `${s * 100}%`,
          top: `${(1 - v) * 100}%`,
        }}
      />
    </div>
  );
}
