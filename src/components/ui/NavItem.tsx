import Link from "next/link";
import Badge from "./Badge";
import * as nav from "@/types/nav";

export default function NavItem({ item }: { item: nav.NavItem }) {
  return (
    <li>
      <Link
        href={item.href}
        className="flex items-center group text-white gap-1"
      >
        {item.icon && (
          <div className="w-5 h-5 text-white transition duration-75 group-hover:text-gray-900 dark:group-hover:text-white">
            {item.icon}
          </div>
        )}
        <span className="flex-1 whitespace-nowrap">{item.label}</span>
        {item.badge && (
          <Badge text={item.badge.text} variant={item.badge.variant} />
        )}
      </Link>
    </li>
  );
}
