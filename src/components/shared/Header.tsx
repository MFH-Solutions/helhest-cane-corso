"use client";
import { useState } from "react";
import Container from "../ui/Container";
import { DrawerNavigation } from "../ui/DrawerNavigation";
import * as nav from "@/types/nav";
import Link from "next/link";
import Navbar from "./Navbar";

export default function HeaderClient() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links: Array<nav.NavItem> = [
    {
      id: "home",
      label: "Home",
      href: "/",
    },
    {
      id: "breeding_dogs",
      label: "Breeding Dogs",
      href: "/dog",
    },
    {
      id: "puppy",
      label: "Puppies",
      href: "/puppy",
    },
    {
      id: "contact",
      label: "Contact",
      href: "/#contact",
    },
  ];

  return (
    <header className="flex justify-between items-center py-6 border-b bg-primary border-gray-200">
      <Container className="flex justify-between items-center">
        <div className="w-full flex justify-between items-center">
          {/* LOGO */}
          <Link href="/">
            <div className="w-full overflow-hidden">
              <img src="/logo/dark.svg" className="h-12 w-auto object-cover" />
            </div>
          </Link>
          {/* Mobile Navbar Trigger */}
          <button
            className="md:hidden z-100 "
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <img
              src="/icons/nav-toggle.svg"
              className="h-8 w-auto object-cover"
            />
          </button>
          <Navbar
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
            navItems={links}
            isMobile={true}
          />
        </div>
      </Container>
    </header>
  );
}
//   <HamburgerMenuIcon
//     isMenuOpen={isMenuOpen}
//     setIsMenuOpen={setIsMenuOpen}
//   />
// <Navbar />
// <NavbarMobile isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
