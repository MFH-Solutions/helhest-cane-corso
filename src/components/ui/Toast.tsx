// Toast.tsx
"use client";

type ToastVariant = "success" | "danger" | "warning" | "info";

type ToastProps = {
  id?: string;
  variant: ToastVariant;
  message: string;
  onClose?: () => void;
};

const variantConfig = {
  success: {
    iconBg: "text-green-500 bg-green-100 dark:bg-green-800 dark:text-green-200",
    icon: (
      <svg
        className="w-5 h-5"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
      </svg>
    ),
    label: "Check icon",
  },
  danger: {
    iconBg: "text-red-500 bg-red-100 dark:bg-red-800 dark:text-red-200",
    icon: (
      <svg
        className="w-5 h-5"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z" />
      </svg>
    ),
    label: "Error icon",
  },
  warning: {
    iconBg:
      "text-orange-500 bg-orange-100 dark:bg-orange-700 dark:text-orange-200",
    icon: (
      <svg
        className="w-5 h-5"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM10 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm1-4a1 1 0 0 1-2 0V6a1 1 0 0 1 2 0v5Z" />
      </svg>
    ),
    label: "Warning icon",
  },
  info: {
    iconBg: "text-blue-500 bg-blue-100 dark:bg-blue-800 dark:text-blue-200",
    icon: (
      <svg
        className="w-5 h-5"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
      </svg>
    ),
    label: "Info icon",
  },
};

export function Toast({ id, variant, message, onClose }: ToastProps) {
  const config = variantConfig[variant];

  return (
    <div
      id={id}
      className="flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow-sm dark:text-gray-400 dark:bg-gray-800"
      role="alert"
    >
      <div
        className={`inline-flex items-center justify-center shrink-0 w-8 h-8 rounded-lg ${config.iconBg}`}
      >
        {config.icon}
        <span className="sr-only">{config.label}</span>
      </div>
      <div className="ms-3 text-sm font-normal">{message}</div>
      {onClose && (
        <button
          type="button"
          onClick={onClose}
          className="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
          aria-label="Close"
        >
          <span className="sr-only">Close</span>
          <svg
            className="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
        </button>
      )}
    </div>
  );
}

// ToastContainer.tsx
("use client");

import { useState, useCallback, useEffect } from "react";

type ToastType = {
  id: string;
  variant: ToastVariant;
  message: string;
  duration?: number;
};

type ToastContainerProps = {
  position?:
    | "top-right"
    | "top-left"
    | "bottom-right"
    | "bottom-left"
    | "top-center"
    | "bottom-center";
};

const positionClasses = {
  "top-right": "top-4 right-4",
  "top-left": "top-4 left-4",
  "bottom-right": "bottom-4 right-4",
  "bottom-left": "bottom-4 left-4",
  "top-center": "top-4 left-1/2 -translate-x-1/2",
  "bottom-center": "bottom-4 left-1/2 -translate-x-1/2",
};

let toastIdCounter = 0;
let addToastFn: ((toast: Omit<ToastType, "id">) => void) | null = null;

export function ToastContainer({
  position = "top-right",
}: ToastContainerProps) {
  const [toasts, setToasts] = useState<ToastType[]>([]);

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  const addToast = useCallback(
    (toast: Omit<ToastType, "id">) => {
      const id = `toast-${++toastIdCounter}`;
      const newToast = { ...toast, id };

      setToasts((prev) => [...prev, newToast]);

      if (toast.duration !== 0) {
        setTimeout(() => {
          removeToast(id);
        }, toast.duration || 3000);
      }
    },
    [removeToast],
  );

  useEffect(() => {
    addToastFn = addToast;
    return () => {
      addToastFn = null;
    };
  }, [addToast]);

  return (
    <div className={`fixed z-50 ${positionClasses[position]}`}>
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          id={toast.id}
          variant={toast.variant}
          message={toast.message}
          onClose={() => removeToast(toast.id)}
        />
      ))}
    </div>
  );
}

// Toast utility function
export const toast = {
  success: (message: string, duration?: number) => {
    addToastFn?.({ variant: "success", message, duration });
  },
  danger: (message: string, duration?: number) => {
    addToastFn?.({ variant: "danger", message, duration });
  },
  error: (message: string, duration?: number) => {
    addToastFn?.({ variant: "danger", message, duration });
  },
  warning: (message: string, duration?: number) => {
    addToastFn?.({ variant: "warning", message, duration });
  },
  info: (message: string, duration?: number) => {
    addToastFn?.({ variant: "info", message, duration });
  },
};
