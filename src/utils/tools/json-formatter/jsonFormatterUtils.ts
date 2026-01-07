export interface JsonValidationResult {
  isValid: boolean;
  error?: string;
  errorLine?: number;
  errorColumn?: number;
}

export interface JsonStats {
  lines: number;
  characters: number;
  size: string;
  depth: number;
  keys: number;
}

/**
 * Validate JSON string
 */
export function validateJson(input: string): JsonValidationResult {
  if (!input.trim()) {
    return { isValid: false, error: "Empty input" };
  }

  try {
    JSON.parse(input);
    return { isValid: true };
  } catch (error) {
    if (error instanceof SyntaxError) {
      const match = error.message.match(/position (\d+)/);
      const position = match ? parseInt(match[1]) : 0;

      const lines = input.substring(0, position).split("\n");
      const errorLine = lines.length;
      const errorColumn = lines[lines.length - 1].length + 1;

      return {
        isValid: false,
        error: error.message,
        errorLine,
        errorColumn,
      };
    }
    return { isValid: false, error: "Unknown error occurred" };
  }
}

/**
 * Format JSON with indentation
 */
export function formatJson(input: string, indent: number = 2): string | null {
  try {
    const parsed = JSON.parse(input);
    return JSON.stringify(parsed, null, indent);
  } catch {
    return null;
  }
}

/**
 * Minify JSON (remove whitespace)
 */
export function minifyJson(input: string): string | null {
  try {
    const parsed = JSON.parse(input);
    return JSON.stringify(parsed);
  } catch {
    return null;
  }
}

/**
 * Escape JSON string for safe display
 */
export function escapeJson(input: string): string | null {
  try {
    const parsed = JSON.parse(input);
    return JSON.stringify(JSON.stringify(parsed));
  } catch {
    return null;
  }
}

/**
 * Calculate JSON depth (nesting level)
 */
function getJsonDepth(obj: any, currentDepth: number = 0): number {
  if (obj === null || typeof obj !== "object") {
    return currentDepth;
  }

  const depths = Object.values(obj).map((value) =>
    getJsonDepth(value, currentDepth + 1)
  );

  return depths.length > 0 ? Math.max(...depths) : currentDepth;
}

/**
 * Count total keys in JSON
 */
function countKeys(obj: any): number {
  if (obj === null || typeof obj !== "object") {
    return 0;
  }

  let count = Object.keys(obj).length;

  for (const value of Object.values(obj)) {
    if (typeof value === "object" && value !== null) {
      count += countKeys(value);
    }
  }

  return count;
}

/**
 * Get JSON statistics
 */
export function getJsonStats(input: string): JsonStats | null {
  try {
    const parsed = JSON.parse(input);
    const formatted = JSON.stringify(parsed, null, 2);
    const lines = formatted.split("\n").length;
    const characters = input.length;
    const bytes = new Blob([input]).size;

    let size = "";
    if (bytes < 1024) {
      size = `${bytes} B`;
    } else if (bytes < 1024 * 1024) {
      size = `${(bytes / 1024).toFixed(2)} KB`;
    } else {
      size = `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
    }

    return {
      lines,
      characters,
      size,
      depth: getJsonDepth(parsed),
      keys: countKeys(parsed),
    };
  } catch {
    return null;
  }
}

/**
 * Sort JSON keys alphabetically
 */
export function sortJsonKeys(input: string): string | null {
  try {
    const parsed = JSON.parse(input);
    const sorted = sortObjectKeys(parsed);
    return JSON.stringify(sorted, null, 2);
  } catch {
    return null;
  }
}

function sortObjectKeys(obj: any): any {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map(sortObjectKeys);
  }

  const sorted: any = {};
  const keys = Object.keys(obj).sort();

  for (const key of keys) {
    sorted[key] = sortObjectKeys(obj[key]);
  }

  return sorted;
}

/**
 * Sample JSON templates
 */
export const JSON_SAMPLES = {
  basic: `{
  "name": "John Doe",
  "age": 30,
  "email": "john@example.com",
  "active": true
}`,
  nested: `{
  "user": {
    "id": 1,
    "profile": {
      "name": "Jane Smith",
      "settings": {
        "theme": "dark",
        "notifications": true
      }
    }
  }
}`,
  array: `{
  "products": [
    {
      "id": 1,
      "name": "Product A",
      "price": 29.99
    },
    {
      "id": 2,
      "name": "Product B",
      "price": 49.99
    }
  ]
}`,
};
