"use client";
import React from "react";

const defaultStyle =
  "px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 disabled:opacity-50";

const variants = {
  primary: `
  focus:outline-none
  text-white
  bg-primary
  hover:bg-primary-hover
  focus:ring-4
  focus:ring-primary-ring
  dark:bg-primary
  dark:hover:bg-primary-hover
  dark:focus:ring-primary-ring
`,

  secondary: `
  focus:outline-none
  text-primary
  bg-transparent
  border border-primary
  hover:bg-primary hover:text-white
  focus:ring-4
  focus:ring-primary-ring
  dark:text-primary
  dark:border-primary
  dark:hover:bg-primary dark:hover:text-white
  dark:focus:ring-primary-ring
`,
  warning: `
  focus:outline-none
  text-white
  bg-warning
  hover:bg-warning-hover
  focus:ring-4
  focus:ring-warning-ring
  dark:bg-warning
  dark:hover:bg-warning-hover
  dark:focus:ring-warning-ring
`,

  danger: `
  focus:outline-none
  text-white
  bg-danger
  hover:bg-danger-hover
  focus:ring-4
  focus:ring-danger-ring
  dark:bg-danger
  dark:hover:bg-danger-hover
  dark:focus:ring-danger-ring
`,
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
