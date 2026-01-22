import { useState, useCallback, useEffect } from "react";
import {
  DEFAULT_PASSWORD_CONFIG,
  generatePassword,
  generateBulkPasswords,
  calculatePasswordStrength,
  saveToHistory,
  getHistory,
  clearHistory as clearHistoryUtil,
  copyToClipboard as copyToClipboardUtil,
  exportAsCSV,
  exportAsTXT,
  type PasswordConfig,
  type PasswordStrength,
  type PasswordHistory,
} from "@/utils/tools/password-generator/passwordGeneratorUtils";

export function usePasswordGenerator() {
  const [config, setConfig] = useState<PasswordConfig>(DEFAULT_PASSWORD_CONFIG);
  const [password, setPassword] = useState("");
  const [strength, setStrength] = useState<PasswordStrength | null>(null);
  const [history, setHistory] = useState<PasswordHistory[]>([]);
  const [bulkPasswords, setBulkPasswords] = useState<string[]>([]);
  const [bulkQuantity, setBulkQuantity] = useState(25);

  useEffect(() => {
    setHistory(getHistory());
  }, []);

  useEffect(() => {
    handleGenerate();
  }, []);

  useEffect(() => {
    if (password) {
      const newStrength = calculatePasswordStrength(password, config);
      setStrength(newStrength);
    }
  }, [password, config]);

  const handleGenerate = useCallback(() => {
    try {
      const newPassword = generatePassword(config);
      setPassword(newPassword);

      saveToHistory(newPassword, config);
      setHistory(getHistory());
    } catch (error) {
      console.error("Password generation failed:", error);
      setPassword("Error: Invalid configuration");
    }
  }, [config]);

  const updateLength = useCallback((length: number) => {
    setConfig((prev) => ({ ...prev, length }));
  }, []);

  const toggleUppercase = useCallback(() => {
    setConfig((prev) => ({ ...prev, uppercase: !prev.uppercase }));
  }, []);

  const toggleLowercase = useCallback(() => {
    setConfig((prev) => ({ ...prev, lowercase: !prev.lowercase }));
  }, []);

  const toggleNumbers = useCallback(() => {
    setConfig((prev) => ({ ...prev, numbers: !prev.numbers }));
  }, []);

  const toggleSymbols = useCallback(() => {
    setConfig((prev) => ({ ...prev, symbols: !prev.symbols }));
  }, []);

  const toggleExcludeSimilar = useCallback(() => {
    setConfig((prev) => ({ ...prev, excludeSimilar: !prev.excludeSimilar }));
  }, []);

  const toggleBeginWithLetter = useCallback(() => {
    setConfig((prev) => ({ ...prev, beginWithLetter: !prev.beginWithLetter }));
  }, []);

  const toggleNoRepeat = useCallback(() => {
    setConfig((prev) => ({ ...prev, noRepeat: !prev.noRepeat }));
  }, []);

  const copyToClipboard = useCallback(
    async (text: string = password) => {
      return await copyToClipboardUtil(text);
    },
    [password]
  );

  const clearHistory = useCallback(() => {
    clearHistoryUtil();
    setHistory([]);
  }, []);

  const loadFromHistory = useCallback((item: PasswordHistory) => {
    setPassword(item.password);
    setConfig(item.config);
  }, []);

  const generateBulk = useCallback(() => {
    try {
      const passwords = generateBulkPasswords(config, bulkQuantity);
      setBulkPasswords(passwords);
    } catch (error) {
      console.error("Bulk generation failed:", error);
    }
  }, [config, bulkQuantity]);

  const exportCSV = useCallback(() => {
    if (bulkPasswords.length > 0) {
      exportAsCSV(bulkPasswords);
    }
  }, [bulkPasswords]);

  const exportTXT = useCallback(() => {
    if (bulkPasswords.length > 0) {
      exportAsTXT(bulkPasswords);
    }
  }, [bulkPasswords]);

  const updateBulkQuantity = useCallback((quantity: number) => {
    setBulkQuantity(quantity);
  }, []);

  return {
    config,
    password,
    strength,
    history,
    bulkPasswords,
    bulkQuantity,
    handleGenerate,
    updateLength,
    toggleUppercase,
    toggleLowercase,
    toggleNumbers,
    toggleSymbols,
    toggleExcludeSimilar,
    toggleBeginWithLetter,
    toggleNoRepeat,
    copyToClipboard,
    clearHistory,
    loadFromHistory,
    generateBulk,
    exportCSV,
    exportTXT,
    updateBulkQuantity,
  };
}
