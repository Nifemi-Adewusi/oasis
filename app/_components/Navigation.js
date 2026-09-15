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
  return (
    <nav className="z-10  text-xl">
      <ul className="flex justify-center md:justify-start md:gap-16 gap-6 mt-5 md:mt-0 items-center max-sm:text-sm">
        {navItems.map((navItem) => {
          return (
            <li key={navItem.pageName}>
              <Link
                className="hover:text-accent-400 transition-colors"
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
