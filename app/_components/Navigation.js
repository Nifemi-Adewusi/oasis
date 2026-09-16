"use client";
import { usePathname } from "next/navigation";
import clsx from "clsx";

import Link from "next/link";

const navItems = [
  {
    pageName: "Cabins",
    pageRoute: "/cabin",
  },

  {
    pageName: "About",
    pageRoute: "/about",
  },
  {
    pageName: "Guest Area",
    pageRoute: "/account",
  },
];

export default function Navigation() {
  const pathName = usePathname();
  return (
    <nav className="z-10  text-xl">
      <ul className="flex justify-center md:justify-start md:gap-16 gap-6 mt-5 md:mt-0 items-center max-sm:text-sm">
        {navItems.map((navItem) => {
          return (
            <li key={navItem.pageName}>
              <Link
                className={clsx(
                  "hover:text-accent-400 transition-colors",
                  pathName.startsWith(navItem.pageRoute) && "text-accent-400",
                )}
                href={navItem.pageRoute}
              >
                {navItem.pageName}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
