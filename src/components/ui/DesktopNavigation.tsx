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
  // Fix navbar sizing
  return (
    <nav className="hidden md:flex">
      <ul className="flex items-center gap-1">
        {navItems.map((item) => (
          <NavItem key={item.id} item={item} />
        ))}
        <ThemeToggle />
      </ul>
    </nav>
  );
}
