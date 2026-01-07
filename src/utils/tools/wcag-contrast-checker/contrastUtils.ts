// Utils untuk WCAG Contrast Calculations

export interface WcagLevel {
  aa: { normal: boolean; large: boolean };
  aaa: { normal: boolean; large: boolean };
}

/**
 * Convert hex color to RGB
 */
export function hexToRgb(
  hex: string
): { r: number; g: number; b: number } | null {
  const sanitized = hex.replace(/^#/, "");

  if (!/^[0-9A-F]{6}$/i.test(sanitized)) {
    return null;
  }

  const num = parseInt(sanitized, 16);
  return {
    r: (num >> 16) & 255,
    g: (num >> 8) & 255,
    b: num & 255,
  };
}

/**
 * Calculate relative luminance
 * https://www.w3.org/TR/WCAG20-TECHS/G17.html
 */
export function getLuminance(r: number, g: number, b: number): number {
  const [rs, gs, bs] = [r, g, b].map((val) => {
    const sRGB = val / 255;
    return sRGB <= 0.03928
      ? sRGB / 12.92
      : Math.pow((sRGB + 0.055) / 1.055, 2.4);
  });

  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
}

/**
 * Calculate contrast ratio between two colors
 * https://www.w3.org/TR/WCAG20-TECHS/G17.html
 */
export function getContrastRatio(
  color1: string,
  color2: string
): number | null {
  const rgb1 = hexToRgb(color1);
  const rgb2 = hexToRgb(color2);

  if (!rgb1 || !rgb2) return null;

  const lum1 = getLuminance(rgb1.r, rgb1.g, rgb1.b);
  const lum2 = getLuminance(rgb2.r, rgb2.g, rgb2.b);

  const lighter = Math.max(lum1, lum2);
  const darker = Math.min(lum1, lum2);

  return (lighter + 0.05) / (darker + 0.05);
}

/**
 * Check WCAG compliance levels
 */
export function checkWcagCompliance(ratio: number): WcagLevel {
  return {
    aa: {
      normal: ratio >= 4.5,
      large: ratio >= 3,
    },
    aaa: {
      normal: ratio >= 7,
      large: ratio >= 4.5,
    },
  };
}

/**
 * Get contrast quality label
 */
export function getContrastQuality(ratio: number): {
  label: string;
  color: string;
  percentage: number;
} {
  if (ratio >= 7) {
    return { label: "Excellent", color: "text-green-500", percentage: 100 };
  } else if (ratio >= 4.5) {
    return { label: "Good", color: "text-blue-500", percentage: 70 };
  } else if (ratio >= 3) {
    return { label: "Fair", color: "text-yellow-500", percentage: 50 };
  } else {
    return { label: "Poor", color: "text-red-500", percentage: 30 };
  }
}

/**
 * Validate hex color format
 */
export function isValidHex(hex: string): boolean {
  return /^[0-9A-F]{6}$/i.test(hex.replace(/^#/, ""));
}

/**
 * Sanitize hex input
 */
export function sanitizeHex(hex: string): string {
  return hex
    .replace(/[^0-9A-F]/gi, "")
    .substring(0, 6)
    .toUpperCase();
}
