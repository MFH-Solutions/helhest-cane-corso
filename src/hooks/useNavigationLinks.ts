"use client";

import { useTranslations } from "next-intl";
import { NavItem } from "@/types/nav";

/**
 * Custom hook to generate the primary navigation links with translations.
 * @returns {Array<nav.NavItem>} The array of navigation items.
 */
export const useNavigationLinks = (): Array<NavItem> => {
  const t = useTranslations("Navigation");

  const links: Array<NavItem> = [
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

  return links;
};
