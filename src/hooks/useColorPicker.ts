import { useCallback, useMemo, useState } from "react";
import {
  hsvToRgb,
  rgbToHex,
  hexToRgb,
  rgbToHsv,
} from "@/utils/tools/colors/color";

export function useColorPicker() {
  const [hsv, setHsv] = useState({ h: 210, s: 0.66, v: 0.55 });
  const [alpha, setAlpha] = useState(1);

  const rgb = useMemo(() => hsvToRgb(hsv.h, hsv.s, hsv.v), [hsv]);
  const hex = useMemo(() => rgbToHex(rgb), [rgb]);

  /** Canvas drag */
  const updateFromCanvas = useCallback((s: number, v: number) => {
    setHsv((prev) => ({ ...prev, s, v }));
  }, []);

  /** Hue slider */
  const updateHue = useCallback((h: number) => {
    setHsv((prev) => ({ ...prev, h }));
  }, []);

  /** Alpha slider */
  const updateAlpha = useCallback((a: number) => {
    setAlpha(a);
  }, []);

  /** HEX input */
  const updateFromHex = useCallback((value: string) => {
    const rgb = hexToRgb(value);
    if (!rgb) return;
    const hsv = rgbToHsv(rgb);
    setHsv(hsv);
  }, []);

  /** RGBA input */
  const updateFromRgba = useCallback(
    (r: number, g: number, b: number, a: number) => {
      const hsv = rgbToHsv({ r, g, b });
      setHsv(hsv);
      setAlpha(a);
    },
    []
  );

  return {
    hsv,
    rgb,
    hex,
    alpha,
    updateFromCanvas,
    updateHue,
    updateAlpha,
    updateFromHex,
    updateFromRgba,
  };
}
