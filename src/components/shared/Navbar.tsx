import { Dispatch, SetStateAction } from "react";
import { DrawerNavigation } from "../ui/DrawerNavigation";
import * as nav from "@/types/nav";
import DesktopNavigation from "../ui/DesktopNavigation";

type NavbarProps = {
  isMobile?: boolean;
  isMenuOpen: boolean;
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
  navItems: nav.NavItem[];
};

export default function ({
  isMobile,
  isMenuOpen,
  setIsMenuOpen,
  navItems,
}: NavbarProps) {
  return (
    <>
      {isMobile && (
        <DrawerNavigation
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          navItems={navItems}
        />
      )}
      <DesktopNavigation navItems={navItems} />
    </>
  );
}
