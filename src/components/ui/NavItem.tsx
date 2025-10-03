import Link from "next/link";
import Badge from "./Badge";
import * as nav from "@/types/nav";

export default function NavItem({ item }: { item: nav.NavItem }) {
  return (
    <li>
      <Link
        href={item.href}
        className="flex items-center gap-2 px-3 py-2 text-foreground hover:text-primary hover:bg-background/50 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
      >
        {item.icon && (
          <span className="w-5 h-5 flex-shrink-0" aria-hidden="true">
            {item.icon}
          </span>
        )}
        <span className="whitespace-nowrap font-medium">{item.label}</span>
        {item.badge && (
          <Badge text={item.badge.text} variant={item.badge.variant} />
        )}
      </Link>
    </li>
  );
}
