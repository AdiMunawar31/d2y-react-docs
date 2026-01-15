import { useState, useCallback, useEffect, useRef } from "react";
import QRCode from "qrcode";
import {
  DEFAULT_QR_CONFIG,
  saveSession,
  getSessions,
  clearSessions as clearSessionsUtil,
  downloadFile,
  copyToClipboard as copyToClipboardUtil,
  generateCurlCommand,
  type QRConfig,
  type QRCornerStyle,
  type QRExportFormat,
  type QRSession,
} from "@/utils/tools/qr-generator/qrGeneratorUtils";

export function useQRGenerator() {
  const [config, setConfig] = useState<QRConfig>(DEFAULT_QR_CONFIG);
  const [qrDataUrl, setQrDataUrl] = useState<string>("");
  const [sessions, setSessions] = useState<QRSession[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    setSessions(getSessions());
  }, []);

  const generateQR = useCallback(async () => {
    if (!config.content) return;

    setIsGenerating(true);

    try {
      if (!canvasRef.current) {
        canvasRef.current = document.createElement("canvas");
      }

      const canvas = canvasRef.current;
      const options: QRCode.QRCodeToDataURLOptions = {
        width: config.size,
        margin: config.quietZone,
        color: {
          dark: config.gradientEnabled ? config.colorEnd : config.colorStart,
          light: "#FFFFFF",
        },
        errorCorrectionLevel: "M",
      };

      await QRCode.toCanvas(canvas, config.content, options);

      if (config.gradientEnabled) {
        const ctx = canvas.getContext("2d");
        if (ctx) {
          const gradient = ctx.createLinearGradient(
            0,
            0,
            config.size,
            config.size
          );
          gradient.addColorStop(0, config.colorStart);
          gradient.addColorStop(1, config.colorEnd);

          ctx.globalCompositeOperation = "source-in";
          ctx.fillStyle = gradient;
          ctx.fillRect(0, 0, config.size, config.size);
          ctx.globalCompositeOperation = "source-over";
        }
      }

      const dataUrl = canvas.toDataURL("image/png");
      setQrDataUrl(dataUrl);
    } catch (error) {
      console.error("QR generation failed:", error);
    } finally {
      setIsGenerating(false);
    }
  }, [config]);

  useEffect(() => {
    generateQR();
  }, [generateQR]);

  const updateContent = useCallback((content: string) => {
    setConfig((prev) => ({ ...prev, content }));
  }, []);

  const updateSize = useCallback((size: number) => {
    setConfig((prev) => ({ ...prev, size }));
  }, []);

  const updateQuietZone = useCallback((quietZone: number) => {
    setConfig((prev) => ({ ...prev, quietZone }));
  }, []);

  const updateCornerStyle = useCallback((cornerStyle: QRCornerStyle) => {
    setConfig((prev) => ({ ...prev, cornerStyle }));
  }, []);

  const toggleGradient = useCallback(() => {
    setConfig((prev) => ({ ...prev, gradientEnabled: !prev.gradientEnabled }));
  }, []);

  const updateColorStart = useCallback((color: string) => {
    setConfig((prev) => ({ ...prev, colorStart: color }));
  }, []);

  const updateColorEnd = useCallback((color: string) => {
    setConfig((prev) => ({ ...prev, colorEnd: color }));
  }, []);

  const updateLogo = useCallback((logoUrl?: string) => {
    setConfig((prev) => ({ ...prev, logoUrl }));
  }, []);

  const download = useCallback(
    async (format: QRExportFormat) => {
      if (!qrDataUrl) return;

      const session: QRSession = {
        id: Date.now().toString(),
        content: config.content,
        format,
        timestamp: Date.now(),
        preview: qrDataUrl,
      };

      saveSession(session);
      setSessions(getSessions());

      const filename = `qr-${Date.now()}`;

      if (format === "svg") {
        try {
          const svg = await QRCode.toString(config.content, {
            type: "svg",
            width: config.size,
            margin: config.quietZone,
            color: {
              dark: config.gradientEnabled
                ? config.colorEnd
                : config.colorStart,
              light: "#FFFFFF",
            },
          });
          const blob = new Blob([svg], { type: "image/svg+xml" });
          const url = URL.createObjectURL(blob);
          downloadFile(url, filename, format);
          URL.revokeObjectURL(url);
        } catch (error) {
          console.error("SVG generation failed:", error);
        }
      } else {
        downloadFile(qrDataUrl, filename, format);
      }
    },
    [qrDataUrl, config]
  );

  const copyToClipboard = useCallback(async () => {
    return await copyToClipboardUtil(config.content);
  }, [config.content]);

  const copyCurl = useCallback(async () => {
    const curl = generateCurlCommand(config);
    return await copyToClipboardUtil(curl);
  }, [config]);

  const clearSessions = useCallback(() => {
    clearSessionsUtil();
    setSessions([]);
  }, []);

  const loadSession = useCallback((session: QRSession) => {
    setConfig((prev) => ({ ...prev, content: session.content }));
  }, []);

  return {
    config,
    qrDataUrl,
    sessions,
    isGenerating,
    updateContent,
    updateSize,
    updateQuietZone,
    updateCornerStyle,
    toggleGradient,
    updateColorStart,
    updateColorEnd,
    updateLogo,
    download,
    copyToClipboard,
    copyCurl,
    clearSessions,
    loadSession,
  };
}
