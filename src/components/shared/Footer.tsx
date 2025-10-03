import Container from "@/components/ui/Container";
import Link from "next/link";
import Map from "../ui/Map";
import { Facebook, Mail, Phone, MapPin } from "lucide-react";
import * as nav from "@/types/nav";

type FooterProps = React.HtmlHTMLAttributes<HTMLElement> & {
  navItems: nav.NavItem[];
  dropdowns?: nav.NavDropdown[];
};

export default function Footer({ navItems, dropdowns, ...props }: FooterProps) {
  return (
    <footer className="py-16 bg-surface border-t border-border" {...props}>
      <Container>
        {/* 8pt spacing: gap-8 (32px) between grid items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Navigation */}
          <div className="flex flex-col gap-4">
            <h3 className="text-foreground text-xl font-bold">Navigation</h3>
            <nav aria-label="Footer navigation">
              <ul className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <Link
                      href={item.href}
                      className="text-muted hover:text-primary transition-colors focus:outline-none focus:underline"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <h3 className="text-foreground text-xl font-bold">Contact</h3>
            <ul className="flex flex-col gap-3">
              <li>
                <Link
                  href="mailto:j.carriere26@outlook.com"
                  className="flex items-center gap-2 text-muted hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded p-1 -m-1"
                  aria-label="Email us at j.carriere26@outlook.com"
                >
                  <Mail className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
                  <span className="break-all">j.carriere26@outlook.com</span>
                </Link>
              </li>
              <li>
                <Link
                  href="tel:+18197435618"
                  className="flex items-center gap-2 text-muted hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded p-1 -m-1"
                  aria-label="Call us at +1 819 743 5618"
                >
                  <Phone className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
                  <span>+1 (819) 743-5618</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="flex flex-col gap-4">
            <h3 className="text-foreground text-xl font-bold">Social Media</h3>
            <ul className="flex flex-col gap-3">
              <li>
                <Link
                  href="https://www.facebook.com/people/Helhest-Cane-Corso/100089042118506/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded p-1 -m-1"
                  aria-label="Visit our Facebook page (opens in new tab)"
                >
                  <Facebook
                    className="w-5 h-5 flex-shrink-0"
                    aria-hidden="true"
                  />
                  <span>Facebook</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Location */}
          <div className="flex flex-col gap-4">
            <h3 className="text-foreground text-xl font-bold">Location</h3>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-2 text-muted">
                <MapPin
                  className="w-5 h-5 flex-shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <address className="not-italic">
                  Val-des-Monts
                  <br />
                  Quebec, Canada
                </address>
              </div>
              <Map className="rounded-lg overflow-hidden" />
            </div>
          </div>
        </div>

        {/* Copyright - 8pt spacing: mt-16 */}
        <div className="mt-16 pt-8 border-t border-border text-center">
          <p className="text-muted text-sm">
            © {new Date().getFullYear()} Helhest Cane Corso. All rights
            reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
