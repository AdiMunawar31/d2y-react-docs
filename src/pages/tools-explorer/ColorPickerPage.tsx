import { useColorPicker } from "@/hooks/useColorPicker";
import { ColorCanvas } from "@/components/features/tools/color-picker/ColorCanvas";
import { HueSlider } from "@/components/features/tools/color-picker/HueSlider";
import { AlphaSlider } from "@/components/features/tools/color-picker/AlphaSlider";
import { ColorInputs } from "@/components/features/tools/color-picker/ColorInputs";
import { ColorOutputPanel } from "@/components/features/tools/color-picker/ColorOutputPanel";

export default function ColorPickerPage() {
  const {
    hsv,
    rgb,
    hex,
    alpha,
    updateFromCanvas,
    updateHue,
    updateAlpha,
    updateFromHex,
    updateFromRgba,
  } = useColorPicker();

  return (
    <main className="px-8 py-8 mt-8">
      <div className="grid grid-cols-12 gap-6">
        {/* LEFT SIDE */}
        <section className="col-span-12 sm:col-span-9">
          <div className="glass-panel p-6 rounded-xl flex flex-col gap-6">
            <ColorCanvas
              hue={hsv.h}
              s={hsv.s}
              v={hsv.v}
              onChange={updateFromCanvas}
            />

            <HueSlider value={hsv.h} onChange={updateHue} />

            <AlphaSlider
              color={`rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`}
              value={alpha}
              onChange={updateAlpha}
            />

            <ColorInputs
              hex={hex}
              rgb={rgb}
              alpha={alpha}
              onHex={updateFromHex}
              onRgba={updateFromRgba}
            />
          </div>
        </section>

        {/* RIGHT SIDE */}
        <aside className="hidden xl:block xl:col-span-3">
          <ColorOutputPanel rgb={rgb} hex={hex} alpha={alpha} />
        </aside>
      </div>
    </main>
  );
}
