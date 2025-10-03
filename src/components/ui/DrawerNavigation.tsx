"use client";
import { useState } from "react";
import NavItem from "./NavItem";
import NavDropdownItem from "./NavDropdownItem";
import * as nav from "@/types/nav";
import { ThemeToggle } from "@/components/shared/ThemeToggle";
import { useMobileNavToggle } from "@/store/useMobileNavToggle";
import { X } from "lucide-react";

type DrawerNavigationProps = {
  isMenuOpen: boolean;
  navItems: nav.NavItem[];
  dropdowns?: nav.NavDropdown[];
};

export function DrawerNavigation({
  isMenuOpen,
  navItems,
  dropdowns = [],
}: DrawerNavigationProps) {
  const [openDropdowns, setOpenDropdowns] = useState<Set<string>>(new Set());
  const { setIsMenuOpen } = useMobileNavToggle();

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
    <>
      {/* Backdrop with improved accessibility */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-30 transition-opacity md:hidden"
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Drawer - 8pt spacing system throughout */}
      <div
        className={`md:hidden fixed top-0 left-0 z-40 h-screen overflow-y-auto transition-transform bg-surface border-r border-border w-80 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="drawer-navigation-label"
      >
        {/* Header - 8pt spacing: p-4 (16px) */}
        <div className="flex items-center justify-between p-4 border-b border-border">
          <h2
            id="drawer-navigation-label"
            className="text-lg font-semibold text-foreground"
          >
            Helhest Cane Corso
          </h2>
          <button
            type="button"
            onClick={() => setIsMenuOpen(false)}
            className="p-2 text-muted hover:text-foreground hover:bg-background rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            aria-label="Close navigation menu"
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>

        {/* Navigation - 8pt spacing: p-4, gap-2 (8px) */}
        <nav className="p-4" aria-label="Mobile navigation">
          <ul className="flex flex-col gap-2">
            {navItems.map((item) => (
              <NavItem key={item.id} item={item} />
            ))}
            {dropdowns.map((dropdown) => (
              <NavDropdownItem
                key={dropdown.id}
                dropdown={dropdown}
                isOpen={openDropdowns.has(dropdown.id)}
                onToggle={() => toggleDropdown(dropdown.id)}
              />
            ))}
            {/* Theme toggle in drawer - 8pt spacing: mt-4 (16px) */}
            <li className="mt-4 pt-4 border-t border-border">
              <div className="flex items-center justify-between px-3 py-2">
                <span className="text-sm font-medium text-foreground">
                  Theme
                </span>
                <ThemeToggle />
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
