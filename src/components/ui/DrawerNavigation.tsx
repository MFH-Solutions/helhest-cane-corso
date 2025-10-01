"use client";

import { Dispatch, MouseEventHandler, SetStateAction, useState } from "react";
import NavItem from "./NavItem";
import NavDropdownItem from "./NavDropdownItem";
import * as nav from "@/types/nav";

type DrawerNavigationProps = {
  isMenuOpen: boolean;
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
  navItems: nav.NavItem[];
  dropdowns?: nav.NavDropdown[];
};

export function DrawerNavigation({
  isMenuOpen,
  setIsMenuOpen,
  navItems,
  dropdowns = [],
}: DrawerNavigationProps) {
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
    <>
      {/* Backdrop */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 transition-opacity"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Drawer */}
      <div
        className={`md:hidden fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform bg-primary w-64  ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        tabIndex={-1}
        aria-labelledby="drawer-navigation-label"
      >
        <h5
          id="drawer-navigation-label"
          className="text-base font-semibold text-foreground uppercase"
        >
          Helhest Cane Corso
        </h5>
        <button
          type="button"
          onClick={() => setIsMenuOpen(false)}
          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
          aria-label="Close menu"
        >
          <svg
            className="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
        </button>

        <nav className="py-4 overflow-y-auto">
          <ul className="space-y-2 font-medium">
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
          </ul>
        </nav>
      </div>
    </>
  );
}

// DrawerTrigger.tsx
export function DrawerTrigger({
  onClick,
  children = "Show navigation",
}: {
  onClick: () => void;
  children?: React.ReactNode;
}) {
  return (
    <div className="text-center">
      <button
        onClick={onClick}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        type="button"
      >
        {children}
      </button>
    </div>
  );
}
