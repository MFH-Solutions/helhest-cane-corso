"use client";
import React from "react";

const defaultStyle =
  "px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 disabled:opacity-50";

const variants = {
  primary:
    "bg-green-400 text-green-400 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800",
  secondary:
    "focus:outline-none text-white bg-gray-400 hover:bg-gray-500 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-900",
  warning:
    "focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 dark:focus:ring-yellow-900",
  danger:
    "focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900",
};

const sizes = {
  xs: "px-3 py-2 text-xs font-medium text-center rounded-lg",
  sm: "px-3 py-2 text-sm font-medium text-center ",
  md: "px-5 py-2.5 text-sm font-medium",
  lg: "px-5 py-3 text-base font-medium text-center",
  xl: "px-6 py-3.5 text-base font-medium",
};

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "warning" | "danger";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
};

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "lg",
  ...props
}) => {
  return (
    <button
      className={`${defaultStyle} ${variants[variant]} ${sizes[size]}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
