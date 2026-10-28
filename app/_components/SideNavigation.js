"use client";
import {
  CalendarDaysIcon,
  HomeIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import SignOutButton from "./SignOutButton";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import Link from "next/link";

const navLinks = [
  {
    name: "Home",
    href: "/account",
    icon: <HomeIcon className="h-5 w-5 " />,
  },
  {
    name: "Reservations",
    href: "/account/reservations",
    icon: <CalendarDaysIcon className="h-5 w-5 " />,
  },
  {
    name: "Guest profile",
    href: "/account/profile",
    icon: <UserIcon className="h-5 w-5 " />,
  },
];

function SideNavigation() {
  const pathName = usePathname();

  return (
    <nav className="border-r border-primary-900">
      <ul className="flex flex-col gap-2 h-full text-lg">
        {navLinks.map((link) => {
          // Check if this specific link should be active:
          const isActive =
            link.href === "/account"
              ? pathName === "/account"
              : pathName.startsWith(link.href);

          return (
            <li key={link.name}>
              <Link
                className={clsx(
                  "py-3 px-5 hover:bg-primary-900 hover:text-primary-100 transition-colors flex items-center gap-4 font-semibold text-primary-200",
                  isActive && "bg-primary-900 text-primary-100",
                )}
                href={link.href}
              >
                <div
                  className={clsx(
                    "flex items-center gap-5",
                    isActive && "text-accent-400",
                  )}
                >
                  {link.icon}
                  <span>{link.name}</span>
                </div>
              </Link>
            </li>
          );
        })}

        <li className="mt-auto">
          <SignOutButton />
        </li>
      </ul>
    </nav>
  );
}

export default SideNavigation;
