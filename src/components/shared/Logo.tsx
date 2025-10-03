"use client";
// import { useThemeStore } from "@/store/useThemeStore";
import Link from "next/link";

export default function Logo() {
  // const { theme } = useThemeStore();

  return (
    <Link href="/" aria-label="Home - Helhest Cane Corso">
      <img
        src={`/logo/light.svg`}
        className="h-12 w-auto"
        alt="Helhest Cane Corso Logo"
      />
    </Link>
  );
}
