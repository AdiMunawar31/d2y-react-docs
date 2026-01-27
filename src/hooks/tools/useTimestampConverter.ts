import { useState, useCallback, useEffect } from "react";
import {
  getCurrentTimestamp,
  dateToTimestamp,
  timestampToDate,
  formatDateForInput,
  formatHumanReadable,
  getTimezoneName,
  getRelativeTime,
  getMilestones,
  getCodeSnippets,
  copyToClipboard as copyToClipboardUtil,
  isValidTimestamp,
  getUTCOffset,
  type Milestone,
  type CodeSnippet,
} from "@/utils/tools/timestamp-converter/timestampConverterUtils";

export function useTimestampConverter() {
  const [currentTimestamp, setCurrentTimestamp] = useState(
    getCurrentTimestamp()
  );
  const [dateInput, setDateInput] = useState(formatDateForInput(new Date()));
  const [timestampInput, setTimestampInput] = useState("");
  const [resultTimestamp, setResultTimestamp] = useState(getCurrentTimestamp());
  const [resultDate, setResultDate] = useState(new Date());
  const [milestones, setMilestones] = useState<Milestone[]>([]);
  const [codeSnippets, setCodeSnippets] = useState<CodeSnippet[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTimestamp(getCurrentTimestamp());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Update milestones every second
  useEffect(() => {
    const interval = setInterval(() => {
      setMilestones(getMilestones());
    }, 1000);

    // Initial load
    setMilestones(getMilestones());

    return () => clearInterval(interval);
  }, []);

  // Update code snippets when current timestamp changes
  useEffect(() => {
    setCodeSnippets(getCodeSnippets(currentTimestamp));
  }, [currentTimestamp]);

  // Convert date to timestamp
  const handleDateToTimestamp = useCallback(() => {
    try {
      const date = new Date(dateInput);
      if (isNaN(date.getTime())) {
        console.error("Invalid date input");
        return;
      }
      const timestamp = dateToTimestamp(date);
      setResultTimestamp(timestamp);
    } catch (error) {
      console.error("Date conversion failed:", error);
    }
  }, [dateInput]);

  // Auto-convert when date changes
  useEffect(() => {
    handleDateToTimestamp();
  }, [handleDateToTimestamp]);

  // Convert timestamp to date
  const handleTimestampToDate = useCallback(() => {
    try {
      const timestamp = parseInt(timestampInput);

      if (!isValidTimestamp(timestamp)) {
        console.error("Invalid timestamp");
        return;
      }

      const date = timestampToDate(timestamp);
      setResultDate(date);
    } catch (error) {
      console.error("Timestamp conversion failed:", error);
    }
  }, [timestampInput]);

  // Auto-convert when timestamp changes
  useEffect(() => {
    if (timestampInput) {
      handleTimestampToDate();
    }
  }, [handleTimestampToDate, timestampInput]);

  // Set current time to date input
  const setCurrentToDateInput = useCallback(() => {
    setDateInput(formatDateForInput(new Date()));
  }, []);

  // Set current timestamp to input
  const setCurrentToTimestampInput = useCallback(() => {
    setTimestampInput(currentTimestamp.toString());
  }, [currentTimestamp]);

  // Copy to clipboard
  const copyToClipboard = useCallback(async (text: string) => {
    return await copyToClipboardUtil(text);
  }, []);

  // Get human-readable date
  const getHumanReadableDate = useCallback(() => {
    return formatHumanReadable(resultDate);
  }, [resultDate]);

  // Get timezone
  const getTimezone = useCallback(() => {
    return getTimezoneName(resultDate);
  }, [resultDate]);

  // Get relative time for timestamp input
  const getRelativeTimeForInput = useCallback(() => {
    if (!timestampInput) return "";
    const timestamp = parseInt(timestampInput);
    if (!isValidTimestamp(timestamp)) return "";
    return getRelativeTime(timestamp);
  }, [timestampInput]);

  // Update date input
  const updateDateInput = useCallback((value: string) => {
    setDateInput(value);
  }, []);

  // Update timestamp input
  const updateTimestampInput = useCallback((value: string) => {
    setTimestampInput(value);
  }, []);

  return {
    currentTimestamp,
    dateInput,
    timestampInput,
    resultTimestamp,
    resultDate,
    milestones,
    codeSnippets,
    utcOffset: getUTCOffset(),
    updateDateInput,
    updateTimestampInput,
    setCurrentToDateInput,
    setCurrentToTimestampInput,
    copyToClipboard,
    getHumanReadableDate,
    getTimezone,
    getRelativeTimeForInput,
  };
}
