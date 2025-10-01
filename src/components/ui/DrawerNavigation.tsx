"use client";

import { useState } from "react";
import Link from "next/link";
import Badge from "./Badge";

type NavItem = {
  id: string;
  label: string;
  href: string;
  icon: React.ReactNode;
  badge?: {
    text: string;
    variant: "default" | "primary";
  };
};

type NavDropdown = {
  id: string;
  label: string;
  icon: React.ReactNode;
  items: Array<{
    id: string;
    label: string;
    href: string;
  }>;
};

type DrawerNavigationProps = {
  isOpen: boolean;
  onClose: () => void;
  navItems: NavItem[];
  dropdowns?: NavDropdown[];
};

export function DrawerNavigation({
  isOpen,
  onClose,
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
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 transition-opacity"
          onClick={onClose}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform bg-white w-64 dark:bg-gray-800 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        tabIndex={-1}
        aria-labelledby="drawer-navigation-label"
      >
        <h5
          id="drawer-navigation-label"
          className="text-base font-semibold text-gray-500 uppercase dark:text-gray-400"
        >
          Menu
        </h5>
        <button
          type="button"
          onClick={onClose}
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

        <div className="py-4 overflow-y-auto">
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
        </div>
      </div>
    </>
  );
}

// NavItem.tsx
function NavItem({ item }: { item: NavItem }) {
  return (
    <li>
      <Link
        href={item.href}
        className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
      >
        <div className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white">
          {item.icon}
        </div>
        <span className="flex-1 ms-3 whitespace-nowrap">{item.label}</span>
        {item.badge && (
          <Badge text={item.badge.text} variant={item.badge.variant} />
        )}
      </Link>
    </li>
  );
}

// NavDropdownItem.tsx
function NavDropdownItem({
  dropdown,
  isOpen,
  onToggle,
}: {
  dropdown: NavDropdown;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <li>
      <button
        type="button"
        onClick={onToggle}
        className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
        aria-expanded={isOpen}
      >
        <div className="shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white">
          {dropdown.icon}
        </div>
        <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
          {dropdown.label}
        </span>
        <svg
          className={`w-3 h-3 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>
      {isOpen && (
        <ul className="py-2 space-y-2">
          {dropdown.items.map((subItem) => (
            <li key={subItem.id}>
              <Link
                href={subItem.href}
                className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              >
                {subItem.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
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
