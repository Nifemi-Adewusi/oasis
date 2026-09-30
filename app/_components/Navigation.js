"use client";
import { usePathname } from "next/navigation";
import clsx from "clsx";

import Link from "next/link";
import Image from "next/image";

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

export default function Navigation({ session }) {
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
                {session?.user?.image && navItem.pageName === "Guest Area" ? (
                  <Image
                    src={session.user.image}
                    className="rounded-full"
                    alt=""
                    width={60}
                    height={60}
                    referrerPolicy="no-referrer"
                  />
                ) : navItem.pageName !== "Guest Area" ? (
                  navItem.pageName
                ) : (
                  "Guest Area"
                )}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
