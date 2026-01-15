export type QRCornerStyle = "rounded" | "square" | "dot-art";
export type QRExportFormat = "svg" | "png" | "jpeg";

export interface QRConfig {
  content: string;
  size: number;
  quietZone: number;
  cornerStyle: QRCornerStyle;
  gradientEnabled: boolean;
  colorStart: string;
  colorEnd: string;
  logoUrl?: string;
  logoSize: number;
}

export interface QRSession {
  id: string;
  content: string;
  format: QRExportFormat;
  timestamp: number;
  preview?: string;
}

/**
 * Default QR configuration
 */
export const DEFAULT_QR_CONFIG: QRConfig = {
  content: "https://d2y-react-docs.com",
  size: 1024,
  quietZone: 4,
  cornerStyle: "rounded",
  gradientEnabled: false,
  colorStart: "#000000",
  colorEnd: "#0ea5e9",
  logoSize: 20,
};

/**
 * Validate URL
 */
export function isValidUrl(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

/**
 * Generate WiFi QR string
 */
export function generateWiFiString(
  ssid: string,
  password: string,
  security: "WPA" | "WEP" | "nopass" = "WPA"
): string {
  return `WIFI:T:${security};S:${ssid};P:${password};;`;
}

/**
 * Validate WiFi credentials
 */
export function isValidWiFi(ssid: string, password: string): boolean {
  return ssid.length > 0 && (password.length >= 8 || password.length === 0);
}

/**
 * Generate vCard QR string
 */
export function generateVCard(
  name: string,
  phone: string,
  email?: string,
  company?: string
): string {
  let vcard = "BEGIN:VCARD\nVERSION:3.0\n";
  vcard += `FN:${name}\n`;
  vcard += `TEL:${phone}\n`;
  if (email) vcard += `EMAIL:${email}\n`;
  if (company) vcard += `ORG:${company}\n`;
  vcard += "END:VCARD";
  return vcard;
}

/**
 * Detect QR content type
 */
export function detectContentType(content: string): string {
  if (content.startsWith("WIFI:")) return "WiFi";
  if (content.startsWith("BEGIN:VCARD")) return "vCard";
  if (isValidUrl(content)) return "URL";
  if (content.includes("@")) return "Email";
  if (content.match(/^\+?\d{10,}$/)) return "Phone";
  return "Text";
}

/**
 * Format timestamp for session
 */
export function formatSessionTime(timestamp: number): string {
  const now = Date.now();
  const diff = now - timestamp;

  const minutes = Math.floor(diff / 60000);
  const hours = Math.floor(diff / 3600000);
  const days = Math.floor(diff / 86400000);

  if (minutes < 1) return "Just now";
  if (minutes < 60) return `${minutes} min ago`;
  if (hours < 24) return `${hours} hour${hours > 1 ? "s" : ""} ago`;
  return `${days} day${days > 1 ? "s" : ""} ago`;
}

/**
 * Generate short preview text
 */
export function generatePreview(
  content: string,
  maxLength: number = 20
): string {
  const type = detectContentType(content);

  if (type === "WiFi") {
    const match = content.match(/S:([^;]+)/);
    return match ? match[1] : "WiFi Network";
  }

  if (type === "URL") {
    try {
      const url = new URL(content);
      return url.hostname;
    } catch {
      return content.substring(0, maxLength);
    }
  }

  return content.length > maxLength
    ? content.substring(0, maxLength) + "..."
    : content;
}

/**
 * Convert hex to RGB
 */
export function hexToRgb(hex: string): { r: number; g: number; b: number } {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : { r: 0, g: 0, b: 0 };
}

/**
 * Convert RGB to hex
 */
export function rgbToHex(r: number, g: number, b: number): string {
  return (
    "#" +
    [r, g, b]
      .map((x) => {
        const hex = x.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
      })
      .join("")
  );
}

/**
 * Save session to localStorage
 */
export function saveSession(session: QRSession): void {
  try {
    const sessions = getSessions();
    sessions.unshift(session);
    // Keep only last 10 sessions
    const limited = sessions.slice(0, 10);
    localStorage.setItem("qr_sessions", JSON.stringify(limited));
  } catch (error) {
    console.warn("Failed to save session:", error);
  }
}

/**
 * Get sessions from localStorage
 */
export function getSessions(): QRSession[] {
  try {
    const data = localStorage.getItem("qr_sessions");
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
}

/**
 * Clear all sessions
 */
export function clearSessions(): void {
  try {
    localStorage.removeItem("qr_sessions");
  } catch (error) {
    console.warn("Failed to clear sessions:", error);
  }
}

/**
 * Download file
 */
export function downloadFile(
  dataUrl: string,
  filename: string,
  format: QRExportFormat
): void {
  const link = document.createElement("a");
  link.download = `${filename}.${format}`;
  link.href = dataUrl;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

/**
 * Copy to clipboard
 */
export async function copyToClipboard(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    return false;
  }
}

/**
 * Generate cURL command for API
 */
export function generateCurlCommand(config: QRConfig): string {
  const params = new URLSearchParams({
    data: config.content,
    size: config.size.toString(),
    format: "png",
    margin: config.quietZone.toString(),
  });

  return `curl -X GET "https://api.qrserver.com/v1/create-qr-code/?${params.toString()}" -o qrcode.png`;
}
