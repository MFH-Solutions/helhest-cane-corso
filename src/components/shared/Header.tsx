"use client";
import Container from "../ui/Container";
import * as nav from "@/types/nav";
import Navbar from "./Navbar";
import Hero from "./Hero";

type HeaderProps = React.HtmlHTMLAttributes<HTMLElement> & {
  navItems: nav.NavItem[];
  dropdowns?: nav.NavDropdown[];
};

export default function Header({ navItems, dropdowns, ...props }: HeaderProps) {
  return (
    <header className="relative bg-black min-h-screen flex flex-col" {...props}>
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-[url('/images/header/background.jpg')] bg-cover bg-center opacity-25"
        role="presentation"
        aria-hidden="true"
      />
      <Navbar isHeaderNav={true} navItems={navItems} />
      <Hero />
    </header>
  );
}
