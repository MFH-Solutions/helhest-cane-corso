import { Dispatch, SetStateAction } from "react";
import { DrawerNavigation } from "../ui/DrawerNavigation";
import * as nav from "@/types/nav";
import DesktopNavigation from "../ui/DesktopNavigation";
import { useMobileNavToggle } from "@/store/useMobileNavToggle";

type NavbarProps = {
  isMobile?: boolean;
  navItems: nav.NavItem[];
};

export default function Navbar({ isMobile, navItems }: NavbarProps) {
  const { isMenuOpen, toggleMenu } = useMobileNavToggle();
  return (
    <>
      {isMobile && (
        <DrawerNavigation isMenuOpen={isMenuOpen} navItems={navItems} />
      )}
      <DesktopNavigation navItems={navItems} />
    </>
  );
}
