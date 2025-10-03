"use client";
import Container from "../ui/Container";
import * as nav from "@/types/nav";
import Link from "next/link";
import Navbar from "./Navbar";
import { useMobileNavToggle } from "@/store/useMobileNavToggle";
import Hero from "./Hero";

type HeaderProps = React.HtmlHTMLAttributes<HTMLElement> & {
  navItems: nav.NavItem[];
  dropdowns?: nav.NavDropdown[];
};

export default function Header({ navItems, dropdowns, ...props }: HeaderProps) {
  const { toggleMenu } = useMobileNavToggle();

  return (
    <header className="relative bg-black min-h-screen flex flex-col" {...props}>
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-[url('/images/header/background.jpg')] bg-cover bg-center opacity-25"
        role="presentation"
        aria-hidden="true"
      />

      {/* Navigation bar - 8pt spacing: py-4 (16px) */}
      <Container className="z-30 sticky top-0 py-4 flex justify-between items-center">
        <div className="w-full flex justify-between items-center gap-8">
          {/* LOGO - 8pt spacing: h-12 (48px) */}
          <Link href="/" aria-label="Home - Helhest Cane Corso">
            <img
              src="/logo/light.svg"
              className="h-12 w-auto"
              alt="Helhest Cane Corso Logo"
            />
          </Link>

          {/* Mobile Navbar Trigger - 8pt spacing: h-8 (32px) */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-black"
            onClick={toggleMenu}
            aria-label="Open navigation menu"
            aria-expanded="false"
          >
            <img
              src="/icons/nav-toggle.svg"
              className="h-6 w-6"
              alt=""
              aria-hidden="true"
            />
          </button>

          <Navbar navItems={navItems} isMobile={true} />
        </div>
      </Container>

      <Hero />
    </header>
  );
}
