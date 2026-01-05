interface Props {
  value: number;
  onChange: (v: number) => void;
}

export function HueSlider({ value, onChange }: Props) {
  return (
    <input
      type="range"
      min={0}
      max={360}
      value={value}
      onChange={(e) => onChange(Number(e.target.value))}
      className="color-slider hue-gradient"
    />
  );
}
