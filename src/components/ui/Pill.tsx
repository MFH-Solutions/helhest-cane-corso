import React from "react";

const variants = {
  gray: "bg-gray-400/10 text-gray-400 inset-ring inset-ring-gray-400/20",
  red: "bg-red-400/10 text-red-400 inset-ring inset-ring-red-400/20",
  yellow:
    "bg-yellow-400/10 text-yellow-500 inset-ring inset-ring-yellow-400/20",
  green: "bg-green-400/10 text-green-400 inset-ring inset-ring-green-500/20",
  blue: "bg-blue-400/10 text-blue-400 inset-ring inset-ring-blue-400/30",
  indigo:
    "bg-indigo-400/10 text-indigo-400 inset-ring inset-ring-indigo-400/30",
  purple:
    "bg-purple-400/10 text-purple-400 inset-ring inset-ring-purple-400/30",
  pink: "bg-pink-400/10 text-pink-400 inset-ring inset-ring-pink-400/20",
};

const sizes = {
  xs: "px-3 py-2 text-xs font-medium text-center rounded-xl",
  sm: "px-3 py-2 text-sm font-medium text-center rounded-xl",
  md: "px-5 py-2.5 text-sm font-medium rounded-xl",
  lg: "px-5 py-3 text-base font-medium text-center rounded-xl",
  xl: "px-6 py-3.5 text-base font-medium rounded-xl",
};

export type PillProps = React.HTMLAttributes<HTMLSpanElement> & {
  text: string;
  variant?:
    | "gray"
    | "red"
    | "yellow"
    | "green"
    | "blue"
    | "indigo"
    | "purple"
    | "pink";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
};

const Pill: React.FC<PillProps> = ({
  text,
  variant = "gray",
  size = "sm",
  ...props
}) => {
  return (
    <span
      className={`inline-flex items-center ${sizes[size]} ${variants[variant]}`}
      {...props}
    >
      {text}
    </span>
  );
};

export default Pill;
