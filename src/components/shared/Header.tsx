"use client";
import Container from "../ui/Container";
import * as nav from "@/types/nav";
import Link from "next/link";
import Navbar from "./Navbar";
import { useTranslations } from "next-intl";
import { useMobileNavToggle } from "@/store/useMobileNavToggle"; // Import the store

export default function Header() {
  const { toggleMenu } = useMobileNavToggle();
  const t = useTranslations("Navigation");

  const links: Array<nav.NavItem> = [
    {
      id: "home",
      label: t("home"),
      href: "/",
    },
    {
      id: "breeding_dogs",
      label: t("dog"),
      href: "/dog",
    },
    {
      id: "puppy",
      label: t("puppy"),
      href: "/puppy",
    },
    {
      id: "contact",
      label: t("contact"),
      href: "/#contact",
    },
    {
      id: "lang-switch",
      label: t("lang-switch"),
      href: "",
    },
  ];

  return (
    <header className="relative bg-black min-h-screen flex flex-col border-b border-gray-200">
      <div className="absolute inset-0 bg-[url('/images/header/background.jpg')] bg-cover bg-center opacity-60" />

      <Container className="z-10 sticky top-0 py-4 flex justify-between items-center">
        {" "}
        <div className="w-full flex justify-between items-center">
          {/* LOGO */}
          <Link href="/">
            <div className="w-full overflow-hidden">
              <img src="/logo/light.svg" className="h-12 w-auto object-cover" />
            </div>
          </Link>
          {/* Mobile Navbar Trigger */}
          <button className="md:hidden z-100 " onClick={toggleMenu}>
            <img
              src="/icons/nav-toggle.svg"
              className="h-8 w-auto object-cover"
            />
          </button>
          <Navbar navItems={links} isMobile={true} />
        </div>
      </Container>
    </header>
  );
}
