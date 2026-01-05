import { useEffect, useState } from "react";

interface Props {
  hex: string;
  rgb: { r: number; g: number; b: number };
  alpha: number;
  onHex: (v: string) => void;
  onRgba: (r: number, g: number, b: number, a: number) => void;
}

const HEX_REGEX = /^#?([0-9a-fA-F]{6})$/;
const RGBA_REGEX =
  /^rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*([\d.]+))?\s*\)$/;

export function ColorInputs({ hex, rgb, alpha, onHex, onRgba }: Props) {
  const [hexInput, setHexInput] = useState(hex);
  const [rgbaInput, setRgbaInput] = useState(
    `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${alpha.toFixed(2)})`
  );

  /** Sync external → local */
  useEffect(() => setHexInput(hex), [hex]);
  useEffect(
    () =>
      setRgbaInput(`rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${alpha.toFixed(2)})`),
    [rgb, alpha]
  );

  return (
    <div className="grid grid-cols-2 gap-4 pt-4">
      {/* HEX */}
      <input
        value={hexInput}
        onChange={(e) => {
          const value = e.target.value;
          setHexInput(value);

          if (HEX_REGEX.test(value)) {
            onHex(value.startsWith("#") ? value : `#${value}`);
          }
        }}
        placeholder="#2B8CEE"
        className="bg-surface-dark border border-surface-border rounded-lg px-3 py-2 font-mono focus:border-primary"
      />

      {/* RGBA */}
      <input
        value={rgbaInput}
        onChange={(e) => {
          const value = e.target.value;
          setRgbaInput(value);

          const m = value.match(RGBA_REGEX);
          if (!m) return;

          const r = Math.min(255, +m[1]);
          const g = Math.min(255, +m[2]);
          const b = Math.min(255, +m[3]);
          const a = m[4] ? Math.min(1, Math.max(0, +m[4])) : alpha;

          onRgba(r, g, b, a);
        }}
        placeholder="rgba(43, 140, 238, 1)"
        className="bg-surface-dark border border-surface-border rounded-lg px-3 py-2 font-mono focus:border-primary"
      />
    </div>
  );
}
