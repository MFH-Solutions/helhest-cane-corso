import Container from "@/components/ui/Container";
import AutoGrid from "../ui/AutoGrid";
import Link from "next/link";
import Map from "../ui/Map";
import NavItem from "@/components/ui/NavItem";
import { useTranslations } from "next-intl";
import * as nav from "@/types/nav";

type FooterProps = React.HtmlHTMLAttributes<HTMLElement> & {
  navItems: nav.NavItem[];
  dropdowns?: nav.NavDropdown[];
};

export default function Footer({ navItems, dropdowns, ...props }: FooterProps) {
  return (
    <footer className="py-8 bg-primary">
      <Container>
        <AutoGrid autoSizing="auto-fill">
          <div className="space-y-2">
            <h4 className="text-foreground dark:text-foreground text-xl lg:text-2xl xl:text-3xl">
              Navigation
            </h4>
            <ul className="list-none space-y-1 flex flex-col gap-1">
              {navItems.map((item) => (
                <NavItem key={item.id} item={item} />
              ))}
            </ul>
          </div>
          <div className="space-y-2">
            <h4 className="text-foreground dark:text-foreground text-xl lg:text-2xl xl:text-3xl">
              Contact
            </h4>
            <ul className="list-none space-y-1">
              <li>
                <Link href="mailto:j.carriere26@outlook.com">
                  j.carriere26@outlook.com
                </Link>
              </li>
              <li>
                <Link href="tel:+1 (819) 743-5618">+1 (819) 743-5618</Link>
              </li>
            </ul>
          </div>
          <div className="space-y-2">
            <h4 className="text-foreground dark:text-foreground text-xl lg:text-2xl xl:text-3xl">
              Site Web
            </h4>
            <ul className="list-none space-y-1">
              <li>
                <Link
                  href={
                    "https://www.facebook.com/people/Helhest-Cane-Corso/100089042118506/"
                  }
                >
                  Facebook
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-2">
            <h4 className="text-foreground dark:text-foreground text-xl lg:text-2xl xl:text-3xl">
              Location
            </h4>
            <div className="space-y-1">
              <p>Val-des-Monts, Canada, QC</p>
              <Map />
            </div>
          </div>
        </AutoGrid>
      </Container>
    </footer>
  );
}
