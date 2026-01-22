export interface PasswordConfig {
  length: number;
  uppercase: boolean;
  lowercase: boolean;
  numbers: boolean;
  symbols: boolean;
  excludeSimilar: boolean;
  beginWithLetter: boolean;
  noRepeat: boolean;
}

export interface PasswordStrength {
  entropy: number;
  timeToCrack: string;
  complexity: string;
  score: number; // 0-100
}

export interface PasswordHistory {
  id: string;
  password: string;
  timestamp: number;
  config: PasswordConfig;
}

/**
 * Character sets
 */
const UPPERCASE = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LOWERCASE = "abcdefghijklmnopqrstuvwxyz";
const NUMBERS = "0123456789";
const SYMBOLS = "!@#$%^&*()_+-=[]{}|;:,.<>?";

/**
 * Similar characters to exclude
 */
const SIMILAR_CHARS = "il1Lo0O";

/**
 * Default configuration
 */
export const DEFAULT_PASSWORD_CONFIG: PasswordConfig = {
  length: 24,
  uppercase: true,
  lowercase: true,
  numbers: true,
  symbols: true,
  excludeSimilar: true,
  beginWithLetter: false,
  noRepeat: false,
};

/**
 * Get character set based on config
 */
export function getCharacterSet(config: PasswordConfig): string {
  let charset = "";

  if (config.uppercase) charset += UPPERCASE;
  if (config.lowercase) charset += LOWERCASE;
  if (config.numbers) charset += NUMBERS;
  if (config.symbols) charset += SYMBOLS;

  // Exclude similar characters
  if (config.excludeSimilar) {
    charset = charset
      .split("")
      .filter((char) => !SIMILAR_CHARS.includes(char))
      .join("");
  }

  return charset;
}

/**
 * Generate a single password
 */
export function generatePassword(config: PasswordConfig): string {
  const charset = getCharacterSet(config);

  if (charset.length === 0) {
    throw new Error("No character types selected");
  }

  let password = "";
  const usedChars = new Set<string>();

  // Generate password
  for (let i = 0; i < config.length; i++) {
    let char: string;

    // First character should be a letter if configured
    if (i === 0 && config.beginWithLetter) {
      const letters = charset.split("").filter((c) => /[a-zA-Z]/.test(c));

      if (letters.length === 0) {
        throw new Error("Cannot begin with letter - no letters available");
      }

      char = letters[Math.floor(Math.random() * letters.length)];
    } else {
      // Get random character
      do {
        char = charset[Math.floor(Math.random() * charset.length)];
      } while (
        config.noRepeat &&
        usedChars.has(char) &&
        usedChars.size < charset.length
      );
    }

    password += char;
    if (config.noRepeat) usedChars.add(char);

    // If no repeat and we've used all characters, break
    if (
      config.noRepeat &&
      usedChars.size === charset.length &&
      i < config.length - 1
    ) {
      break;
    }
  }

  return password;
}

/**
 * Generate multiple passwords
 */
export function generateBulkPasswords(
  config: PasswordConfig,
  quantity: number
): string[] {
  // const passwords: string[] = [];
  const uniquePasswords = new Set<string>();

  while (uniquePasswords.size < quantity) {
    const password = generatePassword(config);
    uniquePasswords.add(password);
  }

  return Array.from(uniquePasswords);
}

/**
 * Calculate password entropy (in bits)
 */
export function calculateEntropy(
  password: string,
  config: PasswordConfig
): number {
  const charset = getCharacterSet(config);
  const poolSize = charset.length;

  if (poolSize === 0) return 0;

  // Entropy = log2(poolSize^length)
  const entropy = password.length * Math.log2(poolSize);
  return Math.round(entropy);
}

/**
 * Estimate time to crack password
 */
export function estimateTimeToCrack(entropy: number): string {
  // Assuming 10 billion attempts per second
  const attemptsPerSecond = 10_000_000_000;
  const possibleCombinations = Math.pow(2, entropy);
  const seconds = possibleCombinations / (2 * attemptsPerSecond);

  if (seconds < 1) return "Instant";
  if (seconds < 60) return `${Math.round(seconds)} seconds`;
  if (seconds < 3600) return `${Math.round(seconds / 60)} minutes`;
  if (seconds < 86400) return `${Math.round(seconds / 3600)} hours`;
  if (seconds < 31536000) return `${Math.round(seconds / 86400)} days`;
  if (seconds < 3153600000) return `${Math.round(seconds / 31536000)} years`;

  return `~${Math.round(seconds / 31536000)} years`;
}

/**
 * Calculate password strength
 */
export function calculatePasswordStrength(
  password: string,
  config: PasswordConfig
): PasswordStrength {
  const entropy = calculateEntropy(password, config);
  const timeToCrack = estimateTimeToCrack(entropy);

  let complexity = "Weak";
  let score = 0;

  if (entropy < 40) {
    complexity = "Weak";
    score = 20;
  } else if (entropy < 60) {
    complexity = "Fair";
    score = 40;
  } else if (entropy < 80) {
    complexity = "Good";
    score = 60;
  } else if (entropy < 100) {
    complexity = "Strong";
    score = 80;
  } else {
    complexity = "Excellent";
    score = 100;
  }

  return {
    entropy,
    timeToCrack,
    complexity,
    score,
  };
}

/**
 * Format relative time
 */
export function formatRelativeTime(timestamp: number): string {
  const now = Date.now();
  const diff = now - timestamp;

  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (seconds < 60) return `${seconds} secs ago`;
  if (minutes < 60) return `${minutes} mins ago`;
  if (hours < 24) return `${hours} hour${hours > 1 ? "s" : ""} ago`;
  return `${days} day${days > 1 ? "s" : ""} ago`;
}

/**
 * Export passwords as CSV
 */
export function exportAsCSV(passwords: string[]): void {
  const csv = ["Password,Generated At"]
    .concat(passwords.map((pwd) => `"${pwd}",${new Date().toISOString()}`))
    .join("\n");

  downloadFile(csv, "passwords.csv", "text/csv");
}

/**
 * Export passwords as TXT
 */
export function exportAsTXT(passwords: string[]): void {
  const txt = passwords.join("\n");
  downloadFile(txt, "passwords.txt", "text/plain");
}

/**
 * Download file helper
 */
function downloadFile(content: string, filename: string, type: string): void {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

/**
 * Save history to localStorage
 */
export function saveToHistory(password: string, config: PasswordConfig): void {
  try {
    const history = getHistory();
    const item: PasswordHistory = {
      id: Date.now().toString(),
      password,
      timestamp: Date.now(),
      config,
    };

    history.unshift(item);
    const limited = history.slice(0, 20); // Keep last 20

    localStorage.setItem("password_history", JSON.stringify(limited));
  } catch (error) {
    console.warn("Failed to save history:", error);
  }
}

/**
 * Get history from localStorage
 */
export function getHistory(): PasswordHistory[] {
  try {
    const data = localStorage.getItem("password_history");
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
}

/**
 * Clear history
 */
export function clearHistory(): void {
  try {
    localStorage.removeItem("password_history");
  } catch (error) {
    console.warn("Failed to clear history:", error);
  }
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
