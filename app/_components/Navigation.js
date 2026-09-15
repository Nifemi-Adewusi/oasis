import Link from "next/link";

const pageLinks = [
  {
    pageRoute: "home",
  },
  {
    pageRoute: "cabin",
  },
  {
    pageRoute: "account",
  },
  {
    pageRoute: "about",
  },
];

export default function Navigation() {
  return (
    <div>
      {pageLinks.map((route) => (
        <Link
          key={route.pageRoute}
          href={`${route.pageRoute === "home" ? "/" : `/${route.pageRoute}`}`}
        >
          {route.pageRoute}
        </Link>
      ))}
    </div>
  );
}
