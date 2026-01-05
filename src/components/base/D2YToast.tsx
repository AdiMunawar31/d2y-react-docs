import { toast } from "sonner";
import {
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Info,
  Copy,
  Loader2,
} from "lucide-react";
import type { ReactNode } from "react";

/* ===============================
 * Types
 * =============================== */

type ToastVariant =
  | "success"
  | "error"
  | "warning"
  | "info"
  | "copy"
  | "loading";

interface BaseToastOptions {
  title: string;
  description?: string;
  duration?: number;
  action?: {
    label: string;
    onClick: () => void;
  };
}

interface PromiseToastOptions<T> {
  loading: string;
  success: (data: T) => string;
  error: (err: unknown) => string;
}

/* ===============================
 * Config Map
 * =============================== */

const VARIANT_CONFIG: Record<
  ToastVariant,
  {
    icon: ReactNode;
    className: string;
  }
> = {
  success: {
    icon: <CheckCircle2 className="size-4 text-emerald-400" />,
    className:
      "bg-surface-dark border border-emerald-500/30 text-white shadow-xl",
  },
  error: {
    icon: <XCircle className="size-4 text-red-400" />,
    className: "bg-surface-dark border border-red-500/30 text-white shadow-xl",
  },
  warning: {
    icon: <AlertTriangle className="size-4 text-yellow-400" />,
    className:
      "bg-surface-dark border border-yellow-500/30 text-white shadow-xl",
  },
  info: {
    icon: <Info className="size-4 text-sky-400" />,
    className: "bg-surface-dark border border-sky-500/30 text-white shadow-xl",
  },
  copy: {
    icon: <Copy className="size-4 text-primary" />,
    className: "bg-surface-dark border border-primary/30 text-white shadow-xl",
  },
  loading: {
    icon: <Loader2 className="size-4 animate-spin text-primary" />,
    className: "bg-surface-dark border border-primary/30 text-white shadow-xl",
  },
};

/* ===============================
 * Core Builder
 * =============================== */

function showToast(
  variant: ToastVariant,
  { title, description, duration = 3000, action }: BaseToastOptions
) {
  return toast(title, {
    description,
    duration,
    icon: VARIANT_CONFIG[variant].icon,
    className: VARIANT_CONFIG[variant].className,
    action: action && {
      label: action.label,
      onClick: action.onClick,
    },
  });
}

/* ===============================
 * Public API
 * =============================== */

export const D2YToast = {
  /* ---------- BASIC ---------- */
  success(options: BaseToastOptions) {
    return showToast("success", options);
  },

  error(options: BaseToastOptions) {
    return showToast("error", options);
  },

  warning(options: BaseToastOptions) {
    return showToast("warning", options);
  },

  info(options: BaseToastOptions) {
    return showToast("info", options);
  },

  /* ---------- COPY ---------- */
  copy(value?: string) {
    return showToast("copy", {
      title: "Copied to clipboard",
      description: value,
      duration: 2000,
    });
  },

  /* ---------- LOADING ---------- */
  loading(title: string) {
    return toast(title, {
      icon: VARIANT_CONFIG.loading.icon,
      className: VARIANT_CONFIG.loading.className,
      duration: Infinity,
    });
  },

  dismiss(id?: string | number) {
    toast.dismiss(id);
  },

  /* ---------- PROMISE ---------- */
  promise<T>(promise: Promise<T>, options: PromiseToastOptions<T>) {
    return toast.promise(promise, {
      loading: options.loading,
      success: options.success,
      error: options.error,
      className:
        "bg-surface-dark border border-surface-border text-white shadow-xl",
    });
  },
};
