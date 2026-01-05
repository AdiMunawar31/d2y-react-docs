interface Props {
  color: string;
  value: number;
  onChange: (v: number) => void;
}

export function AlphaSlider({ color, value, onChange }: Props) {
  return (
    <div className="relative w-full h-3 rounded-full bg-[url('/checker.png')]">
      <input
        type="range"
        min={0}
        max={100}
        value={value * 100}
        onChange={(e) => onChange(Number(e.target.value) / 100)}
        className="color-slider absolute inset-0"
        style={{
          background: `linear-gradient(to right, transparent, ${color})`,
        }}
      />
    </div>
  );
}