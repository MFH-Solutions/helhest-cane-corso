"use client";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import { useNavigationLinks } from "@/hooks/useNavigationLinks";

export default function Adoption() {
  const links = useNavigationLinks();
  return (
    <main className="relative">
      <Navbar navItems={links} />
      <Footer navItems={links} />
    </main>
  );
}
