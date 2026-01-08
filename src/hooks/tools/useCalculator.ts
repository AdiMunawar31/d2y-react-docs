import { useState, useCallback } from "react";
import {
  evaluateExpression,
  formatNumber,
  validateExpression,
  type AngleUnit,
  type NotationMode,
  type CalculatorMode,
  type HistoryItem,
} from "@/utils/tools/calculator/calculatorUtils";
import { D2YToast } from "@/components/base/D2YToast";

export function useCalculator() {
  const [display, setDisplay] = useState("0");
  const [expression, setExpression] = useState("");
  const [previousExpression, setPreviousExpression] = useState("");
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [memory, setMemory] = useState<number[]>([]);
  const [angleUnit, setAngleUnit] = useState<AngleUnit>("DEG");
  const [notation, setNotation] = useState<NotationMode>("NORMAL");
  const [mode, setMode] = useState<CalculatorMode>("standard");
  const [isSecondFunction, setIsSecondFunction] = useState(false);

  const appendToExpression = useCallback((value: string) => {
    setExpression((prev) => {
      if (prev === "0" && value !== ".") {
        return value;
      }
      return prev + value;
    });
  }, []);

  const handleNumber = useCallback(
    (num: string) => {
      appendToExpression(num);
    },
    [appendToExpression]
  );

  const handleOperator = useCallback(
    (operator: string) => {
      appendToExpression(operator);
    },
    [appendToExpression]
  );

  const handleFunction = useCallback(
    (func: string) => {
      if (func === "x²") {
        setExpression((prev) => `(${prev})^2`);
      } else if (func === "1/x") {
        setExpression((prev) => `1/(${prev})`);
      } else if (func === "|x|") {
        setExpression((prev) => `|${prev}|`);
      } else if (func === "n!") {
        setExpression((prev) => `${prev}!`);
      } else {
        appendToExpression(`${func}(`);
      }
    },
    [appendToExpression]
  );

  const calculate = useCallback(() => {
    try {
      if (!validateExpression(expression)) {
        setDisplay("Syntax Error");
        D2YToast.error({
          title: "Invalid Expression",
          description: "Please check your syntax",
        });
        return;
      }

      const result = evaluateExpression(expression, angleUnit);
      const formattedResult = formatNumber(result, notation);

      setDisplay(formattedResult);
      setPreviousExpression(expression);

      const historyItem: HistoryItem = {
        id: Date.now().toString(),
        expression,
        result: formattedResult,
        mode,
        timestamp: Date.now(),
      };

      setHistory((prev) => [historyItem, ...prev]);
      setExpression(formattedResult);
    } catch (error) {
      setDisplay("Error");
      D2YToast.error({
        title: "Calculation Error",
        description: "Unable to evaluate expression",
      });
    }
  }, [expression, angleUnit, notation, mode]);

  const clear = useCallback(() => {
    setDisplay("0");
    setExpression("");
    setPreviousExpression("");
  }, []);

  const backspace = useCallback(() => {
    setExpression((prev) => {
      if (prev.length <= 1) return "0";
      return prev.slice(0, -1);
    });
  }, []);

  const toggleAngleUnit = useCallback(() => {
    setAngleUnit((prev) => (prev === "DEG" ? "RAD" : "DEG"));
  }, []);

  const toggleNotation = useCallback(() => {
    setNotation((prev) => (prev === "NORMAL" ? "SCIENTIFIC" : "NORMAL"));
  }, []);

  const toggleSecondFunction = useCallback(() => {
    setIsSecondFunction((prev) => !prev);
  }, []);

  const memoryAdd = useCallback(() => {
    try {
      const result = evaluateExpression(expression, angleUnit);
      setMemory((prev) => [...prev, result]);
      D2YToast.success({ title: "Added to memory" });
    } catch {}
  }, [expression, angleUnit]);

  const memorySubtract = useCallback(() => {
    try {
      const result = evaluateExpression(expression, angleUnit);
      setMemory((prev) => [...prev, -result]);
      D2YToast.success({ title: "Subtracted from memory" });
    } catch {}
  }, [expression, angleUnit]);

  const memoryRecall = useCallback(() => {
    if (!memory.length) {
      D2YToast.warning({
        title: "Memory is empty",
      });
      return;
    }

    const sum = memory.reduce((a, b) => a + b, 0);
    setExpression(sum.toString());
    setDisplay(formatNumber(sum, notation));
    D2YToast.info({ title: "Memory recalled" });
  }, [memory, notation]);

  const memoryClear = useCallback(() => {
    setMemory([]);
  }, []);

  const copyToClipboard = useCallback(() => {
    navigator.clipboard.writeText(expression || display);
    D2YToast.copy(expression || display);
  }, [display, expression]);

  const pasteFromClipboard = useCallback(async () => {
    try {
      const text = await navigator.clipboard.readText();
      setExpression(text);
      D2YToast.info({
        title: "Pasted from clipboard",
        description: text,
      });
    } catch {
      D2YToast.error({
        title: "Clipboard Error",
        description: "Cannot access clipboard",
      });
    }
  }, []);

  const loadFromHistory = useCallback((item: HistoryItem) => {
    setExpression(item.result);
    setDisplay(item.result);
  }, []);

  const clearHistory = useCallback(() => {
    setHistory([]);
  }, []);

  const deleteHistoryItem = useCallback((id: string) => {
    setHistory((prev) => prev.filter((item) => item.id !== id));
    D2YToast.info({
      title: "Deleted history item",
    });
  }, []);

  return {
    display,
    expression,
    previousExpression,
    history,
    memory,
    angleUnit,
    notation,
    mode,
    isSecondFunction,
    setMode,
    handleNumber,
    handleOperator,
    handleFunction,
    calculate,
    clear,
    backspace,
    toggleAngleUnit,
    toggleNotation,
    toggleSecondFunction,
    memoryAdd,
    memorySubtract,
    memoryRecall,
    memoryClear,
    copyToClipboard,
    pasteFromClipboard,
    loadFromHistory,
    clearHistory,
    deleteHistoryItem,
    appendToExpression,
  };
}
