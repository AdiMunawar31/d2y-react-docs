// Utils untuk Timestamp Converter Operations

export interface Milestone {
  id: string;
  label: string;
  timestamp: number;
  isWarning?: boolean;
}

export interface CodeSnippet {
  language: string;
  code: string;
  color: string;
  badge: string;
}

/**
 * Get current Unix timestamp (seconds)
 */
export function getCurrentTimestamp(): number {
  return Math.floor(Date.now() / 1000);
}

/**
 * Convert Date to Unix timestamp
 */
export function dateToTimestamp(date: Date): number {
  return Math.floor(date.getTime() / 1000);
}

/**
 * Convert Unix timestamp to Date
 */
export function timestampToDate(timestamp: number): Date {
  return new Date(timestamp * 1000);
}

/**
 * Format date to ISO string for datetime-local input
 */
export function formatDateForInput(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");

  return `${year}-${month}-${day}T${hours}:${minutes}`;
}

/**
 * Format date to human-readable string
 */
export function formatHumanReadable(date: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  };

  return date.toLocaleString("en-US", options);
}

/**
 * Get timezone name
 */
export function getTimezoneName(date: Date): string {
  const formatter = new Intl.DateTimeFormat("en-US", {
    timeZoneName: "long",
  });

  const parts = formatter.formatToParts(date);
  const timeZonePart = parts.find((part) => part.type === "timeZoneName");

  return timeZonePart?.value || "UTC";
}

/**
 * Calculate relative time
 */
export function getRelativeTime(timestamp: number): string {
  const now = getCurrentTimestamp();
  const diff = timestamp - now;
  const absDiff = Math.abs(diff);

  const seconds = absDiff;
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (absDiff < 60) {
    return diff > 0 ? "in a few seconds" : "a few seconds ago";
  } else if (absDiff < 3600) {
    const m = Math.floor(absDiff / 60);
    return diff > 0
      ? `in ${m} minute${m > 1 ? "s" : ""}`
      : `${m} minute${m > 1 ? "s" : ""} ago`;
  } else if (absDiff < 86400) {
    const h = Math.floor(absDiff / 3600);
    return diff > 0
      ? `in ${h} hour${h > 1 ? "s" : ""}`
      : `${h} hour${h > 1 ? "s" : ""} ago`;
  } else {
    return diff > 0
      ? `in ${days} day${days > 1 ? "s" : ""}`
      : `${days} day${days > 1 ? "s" : ""} ago`;
  }
}

/**
 * Format countdown timer (HH:MM:SS or DD:HH:MM:SS)
 */
export function formatCountdown(targetTimestamp: number): string {
  const now = getCurrentTimestamp();
  const diff = Math.max(0, targetTimestamp - now);

  const seconds = diff % 60;
  const minutes = Math.floor(diff / 60) % 60;
  const hours = Math.floor(diff / 3600) % 24;
  const days = Math.floor(diff / 86400);

  if (days > 0) {
    return `${days}:${String(hours).padStart(2, "0")}:${String(
      minutes
    ).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  }

  return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
    2,
    "0"
  )}:${String(seconds).padStart(2, "0")}`;
}

/**
 * Get predefined milestones
 */
export function getMilestones(): Milestone[] {
  const now = new Date();

  // End of today
  const endOfDay = new Date(now);
  endOfDay.setHours(23, 59, 59, 999);

  // New Year 2025
  const newYear2027 = new Date("2027-01-01T00:00:00Z");

  // Y2K38 (Unix 32-bit overflow)
  const y2k38 = new Date("2038-01-19T03:14:07Z");

  return [
    {
      id: "end-of-day",
      label: "End of Today",
      timestamp: dateToTimestamp(endOfDay),
    },
    {
      id: "new-year-2027",
      label: "New Year 2027",
      timestamp: dateToTimestamp(newYear2027),
    },
    {
      id: "y2k38",
      label: "Y2K38 Overflow",
      timestamp: 2147483647, // Max 32-bit signed integer
      isWarning: true,
    },
  ];
}

/**
 * Format milestone countdown display
 */
export function formatMilestoneCountdown(
  targetTimestamp: number,
  isWarning?: boolean
): string {
  const now = getCurrentTimestamp();
  const diff = Math.max(0, targetTimestamp - now);
  const days = Math.floor(diff / 86400);

  if (isWarning && days > 365) {
    return `${Math.floor(days / 365).toLocaleString()} Years`;
  }

  if (days > 0) {
    return `${days.toLocaleString()} Day${days > 1 ? "s" : ""}`;
  }

  return formatCountdown(targetTimestamp);
}

/**
 * Get code snippets for different languages
 */
export function getCodeSnippets(timestamp: number): CodeSnippet[] {
  return [
    {
      language: "Python",
      code: `import time\ntime.time()  # ${timestamp}`,
      color: "blue",
      badge: "PY",
    },
    {
      language: "JavaScript",
      code: `Math.floor(Date.now() / 1000)  // ${timestamp}`,
      color: "yellow",
      badge: "JS",
    },
    {
      language: "PHP",
      code: `time();  // ${timestamp}`,
      color: "purple",
      badge: "PHP",
    },
    {
      language: "Ruby",
      code: `Time.now.to_i  # ${timestamp}`,
      color: "red",
      badge: "RB",
    },
    {
      language: "Go",
      code: `time.Now().Unix()  // ${timestamp}`,
      color: "cyan",
      badge: "GO",
    },
    {
      language: "Java",
      code: `System.currentTimeMillis() / 1000  // ${timestamp}`,
      color: "orange",
      badge: "JV",
    },
  ];
}

/**
 * Get color class for language badge
 */
export function getLanguageColor(color: string): string {
  const colors: Record<string, string> = {
    blue: "bg-blue-500/20 text-blue-400",
    yellow: "bg-yellow-500/20 text-yellow-400",
    purple: "bg-purple-500/20 text-purple-400",
    red: "bg-red-500/20 text-red-400",
    cyan: "bg-cyan-500/20 text-cyan-400",
    orange: "bg-orange-500/20 text-orange-400",
  };

  return colors[color] || "bg-gray-500/20 text-gray-400";
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
 * Validate timestamp input
 */
export function isValidTimestamp(timestamp: number): boolean {
  // Check if it's a valid number
  if (!Number.isFinite(timestamp)) return false;

  // Check if it's within reasonable bounds (1970-2100)
  const minTimestamp = 0;
  const maxTimestamp = 4102444800; // 2100-01-01

  return timestamp >= minTimestamp && timestamp <= maxTimestamp;
}

/**
 * Get UTC offset string
 */
export function getUTCOffset(): string {
  const offset = new Date().getTimezoneOffset();
  const hours = Math.floor(Math.abs(offset) / 60);
  const minutes = Math.abs(offset) % 60;
  const sign = offset <= 0 ? "+" : "-";

  return `${sign}${String(hours).padStart(2, "0")}:${String(minutes).padStart(
    2,
    "0"
  )}`;
}
