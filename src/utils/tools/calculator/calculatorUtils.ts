export type CalculatorMode = "standard" | "scientific";
export type AngleUnit = "DEG" | "RAD";
export type NotationMode = "NORMAL" | "SCIENTIFIC";

export interface HistoryItem {
  id: string;
  expression: string;
  result: string;
  mode: CalculatorMode;
  timestamp: number;
}

/**
 * Convert degrees to radians
 */
export function degToRad(degrees: number): number {
  return (degrees * Math.PI) / 180;
}

/**
 * Convert radians to degrees
 */
export function radToDeg(radians: number): number {
  return (radians * 180) / Math.PI;
}

/**
 * Calculate factorial
 */
export function factorial(n: number): number {
  if (n < 0) throw new Error("Factorial of negative number");
  if (n === 0 || n === 1) return 1;
  if (n > 170) throw new Error("Number too large for factorial");

  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

/**
 * Safe evaluate mathematical expression
 */
export function evaluateExpression(
  expression: string,
  angleUnit: AngleUnit = "DEG"
): number {
  try {
    // Replace mathematical symbols
    let processedExpr = expression
      .replace(/×/g, "*")
      .replace(/÷/g, "/")
      .replace(/π/g, Math.PI.toString())
      .replace(/e(?![0-9])/g, Math.E.toString());

    // Handle trigonometric functions with angle unit
    if (angleUnit === "DEG") {
      processedExpr = processedExpr.replace(
        /sin\(([^)]+)\)/g,
        (_, angle) => `Math.sin(${degToRad(Number(angle))})`
      );
      processedExpr = processedExpr.replace(
        /cos\(([^)]+)\)/g,
        (_, angle) => `Math.cos(${degToRad(Number(angle))})`
      );
      processedExpr = processedExpr.replace(
        /tan\(([^)]+)\)/g,
        (_, angle) => `Math.tan(${degToRad(Number(angle))})`
      );
    } else {
      processedExpr = processedExpr.replace(/sin/g, "Math.sin");
      processedExpr = processedExpr.replace(/cos/g, "Math.cos");
      processedExpr = processedExpr.replace(/tan/g, "Math.tan");
    }

    // Handle other mathematical functions
    processedExpr = processedExpr.replace(/log/g, "Math.log10");
    processedExpr = processedExpr.replace(/ln/g, "Math.log");
    processedExpr = processedExpr.replace(/√/g, "Math.sqrt");
    processedExpr = processedExpr.replace(/\|([^|]+)\|/g, "Math.abs($1)");

    // Handle factorial
    processedExpr = processedExpr.replace(/(\d+)!/g, (match, num) => {
      return factorial(Number(num)).toString();
    });

    // Handle exponentiation
    processedExpr = processedExpr.replace(/(\d+)\^(\d+)/g, "Math.pow($1,$2)");

    // Evaluate using Function constructor (safer than eval)
    const result = new Function(`return ${processedExpr}`)();

    if (typeof result !== "number" || !isFinite(result)) {
      throw new Error("Invalid result");
    }

    return result;
  } catch (error) {
    throw new Error("Invalid expression");
  }
}

/**
 * Format number for display
 */
export function formatNumber(
  num: number,
  notation: NotationMode = "NORMAL",
  maxDecimals: number = 10
): string {
  if (!isFinite(num)) {
    return "Error";
  }

  if (notation === "SCIENTIFIC") {
    return num.toExponential(6);
  }

  // Handle very large or very small numbers
  if (Math.abs(num) > 1e15 || (Math.abs(num) < 1e-6 && num !== 0)) {
    return num.toExponential(6);
  }

  // Round to max decimals
  const rounded =
    Math.round(num * Math.pow(10, maxDecimals)) / Math.pow(10, maxDecimals);

  // Remove trailing zeros
  return rounded.toString().replace(/\.?0+$/, "");
}

/**
 * Validate expression syntax
 */
export function validateExpression(expression: string): boolean {
  if (!expression) return false;

  // Check balanced parentheses
  let openCount = 0;
  for (const char of expression) {
    if (char === "(") openCount++;
    if (char === ")") openCount--;
    if (openCount < 0) return false;
  }
  if (openCount !== 0) return false;

  // Check for invalid patterns
  const invalidPatterns = [
    /[\+\-×÷]{2,}/, // Multiple operators
    /[\(\+\-×÷]$/, // Ending with operator or opening parenthesis
    /^[\)×÷]/, // Starting with closing parenthesis or operator
  ];

  return !invalidPatterns.some((pattern) => pattern.test(expression));
}

/**
 * Group history by date
 */
export function groupHistoryByDate(
  history: HistoryItem[]
): Record<string, HistoryItem[]> {
  const groups: Record<string, HistoryItem[]> = {
    Today: [],
    Yesterday: [],
    "This Week": [],
    Older: [],
  };

  const now = Date.now();
  const oneDay = 24 * 60 * 60 * 1000;
  const oneWeek = 7 * oneDay;

  for (const item of history) {
    const age = now - item.timestamp;

    if (age < oneDay) {
      groups.Today.push(item);
    } else if (age < 2 * oneDay) {
      groups.Yesterday.push(item);
    } else if (age < oneWeek) {
      groups["This Week"].push(item);
    } else {
      groups.Older.push(item);
    }
  }

  // Remove empty groups
  Object.keys(groups).forEach((key) => {
    if (groups[key].length === 0) {
      delete groups[key];
    }
  });

  return groups;
}

/**
 * Export history as JSON
 */
export function exportHistory(history: HistoryItem[]): void {
  const dataStr = JSON.stringify(history, null, 2);
  const blob = new Blob([dataStr], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `calculator-history-${Date.now()}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
