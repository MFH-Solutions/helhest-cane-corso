import NavItem from "./NavItem";
import NavDropdownItem from "./NavDropdownItem";
import * as nav from "@/types/nav";
import { useState } from "react";
import { ThemeToggle } from "@/components/shared/ThemeToggle";

type NavigationProps = {
  navItems: nav.NavItem[];
  dropdowns?: nav.NavDropdown[];
};

export default function DesktopNavigation({
  navItems,
  dropdowns = [],
}: NavigationProps) {
  const [openDropdowns, setOpenDropdowns] = useState<Set<string>>(new Set());

  const toggleDropdown = (id: string) => {
    setOpenDropdowns((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  return (
    <nav className="hidden md:flex" aria-label="Main navigation">
      {/* 8pt spacing system: gap-8 (32px) */}
      <ul className="flex items-center gap-8">
        {navItems.map((item) => (
          <li key={item.id}>
            <a
              href={item.href}
              className="text-white hover:text-primary transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-black rounded px-2 py-1"
            >
              {item.label}
            </a>
          </li>
        ))}
        <li>
          <ThemeToggle />
        </li>
      </ul>
    </nav>
  );
}
