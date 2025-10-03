"use client";
import React from "react";

const variants = {
  primary: `
    text-white
    bg-primary
    hover:bg-primary-hover
    focus:ring-primary-ring
    disabled:bg-primary/50
  `,
  secondary: `
    text-primary
    bg-transparent
    border-2 border-primary
    hover:bg-primary hover:text-white
    focus:ring-primary-ring
    disabled:opacity-50 disabled:cursor-not-allowed
  `,
  warning: `
    text-white
    bg-warning
    hover:bg-warning-hover
    focus:ring-warning-ring
    disabled:bg-warning/50
  `,
  danger: `
    text-white
    bg-danger
    hover:bg-danger-hover
    focus:ring-danger-ring
    disabled:bg-danger/50
  `,
};

// 8pt spacing system for sizes
const sizes = {
  sm: "px-4 py-2 text-sm", // 16px, 8px, small text
  md: "px-6 py-3 text-base", // 24px, 12px, base text
  lg: "px-8 py-4 text-base", // 32px, 16px, base text
  xl: "px-10 py-5 text-lg", // 40px, 20px, large text
};

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "warning" | "danger";
  size?: "sm" | "md" | "lg" | "xl";
};

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "lg",
  className,
  disabled,
  type = "button",
  ...props
}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`
        cursor-pointer
        inline-flex items-center justify-center
        font-medium rounded-lg
        transition-all duration-200
        focus:outline-none focus:ring-2 focus:ring-offset-2
        disabled:cursor-not-allowed
        ${variants[variant]}
        ${sizes[size]}
        ${className || ""}
      `}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
