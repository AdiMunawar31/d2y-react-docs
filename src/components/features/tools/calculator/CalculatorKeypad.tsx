import { type CalculatorMode } from "@/utils/tools/calculator/calculatorUtils";
import { Delete } from "lucide-react";

interface CalculatorKeypadProps {
  mode: CalculatorMode;
  isSecondFunction: boolean;
  onNumber: (num: string) => void;
  onOperator: (op: string) => void;
  onFunction: (func: string) => void;
  onCalculate: () => void;
  onClear: () => void;
  onBackspace: () => void;
  onToggleSecondFunction: () => void;
  onMemoryAdd: () => void;
  onMemorySubtract: () => void;
  onMemoryRecall: () => void;
  onAppend: (value: string) => void;
}

export default function CalculatorKeypad({
  mode,
  isSecondFunction,
  onNumber,
  onOperator,
  onFunction,
  onCalculate,
  onClear,
  onBackspace,
  onToggleSecondFunction,
  onMemoryAdd,
  onMemorySubtract,
  onMemoryRecall,
  onAppend,
}: CalculatorKeypadProps) {
  if (mode === "standard") {
    return (
      <div className="flex-1 p-6 flex flex-col md:flex-row gap-6 bg-black/5">
        <div className="grid grid-cols-4 gap-3 flex-1 h-full">
          <button
            onClick={onClear}
            className="calculator-glass-button calculator-glass-button-danger h-14 rounded-lg font-bold tracking-wider"
          >
            C
          </button>
          <button
            onClick={() => onOperator("÷")}
            className="calculator-glass-button calculator-glass-button-primary h-14 rounded-lg text-xl"
          >
            ÷
          </button>
          <button
            onClick={() => onOperator("×")}
            className="calculator-glass-button calculator-glass-button-primary h-14 rounded-lg text-xl"
          >
            ×
          </button>
          <button
            onClick={onBackspace}
            className="calculator-glass-button calculator-glass-button-func h-14 flex justify-center items-center rounded-lg hover:text-red-300"
          >
            <Delete />
          </button>

          <button
            onClick={() => onNumber("7")}
            className="calculator-glass-button h-16 rounded-lg text-2xl font-medium"
          >
            7
          </button>
          <button
            onClick={() => onNumber("8")}
            className="calculator-glass-button h-16 rounded-lg text-2xl font-medium"
          >
            8
          </button>
          <button
            onClick={() => onNumber("9")}
            className="calculator-glass-button h-16 rounded-lg text-2xl font-medium"
          >
            9
          </button>
          <button
            onClick={() => onOperator("-")}
            className="calculator-glass-button calculator-glass-button-primary h-16 rounded-lg text-2xl"
          >
            -
          </button>

          <button
            onClick={() => onNumber("4")}
            className="calculator-glass-button h-16 rounded-lg text-2xl font-medium"
          >
            4
          </button>
          <button
            onClick={() => onNumber("5")}
            className="calculator-glass-button h-16 rounded-lg text-2xl font-medium"
          >
            5
          </button>
          <button
            onClick={() => onNumber("6")}
            className="calculator-glass-button h-16 rounded-lg text-2xl font-medium"
          >
            6
          </button>
          <button
            onClick={() => onOperator("+")}
            className="calculator-glass-button calculator-glass-button-primary h-16 rounded-lg text-2xl"
          >
            +
          </button>

          <button
            onClick={() => onNumber("1")}
            className="calculator-glass-button h-16 rounded-lg text-2xl font-medium"
          >
            1
          </button>
          <button
            onClick={() => onNumber("2")}
            className="calculator-glass-button h-16 rounded-lg text-2xl font-medium"
          >
            2
          </button>
          <button
            onClick={() => onNumber("3")}
            className="calculator-glass-button h-16 rounded-lg text-2xl font-medium"
          >
            3
          </button>
          <button
            onClick={onCalculate}
            className="calculator-glass-button-primary h-16 rounded-lg text-3xl font-bold row-span-2 shadow-neon transition-all hover:scale-[1.02] active:scale-95 bg-linear-to-r from-primary to-blue-600"
          >
            =
          </button>

          <button
            onClick={() => onNumber("0")}
            className="calculator-glass-button h-16 rounded-lg text-2xl font-medium col-span-2"
          >
            0
          </button>
          <button
            onClick={() => onNumber(".")}
            className="calculator-glass-button h-16 rounded-lg text-2xl font-medium"
          >
            .
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 p-6 flex flex-col md:flex-row gap-6 bg-black/5">
      <div className="grid grid-cols-4 md:grid-cols-5 gap-3 flex-1 h-full">
        <button
          onClick={onToggleSecondFunction}
          className={`calculator-glass-button calculator-glass-button-func h-12 rounded-lg text-xs ${
            isSecondFunction ? "bg-primary/20 text-primary" : ""
          }`}
        >
          2nd
        </button>
        <button
          onClick={() => onAppend("π")}
          className="calculator-glass-button calculator-glass-button-func h-12 rounded-lg font-serif italic"
        >
          π
        </button>
        <button
          onClick={() => onAppend("e")}
          className="calculator-glass-button calculator-glass-button-func h-12 rounded-lg font-serif italic"
        >
          e
        </button>
        <button
          onClick={onClear}
          className="calculator-glass-button calculator-glass-button-danger h-12 rounded-lg font-bold tracking-wider"
        >
          C
        </button>
        <button
          onClick={onBackspace}
          className="calculator-glass-button calculator-glass-button-func flex justify-center items-center h-12 rounded-lg hover:text-red-300"
        >
          <Delete />
        </button>

        <button
          onClick={() => onFunction("sin")}
          className="calculator-glass-button calculator-glass-button-secondary h-12 rounded-lg text-sm"
        >
          sin
        </button>
        <button
          onClick={() => onFunction("cos")}
          className="calculator-glass-button calculator-glass-button-secondary h-12 rounded-lg text-sm"
        >
          cos
        </button>
        <button
          onClick={() => onFunction("tan")}
          className="calculator-glass-button calculator-glass-button-secondary h-12 rounded-lg text-sm"
        >
          tan
        </button>
        <button
          onClick={() => onAppend("(")}
          className="calculator-glass-button calculator-glass-button-func h-12 rounded-lg text-sm"
        >
          (
        </button>
        <button
          onClick={() => onAppend(")")}
          className="calculator-glass-button calculator-glass-button-func h-12 rounded-lg text-sm"
        >
          )
        </button>

        <button
          onClick={() => onFunction("x²")}
          className="calculator-glass-button calculator-glass-button-secondary h-12 rounded-lg text-sm"
        >
          x²
        </button>
        <button
          onClick={() => onFunction("1/x")}
          className="calculator-glass-button calculator-glass-button-secondary h-12 rounded-lg text-sm"
        >
          1/x
        </button>
        <button
          onClick={() => onFunction("|x|")}
          className="calculator-glass-button calculator-glass-button-secondary h-12 rounded-lg text-sm"
        >
          |x|
        </button>
        <button
          onClick={() => onAppend("exp")}
          className="calculator-glass-button calculator-glass-button-func h-12 rounded-lg text-sm"
        >
          exp
        </button>
        <button
          onClick={() => onAppend("mod")}
          className="calculator-glass-button calculator-glass-button-func h-12 rounded-lg text-sm"
        >
          mod
        </button>

        <button
          onClick={() => onAppend("√")}
          className="calculator-glass-button calculator-glass-button-secondary h-12 rounded-lg text-sm"
        >
          √
        </button>
        <button
          onClick={() => onFunction("log")}
          className="calculator-glass-button calculator-glass-button-secondary h-12 rounded-lg text-sm"
        >
          log
        </button>
        <button
          onClick={() => onFunction("ln")}
          className="calculator-glass-button calculator-glass-button-secondary h-12 rounded-lg text-sm"
        >
          ln
        </button>
        <button
          onClick={() => onFunction("n!")}
          className="calculator-glass-button calculator-glass-button-func h-12 rounded-lg text-sm"
        >
          n!
        </button>
        <button
          onClick={() => onOperator("÷")}
          className="calculator-glass-button calculator-glass-button-primary h-12 rounded-lg text-xl"
        >
          ÷
        </button>

        <button
          onClick={() => onNumber("7")}
          className="calculator-glass-button h-14 rounded-lg text-xl font-medium"
        >
          7
        </button>
        <button
          onClick={() => onNumber("8")}
          className="calculator-glass-button h-14 rounded-lg text-xl font-medium"
        >
          8
        </button>
        <button
          onClick={() => onNumber("9")}
          className="calculator-glass-button h-14 rounded-lg text-xl font-medium"
        >
          9
        </button>
        <button
          onClick={() => onOperator("×")}
          className="calculator-glass-button calculator-glass-button-primary h-14 rounded-lg text-xl"
        >
          ×
        </button>
        <button
          onClick={onMemoryAdd}
          className="calculator-glass-button calculator-glass-button-func h-14 rounded-lg text-sm font-bold text-primary"
        >
          M+
        </button>

        <button
          onClick={() => onNumber("4")}
          className="calculator-glass-button h-14 rounded-lg text-xl font-medium"
        >
          4
        </button>
        <button
          onClick={() => onNumber("5")}
          className="calculator-glass-button h-14 rounded-lg text-xl font-medium"
        >
          5
        </button>
        <button
          onClick={() => onNumber("6")}
          className="calculator-glass-button h-14 rounded-lg text-xl font-medium"
        >
          6
        </button>
        <button
          onClick={() => onOperator("-")}
          className="calculator-glass-button calculator-glass-button-primary h-14 rounded-lg text-xl"
        >
          -
        </button>
        <button
          onClick={onMemorySubtract}
          className="calculator-glass-button calculator-glass-button-func h-14 rounded-lg text-sm font-bold text-primary"
        >
          M-
        </button>

        <button
          onClick={() => onNumber("1")}
          className="calculator-glass-button h-14 rounded-lg text-xl font-medium"
        >
          1
        </button>
        <button
          onClick={() => onNumber("2")}
          className="calculator-glass-button h-14 rounded-lg text-xl font-medium"
        >
          2
        </button>
        <button
          onClick={() => onNumber("3")}
          className="calculator-glass-button h-14 rounded-lg text-xl font-medium"
        >
          3
        </button>
        <button
          onClick={() => onOperator("+")}
          className="calculator-glass-button calculator-glass-button-primary h-14 rounded-lg text-xl"
        >
          +
        </button>
        <button
          onClick={onMemoryRecall}
          className="calculator-glass-button calculator-glass-button-func h-14 rounded-lg text-sm font-bold text-primary"
        >
          MR
        </button>

        <button
          onClick={() => onNumber("0")}
          className="calculator-glass-button h-14 rounded-lg text-xl font-medium col-span-2"
        >
          0
        </button>
        <button
          onClick={() => onNumber(".")}
          className="calculator-glass-button h-14 rounded-lg text-xl font-medium"
        >
          .
        </button>
        <button
          onClick={onCalculate}
          className="calculator-glass-button-primary h-14 rounded-lg text-2xl font-bold col-span-2 shadow-neon transition-all hover:scale-[1.02] active:scale-95 bg-linear-to-r from-primary to-blue-600"
        >
          =
        </button>
      </div>
    </div>
  );
}
