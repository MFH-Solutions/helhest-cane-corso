"use client";
import { useThemeStore } from "@/store/useThemeStore";
import { Moon, Sun } from "lucide-react";

type ThemeToggleProps = {
  className?: string;
};

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { theme, toggleTheme } = useThemeStore();
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      className={`relative border border-border inline-flex items-center h-6 w-11 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background ${
        isDark ? "bg-gray-700" : "bg-primary"
      } ${className || ""}`}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      role="switch"
      aria-checked={isDark}
    >
      {/* Sliding circle */}
      <span
        className={`inline-flex items-center justify-center h-5 w-5 transform rounded-full bg-white shadow-lg transition-transform duration-300 ease-in-out ${
          isDark ? "translate-x-5" : "translate-x-0.5"
        }`}
        aria-hidden="true"
      >
        {isDark ? (
          <Moon className="w-3 h-3 text-gray-700" />
        ) : (
          <Sun className="w-3 h-3 text-yellow-600" />
        )}
      </span>
      <span className="sr-only">
        {isDark ? "Dark mode enabled" : "Light mode enabled"}
      </span>
    </button>
  );
}
