import { DrawerNavigation } from "@/components/ui/DrawerNavigation";
import * as nav from "@/types/nav";
import DesktopNavigation from "../ui/DesktopNavigation";
import { useMobileNavToggle } from "@/store/useMobileNavToggle";
import Container from "../ui/Container";
import DrawerToggle from "./DrawerToggle";
import Logo from "./Logo";

type NavbarProps = {
  isHeaderNav?: boolean;
  isMobile?: boolean;
  navItems: nav.NavItem[];
};

export default function Navbar({
  isHeaderNav = false,
  isMobile = true,
  navItems,
}: NavbarProps) {
  const { isMenuOpen, toggleMenu } = useMobileNavToggle();
  return (
    <div className={`z-30 sticky top-0 ${isHeaderNav ? "" : "bg-primary"}`}>
      {/* Use Container here to wrap content and apply padding/max-width */}
      <Container
        className="py-4 flex justify-between items-center"
        // Note: I removed the extra className on Container and added it here
      >
        <div
          className={`w-full flex justify-between items-center gap-8 min-h-[80px] `}
        >
          <Logo />
          {isMobile && (
            <>
              <DrawerToggle onClick={toggleMenu} />
              <DrawerNavigation isMenuOpen={isMenuOpen} navItems={navItems} />
            </>
          )}
          <DesktopNavigation navItems={navItems} />
        </div>
      </Container>
    </div>
  );
}
