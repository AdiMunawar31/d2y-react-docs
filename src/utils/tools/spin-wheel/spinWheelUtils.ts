// Utils untuk Spin Wheel Operations

export interface SpinResult {
  id: string;
  name: string;
  timestamp: number;
}

export interface WheelSegment {
  name: string;
  color: string;
  startAngle: number;
  endAngle: number;
}

// Predefined vibrant colors for wheel segments
export const WHEEL_COLORS = [
  "#3b82f6", // Blue
  "#8b5cf6", // Violet
  "#ec4899", // Pink
  "#ef4444", // Red
  "#f97316", // Orange
  "#eab308", // Yellow
  "#22c55e", // Green
  "#06b6d4", // Cyan
  "#6366f1", // Indigo
  "#a855f7", // Purple
  "#f43f5e", // Rose
  "#14b8a6", // Teal
];

/**
 * Parse entries from textarea
 */
export function parseEntries(text: string): string[] {
  return text
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line.length > 0);
}

/**
 * Generate wheel segments from entries
 */
export function generateWheelSegments(entries: string[]): WheelSegment[] {
  if (entries.length === 0) return [];

  const anglePerSegment = 360 / entries.length;

  return entries.map((name, index) => ({
    name,
    color: WHEEL_COLORS[index % WHEEL_COLORS.length],
    startAngle: index * anglePerSegment,
    endAngle: (index + 1) * anglePerSegment,
  }));
}

/**
 * Calculate SVG path for wheel segment
 */
export function calculateSegmentPath(
  startAngle: number,
  endAngle: number,
  radius: number = 50
): string {
  const startRad = (startAngle - 90) * (Math.PI / 180);
  const endRad = (endAngle - 90) * (Math.PI / 180);

  const x1 = 50 + radius * Math.cos(startRad);
  const y1 = 50 + radius * Math.sin(startRad);
  const x2 = 50 + radius * Math.cos(endRad);
  const y2 = 50 + radius * Math.sin(endRad);

  const largeArc = endAngle - startAngle > 180 ? 1 : 0;

  return `M 50 50 L ${x1} ${y1} A ${radius} ${radius} 0 ${largeArc} 1 ${x2} ${y2} Z`;
}

/**
 * Get random spin duration (3-6 seconds)
 */
export function getRandomSpinDuration(): number {
  return 3000 + Math.random() * 3000;
}

/**
 * Get random final rotation (minimum 5 full rotations + random angle)
 */
export function getRandomRotation(): number {
  const minRotations = 5;
  const maxRotations = 10;
  const rotations =
    minRotations + Math.random() * (maxRotations - minRotations);
  return rotations * 360 + Math.random() * 360;
}

/**
 * Determine winner based on final rotation angle
 */
export function determineWinner(
  finalRotation: number,
  segments: WheelSegment[]
): string | null {
  if (segments.length === 0) return null;

  // Normalize rotation to 0-360
  const normalizedRotation = finalRotation % 360;

  // The pointer is at the top (0 degrees), so we need to find which segment is at the top
  // Account for the wheel rotating clockwise
  const targetAngle = (360 - normalizedRotation) % 360;

  for (const segment of segments) {
    if (targetAngle >= segment.startAngle && targetAngle < segment.endAngle) {
      return segment.name;
    }
  }

  return segments[0].name;
}

/**
 * Shuffle array
 */
export function shuffleArray<T>(array: T[]): T[] {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

/**
 * Sort array alphabetically
 */
export function sortAlphabetically(array: string[]): string[] {
  return [...array].sort((a, b) => a.localeCompare(b));
}

/**
 * Format timestamp
 */
export function formatTimestamp(timestamp: number): string {
  const date = new Date(timestamp);
  const now = new Date();
  const isToday = date.toDateString() === now.toDateString();

  if (isToday) {
    return date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  }

  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
}

/**
 * Export results as JSON
 */
export function exportResults(results: SpinResult[]): void {
  const dataStr = JSON.stringify(results, null, 2);
  const blob = new Blob([dataStr], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `spin-wheel-results-${Date.now()}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

/**
 * Play audio
 */
export function playAudio(audioPath: string, volume: number = 0.5): void {
  try {
    const audio = new Audio(audioPath);
    audio.volume = volume;
    audio.play().catch((error) => {
      console.warn("Audio play failed:", error);
    });
  } catch (error) {
    console.warn("Audio creation failed:", error);
  }
}
