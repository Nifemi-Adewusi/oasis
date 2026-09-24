"use client";

import clsx from "clsx";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
// import { useRouter } from "next/router";

export default function Filter() {
  const searchParam = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const activeFilter = searchParam.get("capacity") ?? "all";
  const handleFilter = (filter) => {
    const params = new URLSearchParams(searchParam);
    params.set("capacity", filter);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="border border-primary-800 flex">
      <FilterButton
        handleFilter={handleFilter}
        filter="all"
        activeFilter={activeFilter}
      >
        All Cabins
      </FilterButton>
      <FilterButton
        handleFilter={handleFilter}
        filter="small"
        activeFilter={activeFilter}
      >
        1&mdash;3 guests
      </FilterButton>
      <FilterButton
        handleFilter={handleFilter}
        filter="medium"
        activeFilter={activeFilter}
      >
        4&mdash;6 guests
      </FilterButton>
      <FilterButton
        handleFilter={handleFilter}
        filter="large"
        activeFilter={activeFilter}
      >
        7 and above guests
      </FilterButton>
    </div>
  );
}

function FilterButton({ children, handleFilter, filter, activeFilter }) {
  return (
    <button
      onClick={() => handleFilter(filter)}
      className={clsx(
        "px-5 py-2 hover:bg-primary-700",
        filter === activeFilter && "bg-primary-700 text-primary-50",
      )}
    >
      {children}
    </button>
  );
}
