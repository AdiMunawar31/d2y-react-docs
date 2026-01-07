import { useState, useCallback, useMemo } from "react";
import {
  getContrastRatio,
  checkWcagCompliance,
  getContrastQuality,
  sanitizeHex,
  isValidHex,
  type WcagLevel,
} from "@/utils/tools/wcag-contrast-checker/contrastUtils";

export interface WcagContrastState {
  foreground: string;
  background: string;
  contrastRatio: number | null;
  compliance: WcagLevel | null;
  quality: ReturnType<typeof getContrastQuality> | null;
}

export function useWcagContrast() {
  const [foreground, setForeground] = useState("FFFFFF");
  const [background, setBackground] = useState("2B8CEE");

  const contrastData = useMemo(() => {
    const ratio = getContrastRatio(foreground, background);

    if (ratio === null) {
      return {
        contrastRatio: null,
        compliance: null,
        quality: null,
      };
    }

    return {
      contrastRatio: ratio,
      compliance: checkWcagCompliance(ratio),
      quality: getContrastQuality(ratio),
    };
  }, [foreground, background]);

  // Handle foreground color change
  const handleForegroundChange = useCallback((value: string) => {
    const sanitized = sanitizeHex(value);
    setForeground(sanitized);
  }, []);

  // Handle background color change
  const handleBackgroundChange = useCallback((value: string) => {
    const sanitized = sanitizeHex(value);
    setBackground(sanitized);
  }, []);

  // Swap colors
  const handleSwapColors = useCallback(() => {
    setForeground(background);
    setBackground(foreground);
  }, [foreground, background]);

  // Reset to default colors
  const handleReset = useCallback(() => {
    setForeground("FFFFFF");
    setBackground("2B8CEE");
  }, []);

  // Validate current colors
  const isValid = useMemo(() => {
    return isValidHex(foreground) && isValidHex(background);
  }, [foreground, background]);

  return {
    foreground,
    background,
    ...contrastData,
    isValid,
    handleForegroundChange,
    handleBackgroundChange,
    handleSwapColors,
    handleReset,
  };
}
